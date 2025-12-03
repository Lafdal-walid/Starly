import { Card, CardContent, Box, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NotificationsIcon from '@mui/icons-material/Notifications';

function UserStatsCard({ rankPoints, streakCount, notifications, userName = "bouzaghti malak" }) {
  return (
    <Card sx={{ width: '100%', boxShadow: 'none' }}>
      <CardContent sx={{ padding: '9px 0' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box
            sx={{
              ml: -1,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '12px',
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                bgcolor: '#d9d9d9',
                borderTop: '1px solid #262626',
                borderLeft: '1px solid #262626',
                borderRight: '1px solid #262626',
                borderBottom: '1.3px solid #262626',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '13px',
                color: '#262626',
                whiteSpace: 'nowrap',
              }}
            >
              {userName}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              padding: '1px 5px',
              borderRadius: '8px',
            }}
          >
            <EmojiEventsIcon
              sx={{
                width: 16,
                height: 16,
                color: '#8c4500',
              }}
            />
            <Typography
              sx={{
                fontSize: '13px',
                fontWeight: 500,
                lineHeight: '13px',
                color: '#8c4500',
              }}
            >
              {rankPoints}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              padding: '1px 5px',
              borderRadius: '8px',
            }}
          >
            <WhatshotIcon
              sx={{
                width: 16,
                height: 16,
                color: '#fb5130',
              }}
            />
            <Typography
              sx={{
                fontSize: '13px',
                fontWeight: 500,
                lineHeight: '13px',
                color: '#fb5130',
              }}
            >
              {streakCount}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              padding: '1px 5px',
              borderRadius: '8px',
            }}
          >
            <NotificationsIcon
              sx={{
                width: 16,
                height: 16,
                color: '#ffa600',
              }}
            />
            <Typography
              sx={{
                fontSize: '13px',
                fontWeight: 500,
                lineHeight: '13px',
                color: '#ffa600',
              }}
            >
              {notifications}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

const TopRightBar = ({ 
  userName = "bouzaghti malak", 
  rankPoints = 5, 
  streakCount = 5, 
  notifications = 5 
}) => {
  return (
    <UserStatsCard 
      userName={userName}
      rankPoints={rankPoints} 
      streakCount={streakCount} 
      notifications={notifications} 
    />
  );
};

export default TopRightBar;
