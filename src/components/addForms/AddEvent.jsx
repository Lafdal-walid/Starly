import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  TextField,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const AddEvent = ({ open, onClose, onAddEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    date: '',
    location: '',
    attendees: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.type && formData.date) {
      onAddEvent({
        eventName: formData.name,
        eventType: formData.type,
        date: formData.date,
        location: formData.location,
        attendees: formData.attendees
      });
      setFormData({
        name: '',
        type: '',
        date: '',
        location: '',
        attendees: '',
      });
      onClose();
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      type: '',
      date: '',
      location: '',
      attendees: '',
    });
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
        }
      }}
    >
      <DialogTitle 
        sx={{ 
          p: 3,
          backgroundColor: '#fff6ee',
          color: '#1F2937',
          fontWeight: 'bold',
          borderBottom: '2px solid #F97316'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EventIcon sx={{ color: '#F97316' }} />
          Add New Event
        </Box>
      </DialogTitle>
      
      <DialogContent sx={{ p: 3, backgroundColor: '#ffffff', mt: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField
            name="name"
            label="Event Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#F97316',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F97316',
                },
              },
            }}
          />
          
          <TextField
            name="type"
            label="Event Type"
            value={formData.type}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#F97316',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F97316',
                },
              },
            }}
          />
          
          <TextField
            name="date"
            label="Event Date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#F97316',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F97316',
                },
              },
            }}
          />
          
          <TextField
            name="location"
            label="Location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#F97316',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F97316',
                },
              },
            }}
          />
          
          <TextField
            name="attendees"
            label="Expected Attendees"
            type="number"
            value={formData.attendees}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#F97316',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F97316',
                },
              },
            }}
          />
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ p: 3, backgroundColor: '#ffffff' }}>
        <Button 
          onClick={handleClose}
          variant="outlined"
          sx={{
            borderColor: '#E5E7EB',
            color: '#6B7280',
            textTransform: 'none',
            '&:hover': {
              borderColor: '#D1D5DB',
              backgroundColor: '#F9FAFB',
            },
          }}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit}
          variant="contained"
          sx={{
            backgroundColor: '#F97316',
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#EA580C',
            },
          }}
        >
          Add Event
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEvent;
