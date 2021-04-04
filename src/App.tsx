import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StepIndicator from "./components/layouts/StepIndicator";
import StepDescription from "./components/layouts/StepDescription";
import {
  StyledMobileLayout,
  StyledWebBackground,
} from "./components/layouts/StyledMobileLayout";
import { StyledEmptyDiv } from "./components/layouts/StyledSimpleLayout";

import CustomPath from "./constants/path";
import HomePage from "./pages/HomePage";
import ColorTestPage from "./pages/ColorTestPage";
import SpeedTestPageStart from "./pages/SpeedTestPageStart";
import React, { useState } from "react";
import { ColorPageNo } from "./constants/types";
import SpeedTestPage from "./pages/SpeedTestPage";

function App() {
  const [colorStep, setColorStep] = useState<ColorPageNo>(0);

  return (
    <StyledWebBackground>
      <StyledMobileLayout>
        <BrowserRouter>
          <StyledEmptyDiv height="12px" />
          <StepIndicator />
          <StepDescription colorPageNo={colorStep} />
          <Switch>
            <Route path={CustomPath.BRIGHTNESSTEST}>
              <ColorTestPage onChangePage={setColorStep} />
            </Route>
            <Route path={CustomPath.SPEED_TEST_START}>
              <SpeedTestPageStart />
            </Route>
            <Route path={CustomPath.SPEED_TEST}>
              <SpeedTestPage />
            </Route>
            <Route path={CustomPath.QUESTION}>
              <HomePage />
            </Route>
            <Route path={CustomPath.RESULT}>
              <HomePage />
            </Route>
            <Route path={CustomPath.HOME}>
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </StyledMobileLayout>
    </StyledWebBackground>
  );
}

export default App;
