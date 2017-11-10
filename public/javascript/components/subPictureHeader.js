import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    textAlign: 'center'
  }
})

class SubPictureHeader extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Typography type='display3'>
          We form churches that are both <br />
          evangelical and catholic <br />
          liturgical and missional <br />
        </Typography>
      </div>
    )
  }
}

SubPictureHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SubPictureHeader)
