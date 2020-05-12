import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyle from 'components/layout/GlobalStyle';
import Scrollbar from 'components/layout/Scrollbar';
import Nav from 'components/layout/Nav';
import Footer from 'components/layout/Footer';

const Layout = ({ path, children }) => {
  let isFooter = true;
  let isHomePage = false;

  switch (path) {
    case '/':
      isHomePage = true;
      break;

    case '/404/':
      isFooter = false;
      break;

    default:
      break;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Scrollbar>
          <Nav isHomePage={isHomePage} />
          <main>{children}</main>
          {isFooter && <Footer />}
        </Scrollbar>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
