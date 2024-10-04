'use client'; // Mark this as a Client Component

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useRouter } from 'next/navigation';

export default function NavBot() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const navItems = [
    { label: 'Domov', icon: <HomeIcon />, path: '/' },
    { label: 'Profily', icon: <PersonIcon />, path: '/profil' },
    { label: 'Prispevky', icon: <PostAddIcon />, path: '/prispevok' },
    { label: 'Prihlasit', icon: <LoginIcon />, path: '/auth/prihlasenie' },
    { label: 'Registrovat', icon: <HowToRegIcon />, path: '/auth/registracia' },
  ];

  const handleNavigation = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    router.push(navItems[newValue].path); // Navigate to the selected path
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
      {navItems.map((item, index) => (
        <BottomNavigationAction
          key={index}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </BottomNavigation>
  );
}
