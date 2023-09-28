"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HamburgerMenu()
{
    function toggleMenu()
    {
        const menu = document.querySelector(".mobile-menu");
        menu?.classList.toggle("hidden");
    }
    
    return (
        <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}