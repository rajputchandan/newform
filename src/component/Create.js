import React, { useState } from 'react';
import "../App.css"
import axios from 'axios'

import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from 'react-router-dom';

export default function Create() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [fathername, setFathername] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [altnumber, setAltnymber] = useState('');
  const [gender, setGenter] = useState('');
  const [student, setStudent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://656b20fadac3630cf727baa7.mockapi.io/crud-form', {
      e_name: name,
      e_lastname: lastname,
      e_father: fathername,
      e_date: date,
      e_number: number,
      e_altnumber: altnumber,
      e_gender: gender,
      e_student: student,

    }).then(() => {
      navigate('/Hestory');
    })
  }
  return (
    <div>

      <div className="main">

        <img src="../img\student.gif" alt="hello" width="500px" id='gif' />
        <Formik   >
          <Form onSubmit={handleSubmit}  >
            <div className="side-div">

              <div className="button">
                <h1>STUDENT REGISTRATIO FORM</h1>
                <Link to='/Hestory'>
                  <button type='button' className='btn btn-primary  '>Show Data</button>
                </Link>

              </div>



              <div className="slect">
                <label > <Field type="radio" name='student' value="student" onChange={(e) => setStudent(e.target.value)} />student  </label>

                <label >  <Field type="radio" name='student' value="parent" onChange={(e) => setStudent(e.target.value)} />Parent</label>
              </div>


              <table id='craet-table' >
                <td>
                  <tr>
                    <p>First Name</p> <Field type="text" className='reqered' required name='name' placeholder='enter your name' onChange={(e) => setName(e.target.value)} />

                  </tr>


                  <tr>
                    <p> Father Name</p><Field type="text" name='fathername' required onChange={(e) => setFathername(e.target.value)} />

                  </tr>


                  <tr>
                    <p>Mobile No.</p> <Field type="number" name='number' required onChange={(e) => setNumber(e.target.value)} />

                  </tr>


                  <tr>
                    <Field component="select" name="gender" required placeholder="select your gender" onChange={(e) => setGenter(e.target.value)} >
                      <option value="" selected disabled >Plese sleact </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>

                    </Field>

                    <tr> <Field type="submit" id='submit' /></tr>


                  </tr>


                </td>

                <td>
                  <tr>
                    <p>Last Name</p><Field type="text" name='lastname' placeholder='enter your last name' required onChange={(e) => setLastname(e.target.value)} />

                  </tr>

                  <tr>
                    <p>Date of Birth</p><Field type="date" name='date' required onChange={(e) => setDate(e.target.value)} />

                  </tr>
                  <tr>
                    <p>Alternativ Mobile NO.</p><Field type="number" required name='altnumber' onChange={(e) => setAltnymber(e.target.value)} />

                  </tr>



                </td>
              </table>
            </div>

          </Form>

        </Formik>
      </div>
    </div>
  );
}
