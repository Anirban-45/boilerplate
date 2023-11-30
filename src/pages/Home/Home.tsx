import { h } from 'preact'
import "./Home.css"

const Home: preact.FunctionalComponent = () => {
    // Initial component by "h"
    const element = h("div", null, "Welcome to Homepage!");

    return (
        <div className="home">
            {/* Your component TSX */}
            {element}
        </div>
    )
}

export default Home;
