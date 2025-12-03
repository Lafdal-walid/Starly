import {
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";
import AssessmentIcon from "@mui/icons-material/Assessment";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import { TeamProgressCard, TopRightBar } from "../../../components";
import { Link } from "react-router-dom";

const RightSideBar = ({
  userName = "Bouzaghti Malak",
  userHandle = "@bouzaghtimalak",
  userTitle = "UI UX designer",
  joinDate = "Joined September 2025",
  field = "Computer Science",
  progressValue = 77,
  shieldCount = 5,
  fireCount = 5,
  bellCount = 5,
  accentColor = "#FAE086",
  teamProgressText = "",
}) => {
  const scale = 0.65;

  const actions = [
    {
      title: "manage team",
      icon: <GroupsIcon sx={{ fontSize: 18, color: "#262626" }} />,
      color: "#c3d9ff",
      bgColor: "#f3f8ff",
      path: "/teams",
    },
    {
      title: "manage events",
      icon: <EventIcon sx={{ fontSize: 18, color: "#262626" }} />,
      color: "#ffd1ab",
      bgColor: "#fff6ee",
      path: "/events",
    },
    {
      title: "manage reports",
      icon: <AssessmentIcon sx={{ fontSize: 18, color: "#262626" }} />,
      color: "#ffa9ab",
      bgColor: "#ffedee",
      path: "/reports",
    },
    {
      title: "manage content",
      icon: <VideoLibraryIcon sx={{ fontSize: 18, color: "#262626" }} />,
      color: "#e1c9ff",
      bgColor: "#faf6ff",
      path: "/content",
    },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        width: { lg: "20%", md: "20%", sm: 0, xs: 0 },
        overflow: "hidden",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        padding: 2,
        display: "block",
      }}
    >
      <Box 
        sx={{ 
          width: "100%", 
          maxWidth: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          px: 0.85, 
          overflowX: "hidden", 
          boxSizing: "border-box" 
        }}
      >
      <Box sx={{ mt: 0, mb: 0, width: "100%" }}>
        <TopRightBar 
          userName={userName}
          rankPoints={shieldCount}
          streakCount={fireCount}
          notifications={bellCount}
        />
      </Box>

      <Box sx={{ position: "relative", mb: 2 * scale }}>
        {/* Banner */}
        <Box
          sx={{
            width: "100%",
            height: 104 * scale,
            bgcolor: "#e9e9e9",
            borderRadius: 1.5,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 8 * scale,
              top: 8 * scale,
            }}
          >
            <Box
              sx={{
                width: 24 * scale,
                height: 24 * scale,
                borderRadius: "50%",
                bgcolor: "#d5d5d5",
              }}
            />
          </Box>
        </Box>

        {/* Avatar - Reduced size by 30% */}
        <Box
          sx={{
            position: "absolute",
            bottom: -40 * scale, // Adjusted position
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Box
            sx={{
              width: 81 * scale, // Reduced by 30% from 116
              height: 81 * scale, // Reduced by 30% from 116
              borderRadius: "50%",
              bgcolor: "#d5d5d5",
              border: `${3.5 * scale}px solid white`,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          />
        </Box>
      </Box>

      {/* User Info - Increased font size */}
      <Box sx={{ textAlign: "center", mt: 6 * scale, mb: 2 * scale }}>
        <Typography sx={{ fontSize: 26 * scale, fontWeight: 700, color: "#262626", lineHeight: "30px" }}>
          {userName}
        </Typography>
        <Typography sx={{ fontSize: 15.6 * scale, color: "#a8a8a8", lineHeight: "18px", mt: 0.4 * scale }}>
          {userHandle}
        </Typography>
        <Typography sx={{ fontSize: 18.2 * scale, color: "#262626", lineHeight: "20px", mt: 1 * scale }}>
          {userTitle}
        </Typography>
        
        {/* Join Date and Field - Increased font size */}
        <Box sx={{ display: "flex", flexWrap: 'wrap', gap: 1.3 * scale, justifyContent: "center", alignItems: "center", mt: 1.3 * scale }}>
          <Box sx={{ display: "flex", gap: 0.4 * scale, alignItems: "center" }}>
            <CalendarMonthIcon sx={{ fontSize: 18.2 * scale, color: "#707070" }} />
            <Typography sx={{ fontSize: 13 * scale, color: "#707070", lineHeight: "15px" }}>
              {joinDate}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 0.4 * scale, alignItems: "center" }}>
            <SchoolIcon sx={{ fontSize: 18.2 * scale, color: "#707070" }} />
            <Typography sx={{ fontSize: 13 * scale, color: "#707070", lineHeight: "15px" }}>
              {field}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Progress (shared component) */}
      <Box sx={{ mt: 3 * scale }}>
        <TeamProgressCard
          scale={scale}
          topText="Team Level Progress"
          barColor={accentColor}
          bottomText={teamProgressText}
        />
      </Box>

      {/* Management Hub */}
      <Box sx={{ mt: 4 * scale }}>
        <Typography
          sx={{
            fontSize: 16,
            mb: 1.5,
          }}
        >
          Management Hub
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {actions.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "0px 4px 13.7px 0px rgba(38,38,38,0.09)",
                  borderLeft: `4px solid ${item.color}`,
                  bgcolor: "white",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <CardContent sx={{ p: 1, "&:last-child": { pb: 1 } }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: item.bgColor,
                      borderRadius: 1.5,
                      px: 1,
                      py: 0.5,
                      width: "100%"
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%', justifyContent: 'center' }}>
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          bgcolor: item.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#262626",
                          textTransform: "capitalize",
                          textAlign: 'center',
                          flex: 1
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Box sx={{ width: 30, flexShrink: 0 }} /> {/* Invisible spacer for balance */}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default RightSideBar;

