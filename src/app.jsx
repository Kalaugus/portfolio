import React from 'react'
import { Route, BrowserRouter as Router, Routes }   from 'react-router-dom';
//import { About, Contact, Home, Projects } from './pages';
import pages from './pages';
import Navbar from './components/Navbar';

const { About, Contact, Home, Projects } = pages;


const App= () => {
    return (<main className='bg-slate-300/20'>
        <Router>
            <Navbar/>            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </Router>
        </main>
    )
}

export default App