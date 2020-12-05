import { Component } from 'react';
import items from './data/items';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'order',
      currentItem: items[0]
    }
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
