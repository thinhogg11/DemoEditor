/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
// import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import DemoEditor from '../DemoEditor';
const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Box display="flex" justifyContent="center" mb={5}>
        <h2>Demo Editor</h2>
      </Box>
      <Box display="flex" justifyContent="center" mb={2}>
        <a
          href="https://docs.google.com/document/d/1vBel_g7tBqZLxbxW_w6Gx-pB4C7H8QeV0BKTezue6oA/edit#"
          target="_blank"
        >
          <b>Tài liệu</b>
        </a>
      </Box>
      <Switch>
        <Route exact path="/" component={DemoEditor} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer />
      <GlobalStyle /> */}
    </AppWrapper>
  );
}
