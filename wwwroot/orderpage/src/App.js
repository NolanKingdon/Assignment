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

    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({
      currentPage: newPage
    });
  }

  render() {
    let page;

    switch (this.state.currentPage) {
      default:
      case 'order':
        page = <OrderPage 
                  item={this.state.currentItem}
                  pageChanger={this.changePage} />
        break;
      case 'payment':
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
