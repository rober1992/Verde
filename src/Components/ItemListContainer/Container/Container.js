import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ItemList from '../ItemList/ItemList';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <ItemList />
      </Container>
    </React.Fragment>
  );
}

