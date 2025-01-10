'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';

export default function NavBot() {
  const { data: session } = useSession(); // Get session data
  const router = useRouter();
  const [value, setValue] = useState(0);

  // Navigation items for unauthenticated users
  const navItemsUnauthenticated = [
    { label: 'Domov', icon: <HomeIcon />, path: '/' },
    { label: 'O-nás', icon: <InfoIcon />, path: '/o-mne' },
    { label: 'Registrovať', icon: <HowToRegIcon />, path: '/auth/registracia' },
    { label: 'Prihlásiť', icon: <LoginIcon />, path: '/auth/prihlasenie' },
  ];

  // Navigation items for authenticated users
  const navItemsAuthenticated = [
    { label: 'Prispevky', icon: <PostAddIcon />, path: '/prispevok' },
    { label: 'Hľadať', icon: <SearchIcon />, path: '/hladanie' },
    { label: 'Pridať', icon: <PostAddIcon />, path: '/pridat' },
    {
      label: 'Profil',
      icon: session?.user?.image ? <Avatar src={session.user.image} alt="Profile" /> : <PersonIcon />,
      path: '/profil',
    },
    { label: 'Odhlásiť', icon: <LogoutIcon />, path: '//odhlasenie' },
  ];

  const handleNavigation = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const selectedItem = session ? navItemsAuthenticated[newValue] : navItemsUnauthenticated[newValue];
  
    // Only navigate to the selected path (no sign out)
    router.push(selectedItem.path); // Navigate to the selected path
  };
  

  return (
    <BottomNavigation
      value={value}
      onChange={handleNavigation}
      showLabels
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {(session ? navItemsAuthenticated : navItemsUnauthenticated).map((item, index) => (
        <BottomNavigationAction
          key={index}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </BottomNavigation>
  );
}
