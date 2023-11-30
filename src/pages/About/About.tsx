import { h } from 'preact'
import "./About.css"

const About: preact.FunctionalComponent = () => {
    // Initial component by "h"
    const element = h("div", null, "Welcome to About page!");

    return (
        <div className="about">
            {/* Your component TSX */}
            {element}
        </div>
    )
}

export default About;