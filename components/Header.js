import React from "react";
export default function Header() {
  return (
    <header>
      <nav>
        <ul className="header-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://www.google.com">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
