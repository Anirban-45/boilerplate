// import { h } from "preact";
import { useState } from "preact/hooks";
import "./Header.css";

const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'Features' },
    { link: '/projects', label: 'Projects' },
    { link: '/contact', label: 'Contact' },
]
const Header: preact.FunctionalComponent = () => {
    const [active, setActive] = useState(links[0].link);
    
    console.log(active);

    return (
        <header>
            <div className="header-items">
                <h3 onClick={() => setActive(links[1].link)}>Header</h3>
                <ul>
                    {links.map((link) => (
                        <li>
                            <a href={link.link} onClick={() => setActive(link.link)}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header
