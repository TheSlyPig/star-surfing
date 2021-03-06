import React from 'react';
import HomePage from './homepage';
import HeaderContainer from './header/header_container';
import SearchBarContainer from './search/search_bar_container';
import FooterContainer from './footer/footer_container';
import { Route, Link } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import StarIndexContainer from './stars/star_index_container';
import UserShowContainer from './users/user_show_container';
import StarShowContainer from './stars/star_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './session_form_modal';

const App = () => (
  <div>
    <header>
      <section className="header-container">
        <h1 className="header-logo"><Link to={'/'}>starsurfing</Link></h1>
        <div className="search-bar-container">
          <SearchBarContainer/>
        </div>
        <HeaderContainer/>
      </section>
    </header>
    <AuthRoute exact path="/" component={ HomePage } />
    <Route exact path="/" component={ StarIndexContainer } />
    <Route path="/users/:id" component={ UserShowContainer } />
    <Route path="/stars/:id" component={ StarShowContainer } />
    <footer>
      <FooterContainer/>
    </footer>
</div>
);

export default App;
