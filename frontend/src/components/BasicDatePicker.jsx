import { React, useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BasicDatePicker({ value, onChange }) {
  // You can use the 'value' prop directly in the state
  const [date, setDate] = useState(value); // Initialize with the provided 'value' or the current date

  // Handle changes and update the state and the parent component's value
  const handleDateChange = (newValue) => {
    setDate(newValue); // Update the local state
    onChange(newValue); // Call the provided 'onChange' callback with the new value
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        {/* Use 'date' as the value and 'handleDateChange' as the onChange handler */}
        <DatePicker label="Pick date" value={date} onChange={handleDateChange} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
