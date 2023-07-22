import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState("")

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getdetails")
        // console.log(response)
        setData(response.data)

      }


      catch (error) {
        console.log("Error fetching data", error)
      }
    };

    fetchData();

  }, [])

  return (
    <div >
      {/* <h1>Hello Demo</h1> */}
      <h1>{data.message}</h1>
    </div>
  );
}

export default App;
