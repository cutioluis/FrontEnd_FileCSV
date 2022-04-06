import React from "react";
import FileRowContent from "./FileRowContent";

const FileRow = ({ file, index }) => {
  console.log(file);
  return (
        <td>{file.file}</td>
  );
};

export default FileRow;
