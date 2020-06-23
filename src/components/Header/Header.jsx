import React, { Component } from "react";
import style from "./Header.module.css";
import contacts from "../../helpers/contacts.json";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Navigation from "../Navigation/Navigation";

class Header extends Component {
  state = {
    isMenuOpen: false,
    isMenuLampsOpen: true,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false,
    });
  };

  toggleMenuLamps = () => {
    this.setState((prevState) => ({
      isMenuLampsOpen: !prevState.isMenuLampsOpen,
    }));
  };

  render() {
    const { isMenuOpen, isMenuLampsOpen } = this.state;

    return (
      <div className={style.header}>
        <div className={style.container}>
          <Logo closeMenu={this.closeMenu} />
          <div className={style.headerRight}>
            <p className={style.title}>
              Подари <span className={style.titleBlack}>свет</span>
            </p>
            <div className={style.contacts}>
              <div className={style.phoneOverlay}>
                <p className={style.phone}>{contacts.phone}</p>
                {document.documentElement.clientWidth > 767 && (
                  <p className={style.operator}>{contacts.operator}</p>
                )}
              </div>
              <div className={style.emailOverlay}>
                <p className={style.email}>{contacts.email}</p>
              </div>
            </div>
            {document.documentElement.clientWidth < 768 && !isMenuOpen && (
              <button
                className={style.btnMenu}
                type="button"
                onClick={this.toggleMenu}
              >
                <span className={`material-icons ${style.iconMenu}`}>menu</span>
              </button>
            )}
          </div>
        </div>
        {document.documentElement.clientWidth > 767 && <Navigation />}
        {isMenuOpen && (
          <Menu
            isMenuOpen={isMenuOpen}
            toggleMenu={this.toggleMenu}
            isMenuLampsOpen={isMenuLampsOpen}
            toggleMenuLamps={this.toggleMenuLamps}
          />
        )}
      </div>
    );
  }
}

export default Header;
