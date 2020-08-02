const stockURL = "http://localhost:3000/stocks";
const jsonify = response => response.json();

export const getStocks = () => fetch(stockURL).then(jsonify);
