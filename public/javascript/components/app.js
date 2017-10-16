import React from 'react'
import TitleBar from './titlebar'
import Pictures from './pictures'
import cyan from 'material-ui/colors/cyan'
import teal from 'material-ui/colors/teal'
import yellow from 'material-ui/colors/yellow'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import 'typeface-roboto'

// have to give an array of primary colors
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: yellow
    // secondary: {
    //   ...yellow,
    //   A800: '#C62828'
    // }
  },
  typography: {
    title: {
      color: 'white'
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
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
