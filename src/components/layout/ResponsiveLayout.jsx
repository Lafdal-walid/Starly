import React from 'react';
import { Box, useMediaQuery, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LeftSideBar from '../../scenes/global/aside/LeftSideBar';
import RightSideBar from '../../scenes/global/aside/RightSideBar';
import RightSideBar2 from '../../scenes/global/aside/RightSideBar2';
import { useLocation } from 'react-router-dom';

const ResponsiveLayout = ({ children }) => {
  const isSmallScreen = useMediaQuery('(max-width:899px)');
  const location = useLocation();

  const getRightSidebar = () => {
    const isRightSidebar2Page =
      location.pathname === "/events" || location.pathname === "/teams" || location.pathname === "/reports" || location.pathname === "/content";

    if (isRightSidebar2Page) {
      if (location.pathname === "/events") {
        return <RightSideBar2 accentColor="#F97316" addButtonLabel="Add Event" />;
      } else if (location.pathname === "/reports") {
        return <RightSideBar2 accentColor="#FFA9AB" addButtonLabel="Add Report" />;
      } else if (location.pathname === "/content") {
        return <RightSideBar2 accentColor="#D3C2FF" addButtonLabel="Add Video" />;
      } else {
        return <RightSideBar2 accentColor="#3B82F6" addButtonLabel="Add Member" />;
      }
    } else {
      return <RightSideBar />;
    }
  };

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      {/* Mobile Menu Button - Left Side - Only visible on screens smaller than 900px */}
      {isSmallScreen && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          sx={{
            position: 'fixed',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            zIndex: 10002,
            bgcolor: 'background.paper',
            boxShadow: 3,
            width: 8,
            height: 80,
            borderRadius: '0 8px 8px 0',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            opacity: 0.7,
            '&:hover': {
              bgcolor: 'background.default',
              transform: 'translateY(-50%) translateX(2px)',
              transition: 'all 0.3s ease',
              opacity: 1,
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
        </IconButton>
      )}

      {isSmallScreen && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          sx={{
            position: 'fixed',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 10002,
            bgcolor: 'background.paper',
            boxShadow: 3,
            width: 8,
            height: 80,
            borderRadius: '8px 0 0 8px',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            opacity: 0.7,
            '&:hover': {
              bgcolor: 'background.default',
              transform: 'translateY(-50%) translateX(-2px)',
              transition: 'all 0.3s ease',
              opacity: 1,
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: 10 }} />
        </IconButton>
      )}

      {!isSmallScreen && (
        <Box
          component="nav"
          sx={{
            width: { lg: 206.25, md: 206.25, sm: 0, xs: 0 },
            flexShrink: { lg: 0, md: 0, sm: 0, xs: 0 },
            display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' },
            position: { lg: 'static', md: 'static' },
            height: '100vh',
            zIndex: 1000,
            bgcolor: 'transparent'
          }}
        >
          <LeftSideBar />
        </Box>
      )}

      <Box
        sx={{
          width: { lg: '20%', md: '20%', sm: 0, xs: 0 },
          flexShrink: { lg: 0, md: 0, sm: 0, xs: 0 },
          display: { 
            sm: 'none', 
            xs: 'none', 
            md: 'block', 
            lg: 'block' 
          },
          position: { md: 'static', lg: 'static' },
          height: '100vh',
          zIndex: 1000,
        }}
      >
        {getRightSidebar()}
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { 
            lg: `calc(100% - 206.25px - 20%)`, 
            md: `calc(100% - 206.25px - 20%)`, 
            sm: '100%', 
            xs: '100%' 
          },
          ml: { lg: 0, md: 0, sm: 0, xs: 0 },
          '& > div': {
            left: { 
              lg: '206.25px', 
              md: '206.25px', 
              sm: 0, 
              xs: 0 
            },
            right: { 
              lg: '20%', 
              md: '20%', 
              sm: 0, 
              xs: 0 
            },
            width: { 
              lg: 'calc(100% - 206.25px - 20%)',
              md: 'calc(100% - 206.25px - 20%)',
              sm: '100%',
              xs: '100%'
            }
          }
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ResponsiveLayout;
