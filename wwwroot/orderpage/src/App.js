import { Component } from 'react';
import items from './data/items';
import './css/styles.css';
import OrderPage from './components/OrderPage';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'order',
      currentItem: items[0]
    }
  }

  render() {
    let page;

    switch (this.state.currentPage) {
      default:
      case 'order':
        page = <OrderPage />
        break;
    }

    return (
      <div className="App">
          {page}
      </div>
    );
  }
}

export default App;
