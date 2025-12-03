import React from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  styled
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const StyledTableHead = styled(TableHead)(({ theme, headerbgcolor }) => ({
  backgroundColor: headerbgcolor || "#ffedee",
  '& th': {
    borderColor: headerbgcolor || "#ffedee"
  }
}));

const StyledHeaderCell = styled(TableCell)({
  textTransform: "capitalize",
  fontWeight: "bold",
  color: "#1e293b",
  fontSize: "14px",
  padding: "8px 14px",
  border: "1px solid #ffedee",
});

const StyledTableCell = styled(TableCell)({
  fontSize: "14px",
  color: "#707070",
  padding: "8px 12px",
  border: "1px solid #e9e9e9",
  height: "30px",
});

const StyledTableRow = styled(TableRow)({
  height: "30px",
  "&:hover": { backgroundColor: "#fafafa" },
});

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

const Table = ({
  columns = [],
  data = [],
  statusKey = 'status',
  dateKey = 'date',
  fileKey = 'file',
  actionsKey = 'actions',
  headerBgColor = '#ffedee'
}) => {
  return (
    <TableContainer component={Paper} elevation={0} sx={{ border: "none", width: "100%", borderRadius: "4px", overflow: "hidden" }}>
      <MuiTable sx={{ width: "100%", borderCollapse: "collapse" }}>
        <StyledTableHead headerbgcolor={headerBgColor}>
          <TableRow>
            {columns.map((column, i) => (
              <StyledHeaderCell 
                key={i} 
                sx={{
                  ...(i === columns.length - 1 && { borderTopRightRadius: "4px" }),
                  backgroundColor: headerBgColor,
                  borderColor: headerBgColor
                }}
              >
                {column}
              </StyledHeaderCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {data.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell sx={{ fontWeight: "bold", color: "#1e293b", textTransform: "capitalize" }}>
                {row.title || '--'}
              </StyledTableCell>
              <StyledTableCell sx={{ textTransform: "capitalize", color: "#1e293b" }}>
                {row.submittedBy || '--'}
              </StyledTableCell>
              <StyledTableCell>
                <StatusDot status={row[statusKey]} />
              </StyledTableCell>
              <StyledTableCell sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <CalendarTodayIcon sx={{ fontSize: 12, color: "#262626" }} />
                <Typography sx={{ fontSize: 12, color: "#1e293b" }}>
                  {row[dateKey] || '--'}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                {row[fileKey] ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <InsertDriveFileIcon sx={{ fontSize: 19, color: "#707070" }} />
                    <Typography sx={{ fontSize: 14, color: "#707070" }}>{row[fileKey]}</Typography>
                  </Box>
                ) : (
                  <Typography sx={{ fontSize: 14, color: "#a8a8a8" }}>not found</Typography>
                )}
              </StyledTableCell>
              <StyledTableCell>
                <Box sx={{ display: "flex", gap: 3, alignItems: "center", height: "100%" }}>
                  {row[actionsKey]?.map((action, ai) => {
                    const isApprove = action === "Approve";
                    const nextAction = row[actionsKey][ai + 1];
                    const shouldAddDivider = isApprove && nextAction === "Request Revision";
                    
                    return (
                      <Box key={ai} sx={{ display: "flex", alignItems: "center", gap: 3, height: "100%" }}>
                        <Typography 
                          sx={{
                            textTransform: "capitalize",
                            fontSize: 14,
                            color: action === "Approve" ? "#0a825a" : action === "Send Reminder" ? "#d12e33" : "#707070",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                          }}
                        >
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
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
