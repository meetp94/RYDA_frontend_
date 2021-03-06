import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


import axios from 'axios';
// axios.default.baseURl = "http://157.230.174.240:3006/api";



const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class  Register extends Component { 


    constructor(props) {
     super(props)
         this.state= {
             nameRegister:"",
             emailRegister:" ",
             passwordRegister:"",
             ageRegister:"",
             eductionRegister:""
           
         }
    }
    
  handleRegister = () => {
      event.preventDefault();
      console.log("Register clicked");

       let body  = {
          name:this.state.nameRegister,
          email:this.state.emailRegister,
          password:this.state.passwordRegister,
          age:this.state.ageRegister,
          qualification:this.state.eductionRegister
       }
      console.log("registerData",body)
     
      axios.post(`http://157.230.174.240:3006/api/v1/user`,body)
      .then(function (response) {
        console.log("response",response);
     
        console.log("response .data.data ? resonse.config.data",response.config.data)
        this.setToken(response.config.token)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    setToken(token) {
      localStorage.setItem("Usertoken",token);
    }
//   handleRadioButton = value => {
//       console.log(value);
//       console.log("radio button clicked")
//       this.setState({role: value});
//       console.log("role value",this.state.role)
//   }

 handleChangeInputText = () => {
     console.log(event.target.name);
    this.setState({
        [event.target.name] : event.target.value
    })
 }
 


  render() {

    const { classes } = this.props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Student Register
        </Typography>
        <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" name="nameRegister" autoComplete="name" autoFocus onChange={this.handleChangeInputText} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="emailRegister" autoComplete="email" autoFocus onChange={this.handleChangeInputText} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="passwordRegister" type="password" id="password" autoComplete="current-password" onChange={this.handleChangeInputText} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="age">Age</InputLabel>
            <Input name="ageRegister" type="number" id="age" autoComplete="current-password" onChange={this.handleChangeInputText} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="eduction"> Higher Eduction</InputLabel>
            <Input name="eductionRegister" type="text" id="eduction" autoComplete="current-password" onChange={this.handleChangeInputText} />
          </FormControl>
          
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleRegister}
          >
            Register
          </Button>
        </form>
      </Paper>
    </main>
  );
  }
}

// Register.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Register);