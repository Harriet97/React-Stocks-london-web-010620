import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    selectedStock: []
  };

  setSelectedStock = stock => {
    if (this.state.selectedStock.includes(stock)) {
      this.setState({
        selectedStock: this.state.selectedStock.filter(s => s !== stock)
      });
    } else {
      this.setState({
        selectedStock: [...this.state.selectedStock, stock]
      });
    }
  };

  render() {
    return (
      <div>
        <SearchBar
          filterStocks={this.props.filterStocks}
          sortStocks={this.props.sortStocks}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.props.stocks}
              setSelectedStock={this.setSelectedStock}
              selectedStock={this.state.selectedStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              selectedStock={this.state.selectedStock}
              setSelectedStock={this.setSelectedStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
