import React from 'react'
import TitleBar from './titlebar'
import Pictures from './pictures'
import SubPictureHeader from './subPictureHeader'
import blue from 'material-ui/colors/blue'
import red from 'material-ui/colors/red'
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import AboutUs from './aboutUs'
import BottomBar from './bottomBar'
// import 'typeface-roboto'

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
  }
})

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
    if (currentTab === 'home' || currentTab === 'about') {
      this.setState({currentTab})
    } else if (currentTab === 'nickel') {
      window.open('https://www.anglicanwny.com/nickel-city-forum/', '_blank')
    }
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
              backgroundImage='url(../../images/vigilfront.png)'
              titleText={<div> At one with God. <br /> At one with each other. </div>}
            />
            <SubPictureHeader />
          </div>
        }
        {
          currentTab === 'about' &&
            <div className={classes.paddingBottom}>
              <Pictures
                backgroundImage='url(../../images/aboutUs.png)'
                titleText={'About Us'}
              />
              <AboutUs />
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
