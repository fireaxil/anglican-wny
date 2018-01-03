import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Pictures from './pictures'
import nickelCityForumPicture from '../../images/nickelCityForum.jpg'
import NickelCityForumText from './nickelCityForumText'

const styles = theme => ({

})

class NickelCityForum extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Pictures
          backgroundImage={'url(.' + nickelCityForumPicture + ')'}
          titleText={'Nickel City Forum'}
        />
        <NickelCityForumText />
      </div>
    )
  }
}

export default withStyles(styles)(NickelCityForum)
