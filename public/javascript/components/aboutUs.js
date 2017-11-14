import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    paddingTop: 40,
    width: '70%',
    paddingRight: 20,
    paddingLeft: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    fontWeight: 300
  }
})

class AboutUs extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography className={classes.text} type='body1'>
          We walk in the way of Jesus because we need something new. Our culture, our media, our internet all feed us many new things, but none renews our minds like Jesus does.
          When a seed falls into the ground, it dies in a sense, but then it sprouts to a totally new life. When Jesus renews our minds, he begins a new (and sometimes hard) process of planting a whole new garden in the world. We are here to support each other as God works in us, and to taste the good fruit of the kingdom of God as he grows it in our lives, neighborhoods, and families.
          The particular way we do this comes from a pattern called the Anglican tradition.
        </Typography>
      </div>
    )
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutUs)
