import { Paper, Box, Typography } from "@mui/material";

const CardLevelMax = ({ count, label, Icon, borderColor = "#ffa9ab", iconBackgroundColor, width, sx }) => {
  // إذا لم يتم تمرير iconBackgroundColor، استخدم borderColor مع شفافية 20%
  const defaultIconBg = iconBackgroundColor || `${borderColor}33`;
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: "12px",
        boxShadow: "0px 4px 13.7px rgba(38,38,38,0.09)",
        borderTop: "0.3px solid rgba(38,38,38,0.08)",
        borderBottom: `4px solid ${borderColor}`,
        width: "100%",     // ✅ مهم جداً
        height: "auto",    // ✅ لا تجبر الارتفاع
        display: "flex",
        gap: 1.5,
        alignItems: "center",
        boxSizing: "border-box",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: defaultIconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Icon />
      </Box>
    <Box>
      <Typography sx={{ fontWeight: "bold", fontSize: 28, color: "#1e293b", lineHeight: 1 }}>{count}</Typography>
      <Typography sx={{ fontWeight: 500, fontSize: 16, color: "#1e293b", mt: 0.5 }}>{label}</Typography>
    </Box>
  </Paper>
  );
};

export default CardLevelMax;

