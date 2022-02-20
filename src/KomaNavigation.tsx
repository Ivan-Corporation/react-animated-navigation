import * as React from 'react';
import './menu.scss'

export interface KomaNavigationProps {
  link1: string,
  title1: string,
  link2: string,
  title2: string,
  link3: string,
  title3: string,
  link4: string,
  title4: string,
}
export const KomaNavigation = ({ link1, title1, link2, title2, link3, title3, link4, title4 }: KomaNavigationProps) => {
  return <div>
    <input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox" />
    <label htmlFor="page-nav-toggle">
      <svg className="icon--menu-toggle" viewBox="0 0 60 30">
        <g className="icon-group">
          <g className="icon--menuwhite">
            <path d="M 6 0 L 54 0" />
            <path d="M 6 15 L 54 15" />
            <path d="M 6 30 L 54 30" />
          </g>
          <g className="icon--close">
            <path d="M 15 0 L 45 30" />
            <path d="M 15 30 L 45 0" />
          </g>
        </g>
      </svg>
    </label>

    <nav className="main-navigation">
      <ul>
        <li><a className="menu-words" href={link1}>{title1}</a></li>
        <li><a className="menu-words" href={link2}>{title2}</a></li>
        <li><a className="menu-words" href={link3}>{title3}</a></li>
        <li><a className="menu-words" href={link4}>{title4}</a></li>
      </ul>
    </nav>
  </div>
};
