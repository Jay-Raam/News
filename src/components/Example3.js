import React, { useEffect, useState } from "react";
import "./Example.css"; 

const Example3 = (props) => {
  const [Data, setData] = useState([]);

useEffect(() => {
  const API_KEY = "49d32ab5190183a5185fd6d0dccf560a";
  const language = "en";
  const pageSize = 30;

  fetch(`https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=${language}&pageSize=${pageSize}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data.articles);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);


  return (
    <div className="container">
      <h1 className="title">{props.name}</h1>
      <ul className="one">
        {Data.map((mile, index) => (
          <li key={index} className="two">
            <img src={mile.image} alt={mile.title} className="three" />
            <h1 className="four">{mile.title}</h1>
            <p className="five">{mile.content}</p>
            <p className="six">{mile.description}</p>
            <a
              href={mile.url}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Example3;
