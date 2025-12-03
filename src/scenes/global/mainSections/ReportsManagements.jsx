import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Container,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ErrorIcon from "@mui/icons-material/Error";
import { CardLevelMax, SearchBar, BackButton, PageHeader, StyledTable, StyledTableRow, StyledTableCell } from "../../../components";

const reportsData = [
  { title: "Report Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", report: "Report.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Report Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", report: "Report.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Report Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", report: "Report.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Report Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", report: "Report.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Report Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", report: "Report.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Report Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", report: "Report.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Report Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", report: "Report.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Report Title", submittedBy: "Username", status: "submitted", date: "Oct 22,2025", report: "Report.Pdf", actions: ["Approve", "Request Revision"] },
  { title: "Report Title", submittedBy: "Username", status: "pending", date: "Oct 22,2025", report: null, actions: ["Send Reminder"] },
  { title: "Report Title", submittedBy: "Username", status: "pending", date: "Oct 22,2025", report: null, actions: ["Send Reminder"] },
  { title: "Report Title", submittedBy: "Username", status: "late", date: "Oct 22,2025", report: null, actions: ["Send Reminder"] },
];

// Helper Components
const StatusDot = ({ status }) => {
  const colors = { submitted: "#0a825a", pending: "#f3ae00", late: "#d12e33" };
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Box sx={{ width: 14, height: 14, borderRadius: "50%", bgcolor: colors[status] }} />
      <Typography sx={{ fontWeight: "bold", fontSize: 14, color: colors[status], textTransform: "capitalize" }}>
        {status}
      </Typography>
    </Box>
  );
};

const CalendarIcon = () => <CalendarTodayIcon sx={{ fontSize: 12, color: "#262626" }} />;
const FileIcon = () => <DescriptionIcon sx={{ fontSize: 19, color: "#707070" }} />;

// Main Component
const ReportsManagements = () => {
  const [reports, setReports] = useState(reportsData);
  const columns = ["Report Title", "Submitted By", "Status", "Submission Date", "Report", "Actions"];

  useEffect(() => {
    const handleAddReport = (event) => {
      const newReport = event.detail;
      const reportWithActions = {
        ...newReport,
        actions: newReport.status === 'submitted' ? ["Approve", "Request Revision"] : 
                newReport.status === 'pending' ? ["Send Reminder"] : 
                ["Send Reminder"]
      };
      setReports(prev => [...prev, reportWithActions]);
    };

    window.addEventListener('addReport', handleAddReport);
    return () => window.removeEventListener('addReport', handleAddReport);
  }, []);

  const renderReportRow = (row, index) => (
    <StyledTableRow key={index}>
      <StyledTableCell sx={{ fontWeight: "bold", color: "#1e293b", textTransform: "capitalize" }}>
        {row.title}
      </StyledTableCell>
      <StyledTableCell sx={{ textTransform: "capitalize", color: "#1e293b" }}>
        {row.submittedBy}
      </StyledTableCell>
      <StyledTableCell>
        <StatusDot status={row.status} />
      </StyledTableCell>
      <StyledTableCell sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <CalendarIcon />
        <Typography sx={{ fontSize: 12, color: "#1e293b" }}>{row.date}</Typography>
      </StyledTableCell>
      <StyledTableCell>
        {row.report ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <FileIcon />
            <Typography sx={{ fontSize: 14, color: "#707070" }}>{row.report}</Typography>
          </Box>
        ) : (
          <Typography sx={{ fontSize: 14, color: "#a8a8a8" }}>not found</Typography>
        )}
      </StyledTableCell>
      <StyledTableCell>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center", height: "100%" }}>
          {row.actions.map((action, ai) => {
            const isApprove = action === "Approve";
            const nextAction = row.actions[ai + 1];
            const shouldAddDivider = isApprove && nextAction === "Request Revision";
            
            return (
              <Box key={ai} sx={{ display: "flex", alignItems: "center", gap: 3, height: "100%" }}>
                <Typography sx={{
                  textTransform: "capitalize",
                  fontSize: 14,
                  color: action === "Approve" ? "#0a825a" : action === "Send Reminder" ? "#d12e33" : "#707070",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}>
                  {action}
                </Typography>
                {shouldAddDivider && (
                  <Box
                    sx={{
                      width: "1px",
                      height: "100%",
                      backgroundColor: "#e9e9e9",
                      alignSelf: "stretch",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </StyledTableCell>
    </StyledTableRow>
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
      <Container maxWidth="xl" sx={{ py: 2, px: 2 }}>
        <SearchBar 
          placeholder="Search team, deadline.." 
          sx={{ mb: 4, mt: 0 }} 
        />

        <PageHeader
          title="reports managements"
          subtitle="Upload, track, and review team reports"
          action={<BackButton to="/" />}
        />

        {/* Stats Cards */}
        <Box 
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
            mb: 4,
          }}
        >
          <Box
            sx={{
              flex: "1 1 calc(33.333% - 16px)", // 3 في الصف
              minWidth: "180px", 
            }}
          >
            <CardLevelMax 
              count="12" 
              label="submitted" 
              Icon={() => (
                <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <AssignmentIcon sx={{ fontSize: 28, color: "#ffa9ab" }} />
                  <CheckCircleIcon 
                    sx={{ 
                      fontSize: 14, 
                      color: "white", 
                      position: "absolute", 
                      bottom: -2, 
                      right: -2,
                      backgroundColor: "#ffa9ab",
                      borderRadius: "50%",
                      padding: "2px"
                    }} 
                  />
                </Box>
              )} 
            />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.333% - 16px)", // 3 في الصف
              minWidth: "180px", 
            }}
          >
            <CardLevelMax 
              count="02" 
              label="pending" 
              Icon={() => (
                <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <AssignmentIcon sx={{ fontSize: 28, color: "#ffa9ab" }} />
                  <AccessTimeIcon 
                    sx={{ 
                      fontSize: 14, 
                      color: "white", 
                      position: "absolute", 
                      bottom: -2, 
                      right: -2,
                      backgroundColor: "#ffa9ab",
                      borderRadius: "50%",
                      padding: "2px"
                    }} 
                  />
                </Box>
              )} 
            />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.333% - 16px)", // 3 في الصف
              minWidth: "180px", 
            }}
          >
            <CardLevelMax 
              count="01" 
              label="late" 
              Icon={() => (
                <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <AssignmentIcon sx={{ fontSize: 28, color: "#ffa9ab" }} />
                  <ErrorIcon 
                    sx={{ 
                      fontSize: 14, 
                      color: "white", 
                      position: "absolute", 
                      bottom: -2, 
                      right: -2,
                      backgroundColor: "#ffa9ab",
                      borderRadius: "50%",
                      padding: "2px"
                    }} 
                  />
                </Box>
              )} 
            />
          </Box>
        </Box>

        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <StyledTable
            columns={columns}
            data={reports}
            renderRow={renderReportRow}
            headerColor="#ffedee"
            sx={{ width: "100%", minWidth: "800px" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ReportsManagements;