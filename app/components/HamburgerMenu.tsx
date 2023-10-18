"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function HamburgerMenu()
{
    function toggleMenu()
    {
        const menu = document.querySelector(".mobile-menu");
        menu?.classList.toggle("hidden");
    }
    
    return (
        <button className="text-xl" onClick={toggleMenu} aria-label="menu">
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}