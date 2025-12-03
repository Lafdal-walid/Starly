import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";

import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { SearchBar, TeamPointsGraph, CardLevelMax, CardPro } from "../../../components";

const MainSection = () => {
  const theme = useTheme();
  const scale = 0.8;
  const navigate = useNavigate();

  const cards = [
    {
      title: "Members",
      value: 50,
      icon: (
        <PeopleIcon
          sx={{ color: theme.palette.primary.darkText, fontSize: 28 * scale }}
        />
      ),
    },
    {
      title: "Playlists",
      value: 20,
      icon: (
        <PersonIcon
          sx={{ color: theme.palette.primary.darkText, fontSize: 28 * scale }}
        />
      ),
    },
    {
      title: "Rank",
      value: 5,
      icon: (
        <EmojiEventsIcon
          sx={{ color: theme.palette.primary.darkText, fontSize: 28 * scale }}
        />
      ),
    },
    {
      title: "Active Tasks",
      value: 6,
      icon: (
        <StarIcon
          sx={{ color: theme.palette.primary.darkText, fontSize: 28 * scale }}
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        position: { lg: "absolute", md: "absolute", sm: "relative", xs: "relative" },
        left: { lg: "206.25px", md: "206.25px", sm: 0, xs: 0 },
        right: { lg: "20%", md: "20%", sm: 0, xs: 0 },
        top: 0,
        width: {
          lg: "calc(100% - 206.25px - 20%)",
          md: "calc(100% - 206.25px - 20%)",
          sm: "100%",
          xs: "100%",
        },
        overflowX: "hidden",
        bgcolor: "white",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: 2,
          px: 2,
          bgcolor: "#FFFFFF",
          borderRadius: 2,
          overflowX: "hidden",
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        {/* Search Bar */}
        <SearchBar placeholder="Search member..." />

        {/* Title */}
        <Typography
          sx={{
            fontFamily: "bold_pro",
            color: theme.palette.primary.darkText,
            mt: 2.4,
            fontSize: "23px",
            lineHeight: "39px",
            mb: 0.7,
          }}
        >
          Over view panel
        </Typography>

        {/* ----------- Responsive Cards (with min/max width) ------------ */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
          }}
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 calc(25% - 16px)", // 4 في الصف
                minWidth: "180px", 
              }}
            >
              <CardLevelMax
                count={card.value}
                label={card.title}
                Icon={() => card.icon}
                borderColor={theme.palette.secondary.main}
              />
            </Box>
          ))}
        </Box>

        {/* Chart Title */}
        <Typography
          sx={{
            fontFamily: "bold_pro",
            fontSize: 20,
            color: theme.palette.primary.darkText,
            my: 3 * scale,
          }}
        >
          Points Earned By Each Team This Month
        </Typography>

        <TeamPointsGraph />

        {/* Quick Actions Title */}
        <Typography
          sx={{
            fontFamily: "bold_pro",
            fontSize: 22,
            color: theme.palette.primary.darkText,
            my: 3 * scale,
          }}
        >
          Quick Actions
        </Typography>

        {/* ----------- Quick Actions Responsive ------------ */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
            mb: 3,
          }}
        >
          <Box
            sx={{
              flex: "1 1 calc(25% - 16px)", // 4 في الصف
              minWidth: "180px", 
            }}
          >
            <CardPro
              icon={AddIcon}
              title="Add Member"
              bgColor="#f3f8ff"
              borderColor="#c3d9ff"
              iconBgColor="#d9e7ff"
              iconColor="#3b6ad6"
              onClick={() => navigate("/teams")}
            />
          </Box>

          <Box
            sx={{
              flex: "1 1 calc(25% - 16px)", // 4 في الصف
              minWidth: "180px", 
            }}
          >
            <CardPro
              icon={AddIcon}
              title="Add Event"
              bgColor="#fff6ee"
              borderColor="#ffd1ab"
              iconBgColor="#ffe1c9"
              iconColor="#ff8f40"
              onClick={() => navigate("/events")}
            />
          </Box>

          <Box
            sx={{
              flex: "1 1 calc(25% - 16px)", // 4 في الصف
              minWidth: "180px", 
            }}
          >
            <CardPro
              icon={UploadFileIcon}
              title="Upload Report"
              bgColor="#ffedee"
              borderColor="#ffa9ab"
              iconBgColor="#ffc9cb"
              iconColor="#ff4d57"
              onClick={() => navigate("/reports")}
            />
          </Box>

          <Box
            sx={{
              flex: "1 1 calc(25% - 16px)", // 4 في الصف
              minWidth: "180px", 
            }}
          >
            <CardPro
              icon={AddIcon}
              title="Add Video"
              bgColor="#faf6ff"
              borderColor="#e1c9ff"
              iconBgColor="#e9d9ff"
              iconColor="#8b5cd6"
              onClick={() => navigate("/content")}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MainSection;
