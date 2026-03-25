
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Pages';
import Works from '../Component/Pages/Works/Design1';
import Works2 from '../Component/Pages/Works/Design2';
import Works3 from '../Component/Pages/Works/Design3';
import Works4 from '../Component/Pages/Works/Design4';


function Routesdata() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
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