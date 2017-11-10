import React from 'react'
import TitleBar from './titlebar'
import Pictures from './pictures'
import SubPictureHeader from './subPictureHeader'
import blue from 'material-ui/colors/blue'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import 'typeface-roboto'

// have to give an array of primary colors
const theme = createMuiTheme({
  palette: {
  //   primary: 'white',
    secondary: blue
    // secondary: {
    //   ...yellow,
    //   A800: '#C62828'
    // }
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.87)'
      }
    }
  }
})

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <TitleBar />
          <Pictures />
          <SubPictureHeader />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
