import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import { getStocks } from "./API";

class App extends Component {
  state = {
    stocks: [],
    filteredStocks: []
  };

  componentDidMount() {
    this.updateStockState();
  }

  updateStockState = () => {
    getStocks().then(stocks =>
      this.setState({
        stocks: stocks,
        filteredStocks: stocks
      })
    );
  };

  filterStocks = value => {
    switch (value) {
      case "All":
        this.setState({
          filteredStocks: this.state.stocks
        });
        break;
      case "Tech":
        this.setState({
          filteredStocks: this.state.stocks.filter(e => e.type === "Tech")
        });
        break;
      case "Sportswear":
        this.setState({
          filteredStocks: this.state.stocks.filter(e => e.type === "Sportswear")
        });
        break;
      case "Finance":
        this.setState({
          filteredStocks: this.state.stocks.filter(e => e.type === "Finance")
        });
        break;
      default:
        this.setState({
          filteredStocks: this.state.stocks
        });
    }
  };

  sortStocks = value => {
    if (value === "Alphabetically") {
      const stocks = this.state.filteredStocks.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      this.setState({
        filteredStocks: stocks
      });
    } else if (value === "Price") {
      const stocks = this.state.filteredStocks.sort(
        (a, b) => a.price - b.price
      );
      this.setState({
        filteredStocks: stocks
      });
    } else {
      this.setState({
        filteredStocks: this.state.stocks
      });
    }
  };

  renderStocks = () => {
    let filteredStocks = this.state.filteredStocks;
    let sortedStocks = this.sortStocks(filteredStocks);
    return sortedStocks;
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.renderStocks(this.state.stocks)}
          filterStocks={this.filterStocks}
          sortStocks={this.sortStocks}
        />
      </div>
    );
  }
}

export default App;
