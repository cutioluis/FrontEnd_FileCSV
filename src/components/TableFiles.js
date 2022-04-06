import React from "react";
import FileRow from "./FileRow";
import FileRowContent from "./FileRowContent";
import FileRowHex from "./rows/FileRowHex";
import FileRowNumber from "./rows/FileRowNumber";

const title = ["File name", "Text", "Number", "Hex"];

const TableFiles = ({ filesCsv, search }) => {
  /* const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) |  coin.symbol.toLowerCase().includes(search.toLowerCase())
  );*/

  console.log("Serenderiza los files");
  console.log(filesCsv);

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {title.map((title) => (
            <td key={title}>{title}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {filesCsv.map((file, index) => (
          <tr>
            <FileRow file={file} key={index} />
            <td>
              <FileRowContent
                file={file}
                index={index + 1}
                key={index}
              />
            </td>
            <td>
              <FileRowNumber file={file} index={index + 1} key={index} />
            </td>
            <td>
              <FileRowHex file={file} index={index + 1} key={index} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableFiles;
