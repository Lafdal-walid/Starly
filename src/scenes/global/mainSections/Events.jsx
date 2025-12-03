import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Container,
  Paper,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Link,
  useTheme,
} from "@mui/material";
import {
  Event as EventIcon,
  LocationOn as LocationOnIcon,
  InfoOutlined as InfoIcon,
} from "@mui/icons-material";
import { SearchBar, BackButton, PageHeader } from "../../../components";
import { events } from "../../../data/eventsData";

const Events = () => {
  const scale = 0.75; // تصغير عام للعناصر بنسبة 25%
  const theme = useTheme();
  const S = (v) => v * scale;
  const [eventHistory, setEventHistory] = useState(Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    eventName: "Event Name",
    eventType: "Event Type",
    date: "Oct 22, 2025",
    attendees: 12,
  })));

  useEffect(() => {
    const handleAddEvent = (event) => {
      const newEvent = event.detail;
      const eventWithId = {
        id: eventHistory.length + 1,
        eventName: newEvent.name || newEvent.eventName || "New Event",
        eventType: newEvent.type || newEvent.eventType || "Event Type",
        date: newEvent.date || "Oct 22, 2025",
        attendees: parseInt(newEvent.attendees) || Math.floor(Math.random() * 20) + 5,
      };
      setEventHistory(prev => [...prev, eventWithId]);
    };

    window.addEventListener('addEvent', handleAddEvent);
    return () => window.removeEventListener('addEvent', handleAddEvent);
  }, [eventHistory.length]);

  const Text = ({ children, size, bold, color, sx }) => (
    <Typography
      sx={{
        fontSize: S(size),
        fontWeight: bold ? "bold" : 400,
        textTransform: "capitalize",
        color: color || "#262626",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );

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
      <Container maxWidth="lg" sx={{ py: 2, px: 2 }}>
        <SearchBar
          placeholder="Search event, date.."
          sx={{ mb: 3 }}
        />

        <PageHeader
          title="Events"
          action={<BackButton to="/" />}
        />

        <Typography
          sx={{
            fontFamily: "bold_pro",
            color: theme.palette.primary.darkText,
            fontSize: "20px",
            lineHeight: "39px",
            mb: 2.5,
            mt: 0.8,
          }}
        >
          Workshops
        </Typography>

        {/* Events Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
            mb: S(4),
          }}
        >
          {events.map((e) => {
            const color = e.borderColor === "#2196F3" ? "#EFF6FF" : "#FFF7ED";

            return (
              <Box
                key={e.id}
                sx={{
                  flex: "1 1 calc(33.333% - 16px)", // 3 في الصف
                  minWidth: "180px", 
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 3,
                    borderBottom: `3px solid ${e.borderColor}`,
                    backgroundColor: color,
                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
                    boxSizing: "border-box",
                  }}
                >
                  <CardContent sx={{ pb: 1 }}>
                    <Text size={16} bold sx={{ mb: S(1.5), color: "#1F2937" }}>
                      {e.type}
                    </Text>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: S(2),
                        mb: S(1),
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: S(1),
                        }}
                      >
                        <EventIcon sx={{ fontSize: S(14), color: "#6B7280" }} />
                        <Text size={12} color="#6B7280">
                          {e.date}, {e.time}
                        </Text>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: S(1),
                        }}
                      >
                        <LocationOnIcon
                          sx={{ fontSize: S(14), color: "#6B7280" }}
                        />
                        <Text size={12} color="#6B7280">
                          {e.location}
                        </Text>
                      </Box>
                    </Box>

                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<InfoIcon sx={{ fontSize: S(14) }} />}
                      sx={{
                        borderColor: e.borderColor,
                        color: e.borderColor,
                        textTransform: "none",
                        borderRadius: "20px",
                        "&:hover": {
                          borderColor: e.borderColor,
                          backgroundColor: color,
                        },
                      }}
                    >
                      Details
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>

        <Text size={28} bold sx={{ mb: S(2) }}>
          Workshops History
        </Text>

        <TableContainer
          component={Paper}
          sx={{
            border: "1px solid #e9e9e9",
            borderRadius: S(4),
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#fff6ee" }}>
                {["event name", "type", "date", "attendes", "actions"].map(
                  (h) => (
                    <TableCell key={h}>
                      <Text size={12} bold>
                        {h}
                      </Text>
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {eventHistory.map((e) => (
                <TableRow key={e.id} sx={{ "&:hover": { bgcolor: "#f9f9f9" } }}>
                  <TableCell>
                    <Text bold size={12}>
                      {e.eventName}
                    </Text>
                  </TableCell>

                  <TableCell>
                    <Text size={12}>{e.eventType}</Text>
                  </TableCell>

                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: S(0.5),
                      }}
                    >
                      <EventIcon sx={{ fontSize: S(12) }} />
                      <Text size={11}>{e.date}</Text>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Text size={12} color="#6B7280">
                      {e.attendees}
                    </Text>
                  </TableCell>

                  <TableCell>
                    <Link sx={{ fontSize: S(12), cursor: "pointer" }}>
                      view details
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default Events;
