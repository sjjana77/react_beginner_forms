import React from 'react';
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const SignupForm1 = () => {
    return (
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              gender: '',
              city: '',
            }}
            validate={(values) => {
              const errors = {};
  
              if (!values.name) {
                errors.name = 'Required';
              }
  
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
  
              if (!values.password) {
                errors.password = 'Required';
              } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(values.password)) {
                errors.password = 'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long';
              }
  
              if (!values.gender) {
                errors.gender = 'Required';
              }
  
              if (!values.city) {
                errors.city = 'Required';
              }
  
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <Field name="name">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    fullWidth
                    margin="normal"
                  />
                )}
              </Field>
              <ErrorMessage name="name" component="div" />
  
              <Field name="email">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                  />
                )}
              </Field>
              <ErrorMessage name="email" component="div" />
  
              <Field name="password">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                  />
                )}
              </Field>
              <ErrorMessage name="password" component="div" />
  
              <Field name="gender">
                {({ field }) => (
                  <FormControl fullWidth component="fieldset" margin="normal">
                    <RadioGroup {...field} row>
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name="gender" component="div" />
  
              <Field name="city">
                {({ field }) => (
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="city-label">City</InputLabel>
                    <Select
                      {...field}
                      labelId="city-label"
                      id="city"
                      fullWidth
                    >
                      <MenuItem value="New York">New York</MenuItem>
                      <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                      <MenuItem value="Chicago">Chicago</MenuItem>
                      <MenuItem value="Houston">Houston</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                )}
              </Field>
  
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    );
  };
  

export default SignupForm1;
