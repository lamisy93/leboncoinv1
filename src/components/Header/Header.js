import React, { Component } from "react";
import "./Header.css";
import Logo from "../Logo/Logo";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <header>
        <Logo src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7d/Leboncoin.fr_Logo_2016.svg/1280px-Leboncoin.fr_Logo_2016.svg.png" />
        <nav>
          <ul>
            <li>Déposer une annonce</li>
            <li>Offres</li>
            <li>Demandes</li>
            <li>Mes favoris</li>
            <li>Boutiques</li>
            <li>Messages</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
