import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  pictureRoot: {
    textAlign: 'center'
  },
  picture: {
    width: '100%',
    minHeight: '60vh',
    backgroundImage: 'url(../../images/vigilfront.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  // subheading: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   height: '100%'
  // },
  subheading: {
    height: '100%',
    padding: '12% 5%'
  },
  subheadingText: {
    color: 'white',
    fontWeight: 100
  },
  overlay: {
    backgroundColor: 'rgba(32,26,22,.7)',
    minHeight: '60vh'
    // padding: '12% 5%',
    // height: 0.7 * window.innerHeight,
    // width: '100%'
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
          <div className={classes.overlay}>
            <div className={classes.subheading}>
              <Typography className={classes.subheadingText} type='display2'>
                At one with God. <br /> At one with each other.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Pictures.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Pictures)
