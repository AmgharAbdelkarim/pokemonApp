import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from 'containers/HomePage';
import ViewPokemon from 'containers/ViewPokemonPage';
import Types from 'containers/TypesPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {AppContainer} from 'App.styles';
function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:name" component={ViewPokemon} />
          <Route exact path="/type/:type" component={Types} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
