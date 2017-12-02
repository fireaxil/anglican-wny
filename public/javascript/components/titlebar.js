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
    flexGrow: '1',
    width: '100%'
  },
  '@media (min-width: 600px)': {
    titleText: {
      flex: 1,
      textAlign: 'start !important',
      paddingTop: '0 !important'
    },
    tabsRoot: {
      width: 'auto !important'
    }
  },
  titleText: {
    width: '100%',
    paddingTop: 10,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.60)',
    fontWeight: 500
  },
  toolbarRoot: {
    flexWrap: 'wrap'
  },
  tabsRoot: {
    width: '100%'
  }
})
// make title larger across the titlebar
class TitleBar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <AppBar color='default'>
          <ToolBar className={classes.toolbarRoot}>
            <Typography type='title' className={classes.titleText}>
              Church of the Atonement
            </Typography>
            <Tabs // tabs on bottom for mobile with the title on top?
              className={classes.tabsRoot}
              textColor='accent'
              value={this.props.currentTab}
              onChange={this.props.handleChange}
              scrollable
              scrollButtons='off'
              fullWidth
            >
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
