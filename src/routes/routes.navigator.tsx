import { Router } from 'preact-router';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';

const Routes: preact.FunctionalComponent = () => {

    return (
        <Router>
            <Home path="/" />
            <About path="/about" />
            <Projects path="/projects" />
            <Contact path="/contact" />
        </Router>
    ) 
}

export default Routes;