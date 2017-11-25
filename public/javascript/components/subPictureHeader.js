import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

const styles = theme => ({
  root: {
    textAlign: 'center',
    marginTop: 20
  },
  text: {
    fontWeight: 300
  },
  divider: {
    marginTop: 30,
    width: '85%'
  },
  dividerMargin: {
    marginTop: 30
  },
  giving: {
    marginTop: 100,
    paddingBottom: 20
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
        <Typography className={classes.text} type='display1'>
          We form churches that are both <br />
          evangelical and catholic <br />
          liturgical and missional <br />
        </Typography>
        <Divider inset className={classes.divider} />
        <div className={classes.dividerMargin}>
          <Typography className={classes.text} type='display2'>
            Service Time
          </Typography>
          <br />
          <Typography className={classes.text} type='body2'>
            Sundays at 5:00PM followed by a meal, starting December 3rd <br />
            Location: 1 Symphony Circle
          </Typography>
          <Divider inset className={classes.divider} />
        </div>
      </div>
    )
  }
}

/*
<div className={classes.giving}>
            <Typography className={classes.text} type='display2'>
              Give
            </Typography>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="K7CYXXRGURU2J" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
 */

SubPictureHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SubPictureHeader)
