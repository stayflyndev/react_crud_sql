import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { css } from '@emotion/css'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { setDriver } from 'mongoose';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

 const SignIn = () => {
 //STATES
  const [user_input, setUserInput] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState(false)

  const navigate = useNavigate()
  //FORM HANDLING
  const handleChange = (e) => {
    setUserInput (prev => ({...prev, [e.target.name]: [e.target.value]}))
    console.log(user_input.password)
  }

  const handleSubmit = async e => {
    //submit data to server
    e.preventDefault()
   

    try {
      await axios.post(`http://localhost:5000/auth/login`, user_input)
      navigate("/home")
    } catch (error){
      console.log(error)
      setError(true)
    }
    console.log(error)
  }


  return (

   
      <Container component="main" maxWidth="xs" className={css`
      padding: 32px;
      background-color: #f0e6ef;
      font-size: 24px;
      border-radius: 4px;
    `}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          Login
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        Login
          </Avatar>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="default" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            {error && <p> {error}</p>}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
  
  );
}

export default SignIn