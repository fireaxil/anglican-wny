import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: theme.textContent.root,
  text: theme.textContent.text,
  '@media (min-width: 948px)': {
    text: theme.textContent['@media (min-width: 948px)'].text
  },
  link: {
    textDecoration: 'none',
    color: '#f50057',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
})

class NickelCityForumText extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography className={classes.text}>
          The Nickel City Forum is a monthly drinks & discussion series, sponsored by
          Church of the Atonement. We rent space in a pub and have rational conversations about important issues in faith and life. This typically involves a talk given by an expert followed by a group Q&A.
          If you believe it’s important to have good conversations about hard issues, you’ll
          be at home in the Nickel City Forum.
          <br />
          <div style={{marginTop: 20}}>
            <a
              className={classes.link}
              target={'_blank'}
              href={'https://www.nickelcityforum.com/this-month/'}
            >
              Check out our next gathering
            </a>
          </div>
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(NickelCityForumText)
