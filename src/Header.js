import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (

        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center"></a>
            <ul className="left hide-on-med-and-down">
            <li className="active"><a href="home.html">Главная</a></li>
            <li><a href="pregame.html">Заказать игру</a></li>
            <li><a href="services.html">Услуги</a></li>
              <li><a href="rules.html">Правила игры</a></li>
              <li><a href="gallery.html">Галерея</a></li>
            </ul>
          </div>
        </nav>



    );
  }
}

export default Header
