import React, { Component } from 'react';

export default class SideNav extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-contents">
          <h1>
            <amp-img src="/static/hero-title.png"
              layout="responsive"
              width="638px"
              height="321px"
              alt="DevFest Seoul 2018 - BUILD FOR DIGITAL WELLBEING"
              ></amp-img>
          </h1>
        </div>
        <div className="event-info">
          <span className="date">2018.11.10 Saturday</span>
          <span className="venue">세종대학교 광개토관 컨벤션홀</span>
        </div>
      </div>
    )
  }
}