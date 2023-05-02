import React, { useEffect, useRef, useState } from 'react'
import './style/create.css'
import { SchemaValidate } from './SchemaValidate'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'


const initialValues = {
  name: "",
  birth: "",
  sex: "",
  mobile: "",
  gorvType: "",
  gorvValue: "",
  guardian: "",
  gName: "",
  email1: "",
  contact: "",
  address: "",
  states: "",
  city: "",
  allCountry: "",
  pincode: "",
  occup: "",
  religion: "",
  marriedSt: "",
  bloodGroup: "",
  nationality: ""
}
const CreateUser = () => {
  const govIdDetail = ["Adhar", "Pan Card"]
  

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SchemaValidate,
    onSubmit: (values, action) => {
      // console.log("File : Registeration.jsx ~ line l1 ~ Registeration ~ values", values)
      const url = 'https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/student'
      fetch(url, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(values)
      }).then((response) =>
        response.json()
      ).then((item) =>
        console.log(item)
        // navigate('/show')
      ).catch((err) =>
        console.log('error')
      )
      action.resetForm();
    }
  })

  let state = ["Enter State", 'Utter Pradesh', "Bihar", "Madhya Pradesh", "Delhi", "Jharkhand"]
  let uttData = ["Enter City", 'lucknow', 'varanasi', 'kanpur', 'mirzapur']
  let country = ["Enter Country", 'india', 'usa', 'japan', 'turki', 'pakistan', 'soudia']

  return (
    <div className='container'>
      <div className='outer'>
        <form onSubmit={handleSubmit}>
          <div className='row py-1 p-4'>
            <h6 className='py-2' style={{ textDecoration: "underline" }}>Personal Details</h6>
            <div className='col-md-4'>
              <div className="mb-3 row">
                <label for="inputEmail" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input type="text"
                    name='name'
                    placeholder='Enter Name'
                    className="form-control"
                    id="inputName1"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {
                    errors.name && touched.name ?
                      <p className='text-danger'>{errors.name}</p>
                      : null
                  }
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 row">
                <label for="inputBirth" className="col-sm-4 col-form-label">Date Of Birth or age<sup className='text-danger'>*</sup> </label>
                <div className="col-sm-7">
                  <input type="date"
                    name='birth'
                    className="form-control"
                    placeholder='DD/MM/YYYY'
                    id="inputBirth"
                    value={values.birth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {
                    errors.birth && touched.birth ?
                      <p className='text-danger'>{errors.birth}</p>
                      : null
                  }
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 row">
                <label for="inputSex" className="col-sm-2 col-form-label">Sex<sup className='text-danger'>*</sup></label>
                <div className="col-sm-10">
                  <select id='inputSex'
                    name='sex'
                    value={values.sex}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                  >
                    <option>Enter Sex</option>
                    <option value='M'>Male</option>
                    <option value='F'>Female</option>
                    <option value='Other'>Other</option>
                  </select>
                  {
                    errors.sex && touched.sex ?
                      <p className='text-danger'>{errors.sex}</p>
                      : null
                  }
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 row">
                <label for="inputMobile" className="col-sm-2 col-form-label">Mobile</label>
                <div className="col-sm-10">
                  <input type="text"
                    name='mobile'
                    className="form-control mx-3"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="inputMobile"
                    pattern="[6789][0-9]{9}"
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 row">
                <label for="inputGov" className="col-sm-4 col-form-label">Govt Issue ID</label>
                <div className="col-sm-8">
                  <select id='inputGov'
                    name='gorvType'
                    value={values.gorvType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"

                  >
                    {/* <option>ID Type</option> */}
                    {/* <option value='Adhar'>Adhar</option>
                    <option value='PanCard'>Pan Card</option> */}
                    {
                      govIdDetail.map((selItem) => {
                        return (
                          <option id='selectdata'>{selItem}</option>
                        )
                      })
                    }
                  </select>
                </div>

              </div>
            </div>
            <div className='col-md-4'>
                  <input type="text"
                    name='gorvValue'
                    className="form-control"
                    id="inputGov"
                    value={values.gorvValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    pattern="[01][0-9]{9}"

                  />


            </div>
          </div>
          <div className='row py-1 p-4'>
            <h6 className='py-2' style={{ textDecoration: "underline" }}>Contact Details</h6>
            <div className='col-4'>
              <div className='row'>
                <div className='col-7'>
                  <div className="mb-1 row">
                    <label for="inputGov" className="col-sm-5 col-form-label">Guardian Details</label>
                    <div className="col-sm-7">
                      <select id='inputGov'
                        name='guardian'
                        className="form-control"
                        value={values.guardian}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Enter Label</option>
                        <option>Father</option>
                        <option>Mother</option>
                        <option>Brother</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='col-5'>
                  <input type="text"
                    name='gName'
                    value={values.gName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="form-control"
                    placeholder='Enter Guardian Name' />
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="text"
                    className="form-control"
                    name='email1'
                    value={values.email1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Enter Email'
                    id="inputEmail" />
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputEemergency" className="col-sm-6 col-form-label"> Emergency Contact Number</label>
                <div className="col-sm-6">
                  <input type="text"
                    className="form-control"
                    name='contact'
                    value={values.contact}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Enter Emergency No.'
                    id="inputEemergency"
                    pattern="[6789][0-9]{9}"
                  />
                </div>
              </div>
            </div>

          </div>
          <div className='row py-1 p-4'>
            <h6 className='py-2' style={{ textDecoration: "underline" }}>Address Details</h6>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputAddress" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-10">
                  <input type="text" name='address'
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control" id="inputAddress" placeholder='Enter Address' />
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputState" className="col-sm-2 col-form-label">State</label>
                <div className="col-sm-10">
                  <select id='inputState'
                    name='states'
                    value={values.states}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control">
                    {
                      state.map((elem) => {
                        return (
                          <option>{elem}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputCity" className="col-sm-2 col-form-label">city</label>
                <div className="col-sm-10">
                  <select id='inputCity'
                    name='city'
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}

                    className="form-control">
                    {
                      uttData.map((elems) => {
                        return (
                          <option>{elems}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputContry" className="col-sm-1 col-form-label">Country</label>
                <div className="col-sm-8">
                  <select id='inputContry'
                    name='allCountry'
                    value={values.allCountry}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control">
                    {
                      country.map((elems) => {
                        return (
                          <option>{elems}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputAddress" className="col-sm-2 col-form-label">Pincode</label>
                <div className="col-sm-10">
                  <input type="number"
                    name='pincode'
                    value={values.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    id="inputAddress" placeholder='Enter Pincode' />
                </div>
              </div>
            </div>
          </div>
          <div className='row py-1 p-4'>
            <h6 className='py-2' style={{ textDecoration: "underline" }}>Other Details</h6>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputPation" className="col-sm-2 col-form-label">Occupation</label>
                <div className="col-sm-10">
                  <input type="text"
                    className="form-control"
                    name='occup'
                    value={values.occup}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="inputPation"
                    placeholder='Enter Address' />
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputReligion" className="col-sm-2 col-form-label">Religion</label>
                <div className="col-sm-10">
                  <input type="text"
                    className="form-control"
                    name='religion'
                    value={values.religion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="inputReligion"
                    placeholder='Enter Address' />
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputMArital" className="col-sm-2 col-form-label">Marital Status</label>
                <div className="col-sm-10">
                  <select id='inputMArital'
                    name='marriedSt'
                    value={values.marriedSt}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                  >
                    <option>Enter Marital Status</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputBlood" className="col-sm-4 col-form-label">Blood Group</label>
                <div className="col-sm-8">
                  <select id='inputBlood'
                    name='bloodGroup'
                    value={values.bloodGroup}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                  >
                    <option>Group</option>
                    <option>A</option>
                    <option>A</option>
                    <option>AB</option>
                    <option>O</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="mb-3 row">
                <label for="inputNationality" className="col-sm-3 col-form-label">Nationality</label>
                <div className="col-sm-9">
                  <select id='inputNationality'
                    name='nationality'
                    value={values.nationality}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control">
                    <option>Indian</option>
                    <option>Russian</option>
                    <option>American</option>
                    <option>Soudian</option>
                    <option>Pakistani</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-8'></div>
            <div className='col-2 text-center '>
              <button type='suumit' className='btn btn-danger px-5'>CANCEL <br />(ESE)</button>
              {/* <input type='submit' value="SUBMIT" className='btn btn-danger px-3' /> */}
            </div>
            <div className='col-2 text-center'>
              <button type='suumit' className='btn btn-success text-center px-5'>SUBMIT<br />(%S)</button>
              {/* <input type='submit' value="SUBMIT" className='btn btn-success text-center px-3' /> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
