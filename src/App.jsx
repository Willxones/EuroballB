import { BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import News from './pages/news'
import Article from './pages/article'

function App() {
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        
              <Route path='/' Component={Article}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  )
}

export default App
