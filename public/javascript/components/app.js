import React from 'react'
import TitleBar from './titlebar'
import Pictures from './pictures'
import SubPictureHeader from './subPictureHeader'
import red from 'material-ui/colors/red'
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import AboutUs from './aboutUs'
import BottomBar from './bottomBar'
// import 'typeface-roboto'
import vigilFront from '../../images/mainNew.jpg'
import aboutUs from '../../images/aboutUs.jpg'
import NickelCityForum from './nickelCityForum'

// have to give an array of primary colors

// TODO nickel city tab with about nickel city forum and link to the nickel city website
// contact us form info@attonementchurch.com
// links to FB page
// village church picture

const theme = createMuiTheme({
  palette: {
  //   primary: 'white',
    secondary: red
    // secondary: {
    //   ...yellow,
    //   A800: '#C62828'
    // }
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.87)'
      }
    },
    MuiButton: {
      root: {
        fontWeight: 300
      }
    },
    MuiTab: {
      root: {
        fontWeight: 400
      }
    }
  },
  'a': {
    textDecoration: 'none'
  },
  textContent: {
    root: {
      paddingTop: 40,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingRight: 20,
      paddingLeft: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    '@media (min-width: 948px)': {
      text: {
        paddingLeft: '20%',
        paddingRight: '20%'
      }
    },
    text: {
      fontWeight: 300,
      lineHeight: '1.6em',
      paddingLeft: 24,
      paddingRight: 24,
      textAlign: 'center'
    },
    centerText: {
      width: '100%',
      textAlign: 'center',
      fontWeight: 300,
      lineHeight: '1.6em'
    },
    divider: {
      marginTop: 30,
      width: '68%'
    }
  },
  // '@media (min-width: 948px)': {
  //   text: {
  //     paddingLeft: '20%',
  //     paddingRight: '20%'
  //   }
  // },
  // text: {
  //   fontWeight: 300,
  //   lineHeight: '1.6em',
  //   paddingLeft: 24,
  //   paddingRight: 24
  // },
  divider: {
    marginTop: 30,
    width: '68%'
  }
})

console.log(theme)

const styles = theme => ({
  paddingBottom: {
    paddingBottom: 100
  }
})

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTab: 'home'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, currentTab) {
    this.setState({currentTab})
  }

  render () {
    const { classes } = this.props
    const { currentTab } = this.state
    return (
      <MuiThemeProvider theme={theme}>
        <TitleBar currentTab={this.state.currentTab} handleChange={this.handleChange} />
        { currentTab === 'home' &&
          <div className={classes.paddingBottom}>
            <Pictures
              backgroundImage={'url(.' + vigilFront + ')'}
              titleText={<div> At one with God. <br /> At one with each other. </div>}
            />
            <SubPictureHeader />
          </div>
        }
        {
          currentTab === 'about' &&
            <div className={classes.paddingBottom}>
              <Pictures
                backgroundImage={'url(.' + aboutUs + ')'}
                titleText={'About Us'}
              />
              <AboutUs />
            </div>
        }
        {
          currentTab === 'nickel' &&
            <div className={classes.paddingBottom}>
              <NickelCityForum />
            </div>
        }
        <BottomBar onAboutClick={this.handleChange} />
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
