import { Box, Typography } from "@mui/material";

const CardPro = ({
  icon: Icon,
  title,
  bgColor,
  iconColor,
  borderColor = "#ffa9ab",
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: bgColor,
        borderRadius: "10px",
        p: 1.8,
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        justifyContent: "center",
        boxShadow: "0 3px 10px rgba(0,0,0,0.07)",
        cursor: "pointer",
        transition: "0.2s ease",
        borderBottom: `4px solid ${borderColor}`,
        boxSizing: "border-box",
        "&:hover": { 
          transform: "translateY(-2px)",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)" 
        },
      }}
    >
      <Icon sx={{ color: iconColor, fontSize: "18px" }} />
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "600",
          color: "#262626",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CardPro;