import { h } from 'preact'
import "./Contact.css"

const Contact: preact.FunctionalComponent = () => {
    // Initial component by "h"
    const element = h("div", null, "Welcome to Contact page!");

    return (
        <div className="contact">
            {/* Your component TSX */}
            {element}
        </div>
    )
}

export default Contact;
