import React from "react";
import FileRow from "./FileRow";
import FileRowContent from "./FileRowContent";

const titles = ["#", "File name", "Text", "Number", "Hex"];

const TableFiles = ({ coins, search }) => {
  /* const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) |  coin.symbol.toLowerCase().includes(search.toLowerCase())
  );*/

  console.log("Serenderiza los files");
  console.log(coins);

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title) => (
            <td key={title}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <div>
            <FileRow file={coin} index={index + 1} key={index} />
            <FileRowContent file={coin} index={index + 1} key={index} />
        
          </div>
        
        ))}
      </tbody>
    </table>
  );
};

export default TableFiles;
