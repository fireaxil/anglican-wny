import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  pictureRoot: {
    position: 'relative'
  },
  picture: {
    width: '100%',
    minHeight: 400,
    height: 0.7 * window.innerHeight,
    backgroundImage: 'url(../../images/vigilfront.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  subheading: {
    textAlign: 'center',
    paddingTop: 30
  },
  subheadingText: {
    color: 'white',
    fontSize: 28,
    zIndex: 100
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(32,26,22,.7)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99
  }
})

class Pictures extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const classes = this.props.classes
    return (
      <div className={classes.pictureRoot}>
        <div className={classes.picture}>
          <div className={classes.subheading}>
            <Typography className={classes.subheadingText} color='inherit' type='title'>
              At one with God, <br /> At one with each other.
            </Typography>
          </div>
        </div>
        <div className={classes.overlay}></div>
      </div>
    )
  }
}

Pictures.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Pictures)
