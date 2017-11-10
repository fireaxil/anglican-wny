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
        <AppBar color='default'>
          <ToolBar>
            <Typography type='title' className={classes.flex}>
              Church of Atonement
            </Typography>
            <Button color='accent'> Home </Button>
            <Button color='accent'> About Us </Button>
            <Button color='accent'> Nickel City Forum </Button>
            <Button color='accent'> Events </Button>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(TitleBar)
