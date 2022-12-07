import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { Button } from "@mui/material";

const MUIDataTableComponent = () => {
  // Fetch Record
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((allUsers) => {
      setUserData(allUsers.data);
    });
  }, []);


  // MUI Data Table
  const columns = [
    {
      name: "lastName",
      label: "Last Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "firstName",
      label: "First Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "middleName",
      label: "Middle Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "title",
      label: "Title",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "county",
      label: "County",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "enrollmentCenter",
      label: "Enrollment Center",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "totalMales",
      label: "Total Males",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "totalFemales",
      label: "Total Females",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "totalDatas",
      label: "Total Data",
      options: {
        filter: true,
        sort: true,
      }
    },
  ];

  console.log(columns)

  const data = userData.map(user => user);

  data.push(
    data.lastName,
    data.firstName,
    data.middlName,
    data.title,
    data.county,
    data.enrollmentCenter,
    data.totalMales,
    data.totalFemales,
    data.totalDatas,
  )
  console.log(data)

  const options = {
    // filterType: 'checkbox',
    filterType: 'dropdown',
    responsive: 'standard',
    confirmFilters: true,

    // Calling the applyNewFilters parameter applies the selected filters to the table 
    customFilterDialogFooter: (currentFilterList, applyNewFilters) => {
      return (
        <div style={{ marginTop: '40px' }}>
          <Button variant="contained" onClick={() => this.handleFilterSubmit(applyNewFilters)}>Apply Filters</Button>
        </div>
      );
    },

    // callback that gets executed when filters are confirmed
    onFilterConfirm: (filterList) => {
      console.log('onFilterConfirm');
      console.dir(filterList);
    },

    onFilterDialogOpen: () => {
      console.log('filter dialog opened');
    },
    onFilterDialogClose: () => {
      console.log('filter dialog closed');
    },
    onFilterChange: (column, filterList, type) => {
      if (type === 'chip') {
        var newFilters = () => (filterList);
        console.log('updating filters via chip');
        this.handleFilterSubmit(newFilters);
      }
    },
  };
  // End of MUI Data Table


  return (
    <React.Fragment>
      <MUIDataTable
        title={"Regular Enrollment Report"}
        data={data}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  )
}

export default MUIDataTableComponent