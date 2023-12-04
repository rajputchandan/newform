import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Edite() {

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [fathername, setFathername] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [altnumber, setAltnumber] = useState('');
  const [gender, setGender] = useState('');
  const [student, setStudent] = useState('');
  const navigate = useNavigate();


  useEffect(() => {

    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setLastname(localStorage.getItem('lastname'));
    setFathername(localStorage.getItem('fathername'));
    setDate(localStorage.getItem('date'));
    setNumber(localStorage.getItem('number'));
    setAltnumber(localStorage.getItem('altnumber'));
    setGender(localStorage.getItem('gender'));
    setStudent(localStorage.getItem('student'));


  }, [])

  const handleEdite = (e) => {
    e.preventDefault();
    axios.put(`https://656b20fadac3630cf727baa7.mockapi.io/crud-form/${id}`, {

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
    }).catch((err) => {
      window.alert(err)
    })

  }

  return (
    <div>

      <div className="main">

        <img src="../img\student.gif" alt="hello" width="500px" id='gif' />
        <Formik  >
          <Form onSubmit={handleEdite}  >
            <div className="side-div">

              <div className="button">
                <h1 className='text fs-3'> EDITE STUDENT REGISTRATIO FORM</h1>
                <Link to='/Hestory'>
                  <button type='button' className='btn btn-primary'>Show Data</button>
                </Link>

              </div>



              <div className="slect">

                <label > <Field type="radio" name='student' value="student" onChange={(e) => setStudent(e.target.value)} />student  </label>

                <label >  <Field type="radio" name='student' value="parent" onChange={(e) => setStudent(e.target.value)} />Parent</label>
              </div>


              <table id='craet-table' >
                <td>
                  <tr>
                    <p>First Name</p> <Field type="text" className='reqered' value={name} onChange={(e) => setName(e.target.value)} name='name' placeholder='enter your name' />

                  </tr>


                  <tr>
                    <p> Father Name</p><Field type="text" name='fathername' value={fathername} onChange={(e) => setFathername(e.target.value)} />

                  </tr>


                  <tr>
                    <p>Mobile No.</p> <Field type="number" name='number' value={number} onChange={(e) => setNumber(e.target.value)} />

                  </tr>


                  <tr>
                    <Field component="select" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="select your gender"  >
                      <option value="" selected disabled >Plese sleact </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>

                    </Field>

                    <tr> <Field type="submit" id='submit' /></tr>


                  </tr>


                </td>

                <td>
                  <tr>
                    <p>Last Name</p><Field type="text" name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='enter your last name' />

                  </tr>

                  <tr>
                    <p>Date of Birth</p><Field type="date" name='date' value={date} onChange={(e) => setDate(e.target.value)} />

                  </tr>
                  <tr>
                    <p>Alternativ Mobile NO.</p><Field type="number" name='altnumber' value={altnumber} onChange={(e) => setAltnumber(e.target.value)} />

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
