import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Axios from "axios";

function App() {
  const [responseMessage, setResponseMessage] = useState("");
  useEffect(() => {
    Axios.get("/api/data")
      .then((response) => setResponseMessage(response.data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  return (
    <>
      <div>{responseMessage}</div>
    </>
  );
}

export default App;
