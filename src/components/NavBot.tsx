'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';

export default function NavBot() {
  const { data: session } = useSession();  // Get session data
  const router = useRouter();
  const [value, setValue] = useState(0);

  // Navigation items based on auth status
  const navItemsUnauthenticated = [
    { label: 'Domov', icon: <HomeIcon />, path: '/' },
    { label: 'Prispevky', icon: <PostAddIcon />, path: '/prispevok' },
    { label: 'Prihlásiť', icon: <LoginIcon />, path: '/auth/prihlasenie' },
    { label: 'Registrovať', icon: <HowToRegIcon />, path: '/auth/registracia' },
  ];

  const navItemsAuthenticated = [
    { label: 'Domov', icon: <HomeIcon />, path: '/' },
    { label: 'Prispevky', icon: <PostAddIcon />, path: '/prispevok' },
    { label: 'Pridať', icon: <PostAddIcon />, path: '/prispevok/novy' },  // Add new post
    {
      label: 'Profil',
      icon: session?.user?.image ? <Avatar src={session.user.image} alt="Profile" /> : <PersonIcon />,
      path: '/profil',
    },
    { label: 'Odhlásiť', icon: <LogoutIcon />, path: '/' },
  ];

  const handleNavigation = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const selectedItem = session ? navItemsAuthenticated[newValue] : navItemsUnauthenticated[newValue];
    if (selectedItem.label === 'Odhlásiť') {
      signOut({ callbackUrl: '/' });  // Log out
    } else {
      router.push(selectedItem.path);  // Navigate
    }
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
