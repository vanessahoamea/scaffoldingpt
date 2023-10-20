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
        <button className="text-xl" aria-label="Deschide meniul" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}