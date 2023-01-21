import Input from "../../Components/Input/input";
import Nav from "../../Components/Nav/nav";
import { useState, useEffect } from "react";
import Container from "../../Components/Container/container";

function Home() {
  // STATES
  const [load, setLoad] = useState(true);
  const [country, setCountry] = useState([]);
  const [value, setValue] = useState("");

  // Getting Data
  const random = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  let num = random;
  const getCountry = () => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        while (num < 15) {
          num++;
          const link = data[num];
          console.log(link);
          setCountry((prev) => [...prev, link]);
        }
        setLoad(false);
      });
  };

  // Controlling the API Call
  console.log(country);
  useEffect(() => {
    getCountry();

    return () => {
      console.log("Clean Up");
    };
  }, []);

  return (
    <div>
      <Nav />
      <Input />
      <Container load={load} value={value} country={country} />
    </div>
  );
}

export default Home;
