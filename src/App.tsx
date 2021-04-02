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
import ColorTestPage1 from "./pages/ColorTestPage1";
import ColorTestPage2 from "./pages/ColorTestPage2";
import ColorTestPage3 from "./pages/ColorTestPage3";
import ColorTestPage4 from "./pages/ColorTestPage4";
import SpeedTestPage0 from "./pages/SpeedTestPage0";
import SpeedTestPage1 from "./pages/SpeedTestPage1";
import SpeedTestPage2 from "./pages/SpeedTestPage2";
import SpeedTestPage3 from "./pages/SpeedTestPage3";
import SpeedTestPage4 from "./pages/SpeedTestPage4";
import SpeedTestPage5 from "./pages/SpeedTestPage5";
import SpeedTestPage6 from "./pages/SpeedTestPage6";
import SpeedTestPage7 from "./pages/SpeedTestPage7";
import SpeedTestPage8 from "./pages/SpeedTestPage8";

function App() {
  return (
    <StyledWebBackground>
      <StyledMobileLayout>
        <BrowserRouter>
          <StyledEmptyDiv height="12px" />
          <StepIndicator />
          <StepDescription />
          <Switch>
            <Route path={CustomPath.BRIGHTNESSTEST_1}>
              <ColorTestPage1 />
            </Route>
            <Route path={CustomPath.BRIGHTNESSTEST_2}>
              <ColorTestPage2 />
            </Route>
            <Route path={CustomPath.BRIGHTNESSTEST_3}>
              <ColorTestPage3 />
            </Route>
            <Route path={CustomPath.BRIGHTNESSTEST_4}>
              <ColorTestPage4 />
            </Route>
            <Route path={CustomPath.SPEED_TEST_START}>
              <SpeedTestPage0 />
            </Route>
            <Route path={CustomPath.SPEED_TEST_1}>
              <SpeedTestPage1 />
            </Route>
            <Route path={CustomPath.SPEED_TEST_2}>
              <SpeedTestPage2 />
            </Route>
            <Route path={CustomPath.SPEED_TEST_3}>
              <SpeedTestPage3 />
            </Route>
            <Route path={CustomPath.SPEED_TEST_4}>
              <SpeedTestPage4 />
            </Route>
            <Route path={CustomPath.SPEED_TEST_5}>
              <SpeedTestPage5 />
            </Route>
            <Route path={CustomPath.SPEED_TEST_6}>
              <SpeedTestPage6 />
            </Route>
            <Route path={CustomPath.SPEED_TEST_7}>
              <SpeedTestPage7 />
            </Route>
            <Route path={CustomPath.SPEED_TEST_8}>
              <SpeedTestPage8 />
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
