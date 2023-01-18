import React from "react"
import MUIDataTable from "mui-datatables";
import { useNavigate } from 'react-router-dom';

const UserReports = () => {
  const navigate = useNavigate();
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
        // display: false
      }
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      }
    },
  ];

  const data = [
    { name: <img width={100} height={50} src={require('../../../../assets/images/product.jpg')} alt="" />, company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  ];

  const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    onRowClick: (a, b) => handleEvent(a, b),
    onRowsDelete: (a, b) => deletedrow(a, b),
    print: false,
    filter: false,
    viewColumns: false,
    download: false,
    rowsPerPage: 3,
    rowsPerPageOptions: [1, 3, 5, 6],
  };



  const handleEvent = (a, b) => {
    console.log(a, b)
    navigate('/admin/details/user/', { state: { data: a } })

  }
  const deletedrow = (a, b) => {

    let itemsToDelete = []
    let items = a.data.map(item => (
      itemsToDelete.push(data[item.dataIndex])
    ))
    console.log(itemsToDelete, items)
  }






  return (
    <div style={{ height: '100%', display: 'table', tableLayout: 'fixed', width: '100%' }} className="muidatatable" >
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}

      />
    </div>
  )
}

export default UserReports