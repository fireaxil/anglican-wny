import React from 'react'
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Tabs, { Tab } from 'material-ui/Tabs'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    width: '100%'
  },
  flex: {
    flex: 1,
    fontWeight: 300
  }
})

class TitleBar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <AppBar color='default'>
          <ToolBar>
            <Typography type='title' className={classes.flex}>
              Church of Atonement
            </Typography>
            <Tabs textColor='accent' value={this.props.currentTab} onChange={this.props.handleChange}>
              <Tab color='accent' value='home' label='Home' />
              <Tab color='accent' value='about' label='About' />
              <Tab color='accent' value='nickel' label='Nickel City Forum' />
            </Tabs>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(TitleBar)
