import React from 'react'
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    width: '100%'
  },
  flex: {
    flex: 1
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
        <AppBar>
          <ToolBar>
            <Typography type='title' className={classes.flex}>
              Church of Atonement
            </Typography>
            <Button color='contrast'> Home </Button>
            <Button color='contrast'> About Us </Button>
            <Button color='contrast'> Nickel City Forum </Button>
            <Button color='contrast'> Events </Button>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(TitleBar)
