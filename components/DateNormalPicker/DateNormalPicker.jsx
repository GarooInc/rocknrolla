import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

export default function DateNormalPicker({ value, onChange, label = "Date" }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        slotProps={{
          textField: {
            variant: 'outlined',
            fullWidth: true,
            InputProps: {
                disableUnderline: true,
              sx: {
                backgroundColor: '#e5e7eb',
                borderRadius: '1rem',        
                border: 'none',
                outline: 'none',
                paddingBottom: '0',
                paddingTop: '0',
                fontSize: '12px',
              },
            },
            InputLabelProps: {
              sx: {
                color: 'black',
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}