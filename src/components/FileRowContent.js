import React from "react";

const FileRowContent = ({ file, index }) => {
  console.log(file);
  return (
    <tr>
      {file.lines.map((f, index) => (
        <div>
          <td>{f.text}</td>
          <td>{f.number}</td>
          <td>{f.hex}</td>
        </div>
      ))}
    </tr>
  );
};

export default FileRowContent;
