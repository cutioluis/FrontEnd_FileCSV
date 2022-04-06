import React from "react";

const FileRowHex = ({ file, index}) => {
  console.log(file);
  return (
    <>
      {file.lines.map((f, index) => (
        <tr>
          <td>{f.hex}</td>
        </tr>
      ))}
    </>
  );
};

export default FileRowHex;
