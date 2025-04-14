import React, { createContext, useContext, useState } from 'react';
import { ApparelItem } from '@/constants/apparelData';
import { useProfile } from './ProfileContext';

interface WardrobeStats {
  wardrobeItems: ApparelItem[];
  likedItems: ApparelItem[];
  dislikedItems: ApparelItem[];
  swipedItems: ApparelItem[];
}

interface WardrobeContextType {
  wardrobeItems: ApparelItem[];
  addToWardrobe: (item: ApparelItem) => void;
  removeFromWardrobe: (itemId: string) => void;
  addToLiked: (item: ApparelItem) => void;
  addToDisliked: (item: ApparelItem) => void;
  getStats: () => {
    itemCount: number;
    likedCount: number;
    listCount: number;
  };
}

const WardrobeContext = createContext<WardrobeContextType | undefined>(undefined);

// Type to store wardrobes for each profile
type ProfileWardrobes = {
  [profileId: string]: WardrobeStats;
};

const createEmptyStats = (): WardrobeStats => ({
  wardrobeItems: [],
  likedItems: [],
  dislikedItems: [],
  swipedItems: [],
});

export function WardrobeProvider({ children }: { children: React.ReactNode }) {
  const [profileWardrobes, setProfileWardrobes] = useState<ProfileWardrobes>({});
  const { currentProfile } = useProfile();

  const getCurrentStats = (): WardrobeStats => {
    if (!currentProfile) return createEmptyStats();
    return profileWardrobes[currentProfile.id] || createEmptyStats();
  };

  const addToWardrobe = (item: ApparelItem) => {
    if (!currentProfile) return;

    setProfileWardrobes(prev => {
      const profileId = currentProfile.id;
      const currentStats = prev[profileId] || createEmptyStats();
      
      // Check if item already exists in this profile's wardrobe
      if (currentStats.wardrobeItems.some(i => i.id === item.id)) {
        return prev;
      }

      return {
        ...prev,
        [profileId]: {
          ...currentStats,
          wardrobeItems: [...currentStats.wardrobeItems, item],
          likedItems: [...currentStats.likedItems, item],
          swipedItems: [...currentStats.swipedItems, item],
        }
      };
    });
  };

  const removeFromWardrobe = (itemId: string) => {
    if (!currentProfile) return;

    setProfileWardrobes(prev => {
      const profileId = currentProfile.id;
      const currentStats = prev[profileId] || createEmptyStats();
      
      return {
        ...prev,
        [profileId]: {
          ...currentStats,
          wardrobeItems: currentStats.wardrobeItems.filter(item => item.id !== itemId),
          likedItems: currentStats.likedItems.filter(item => item.id !== itemId),
        }
      };
    });
  };

  const addToLiked = (item: ApparelItem) => {
    if (!currentProfile) return;

    setProfileWardrobes(prev => {
      const profileId = currentProfile.id;
      const currentStats = prev[profileId] || createEmptyStats();
      
      if (currentStats.likedItems.some(i => i.id === item.id)) {
        return prev;
      }

      return {
        ...prev,
        [profileId]: {
          ...currentStats,
          likedItems: [...currentStats.likedItems, item],
          swipedItems: [...currentStats.swipedItems, item],
        }
      };
    });
  };

  const addToDisliked = (item: ApparelItem) => {
    if (!currentProfile) return;

    setProfileWardrobes(prev => {
      const profileId = currentProfile.id;
      const currentStats = prev[profileId] || createEmptyStats();
      
      if (currentStats.dislikedItems.some(i => i.id === item.id)) {
        return prev;
      }

      return {
        ...prev,
        [profileId]: {
          ...currentStats,
          dislikedItems: [...currentStats.dislikedItems, item],
          swipedItems: [...currentStats.swipedItems, item],
        }
      };
    });
  };

  const getStats = () => {
    const stats = getCurrentStats();
    return {
      itemCount: stats.swipedItems.length, // Total swiped items (both left and right)
      likedCount: stats.likedItems.length, // Only right-swiped items
      listCount: 0 // Placeholder for future feature
    };
  };

  return (
    <WardrobeContext.Provider value={{
      wardrobeItems: getCurrentStats().wardrobeItems,
      addToWardrobe,
      removeFromWardrobe,
      addToLiked,
      addToDisliked,
      getStats,
    }}>
      {children}
    </WardrobeContext.Provider>
  );
}

export function useWardrobe() {
  const context = useContext(WardrobeContext);
  if (context === undefined) {
    throw new Error('useWardrobe must be used within a WardrobeProvider');
  }
  return context;
} 