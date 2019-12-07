import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../util/apollo-client";
import theme from "../src/theme";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </StylesProvider>
    );
  }
}

export default withApollo(MyApp);
