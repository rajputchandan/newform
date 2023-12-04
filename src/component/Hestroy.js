import React, { useEffect, useState } from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Hestroy() {


const [apiData, setApiData] = useState([])

function getData(){
  axios.get('https://656b20fadac3630cf727baa7.mockapi.io/crud-form')
  .then((response)=>{
    setApiData(response.data);
  })
}

function handleDelete(id){
  axios.delete(`https://656b20fadac3630cf727baa7.mockapi.io/crud-form/${id}`)
  .then(() => {
    getData();
  })
}
function setDataToStorage(id, name, lastname,fathername,date,number,altnumber,gender){
  localStorage.setItem('id', id);
localStorage.setItem('name', name);
localStorage.setItem('lastname', lastname);
localStorage.setItem('fathername', fathername);
localStorage.setItem('date', date);
localStorage.setItem('number', number);
localStorage.setItem('altnumber', altnumber);
localStorage.setItem('gender', gender);


}


useEffect(() => {
 getData();
}, [])


  return (
    <div>

<div className="newdata mb-3 mt-3">
  <Link to='/'><td><button className='btn btn-primary'>Create New data</button></td></Link>

</div>

<table className="table table-striped table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Firstname</th>
      <th scope="col">LastName</th>
      <th scope="col">FatherName</th>
      <th scope="col">Date</th>
      <th scope="col">Number</th>
      <th scope="col">AltNumber</th>
      <th scope="col">Gender</th>
      <th scope="col">Who</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   {
    apiData.map((item) =>{
       return(
        <>
        <tr>

          <td>{item.id}</td>
          <td>{item.e_name}</td>
          <td>{item.e_lastname}</td>
          <td>{item.e_father}</td>
          <td>{item.e_date}</td>
          <td>{item.e_number}</td>
          <td>{item.e_altnumber}</td>
          <td>{item.e_gender}</td>
          <td>{item.e_student}</td>
          <td>  <Link to='/Edite'><button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_lastname , item.e_father, item.e_date , item.e_number, item.e_altnumber, item.e_gender, item.e_parent)}>Edit</button></Link> </td>
          <td><button className='btn btn-danger' onClick={()=> { if(window.confirm("comform to delet your data ?"))  {handleDelete(item.id)}  }}>Delete</button></td>
        </tr>
   
        </>
       )

    })
   }
    
  </tbody>
</table>
    </div>
  );
}
