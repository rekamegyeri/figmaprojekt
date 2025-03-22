import { NavLink } from "react-router";
import styles from "../css/Navigation.module.css";
import { useState, useEffect } from "react";
import { Spin as HamburgerButton } from "hamburger-react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Figyeljük az ablakméret változását
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Ha nagy képernyő, zárjuk be a menüt
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <ul className={`${menuOpen ? styles.open : styles.closed}`}>
        <li>
          <NavLink
            to="/work"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Csak mobilnézetben jelenjen meg a hamburger gomb */}
      {isMobile && (
        <div className={styles.hamburger_menu_button}>
          <HamburgerButton
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={28}
            direction="left"
          />
        </div>
      )}
    </nav>
  );
}
