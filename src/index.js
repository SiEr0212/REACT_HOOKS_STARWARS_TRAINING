import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import theme from "./theme";
import { ColorModeScript } from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
