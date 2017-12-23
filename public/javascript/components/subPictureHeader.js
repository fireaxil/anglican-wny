import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

const styles = theme => ({
  root: theme.textContent.root,
  text: theme.textContent.text,
  centerText: theme.textContent.centerText,
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
        <Typography className={classes.centerText} type='display1'>
          We form Anglican churches that are <i> both </i> <br />
          evangelical and catholic <br />
          liturgical and missional <br />
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.centerText} type='display2'>
          Service Time
        </Typography>
        <Typography className={classes.centerText} type='body1'>
          Sundays at 5:00PM followed by a meal <br />
          Location: 1 Symphony Circle
        </Typography>
        <Divider className={classes.divider} />
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
