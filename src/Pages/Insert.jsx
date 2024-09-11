import React from 'react'
import {useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link, Navigate, Outlet } from 'react-router-dom'

const Insert = () => {
    const navigate = useNavigate();

    const formik = useFormik({
           initialValues : {
            name : "",
            contact: "",
            percentage : "",
           },

           onSubmit : async(values) =>{
            try{
                await axios.post(`https://66ddcd48f7bcc0bbdcdf0bea.mockapi.io/students/student`,values)
                navigate('/')
            }
            catch(error){
                alert("Something went wrong")
            }
            },
    })


  return (
    <div className='container-fluid' style={{backgroundColor:"#1a48a3", position:"absolute",height:"100"+'%'}}>
         <div className='container d-flex align-items-center justify-content-around' style={{backgroundColor:"#577dc9",height:300,position:"absolute", top:150,left:120,borderRadius:10}} >
         <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            <div className='col-lg-4' >
                <label htmlFor=''>Name</label>
                <input type='text' className='form-control'
                name='name' value={formik.values.name} onChange={formik.handleChange}/>
            </div>
            <div className='col-lg-4'>
                <label htmlFor=''>Phone Number</label>
                <input type='tel' className='form-control'
                name='contact' value={formik.values.contact} onChange={formik.handleChange}/>
            </div>
            <div className='col-lg-4'>
                <label htmlFor=''>Percentage</label>
                <input type='number' className='form-control'
                name='percentage' value={formik.values.percentage} onChange={formik.handleChange}/>
            </div>
        <div className='d-flex justify-content-center' style={{marginTop:20}}>
            <button type='submit' className='btn btn-success'> Submit </button>
        </div>
       </div>
        </form>
    </div>
    <Outlet/>
    </div>
   
  )
}

export default Insert