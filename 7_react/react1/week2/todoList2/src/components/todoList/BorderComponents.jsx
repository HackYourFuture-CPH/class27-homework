import React from "react";

const BorderComponent = ({ children }) => (
    <div style={{border: '2px solid black', padding: '10px'}}>
        {children}
    </div>
);

export default BorderComponent;