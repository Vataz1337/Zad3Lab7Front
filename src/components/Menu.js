import React from "react";
import Navbar from "./Navbar";
import BrowserFooter from "./BrowserFooter";
import Browser from "./Browser";


function Menu({browsers}) {
    return (
        <>
            <Navbar/>
            <article>
                <div className="browsers">
                    {browsers.map((browser, i) => (
                        <Browser key={i} {...browser} />
                    ))}
                </div>
            </article>
            <BrowserFooter/>
        </>
    );
}

export default Menu;