import React, { Component } from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GithubCorner />
        <main>
          <h2>Aplikace 2</h2>
          <Filter />
          <Shelf />
        </main>
        <FloatCart />
      </React.Fragment>
    );
  }
}

export default App;
