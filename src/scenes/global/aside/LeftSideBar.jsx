import { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import { menuItemsTop, menuItemsBottom } from "../../../data/menuItems";

export default function LeftSideBar({
  userName = "bouzaghti malak",
  shieldCount = 5,
  fireCount = 5,
  bellCount = 5,
  accentColor = "#F97316",
}) {
  const theme = useTheme();
  const [selected, setSelected] = useState("home");

  const renderMenu = (items) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.75,
        width: "100%",
      }}
    >
      {items.map((item) => (
        <Link
          key={item.value}
          to={item.path}
          style={{ textDecoration: "none", color: "inherit", width: "100%" }}
        >
          <Box
            onClick={() => setSelected(item.value)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.125,
              padding: "7.5px 10.5px",
              borderRadius: "7.5px",
              cursor: "pointer",
              backgroundColor: "transparent",
              transition: "0.2s",

              // 👇 تغييرات مهمة
              color:
                selected === item.value
                  ? theme.palette.primary.black
                  : theme.palette.primary.mediumText,

              "& svg": {
                fontSize: "18px",
                color:
                  selected === item.value
                    ? theme.palette.primary.black
                    : theme.palette.primary.mediumText,
              },
            }}
          >
            {item.icon}
            <Typography
              fontSize={14}
              fontWeight={500}
              sx={{
                color:
                  selected === item.value
                    ? theme.palette.primary.black
                    : theme.palette.primary.mediumText,

                borderBottom:
                  selected === item.value
                    ? "2.25px solid #262626"
                    : "1.5px solid transparent",
                transition: "0.2s",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        width: 206.25,
        height: "100vh",
        position: "absolute",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        padding: "15px 9px",
        borderRight: "1px solid #e0e0e0",
        backgroundColor: "white",
        zIndex: 1000,
        overflowY: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 1.5, flexShrink: 0 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="/HomePagePictures/leftSide/Logo.png"
            alt="Logo"
            style={{
              maxWidth: "70%",
              height: "auto",
              marginTop: "11.25px",
              marginLeft: "15px",
              marginBottom: "15px",
              cursor: "pointer",
            }}
          />
        </Link>
      </Box>

      {/* Top Menu - Flexible */}
      <Box
        sx={{
          flex: "1 1 auto",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          marginLeft: "7.5px",
        }}
      >
        {renderMenu(menuItemsTop)}

        {/* First Divider */}
        <Divider sx={{ my: 1.5, mb: 4 }} />

        {/* Second Divider */}
        <Divider sx={{ mt: 8, mb: 3 }} />

        {/* Bottom Menu */}
        {renderMenu(menuItemsBottom)}
      </Box>

      {/* Bottom Section - Fixed */}
      <Box sx={{ flexShrink: 0, mt: 1.5 }}>
        <Button
          fullWidth
          variant="outlined"
          sx={(theme) => ({
            textTransform: "none",
            borderRadius: "6px",
            mb: 1.5,
            fontSize: "12px",
            fontWeight: 500,
            padding: "4px",
            width: "90%",
            display: "block",
            mx: "auto",
            color: theme.palette.grey[600],
            borderColor: theme.palette.grey[400],
            "&:hover": {
              borderColor: theme.palette.grey[600],
              backgroundColor: "transparent",
            },
          })}
        >
          Log Out
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1.125,
            mb: 1.125,
          }}
        >
          <IconButton
            size="small"
            sx={{
              width: 30,
              height: 30,
              border: "1px solid #e0e0e0",
              borderRadius: "50%",
            }}
          >
            <Box
              component="svg"
              sx={{ width: 16.5, height: 16.5 }}
              viewBox="0 0 24 24"
              fill={theme.palette.primary.mediumText}
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.67 2.89 2.89 0 0 1 2.31-4.84 2.89 2.89 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </Box>
          </IconButton>
          {/* Facebook */}
          <IconButton
            size="small"
            sx={{
              width: 30,
              height: 30,
              border: "1px solid #e0e0e0",
              borderRadius: "50%",
            }}
          >
            <FacebookIcon
              sx={{ fontSize: 16.5, color: theme.palette.primary.mediumText }}
            />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              width: 30,
              height: 30,
              border: "1px solid #e0e0e0",
              borderRadius: "50%",
            }}
          >
            <YouTubeIcon
              sx={{ fontSize: 16.5, color: theme.palette.primary.mediumText }}
            />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              width: 30,
              height: 30,
              border: "1px solid #e0e0e0",
              borderRadius: "50%",
            }}
          >
            <InstagramIcon
              sx={{ fontSize: 16.5, color: theme.palette.primary.mediumText }}
            />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              width: 30,
              height: 30,
              border: "1px solid #e0e0e0",
              borderRadius: "50%",
            }}
          >
            <Box
              component="svg"
              sx={{ width: 16.5, height: 16.5 }}
              viewBox="0 0 24 24"
              fill={theme.palette.primary.mediumText}
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </Box>
          </IconButton>
        </Box>

        <Typography
          sx={{
            fontSize: 9.75,
            color: theme.palette.primary.mediumText,
            textAlign: "center",
            mb: 0.375,
          }}
        >
          itc.blida@gmail.com
        </Typography>

        <Typography
          sx={{
            fontSize: 9,
            color: theme.palette.primary.mediumText,
            textAlign: "center",
            marginTop :'8px'
          }}
        >
          © 2025 Starly. All rights reserved for us
        </Typography>
      </Box>
    </Box>
  );
}
