import Loader from "../../Components/Loader/loader";
import Input from "../../Components/Input/input";
import Nav from "../../Components/Nav/nav";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Region() {
  // UseParams
  const params = useParams();
  const navigate = useNavigate();

  // UseState
  const [recieve, setRecieve] = useState([]);
  const [load, setLoad] = useState(true);
  console.log(recieve);

  // Getting Datas
  const CallApi = (region) => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => res.json())
      .then((data) => {
        setRecieve(data);
        setLoad(false);
      });
  };

  useEffect(() => {
    CallApi(params.id);
  }, [params]);
  return (
    <div>
      <Nav />
      <Input />
      <div>
        <div className={load ? "loader" : "hide"}>
          <Loader />
        </div>
        <div className="container container__one">
          {recieve.map((item) => {
            const img = item.flags;
            const name = item.name;
            const num = item.population;
            const newNum = num.toLocaleString();
            return (
              <div
                onClick={() => navigate("/detail/" + name.common)}
                className="container__two"
                key={item.ccn3}
              >
                <div className="container__three">
                  <img src={img.png} alt="" />
                </div>
                <div className="container__four">
                  <h3>{name.common}</h3>
                  <h4>
                    Population: <span>{newNum}</span>
                  </h4>
                  <h4>
                    Region: <span>{item.region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{item.capital}</span>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Region;
