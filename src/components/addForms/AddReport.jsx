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
import AssessmentIcon from '@mui/icons-material/Assessment';

const AddReport = ({ open, onClose, onAddReport }) => {
  const [formData, setFormData] = useState({
    title: '',
    submittedBy: '',
    date: '',
    status: 'pending',
    report: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.title && formData.submittedBy && formData.date) {
      onAddReport({
        title: formData.title,
        submittedBy: formData.submittedBy,
        date: formData.date,
        status: formData.status,
        report: formData.report
      });
      setFormData({
        title: '',
        submittedBy: '',
        date: '',
        status: 'pending',
        report: '',
      });
      onClose();
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      submittedBy: '',
      date: '',
      status: 'pending',
      report: '',
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
          backgroundColor: '#ffedee',
          color: '#1F2937',
          fontWeight: 'bold',
          borderBottom: '2px solid #FFA9AB'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AssessmentIcon sx={{ color: '#FFA9AB' }} />
          Add New Report
        </Box>
      </DialogTitle>
      
      <DialogContent sx={{ p: 3, backgroundColor: '#ffffff', mt: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField
            name="title"
            label="Report Title"
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
                  borderColor: '#FFA9AB',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFA9AB',
                },
              },
            }}
          />
          
          <TextField
            name="submittedBy"
            label="Submitted By"
            value={formData.submittedBy}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#FFA9AB',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFA9AB',
                },
              },
            }}
          />
          
          <TextField
            name="date"
            label="Submission Date"
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
                  borderColor: '#FFA9AB',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFA9AB',
                },
              },
            }}
          />
          
          <TextField
            name="status"
            label="Status"
            select
            value={formData.status}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            SelectProps={{
              native: true,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#FFA9AB',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFA9AB',
                },
              },
            }}
          >
            <option value="pending">Pending</option>
            <option value="submitted">Submitted</option>
            <option value="late">Late</option>
          </TextField>
          
          <TextField
            name="report"
            label="Report File Name"
            value={formData.report}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            placeholder="e.g., Report.Pdf"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '&:hover fieldset': {
                  borderColor: '#FFA9AB',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFA9AB',
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
            backgroundColor: '#FFA9AB',
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#FF8A8D',
            },
          }}
        >
          Add Report
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddReport;
