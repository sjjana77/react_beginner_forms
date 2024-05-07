import React, { useState } from 'react';
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    city: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter, one uppercase letter, one special character, and be at least 8 characters long';
    }
    if (!formData.gender.trim()) {
      newErrors.gender = 'Gender is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    setErrors(newErrors);

    // If there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            error={!!errors.password}
            helperText={errors.password}
            margin="normal"
          />
          <FormControl fullWidth error={!!errors.gender} component="fieldset" margin="normal">
            <RadioGroup aria-label="gender" name="gender" value={formData.gender} onChange={handleChange} row>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth error={!!errors.city} margin="normal">
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="Los Angeles">Los Angeles</MenuItem>
              <MenuItem value="Chicago">Chicago</MenuItem>
              <MenuItem value="Houston">Houston</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            {errors.city && <FormHelperText>{errors.city}</FormHelperText>}
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignupForm;
