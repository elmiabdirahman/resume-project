// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';

// const Nav = (props) => (
//   <div className="nav">
//     <Link to="/home">
//       <h2 className="nav-title">ELMI</h2>
//     </Link>
//     <div className="nav-right">
//       <Link className="nav-link" to="/home">
//         {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//         {/* {props.user.id ? 'Home' : 'Login / Register'} */}
//       </Link>
//       {/* Show the link to the info page and the logout button if the user is logged in */}
//       {props.user.id && (
//         <>
//           <Link className="nav-link" to="/secrets">
//             Secrets Page
//           </Link>
//           <LogOutButton className="nav-link"/>
//         </>
//       )}
//       {/* Always show this link since the about page is not protected */}
//       <Link className="nav-link" to="/homepage">
//       homepage
//       </Link>
//       <Link className="nav-link" to="/about">
//         About
//       </Link>
      
//       <Link className="nav-link" to="/skills">
//       Resume
//       </Link>
//     </div>
//   </div>
// );

// // Instead of taking everything from state, we just want the user
// // object to determine if they are logged in
// // if they are logged in, we show them a few more links 
// // if you wanted you could write this code like this:
// // const mapStateToProps = ({ user }) => ({ user });
// const mapStateToProps = state => ({
//   user: state.user,
// });

// export default connect(mapStateToProps)(Nav);




import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Material UI stuff
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles =  {
  buttonLeft: {
    float: 'left'
  },
  buttonRight: {
    marginTop: '50px'
  },
  buttonStyling: {
    textDecoration: 'none',
    color: 'white'
  }
};

class Nav extends Component {
  render(){

    const { classes } = this.props;

    return(

      <AppBar style={{backgroundColor: '#542B18'}}>
        <Grid container spacing={4}>
          <Grid item className={classes.buttonLeft} sm={4}>
            <div style={{width: 300}}>
              {/* <Button>
                <Link to="/home" className={classes.buttonStyling}>
                <img src={logo} alt="100 Holes For Hope" width='200px' height='75px' />
                </Link>
              </Button> */}
            </div>
          </Grid>
          <Grid item className={classes.buttonRight} sm={8}>
            <span>
            <Button>
            <Link className="nav-link" to="/homepage" className={classes.buttonStyling}>
              homepage
            </Link>
            </Button>
            <Button>
            <Link className="nav-link" to="/about" className={classes.buttonStyling}>
              About
            </Link>
            </Button>
            <Button>
            <Link className="nav-link" to="/skills" className={classes.buttonStyling}>
              Resume
            </Link>
            </Button>
            <Button>
            <Link className="nav-link" to="/photos" className={classes.buttonStyling}>
              Photos
            </Link>
            </Button>
            <Button>
            <Link className="nav-link" to="/contact" className={classes.buttonStyling}>
              Email
            </Link>
            </Button>
            </span>
          </Grid>
        </Grid>
      </AppBar>
    )
  }
  
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Nav));
