import './App.css';
import Home from './component/Home';
import Login from './component/login';
import Register from './component/Register';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'   //imrr short cut







function App() {
  return (
    <Router>
      <div className='App-link'>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

      </div>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>

      {/* <Home />
      <Register />
      <Login /> */}
    </Router>
  )

}

export default App;
