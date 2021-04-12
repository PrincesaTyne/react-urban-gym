import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Home from './Home'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#208f52'
    }
  }
})

const App:React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
