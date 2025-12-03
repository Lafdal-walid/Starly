import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";

const SearchBar = ({ placeholder = "Search...", sx = {} }) => {
  const theme = useTheme();
  
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        height: 40,
        p: "1.6px 4.8px",
        bgcolor: "#F5F5F5",
        borderRadius: "5.6px",
        mt: 0,
        ...sx,
      }}
    >
      <IconButton sx={{ p: 0 }}>
        <SearchIcon
          sx={{
            color: theme.palette.primary.mediumText,
            fontSize: 16,
          }}
        />
      </IconButton>
      <InputBase
        sx={{
          fontSize: 12,
          ml: 1,
          flex: 1,
        }}
        placeholder={placeholder}
      />
    </Paper>
  );
};

export default SearchBar;
