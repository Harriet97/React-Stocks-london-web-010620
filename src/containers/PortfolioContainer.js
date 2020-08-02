import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  generateSelectedStock = () => {
    const { selectedStock } = this.props;
    return selectedStock.map(stock => (
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
        <h2>My Portfolio</h2>
        {this.generateSelectedStock()}
      </div>
    );
  }
}

export default PortfolioContainer;
