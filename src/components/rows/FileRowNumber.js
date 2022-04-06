import React from "react";

const FileRowNumber = ({ file, index}) => {
  console.log(file);
  return (
    <>
      {file.lines.map((f, index) => (
        <tr>
          <td>{f.number}</td>
        </tr>
      ))}
    </>
  );
};

export default FileRowNumber;
