import * as React from 'react';
import './navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faMessage,
  faCamera,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

export function Navigation() {
  const [active, setActive] = React.useState('Home');

  return (
    <>
      <div className={'navigation-container'}>
        <div className="navigation">
          <ul>
            <li
              onClick={() => setActive('Home')}
              className={`list ${active === 'Home' ? ' active' : ''}`}
            >
              <a href="#">
                <span className="icon">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span className="text"> Home</span>
              </a>
            </li>
            <li
              onClick={() => setActive('Profile')}
              className={`list ${active === 'Profile' ? ' active' : ''}`}
            >
              <a href="#">
                <span className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="text">Profile</span>
              </a>
            </li>
            <li
              onClick={() => setActive('Message')}
              className={`list ${active === 'Message' ? ' active' : ''}`}
            >
              <a href="#">
                <span className="icon">
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                <span className="text">Message</span>
              </a>
            </li>
            <li
              onClick={() => setActive('Photos')}
              className={`list ${active === 'Photos' ? ' active' : ''}`}
            >
              <a href="#">
                <span className="icon">
                  <FontAwesomeIcon icon={faCamera} />
                </span>
                <span className="text">Photos</span>
              </a>
            </li>
            <li
              onClick={() => setActive('Settings')}
              className={`list ${active === 'Settings' ? ' active' : ''}`}
            >
              <a href="#">
                <span className="icon">
                  <FontAwesomeIcon icon={faGear} />
                </span>
                <span className="text">Settings</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </>
  );
}
