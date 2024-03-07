import React from "react";
import './style.css'


function Base( {children} ){
    return (
        <div className="root-template">
            <main>
                <h1>
                    PhoneBox
                </h1>
                { children } 
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default Base;