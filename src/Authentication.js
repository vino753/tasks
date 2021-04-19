import React, { useState,useEffect,useContext, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import {Container, CssBaseline, Avatar, Typography, FormControlLabel, Button,Checkbox, Grid, Link, makeStyles, Card, CardContent} from '@material-ui/core';
import './index.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from '@material-ui/core/Input';
import {LockRounded} from '@material-ui/icons';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {ToastContainer, toast} from 'react-toastify';
import {ScaleLoader} from 'react-spinners';
import firebase from './config/firebase';
import {
    fade,
    ThemeProvider,
    withStyles,
    createMuiTheme,
} from '@material-ui/core';
  import { green } from '@material-ui/core/colors';
  import{useFormik} from 'formik';
  import * as yup from 'yup';
  import Table1 from './Table';
  import { withRouter } from 'react-router';
 
 
  function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      
      const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 7,
          backgroundColor: theme.palette.background.paper,
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
          },
          form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
          },
          submit: {
            margin: theme.spacing(3, 0, 2),
          },
      }));
      
      

      
      export default function SimpleTabs(){
          
              const classes = useStyles();
              const [value, setValue] = React.useState(0);
            
              const handleChange = (event, newValue) => {
                setValue(newValue);
              };
            let history = useHistory(this);
            const formik = useFormik({
                initialValues : {
                  email:'',
                  password:'',
                  firstName:'',
                  lastName:'',
                  phonenumber:'',
                  confirmpassword:''

                },
                validationSchema:yup.object({
                 email:yup.string()
               .email('Invalid email').required('Required'),
                firstName: yup.string()
               .min(2, 'Too Short!')
               .max(50, 'Too Long!')
               .required('Required'),
               lastName: yup.string()
               .min(2, 'Too Short!')
               .max(50, 'Too Long!')
               .required('Required'),
               phonenumber: yup.string()
               .min(10, 'Too Short!')
               .required('Required'),
               password: yup.string().required("This field is required"),
               confirmpassword: yup.string().when("password", {
               is: val => (val && val.length > 0 ? true : false),
               then: yup.string().oneOf(
               [yup.ref("password")],
               "Both password need to be the same"
                 )
                 .required('Required'),
                 })

                }),
               })

              const {handleSubmit,isSubmitting,err,fields} = e => {
              alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
               };  


               const Login = () =>
               {
                const [loading,setLoading] = useState(false)
                const [error,setError] = useState('')
                 const history = useHistory()
             
                 const handleSubmit = (data:any) =>{
                     
                     setLoading(true)
                     firebase.auth().signInWithEmailAndPassword(data.email,data.password)
                     .then((u)=>{
                         setLoading(false)
                        history.push('/home')
                        
                         
                     }).catch((err)=>{
                         setLoading(false)
                        console.log(err.message)
                        setError(err.message)
                     })
                 }
               }
              
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '', height: '100vh'}}>
        <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Sign In" {...a11yProps(0)} />
          <Tab label="Sign UP" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
    <section id="signInsection">
      <TabPanel value={value} index={0}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
              
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange = {formik.handleChange}
                values = {formik.values.email}
                autoComplete="off"
              />
              {formik.errors.email ?<div className="text-danger">{formik.errors.email}</div>
            :null  
            }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                
                autoComplete="current-password"
                onChange = {formik.handleChange}
                values = {formik.values.password}
              />
              {formik.errors.password ?<div className="text-danger">{formik.errors.password}</div>
            :null  
            }
            </Grid>
            <Grid item xs={8}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember Me"
              />
            </Grid>; ; 
          </Grid>
          
          <Button onSubmit={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            id="signIn"
          >
           Sign In
          </Button>
          
        
        <Grid container justify="flex-end">
            <Grid item>
              
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
        
  </TabPanel>
      <TabPanel value={value} index={1}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                
                fullWidth
                id="firstName"
                label="First Name"
                onChange = {formik.handleChange}
                values = {formik.values.firstName}
                autoFocus
                
              />
              {formik.errors.firstName ?<div className="text-danger">{formik.errors.firstName}</div>
            :null  
            }
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange = {formik.handleChange}
                values = {formik.values.lastName}
                autoComplete="lname"
              />
               {formik.errors.lastName ?<div className="text-danger">{formik.errors.lastName}</div>
            :null 
      }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="phonenumber"
                label="Phone Number"
                type="number"
                id="number"
                autoComplete="off"
                onChange = {formik.handleChange}
                values = {formik.values.phonenumber}
              />
              {formik.errors.phonenumber ?<div className="text-danger">{formik.errors.phonenumber}</div>
            :null  
            }
            
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange = {formik.handleChange}
                values = {formik.values.email}
                autoComplete="off"
              />
              {formik.errors.email ?<div className="text-danger">{formik.errors.email}</div>
            :null  
            }
            
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
              
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                 onChange = {formik.handleChange}
                values = {formik.values.password}
               
              />
              {formik.errors.password ?<div className="danger">{formik.errors.password}</div>
            :null  
            }
            
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                 onChange = {formik.handleChange}
                values = {formik.values.confirmpassword}
                autoComplete="off"
              />
              {formik.errors.confirmpassword ?<div className="text-danger">{formik.errors.confirmpassword}</div>
              
            :null  
            }
            
              </Grid>
              
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember Me"
              />
            </Grid>
          </Grid>
         
          <Button
            onSubmit={handleSubmit} 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.form}
            id="btnCreate"
            
          >
          {isSubmitting ? 'Loading' : 'Sign Up'}
            
        </Button>
    <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
            </Grid>
        </form>
      </div>
      
    </Container>
    
</TabPanel>
<p id="message" hidden></p>
</section>
<section id="signOutsection" hidden>
    <button type="button" id="btn_signout">signout</button>
</section>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
      </Typography>
      </Container>
    </React.Fragment>
    
  );
}
      
      









