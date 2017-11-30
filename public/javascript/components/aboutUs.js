import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

const styles = theme => ({
  root: {
    paddingTop: 40,
    // width: 'calc(100% - 455px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    fontWeight: 300,
    lineHeight: '1.6em',
    paddingLeft: 24,
    paddingRight: 24
  },
  '@media (min-width: 948px)': {
    text: {
      paddingLeft: '20%',
      paddingRight: '20%'
    }
  },
  '@media (min-width: 600px)': {
    text: {
      paddingLeft: '20%',
      paddingRight: '20%'
    }
  },
  divider: {
    marginTop: 30,
    width: '68%'
  },
  dividerMargin: {
    marginTop: 30,
    marginBottom: 30
  },
  centerText: {
    fontWeight: 300,
    lineHeight: '1.6em'
  }
})

class AboutUs extends React.Component {
  render () {
    const { classes } = this.props
    // const textClassName = classes.text + ' ' + classes.textMobile
    return (
      <div className={classes.root}>
        <Typography className={classes.centerText} type='display2'>
          Who We Are
        </Typography>
        <br />
        <Typography className={classes.text} type='body1'>
          We walk in the way of Jesus because we need something new. Our culture, our media, our internet all feed us many new things, but none renews our minds like Jesus does.
          When a seed falls into the ground, it dies in a sense, but then it sprouts to a totally new life. When Jesus renews our minds, he begins a new (and sometimes hard) process of planting a whole new garden in the world. We are here to support each other as God works in us, and to taste the good fruit of the kingdom of God as he grows it in our lives, neighborhoods, and families.
          The particular way we do this comes from a pattern called the Anglican tradition.
        </Typography>
        <div style={{width: '100%', display: 'flex', justifyContent:'center'}}>
          <Divider className={classes.divider} />
        </div>
        <Typography className={classes.centerText} type='display2'>
          What We Seek
        </Typography>
        <Typography className={classes.text} type='body1'>
          We are building a community around Jesus Christ. We are nourished by his Spirit and the sacraments of his church. His purposes to transform the world have become our purposes, his wounds have become the source of our healing, and his kingdom is turning our world upside down.
          Our roots extend, on the one side, through the sacraments, the liturgy, and the accumulated wisdom of God's people. On the other side, our roots also reach out through the heartfelt sense of mission and personal renewal that have energized many through God's Spirit. With such a healthy foundation, this is one strong plant.
        </Typography>
      </div>
    )
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutUs)
