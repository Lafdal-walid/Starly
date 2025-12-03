import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResponsiveLayout } from './components';
import MainSection from './scenes/global/mainSections/MainSection';
import UserManagement from './scenes/global/mainSections/UserManagement';
import Events from './scenes/global/mainSections/Events';
import ReportsManagements from './scenes/global/mainSections/ReportsManagements';
import ContentManagement from './scenes/global/mainSections/ContentManagement';

function App() {
  return (
    <Router>
      <ResponsiveLayout>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/teams" element={<UserManagement />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reports" element={<ReportsManagements />} />
          <Route path="/content" element={<ContentManagement />} />
        </Routes>
      </ResponsiveLayout>
    </Router>
  );
}

export default App;
