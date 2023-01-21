import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Loader/loader";
import { useNavigate } from "react-router-dom";

function GetSearch() {
  // UseNavigate
  const Nav = useNavigate();

  // UseState
  const [load, setLoad] = useState(true);
  const [searchId, setSearchId] = useState([]);
  const params = useParams();
  console.log(params);

  // Getting Data
  const getCountry = (name) => {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchId(data);
        setLoad(false);
      });
  };
  console.log(searchId);

  useEffect(() => {
    getCountry(params.id);
  }, [params]);
  return (
    <div>
      <div className={load ? "loader" : "hide"}>
        <Loader />
      </div>
      {searchId.map((item) => {
        const image = item.flags;
        const FormatPop = item.population;
        const Formatting = FormatPop.toLocaleString();
        const name = item.name;
        return (
          <div
            key={FormatPop}
            onClick={() => Nav("/detail/" + name)}
            className="container container__two"
          >
            <div className="container__three">
              <img src={image.png} alt="" />
            </div>
            <div className="container__four">
              <h3>{name}</h3>
              <h4>
                Population: <span>{Formatting}</span>
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
  );
}

export default GetSearch;
