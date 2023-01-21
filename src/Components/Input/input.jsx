import "./input.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function Input() {
  const data = [
    {
      id: 1,
      li: "Africa",
    },
    {
      id: 2,
      li: "America",
    },
    {
      id: 3,
      li: "Asia",
    },
    {
      id: 4,
      li: "Europe",
    },
    {
      id: 5,
      li: "Oceania",
    },
  ];
  // // STATES
  const [input, setInput] = useState("");
  const [condition, setCondition] = useState(false);

  // // USENAVIGATE
  const navigate = useNavigate();

  // UseCallback
  const Switch = (id) => {
    navigate("/region/" + id);
    console.log(id);
  };

  // Search Functionality
  const getSearch = (e) => {
    e.preventDefault();
    console.log(input);
    navigate("/search/" + input);
    console.log(navigate);
  };

  return (
    <div>
      <div className="container input__one">
        <form onSubmit={getSearch} action="">
          <CiSearch />
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Search for a country..."
            type="text"
          />
        </form>
        <div className="input__two">
          <div
            onClick={() => setCondition((prev) => !prev)}
            className="input__four"
          >
            Filter by Region
            <IoIosArrowDown />
          </div>
          <div className={condition ? "input__three" : "hide"}>
            <ul>
              {data.map((item) => {
                return (
                  <li onClick={() => Switch(item.li)} key={item.id}>
                    {item.li}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
