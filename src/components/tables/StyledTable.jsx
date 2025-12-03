import { styled } from '@mui/material/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Typography
} from '@mui/material';

export const StyledTableHead = styled(TableHead)(({ headercolor = '#f3f8ff' }) => ({
  backgroundColor: headercolor,
  '& th': {
    borderColor: headercolor
  }
}));

export const StyledHeaderCell = styled(TableCell)({
  textTransform: "capitalize",
  fontWeight: "bold",
  color: "#1e293b",
  fontSize: "14px",
  padding: "8px 14px",
  border: "1px solid #f3f8ff",
});

export const StyledTableCell = styled(TableCell)({
  fontSize: "14px",
  color: "#707070",
  padding: "11px 12px",
  border: "1px solid #e9e9e9",
  height: "5px",
});

export const StyledTableRow = styled(TableRow)({
  height: "30px",
  "&:hover": {
    backgroundColor: "#fafafa",
  },
});

const StyledTable = ({ 
  columns, 
  data, 
  renderRow, 
  headerColor = '#f3f8ff',
  sx = {} 
}) => {
  return (
    <TableContainer 
      component={Paper} 
      elevation={0} 
      sx={{ 
        border: "none", 
        width: "100%", 
        maxWidth: "100%",
        ...sx 
      }}
    >
      <Table sx={{ width: "100%", borderCollapse: "collapse" }}>
        <StyledTableHead headercolor={headerColor}>
          <TableRow>
            {columns.map((column, index) => (
              <StyledHeaderCell 
                key={index} 
                sx={{ 
                  ...(index === columns.length - 1 && { borderTopRightRadius: "4px" }),
                  backgroundColor: headerColor,
                  borderColor: headerColor
                }}
              >
                {column}
              </StyledHeaderCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {data.map((item, index) => renderRow(item, index))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StyledTable;
