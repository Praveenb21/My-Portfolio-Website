// @ts-ignore: suppress missing type declarations for 'react' in this environment
import React, { lazy, Suspense } from "react";
// @ts-ignore: side-effect CSS import without type declarations
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return React.createElement(
    LoadingProvider,
    null,
    React.createElement(
      Suspense,
      null,
      React.createElement(
        MainContainer,
        null,
        React.createElement(Suspense, null, React.createElement(CharacterModel, null))
      )
    )
  );
};

export default App;
