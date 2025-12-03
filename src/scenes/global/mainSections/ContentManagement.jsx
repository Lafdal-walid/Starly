import React, { useState, useEffect } from "react";
import {
  Paper,
  Box,
  Typography,
  Container,
  Button,
  useTheme,
} from "@mui/material";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import { Table, SearchBar, BackButton, PageHeader } from "../../../components";

// ---- StatCard Component ----
const StatCard = ({ icon, count, label }) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: "12px",
        bgcolor: "#FFFFFF",
        borderBottom: "4px solid #E1C9FF",
        boxShadow: "0px 4px 13.7px rgba(38, 38, 38, 0.09)",
        display: "flex",
        gap: 1,
        alignItems: "flex-start",
        width: "100%",
        height: "auto",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          bgcolor: "#FAF6FF",
          borderRadius: "50%",
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "26px", color: theme.palette.text.primary, textTransform: "capitalize" }}>
          {count}
        </Typography>
        <Typography sx={{ fontWeight: 500, fontSize: "16px", color: theme.palette.text.primary, textTransform: "capitalize" }}>
          {label}
        </Typography>
      </Box>
    </Paper>
  );
};

// ---- FilterTab Component ----
const FilterTab = ({ label, active = false, onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      bgcolor: active ? "#E1C9FF" : "#F5F5F5",
      color: active ? "#262626" : "#707070",
      textTransform: "capitalize",
      fontWeight: 500,
      fontSize: "16px",
      px: 1.25,
      py: 1.25,
      borderRadius: "4px",
      minHeight: "30px",
      height: "30px",
      "&:hover": {
        bgcolor: active ? "#E1C9FF" : "#E9E9E9",
      },
    }}
  >
    {label}
  </Button>
);

// Table columns
const columns = ["Content Title", "Submitted By", "Status", "Date", "Document", "Actions"];

// Table data
const tableData = [
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", file: "Content.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Content Title", submittedBy: "Username", status: "pending", date: "Oct 22,2025", file: null, actions: ["Send Reminder"] },
  { title: "Content Title", submittedBy: "Username", status: "pending", date: "Oct 22,2025", file: null, actions: ["Send Reminder"] },
  { title: "Content Title", submittedBy: "Username", status: "late", date: "Oct 22,2025", file: null, actions: ["Send Reminder"] },
];

// ---- ContentManagement Component ----
const ContentManagement = () => {
  const [contentData, setContentData] = useState(tableData);

  useEffect(() => {
    const handleAddVideo = (event) => {
      const newVideo = event.detail;
      const videoWithActions = {
        title: newVideo.title || "New Video",
        submittedBy: "Admin",
        status: "submitted",
        date: newVideo.uploadDate || new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        file: `${newVideo.title.replace(/\s+/g, '_')}.mp4`,
        actions: ["Approve", "Request Revision"]
      };
      setContentData(prev => [...prev, videoWithActions]);
    };

    window.addEventListener('addVideo', handleAddVideo);
    return () => window.removeEventListener('addVideo', handleAddVideo);
  }, []);

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
      <Container maxWidth="xl" sx={{ py: 2, px: 2 }}>
        <SearchBar 
          placeholder="Search team, deadline.." 
          sx={{ mb: 4, mt: 0 }} 
        />

        <PageHeader
          title="content management"
          subtitle="Upload, track, and review team content"
          action={<BackButton to="/" />}
        />

        {/* Stat Cards */}
        <Box 
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
            mt: 4,
          }}
        >
          <Box
            sx={{
              flex: "1 1 calc(33.333% - 16px)", // 3 في الصف
              minWidth: "180px", 
            }}
          >
            <StatCard icon={<AssignmentTurnedInIcon sx={{ color: "#E1C9FF", fontSize: 32 }} />} count="12" label="submitted" />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.333% - 16px)", // 3 في الصف
              minWidth: "180px", 
            }}
          >
            <StatCard icon={<PendingActionsIcon sx={{ color: "#E1C9FF", fontSize: 32 }} />} count="02" label="pending" />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.333% - 16px)", // 3 في الصف
              minWidth: "180px", 
            }}
          >
            <StatCard icon={<AssignmentLateIcon sx={{ color: "#E1C9FF", fontSize: 32 }} />} count="01" label="late" />
          </Box>
        </Box>

      {/* Filter Tabs */}
      <Box sx={{ display: "flex", gap: 1.5, mt: 4 }}>
        <FilterTab label="all" active />
        <FilterTab label="status" />
        <FilterTab label="content type" />
      </Box>

      {/* Table */}
      <Box sx={{ mt: 3, width: "100%", overflowX: "auto" }}>
        <Table 
          columns={columns}
          data={contentData}
          statusKey="status"
          dateKey="date"
          fileKey="file"
          actionsKey="actions"
          headerBgColor="#E1C9FF"
          sx={{ width: "100%", minWidth: "800px" }}
        />
      </Box>
      </Container>
    </Box>
  );
};

export default ContentManagement;
