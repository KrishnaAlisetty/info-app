import "./App.css";
import { useState, useEffect, useContext, createContext } from "react";
import CoffeePage from "./CoffeePage";
import Search from "./Search";

function App() {
  const [data, setData] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  const ContextProvider = createContext();
  const printCities = () => {
    var headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "T0s3UTFLdkFTTnNGdWVrazI4NmVQUHNCVFpGVGhjWkJIb29mUG1UQw=="
    );

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    fetch(
      "https://api.countrystatecity.in/v1/countries/IN/states/AP/cities",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.forEach((element) => {}))
      .catch();
  };
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((resp) => resp.json())
      .then((data) => setData(data));
    printCities();
    return () => {
      setFetchData(false);
    };
  }, [fetchData]);

  return (
    <>
      <div className="App">
        <div className="searchGrid">
          <Search
            setData={setData}
            data={data}
            setFetchData={setFetchData}
          ></Search>
        </div>
        <div className="cofeeGrid">
          <CoffeePage data={data} className="coffeeContainer"></CoffeePage>;
        </div>
      </div>
    </>

    //MediaTek MT7921 Wi-Fi 6 802.11ax PCIe Adapter
  );
}

// var headers = new Headers();
// headers.append("X-CSCAPI-KEY", "API_KEY");

// var requestOptions = {
//    method: 'GET',
//    headers: headers,
//    redirect: 'follow'
// };

// fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));
export default App;
