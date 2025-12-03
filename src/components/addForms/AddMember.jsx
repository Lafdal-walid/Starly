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
import AddIcon from '@mui/icons-material/Add';

const AddMember = ({ open, onClose, onAddMember }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    level: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Add the new member
    onAddMember({
      id: Date.now(), // Simple ID generation
      member: formData.name,
      role: formData.role,
      level: formData.level,
      lastActive: 'Just now',
    });
    
    // Reset form
    setFormData({
      name: '',
      role: '',
      level: '',
      email: '',
    });
    
    // Close dialog
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
          backgroundColor: '#ffffff',
        }
      }}
    >
      <DialogTitle sx={{ 
        pb: 2, 
        borderBottom: '2px solid #3B82F6',
        backgroundColor: '#F3F4F6',
        color: '#1F2937',
        fontWeight: 'bold'
        
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AddIcon sx={{ color: '#3B82F6' }} />
          Add New Member
        </Box>
      </DialogTitle>
      
      <DialogContent sx={{ p: 3, backgroundColor: '#ffffff' ,mt:3}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField
            name="name"
            label="Member Name"
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
                  borderColor: '#3B82F6',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3B82F6',
                },
              },
            }}
          />
          
          <TextField
            name="role"
            label="Role"
            value={formData.role}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#3B82F6',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3B82F6',
                },
              },
            }}
          />
          
          <TextField
            name="level"
            label="Level"
            value={formData.level}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#3B82F6',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3B82F6',
                },
              },
            }}
          />
          
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            type="email"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#3B82F6',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3B82F6',
                },
              },
            }}
          />
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ 
        p: 3, 
        backgroundColor: '#F3F4F6',
        borderTop: '1px solid #E5E7EB'
      }}>
        <Button 
          onClick={onClose}
          sx={{
            color: '#6B7280',
            borderColor: '#E5E7EB',
            '&:hover': {
              borderColor: '#9CA3AF',
              backgroundColor: '#F9FAFB',
            },
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit}
          variant="contained"
          sx={{
            backgroundColor: '#3B82F6',
            color: 'white',
            '&:hover': {
              backgroundColor: '#2563EB',
            },
          }}
        >
          Add Member
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMember;
