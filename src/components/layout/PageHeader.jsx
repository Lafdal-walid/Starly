import { Box, Typography } from '@mui/material';

const PageHeader = ({ title, subtitle, action, sx = {} }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      mb: 3,
      ...sx
    }}
  >
    <Box>
      <Typography
        variant="h4"
        sx={{
          textTransform: "capitalize",
          color: "#1e293b",
          fontWeight: "bold",
          fontSize: "23px",
          lineHeight: "39px",
          mb: 0.7,
          mt: 2.4,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            textTransform: "capitalize",
            color: "#1e293b",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "22px",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
    {action}
  </Box>
);

export default PageHeader;
