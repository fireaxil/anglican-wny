import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  barRoot: {
    height: 100,
    width: '100%',
    backgroundColor: theme.palette.secondary[500],
    display: 'flex',
    justifyContent: 'center'
  },
  buttonRoot: {
    alignSelf: 'center'
  },
  fbButton: {
    backgroundImage: 'url(../../images/fbLogoSmall.png)',
    backgroundPosition: 'center',
    alignSelf: 'center',
    backgroundRepeat: 'no-repeat'
  }
})

class BottomBar extends React.Component {
  constructor (props) {
    super(props)
    this.onAboutClick = this.onAboutClick.bind(this)
  }

  onGiveClick () {
    window.open('https://givingtools.com/atonement/prod&id=onetime%7B%7DSIIHEUT4UH%7B%7DGive-to-Church-of-the-Atonement.php', '_blank')
  }

  onFacebookClick () {
    window.open('https://www.facebook.com/AtonementBuffalo/', '_blank')
  }

  onAboutClick () {
    this.props.onAboutClick(null, 'about')
    window.scrollTo(0, 0)
  }

  onContactUsClick () {

  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.barRoot}>
        <Button className={classes.buttonRoot} color='contrast' onClick={this.onAboutClick}>
          About us
        </Button>
        <Button className={classes.buttonRoot} color='contrast' onClick={this.onGiveClick}>
          Give
        </Button>
        <Button className={classes.buttonRoot} color='contrast' target='_blank' href='mailto:info@atonementbuffalo.com'>
          Contact us
        </Button>
        <Button className={classes.fbButton} color='contrast' onClick={this.onFacebookClick} />
      </div>
    )
  }
}

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BottomBar)
