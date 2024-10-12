
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Pages';
import { useState } from 'react';

import About from './Pages/About';
import Works from '../../WorksPages/design1';
import Works2 from '../../WorksPages/Design2';
import Works3 from '../../WorksPages/Design3';
import Works4 from '../../WorksPages/Design4';


function Routesdata() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };
    return (
        <BrowserRouter>
            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="work/design1" element={<Works />} />
                <Route path="work/design2" element={<Works2 />} />
                <Route path="work/design3" element={<Works3 />} />
                <Route path="work/design4" element={<Works4 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routesdata;