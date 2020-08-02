import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  generateStock = () => {
    const { stocks } = this.props;
    return stocks.map(stock => (
      <Stock
        stock={stock}
        key={stock.id}
        setSelectedStock={this.props.setSelectedStock}
        selectedStock={this.props.selectedStock}
      />
    ));
  };
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.generateStock()}
      </div>
    );
  }
}

export default StockContainer;
