import { createContext, useContext, useState, ReactNode } from 'react';

export interface Profile {
  id: string;
  name: string;
  email: string;
  avatar: any; // Changed to any to support require statements
  password: string;
}

const INITIAL_PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Shreyas',
    email: 'shreyasjha@gmail.com',
    avatar: require('../assets/profiles/shreyas.jpg'),
    password: '1234', // Default password for testing
  },
  {
    id: '2',
    name: 'Adithi',
    email: 'adithi@gmail.com',
    avatar: require('../assets/profiles/adithi.jpg'),
    password: '5678', // Default password for testing
  },
];

interface ProfileContextType {
  profiles: Profile[];
  currentProfile: Profile | null;
  login: (profileId: string, password: string) => boolean;
  logout: () => void;
  addProfile: (name: string, email: string, password: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profiles, setProfiles] = useState<Profile[]>(INITIAL_PROFILES);
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);

  const login = (profileId: string, password: string): boolean => {
    const profile = profiles.find(p => p.id === profileId);
    if (profile && profile.password === password) {
      setCurrentProfile(profile);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentProfile(null);
  };

  const addProfile = (name: string, email: string, password: string) => {
    const newProfile: Profile = {
      id: Date.now().toString(),
      name,
      email,
      password,
      avatar: INITIAL_PROFILES[0].avatar,
    };
    
    setProfiles(prev => [...prev, newProfile]);
  };

  return (
    <ProfileContext.Provider 
      value={{ 
        profiles,
        currentProfile, 
        login, 
        logout,
        addProfile
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
} 