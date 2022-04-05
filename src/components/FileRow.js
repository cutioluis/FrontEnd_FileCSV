import React from "react";
import FileRowContent from "./FileRowContent";

const FileRow = ({ file, index }) => {
  console.log(file);
  return (
      <tr>
        <td>{index}</td>
        <td>{file.file}</td>
      </tr>
  );
};

export default FileRow;
