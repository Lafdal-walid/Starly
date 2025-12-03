import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TeamProgressCard, TopRightBar, AddMember, AddEvent, AddReport, AddVideo } from '../../../components';
import { useState } from 'react';

const attendanceData = [
  { name: 'Week 1', value: 85 },
  { name: 'Week 2', value: 65 },
  { name: 'Week 3', value: 90 },
  { name: 'Week 4', value: 45 },
];

const RightSideBar2 = ({
  accentColor = '#3B82F6', // أزرق
  teamProgressText = '3/4 Teams On Track • 1 Pending Submission',
  shieldCount = 5,
  fireCount = 5,
  bellCount = 5,
  addButtonLabel = 'Add Member',
  onAddMember,
}) => {
  const scale = 0.8; // تصغير عام لعناصر الـ sidebar بنسبة 20%
  const [showAddMember, setShowAddMember] = useState(false);

  const handleAddMember = (newMember) => {
    if (onAddMember) {
      onAddMember(newMember);
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: { lg: '20%', md: '20%', sm: 0, xs: 0 },
        height: '100vh',
        overflowY: 'auto',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
        padding: 2,
        zIndex: 1200,
        display: 'block',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: `${16 * scale}px`,
          px: 0.85,
          boxSizing: 'border-box',
        }}
      >
        {/* TopRightBar Component */}
        <Box sx={{ mt: 0, mb: 0, width: "100%" }}>
          <TopRightBar 
            userName="bouzaghti malak"
            rankPoints={shieldCount}
            streakCount={fireCount}
            notifications={bellCount}
          />
        </Box>

        {/* User Info Card */}
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
            border: 'none',
            backgroundColor: '#F3F4F6',
          }}
        >
          <CardContent sx={{ p: 2.5 * scale, '&:last-child': { pb: 2.5 * scale } }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: `${12 * scale}px` }}>
              <div style={{ position: 'relative' }}>
                <Avatar
                  sx={{ width: 56 * scale, height: 56 * scale, bgcolor: '#E5E7EB' }}
                >
                  <span style={{ fontSize: `${18 * scale}px`, color: '#6B7280' }}>BM</span>
                </Avatar>
                <div
                  style={{
                    position: 'absolute',
                    bottom: `${4 * scale}px`,
                    right: `${4 * scale}px`,
                    width: `${14 * scale}px`,
                    height: `${14 * scale}px`,
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    border: `${2 * scale}px solid white`,
                  }}
                />
              </div>
              <div style={{ flex: 1, paddingTop: `${8 * scale}px` }}>
                <div style={{ fontSize: `${16 * scale}px`, color: '#1F2937', marginBottom: `${2 * scale}px` }}>
                  Abderrhamane Ya
                </div>
                <div style={{ fontSize: `${13 * scale}px`, color: '#6B7280' }}>
                  @abderrahmaneyazl
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Teams Progress Card (shared component) */}
        <TeamProgressCard
          scale={scale}
          topText="Teams Progress"
          barColor={accentColor}
          bottomText={teamProgressText}
        />

        {/* Attendance Rate Card */}
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
            border: 'none',
          }}
        >
          <CardContent sx={{ p: 2.5 * scale, '&:last-child': { pb: 2.5 * scale } }}>
            <h3 style={{ marginBottom: `${16 * scale}px`, color: '#1F2937', fontSize: `${15 * scale}px` }}>
              Attendance Rate
            </h3>
            <div style={{ width: '100%', height: `${200 * scale}px`, minHeight: `${200 * scale}px` }}>
              <ResponsiveContainer width="100%" height="100%" minHeight={200 * scale}>
                <BarChart data={attendanceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10 * scale, fill: '#9CA3AF' }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10 * scale, fill: '#9CA3AF' }}
                    ticks={[0, 20, 40, 60, 80]}
                    domain={[0, 100]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Bar dataKey="value" fill={accentColor} radius={[4 * scale, 4 * scale, 0, 0]} barSize={40 * scale} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Add Event Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<AddIcon sx={{ fontSize: 18 * scale }} />}
          onClick={() => setShowAddMember(true)}
          sx={{
            border: 'none',
            borderBottom: `2px solid ${accentColor}`,
            color: accentColor,
            textTransform: 'none',
            borderRadius: '8px',
            py: 1.5 * scale,
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
            backgroundColor: 'white',
            '&:hover': {
              border: 'none',
              borderBottom: `2px solid ${accentColor}`,
              backgroundColor: accentColor === '#3B82F6' ? '#EFF6FF' : '#FFF7ED',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          {addButtonLabel}
        </Button>
      </Box>
      
      {/* Conditional Popup - Add Event, Add Report, Add Video, or Add Member */}
      {addButtonLabel === 'Add Event' ? (
        <AddEvent 
          open={showAddMember}
          onClose={() => setShowAddMember(false)}
          onAddEvent={handleAddMember}
        />
      ) : addButtonLabel === 'Add Report' ? (
        <AddReport 
          open={showAddMember}
          onClose={() => setShowAddMember(false)}
          onAddReport={handleAddMember}
        />
      ) : addButtonLabel === 'Add Video' ? (
        <AddVideo 
          open={showAddMember}
          onClose={() => setShowAddMember(false)}
          onAddVideo={handleAddMember}
        />
      ) : (
        <AddMember 
          open={showAddMember}
          onClose={() => setShowAddMember(false)}
          onAddMember={handleAddMember}
        />
      )}
    </Box>
  );
};

export default RightSideBar2;

