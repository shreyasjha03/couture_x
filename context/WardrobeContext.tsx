import { createContext, useContext, useState, ReactNode } from 'react';
import { ApparelItem } from '@/constants/apparelData';

interface WardrobeContextType {
  wardrobeItems: ApparelItem[];
  addToWardrobe: (item: ApparelItem) => void;
  removeFromWardrobe: (id: string) => void;
}

const WardrobeContext = createContext<WardrobeContextType | undefined>(undefined);

export function WardrobeProvider({ children }: { children: ReactNode }) {
  const [wardrobeItems, setWardrobeItems] = useState<ApparelItem[]>([]);

  const addToWardrobe = (item: ApparelItem) => {
    setWardrobeItems((prev) => {
      // Check if item already exists
      if (prev.some((i) => i.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromWardrobe = (id: string) => {
    setWardrobeItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WardrobeContext.Provider value={{ wardrobeItems, addToWardrobe, removeFromWardrobe }}>
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