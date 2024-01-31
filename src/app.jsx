import React from 'react'
import { Route, BrowserRouter as Router, Routes }   from 'react-router-dom';
//import {About, Contact, Home, Project} from './pages';
import Navbar from './components/Navbar';



const App= () => {
    return (<main className='bg-slate-300/20'>
        <Router>
            <Navbar/>            
            <Routes>
                <Route path='/' element={'Home' } />
                <Route path='/About' element={'About'} />
                <Route path='/Projects' element={'Project'} />
                <Route path='/Contact' element={'Contact'} />
            </Routes>
        </Router>
        </main>
    )
}

export default App