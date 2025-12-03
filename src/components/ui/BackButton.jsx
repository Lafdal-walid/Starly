import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const BackButton = ({ to = "/", label = "back", sx = {} }) => (
  <Link to={to} style={{ textDecoration: "none" }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        p: "10px",
        ...sx
      }}
    >
      <ArrowBackIcon sx={{ color: "#707070", fontSize: "16px" }} />
      <Typography
        sx={{
          color: "#707070",
          fontSize: "16px",
          lineHeight: "16px",
          textTransform: "capitalize"
        }}
      >
        {label}
      </Typography>
    </Box>
  </Link>
);

export default BackButton;
