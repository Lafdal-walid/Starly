import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TeamProgressCard = ({
  scale = 1,
  topText = "Teams Progress",
  barColor = "#F97316",
  bottomText = "3/4 Teams On Track • 1 Pending Submission",
}) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
        border: "none",
      }}
    >
      <CardContent sx={{ p: 3 * scale, "&:last-child": { pb: 3 * scale } }}>
        <Typography
          component="h2"
          sx={{
            mb: 2 * scale,
            color: "#262626",
            fontSize: 22 * scale,
            fontWeight: 700,
            textAlign: "left",
            lineHeight: 1.3,
            textTransform: 'capitalize',
            letterSpacing: '0.5px'
          }}
        >
          {topText}
        </Typography>

        <Box
          sx={{
            height: 12 * scale,
            bgcolor: "#E5E7EB",
            borderRadius: 4 * scale,
            mb: 1.5 * scale,
            overflow: "hidden",
            my: 2 * scale
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "75%",
              bgcolor: barColor,
              borderRadius: 4 * scale,
            }}
          />
        </Box>

        {bottomText && (
          <Typography
            sx={{
              fontSize: 12 * scale,
              color: "#6B7280",
              m: 0,
            }}
          >
            {bottomText}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamProgressCard;


