import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const GridJS = () => {
  // Fetch Record
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((allUsers) => {
      setUserData(allUsers.data);
    });
  }, []);

  // Gridjs
  const wrapperRef = useRef(null);

  const grid = new Grid({
    search: {
      enabled: true,
    },
    sort: true,
    columns: ['Last Name', 'First Name', 'Middle Name', 'Email', 'Mobile Number', 'Role'],
    server: {
      method: 'GET',
      url: 'http://localhost:5000/users',
      then: data => data.map(user =>
        [user.lastName, user.firstName, user.middleName, user.email, user.mobileOne, user.role]
      ),
    },
    pagination: {
      enabled: true,
      prevButton: true,
      nextButton: true,
      limit: 10,
      summary: true
    },
    style: {
      table: {
        border: '3px solid #ccc'
      },
      th: {
        'background-color': 'rgba(0, 0, 0, 0.1)',
        color: '#000',
        'border-bottom': '3px solid #ccc',
        'text-align': 'center'
      },
      td: {
        'text-align': 'center'
      }
    }
  });

  // grid.config.data[0] = userData.map(user => user);

  // console.log(grid.config.data.push())

  // const grid = new Grid({
  //   columns: ['Title', 'Director', 'Producer'],
  //   server: {
  //     url: 'https://swapi.dev/api/films/',
  //     then: data => data.results.map(movie =>
  //       [movie.title, movie.director, movie.producer]
  //     )
  //   }
  // });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  // End of Gridjs

  return (
    <div>
      <div ref={wrapperRef} />
    </div>
  )
}

export default GridJS