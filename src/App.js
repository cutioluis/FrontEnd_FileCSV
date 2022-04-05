import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import TableFiles from "./components/TableFiles";


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios
      .get("http://127.0.0.1:3000/api/routes/getSecretFilesFromApi")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((error) => console.log(error));


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
          onChange={e => setSearch(e.target.value)}
        />
        <TableFiles coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
