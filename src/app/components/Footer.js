import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <div className="contact">
              <h1>Contact us</h1>
              <p><a href="mailto:devfest-seoul-2018@googlegroups.com">devfest-seoul-2018@googlegroups.com</a></p>
            </div>
            <div className="logo">
              <amp-img src="/static/gdg-logo.png" width="1641px" height="298px" layout="responsive" />
            </div>
          </div>
          <p className="copyright">
          <b>© DevFest Seoul 2018</b> <br />
          Designed: Eunjeong Kim, Nayeon Kim <br />
          Developed: Eun Cho, Heechan Yang, Shinye Song <br />
          </p>
        </div>
      </footer>
    )
  }
}