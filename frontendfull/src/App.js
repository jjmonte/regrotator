import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
//Pages
import Rotation from "./pages/Rotation";
import Album from "./pages/Album";
//Context
import { AlbumProvider } from "./contextComponents/AlbumContext"

const MainWrapper = styled.div`
  background-color: hotpink; /* Visual error checking */
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
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
          <Route path="/" exact />
          <AlbumProvider>
            <Route path="/rotation" exact component={Rotation} />
            <Route path="/:artist/:album" exact component={Album} />
          </AlbumProvider>
          <Route path="/playlists" exact />
          <Route path="/about" />
        </Switch>
      </MainWrapper>
    </Router>
  );
};

export default App;
