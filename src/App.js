import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import LoginFrom from './components/LoginForm'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="body-section">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginFrom} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
