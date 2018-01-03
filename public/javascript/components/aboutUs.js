import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

const styles = theme => ({
  root: {
    paddingTop: 40,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paragraphs: {
    marginBottom: 20
  },
  text: {
    fontWeight: 300,
    lineHeight: '1.6em',
    paddingLeft: 24,
    paddingRight: 24,
    textAlign: 'center'
  },
  '@media (min-width: 948px)': {
    text: {
      paddingLeft: '19%',
      paddingRight: '19%'
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
          <div className={classes.paragraphs}>
            <i>"Be transformed by the renewing of your mind.”</i> <br />
            — St. Paul, Letter to the Romans <br />
          </div>
          <div className={classes.paragraphs}>
            We walk in the way of Jesus because we need something new.
            Our culture, our media, our internet all feed us many new things, but none renews our
            minds like Jesus does. <br />
          </div>
          <div className={classes.paragraphs}>
            When a seed falls into the ground, it dies in a sense,
            but then it sprouts to a totally new life.
            When Jesus renews our minds, he begins a new (and sometimes hard) process of planting a
            whole new garden in the world. We are here to support each other as God works in us, and
            to taste the good fruit of the kingdom of God as he grows it in our lives, neighborhoods
            and families. <br />
          </div>
          <div className={classes.paragraphs}>
            The particular way we do this comes from a pattern called the Anglican tradition
          </div>
          <Typography className={classes.centerText} type='headline'>
            What is the Anglican tradition of following Jesus?
          </Typography>
          <div className={classes.paragraphs}>
            The Anglican tradition draws from the deepest wells of Christian spirituality and community.
            If you are familiar with Roman Catholic worship, you might recognize our liturgical
            responses ("The Lord be with you"). But if you are familiar with Protestant or evangelical
            worship you would appreciate the personal nature. If you have a background in other faiths
            or none at all, you might see that we advocate strongly for the poor and excluded, but
            we also never stop talking about being transformed in our own lives. <br />
          </div>
          <div className={classes.paragraphs}>
            All of this is simply our way of talking about the explosive,
            revolutionary power of the life, death, and resurrection of Jesus Christ. <br />
          </div>
          <div className={classes.paragraphs}>
            <i>“All Christian Ways are like cups. There are many kinds of cups in the world,
              small and large, made of glass, pottery, etc. ..." </i> <br />
          </div>
          <div className={classes.paragraphs}>
            <i>
              Think of pouring wine into a cup. The wine itself is independent of the cup, but experts will tell you
              that the kind of cup you pour wine into will affect the taste. ...
            </i>
            <br />
          </div>
          <div className={classes.paragraphs}>
            <i>
              "It’s best to put wine into the right kind of cup,
              but the cup isn’t the most important thing. The wine is what matters.
              The Anglican Way is a cup. The Gospel of Jesus Christ is the wine.
              The Anglican Way is a good cup into which to pour this most magnificent of wines,
              but it isn’t nearly as important as the wine itself. It isn’t the only kind of glass
              you could use, but it is a good one, and one that does a nice job of allowing the
              wine to be experienced as it was meant to be.” <br />
            </i>
            — Thomas McKenzie, The Anglican Way <br />
          </div>
          Church of the Atonement is part of the Anglican Church in North America,
          through which we are connected to the worldwide Anglican Communion.
        </Typography>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Divider className={classes.divider} />
        </div>
        <Typography className={classes.centerText} type='display2'>
          What We Seek
        </Typography>
        <Typography className={classes.text} type='body1'>
          <div className={classes.paragraphs}>
            We are building a community around Jesus Christ. We are nourished by his Spirit and the
            sacraments of his church. His purposes to transform the world have become our purposes,
            his wounds have become the source of our healing, and his kingdom is turning our world
            upside down.
          </div>
          <div className={classes.paragraphs}>
            Our roots extend, on the one side, through the sacraments,
            the liturgy, and the accumulated wisdom of God's people.
            On the other side, our roots also reach out through the heartfelt
            sense of mission and personal renewal that have energized many through God's Spirit.
            With such a healthy foundation, this is one strong plant.
          </div>
          <div className={classes.paragraphs}>
            The West Side is a melting pot of Burmese refugees, Puerto Ricans, old Italian-Americans,
            black families, young hipsters - anything you might conceivably call <i>human</i>.
          </div>
          <div className={classes.paragraphs}>
            But what will this community be without a strong spiritual foundation?
            Strangers who live close to one another? Instead, let us be drawn together
            by the love of Jesus Christ, and feel that magnetism running through our streets and
            parks, at soccer practices and pubs. The resurrection of Jesus is the beginning of a
            new world now. So we are rearranging our lives to center on this one thing: Hope.
          </div>
          <div className={classes.paragraphs}>
            <i>
            “Hope is what you get when you suddenly realize that a different worldview is possible,
            a worldview in which the rich, the powerful, and the unscrupulous do not after all have
            the last word. The same worldview shift that is demanded by the resurrection of Jesus is
            the shift that will enable us to transform the world.”
            </i>
            <br />
            — N.T. Wright, Surprised by Hope

          </div>
        </Typography>
      </div>
    )
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutUs)
