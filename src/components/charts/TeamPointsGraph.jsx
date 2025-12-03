import { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TeamPointsGraph = () => {
  const theme = useTheme();
  const scale = 0.9;

  const teams = [
    "Team 1",
    "Team 2",
    "Team 3",
    "Team 4",
    "Team 5",
    "Team 6",
    "Team 7",
    "Team 8",
    "Team 9",
    "Team 10",
    "Team 11",
    "Team 12",
  ];

  const pointsData = [50, 57, 60, 66, 69, 48, 49, 60, 64, 69, 70, 71];

  const data = teams.map((name, index) => ({
    name,
    points: pointsData[index],
  }));

  const [selectedTeam, setSelectedTeam] = useState(2);

  return (
    <>
      <Box
        sx={{
          height: 280 * scale,
          overflow: "hidden",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10 * scale,
              right: 10 * scale,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="yellowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#facc15" stopOpacity={0.6} />
                <stop offset="80%" stopColor="#facc15" stopOpacity={0.01} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
            <XAxis dataKey="name" tick={false} axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(value) => [`${value} Pts Earned`, "Points"]}
              contentStyle={{
                borderRadius: 10 * scale,
                borderColor: "#facc15",
              }}
            />
            <Area
              type="monotone"
              dataKey="points"
              stroke="#facc15"
              strokeWidth={3}
              fill="url(#yellowGradient)"
              activeDot={{ r: 5 * scale, fill: "#facc15", stroke: "#facc15" }}
              dot={{
                r: 5 * scale,
                fill: "#facc15",
                stroke: "#facc15",
                strokeWidth: 0,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: 2 * scale,
          gap: 0.5 * scale,
        }}
      >
        {teams.map((team, index) => {
          const isSelected = selectedTeam === index;
          return (
            <Button
              key={index}
              size="small"
              onClick={() => setSelectedTeam(index)}
              sx={{
                minWidth: "auto",
                px: 1.2 * scale,
                py: 0.4 * scale,
                borderRadius: 1,
                textTransform: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: 11 * scale,
                  fontWeight: isSelected ? 700 : 400,
                  color: isSelected ? "#facc15" : theme.palette.text.secondary,
                  borderBottom: isSelected ? "2px solid #facc15" : "none",
                  pb: 0.1 * scale,
                }}
              >
                {team}
              </Typography>
            </Button>
          );
        })}
      </Box>
    </>
  );
};

export default TeamPointsGraph;


