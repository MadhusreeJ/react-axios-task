import React from 'react'
import { useParams, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const Update = () => {

    const params = useParams();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          name: "",
          contact:0,
          percentage: 0,
        },
        onSubmit: async (values) => {
            try {
              await axios.put(`https://66ddcd48f7bcc0bbdcdf0bea.mockapi.io/students/student/${params.id}`, values);
              navigate("/");
            } catch (error) {
              console.log(error);
            }
          },
    })


    let getData = async () => {
        try {
          const studentData = await axios.get(`https://66ddcd48f7bcc0bbdcdf0bea.mockapi.io/students/student/${params.id}`);
          formik.setValues(studentData.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);


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
       <button type='submit' className='btn btn-success'> Update </button>
   </div>
  </div>
   </form>
</div>
<Outlet/>
</div>
  )
}

export default Update