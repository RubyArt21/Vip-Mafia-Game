import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="App">
                      <footer className ="page-footer">
                        <div className = "container">
                          <div className = "row">
                            <div className ="cont">
                              <h5>Наши контакты: </h5>
                              <p>+375 44 532 71 47 </p>
                              <p>e-mail: vipmafia.@gmail.com </p>
                            </div>
                          </div>
                        </div>
                        <div className="footer-copyright">
                          <div className="container">
                           © 2018 by Vip Mafia Game
                           <a className="waves-effect waves-purple-darken-4 btn-large right"onClick={() => { window.location = '/callgame' }}>Заказать звонок</a>
                          </div>
                        </div>
                      </footer></div>
                        );
  }
}
//993 25 mail.belstu.by  автобус 88 улица голодела.убаревича 36, кв 7. 3этаж
export default Footer;
