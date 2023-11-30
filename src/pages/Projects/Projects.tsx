import { h } from 'preact'
import "./Projects.css"

const Projects: preact.FunctionalComponent = () => {
    // Initial component by "h"
    const element = h("div", null, "Welcome to Project page!");

    return (
        <div className="projects">
            {/* Your component TSX */}
            {element}
        </div>
    )
}

export default Projects;
