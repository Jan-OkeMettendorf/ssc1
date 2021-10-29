import React, {useState} from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";


function NavBar() {

    const [showSidebar, setShowSidebar] = useState(true);


    const handleSidebar = (event) => {
        setShowSidebar(event)
    }

    return (
        <>
            <Header handleSidebar={handleSidebar} showSidebar={showSidebar}/>
            <Sidebar handleSidebar={handleSidebar} showSidebar={showSidebar}/>
        </>
    );
}

export default NavBar;