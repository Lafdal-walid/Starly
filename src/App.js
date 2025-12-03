import { ThemeProvider } from "@mui/material/styles";
import MainSection from "./scenes/global/mainSections/MainSection";
import Events from "./scenes/global/mainSections/Events";
import UserManagement from "./scenes/global/mainSections/UserManagement";
import ReportsManagements from "./scenes/global/mainSections/ReportsManagements";
import ContentManagement from "./scenes/global/mainSections/ContentManagement";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";
import { ResponsiveLayout } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveLayout>
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/teams" element={<UserManagement />} />
          <Route path="/reports" element={<ReportsManagements />} />
          <Route path="/content" element={<ContentManagement />} />
          <Route path="/home" element={<MainSection />} />
          <Route path="/" element={<MainSection />} />
          <Route path="/MainSection" element={<MainSection />} />
        </Routes>
      </ResponsiveLayout>
    </ThemeProvider>
  );
}

export default App;
