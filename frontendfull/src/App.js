import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
//Pages
import Rotation from './pages/Rotation';
import Album from './pages/Album';
import Artists from './pages/Artists';
import ArtistInfo from './pages/ArtistInfo';
//Context
import { AlbumProvider } from './contextComponents/AlbumContext';

const MainWrapper = styled.div`
  background-color: hotpink; /* Visual error checking */
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const App = () => {
  return (
    <Router>
      <MainWrapper>
        <Navigation />
        <Switch>
          <Route exact path="/" />
          <Route path="/playlists" exact />
          <Route path="/about" />
          <AlbumProvider>
            <Route
              exact
              path="/rotation"
              render={props => (
                <Rotation
                  {...props}
                  rotationFlag={1}
                  pageTitle={'Current Rotation'}
                  navElementTitle={'ROTATION'}
                />
              )}
            />
            <Route exact path="/archive" component={Artists} />
            <Route exact path="/artist/:artist/" component={ArtistInfo} />
            <Route exact path="/album/:album" component={Album} />
          </AlbumProvider>
        </Switch>
      </MainWrapper>
    </Router>
  );
};

export default App;
