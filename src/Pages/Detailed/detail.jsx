import "./detail.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Nav from "../../Components/Nav/nav";
import Loader from "../../Components/Loader/loader";

function Detail() {
  // UseNavigate and UseParams
  const Navi = useNavigate();
  const params = useParams();

  // UseState
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  // Getting Data
  const getCountry = (name) => {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoad(false);
      });
  };

  // UseEffct
  useEffect(() => {
    getCountry(params.id);
  }, [params]);

  return (
    <div>
      <Nav />
      <div className="container">
        <div onClick={() => Navi("/")} className="detail__one">
          <HiArrowNarrowLeft />
          Back
        </div>
        <div className={load ? "loader" : "hide"}>
          <Loader />
        </div>
        <div>
          {data.map((item) => {
            const flag = item.flags;
            const popu = item.population;
            const population = popu.toLocaleString();
            const curr = item.currencies[0];
            const currency = curr.name;
            const language = item.languages[0];
            const lang = language.name;

            return (
              <div className="container container__two">
                <div className="container__three">
                  <img src={flag.png} alt="" />
                </div>
                <div className="container__four">
                  <h3>{item.name}</h3>
                  <h4>
                    Native Name: <span>{item.nativeName}</span>
                  </h4>
                  <h4>
                    Region: <span>{item.region}</span>
                  </h4>
                  <h4>
                    Population: <span>{population}</span>
                  </h4>
                  <h4>
                    Region: <span>{item.region}</span>
                  </h4>
                  <h4>
                    Sub Region: <span>{item.subregion}</span>
                  </h4>
                  <h4>
                    Capital: <span>{item.demonym}</span>
                  </h4>
                  <div className="detail__zero">
                    <h4>
                      Top Level Domain: <span>{item.topLevelDomain}</span>
                    </h4>
                    <h4>
                      Currencies: <span>{currency}</span>
                    </h4>
                    <h4>
                      Language: <span>{lang}</span>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Detail;
