import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Signup from './Signup'

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
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' component={Signup} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
