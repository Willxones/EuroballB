import { BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import News from './pages/news'
import Article from './pages/article'
import Standings from './pages/standings'
import Scores from './pages/scores'
import Login from './pages/auth/login'
import Register from './pages/auth/register'

function App() {
  return (
    <Router>
      <div className='h-full'>
        <section className='h-full'>                              
            <Routes>                                                                        
              <Route path='/' Component={Home}/>
              <Route path='news' Component={News}/>
              <Route path='scores' Component={Scores}/>
              <Route path='standings' Component={Standings}/>
              <Route path='article' Component={Article}/>
              <Route path='login' Component={Login}/>
              <Route path='register' Component={Register}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  )
}

export default App
