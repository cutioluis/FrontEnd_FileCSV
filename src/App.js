import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import TableFiles from "./components/TableFiles";

function App() {
  const [filesCsv, setFilesCsv] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios
      .get("http://127.0.0.1:3000/api/routes/getSecretFilesFromApi")
      .then((res) => {
        setFilesCsv(res.data);
      })
      .catch((error) => console.log(error));
  };

  const formatData = (data) => {

    
    console.log("Formateo de datos")
    data.map((file) => {
      console.log(file);

    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input
          className=" form-control bg-dark text-center border-0 mt-4 text-light "
          type="text"
          placeholder="Search a file"
          onChange={(e) => setSearch(e.target.value)}
        />
        {formatData(filesCsv)}
        <TableFiles filesCsv={filesCsv} search={search} />
      </div>
    </div>
  );
}

export default App;
