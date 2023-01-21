import Loader from "../Loader/loader";
import "./container.css";
import { useNavigate } from "react-router-dom";

function Container(Props) {
  const { load, value, country } = Props;
  const Nav = useNavigate();
  console.log(load);

  return (
    <div className="container container__zero">
      <div className={load ? "loader" : "hide"}>
        <Loader />
      </div>
      <div className="container__one">
        {country.map((count) => {
          const img = count.flags;
          const name = count.name;
          const num = count.population;
          const newNum = num.toLocaleString();
          console.log(name.common);
          return (
            <div
              onClick={() => Nav("/detail/" + name.common)}
              className="container__two"
              key={count.ccn3}
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
                  Region: <span>{count.region}</span>
                </h4>
                <h4>
                  Capital: <span>{count.capital}</span>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Container;

// (
//     <div>
//       {emptyData.map((items) => {
//         return (
//           <div>
//             <div>
//               <img src={items.flags[0]} alt="" />
//             </div>
//             <h3>{items.name[0]}</h3>
//             <h4>Population: {items.population}</h4>
//             <h4>Region: {items.region}</h4>
//             <h4>Capital: {items.capital}</h4>
//           </div>
//         );
//       })}
//     </div>
//   );
