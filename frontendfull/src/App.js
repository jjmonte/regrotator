import React from "react";
import styled from "@emotion/styled";

import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Views
import Rotation from "./views/Rotation";
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
          </AlbumProvider>
          <Route path="/playlists" exact />
          <Route path="/about"  />
        </Switch>
      </MainWrapper>
    </Router>
  );
};

export default App;
