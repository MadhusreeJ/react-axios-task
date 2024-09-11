import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    const [students, setstudents] = useState([])

    const fetchData = async() => {
        try {
            const studentData = await axios.get(`https://66ddcd48f7bcc0bbdcdf0bea.mockapi.io/students/student`)
            setstudents(studentData.data)
        } catch (error) {
            alert("Something went wrong")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    let deleteStudent = async (id) => {
        let yesno = confirm("Are you sure do you want to delete this student?");
        if (yesno) {
          await axios.delete(`https://66ddcd48f7bcc0bbdcdf0bea.mockapi.io/students/student/${id}`);
          fetchData();
        }
      };

  return <>
    <div className="container-fluid" style={{backgroundColor:"#577dc9", position:"absolute", height:"100"+"%"}}>
    <div>
        <nav className="navbar d-flex justify-content-center" style={{backgroundColor:"#1a48a3",borderBottomRightRadius:10,borderBottomLeftRadius:10}}>
        <h1>Student Database</h1>
        </nav>
    </div>
    <div className='d-flex justify-content-end' style={{marginTop:10,marginBottom:10,marginRight:30}}>
        
            <Link to ="/insert"> 
            <button className='btn btn-success'> Add+ </button></Link>  
    </div>
    <div className='container'>
        <table className="table table-info">
        <thead>
          <tr>
            <th scope="col">Sl.No</th>
            <th scope="col">Student_Id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Percentage</th>
            <th scope="col"> Action </th>
          </tr>
        </thead>
        <tbody>
            {
        students.map((student,index)=>{
            return <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>{student.id}</td>
                 <td>{student.name}</td>
                 <td>{student.contact}</td>
                <td>{student.percentage}</td>
                <td>
                    <Link to= {`/update/${student.id}`}>
                    <button className='btn btn-success' style={{marginRight:10}} > Edit </button>
                    </Link>
                <button className='btn btn-danger' style={{marginLeft:10}}   onClick={() => {
                          deleteStudent(student.id);
                        }}> Delete </button>
                </td>
            </tr>
        })
       }
        </tbody>
        </table>
       
    </div>
      </div>
      <Outlet/>
      </>
  
}

export default Home