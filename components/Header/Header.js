import React from 'react';
import E404 from '../E404';
import { Container, Row } from '../Grid/Grid';
import { IoMdSettings } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';
import './Header.scss';


export function Header({ logo, account, user, navigation, page }) {
  return (
    <React.Fragment>
      <header>
        <div className="topbar">
          <Container>
            <Row horizontal={'space-between'} vertical={'center'} wrap={'nowrap'}>
              <Row vertical={'center'}>
                <div className="topbar__logo">
                  {logo.url ? <img className="topbar__logo--img" src={logo.url} alt={logo.alt} /> : logo.name}
                </div>
              </Row>
              <Row className="topbar__profile" horizontal={'flex-end'} vertical={'center'}>
                <div className="profile__account">{account.name}</div>
                <div className="profile__settings"><IoMdSettings size="1.5em" style={{ verticalAlign: 'middle' }} /></div>
                <div className="profile__user">{user.name}</div>
              </Row>
            </Row>
          </Container>
        </div>
        <div className="navbar">
          <Container>
            <nav className="navbar__nav">
              <Row horizontal="space-between" wrap="nowrap" vertical="center">
                <Row>
                  {navigation.map((navItem) => {
                    return (
                      <div key={navItem.id} className="nav__item">
                        <a className="nav__item--title">
                          {navItem.name}
                          <FaCaretDown style={{ verticalAlign: 'middle', padding: '2px 4px 4px' }} />
                        </a>
                        {navItem.items.length > 0 ?
                          <ul className="nav__item--list">
                            {navItem.items.map(navItemItem => <li key={navItemItem.id}><a href={navItemItem.url}>{navItemItem.name}</a>
                            </li>)}
                          </ul>
                          : null}
                      
                      </div>
                    );
                  })}
                </Row>
                <div className="navbar__favourites">
                  Favourites
                </div>
              </Row>
            </nav>
          
          </Container>
        
        </div>
      </header>
      {/*Page Header - Component*/}
      <Container>
        <div className="page-header">
          <h1>{page.name}</h1>
        </div>
      </Container>
    
    </React.Fragment>
  );
}


export default E404;