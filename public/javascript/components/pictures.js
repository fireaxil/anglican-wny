import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  picture: {
    width: '100%',
    minHeight: 400,
    height: 0.6 * window.innerHeight,
    backgroundImage: 'url(../../images/nickelcityrace.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  subheading: {
    textAlign: 'center',
    paddingTop: 30
  },
  subheadingText: {
    color: 'white',
    fontSize: 28
  }
})

class Pictures extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const classes = this.props.classes
    return (
      <div className={classes.picture}>
        <div className={classes.subheading}>
          <Typography className={classes.subheadingText} color='inherit' type='title'>
            At one with God, At one with each other.
          </Typography>
        </div>
      </div>
    )
  }
}

Pictures.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Pictures)
