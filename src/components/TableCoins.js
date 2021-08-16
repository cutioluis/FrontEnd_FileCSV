import React from "react";
import CoinRow from './CoinRow'

const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];

const TableCoins = ({ coins }) => {
  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {
            titles.map((title) => (
              <td key={title}>{title}</td>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <CoinRow coin={coin} index={index + 1 } key={index } />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
