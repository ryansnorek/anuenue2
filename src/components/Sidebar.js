import { useContext } from "react";

import { expandContext } from "../contexts";

function SideBar() {
    const { setExpandSearchBar } = useContext(expandContext);

    return (
        <section className="sidebar" onClick={() => setExpandSearchBar(false)}>
            <div>menu</div>
            <nav>
                <img src="" alt="1"/>
                <img src="" alt="2"/>
                <img src="" alt="3"/>
                <img src="" alt="4"/>
                <img src="" alt="5"/>
            </nav>
        </section>
    );
}

export default SideBar;