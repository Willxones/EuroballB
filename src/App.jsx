import { BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        
              <Route path='/' Component={Home}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  )
}

export default App
