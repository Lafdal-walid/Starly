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
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const AddVideo = ({ open, onClose, onAddVideo }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    duration: '',
    category: '',
    uploadDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.title && formData.type && formData.duration) {
      onAddVideo({
        title: formData.title,
        type: formData.type,
        duration: formData.duration,
        category: formData.category,
        uploadDate: formData.uploadDate
      });
      setFormData({
        title: '',
        type: '',
        duration: '',
        category: '',
        uploadDate: '',
      });
      onClose();
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      type: '',
      duration: '',
      category: '',
      uploadDate: '',
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
          backgroundColor: '#faf6ff',
          color: '#1F2937',
          fontWeight: 'bold',
          borderBottom: '2px solid #D3C2FF'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <VideoLibraryIcon sx={{ color: '#D3C2FF' }} />
          Add New Video
        </Box>
      </DialogTitle>
      
      <DialogContent sx={{ p: 3, backgroundColor: '#ffffff', mt: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField
            name="title"
            label="Video Title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#D3C2FF',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#D3C2FF',
                },
              },
            }}
          />
          
          <TextField
            name="type"
            label="Video Type"
            value={formData.type}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            placeholder="e.g., Tutorial, Lecture, Presentation"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#D3C2FF',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#D3C2FF',
                },
              },
            }}
          />
          
          <TextField
            name="duration"
            label="Duration"
            value={formData.duration}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            placeholder="e.g., 15:30, 1:20:00"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#D3C2FF',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#D3C2FF',
                },
              },
            }}
          />
          
          <TextField
            name="category"
            label="Category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            placeholder="e.g., Education, Training, Marketing"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#D3C2FF',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#D3C2FF',
                },
              },
            }}
          />
          
          <TextField
            name="uploadDate"
            label="Upload Date"
            type="date"
            value={formData.uploadDate}
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
                  borderColor: '#D3C2FF',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#D3C2FF',
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
            backgroundColor: '#D3C2FF',
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#C0A8FF',
            },
          }}
        >
          Add Video
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddVideo;
