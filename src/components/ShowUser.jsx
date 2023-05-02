import React, { useEffect, useState } from 'react'

const ShowUser = () => {

  const [collection,setCollection]=useState([])

  useEffect(()=>{
    const url='https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/student'
    fetch(url,{}).then((response)=>
    response.json()
    ).then((item)=>
    setCollection(item)
    ).catch((err)=>
    console.log('error'))
  },[])
console.log(collection)


  return (
    <div>
      <div className='container-fluid'>
        <div className='row py-3'>
          <div className='col-sm-12'>
            <h4 className='text-center'>All User Data</h4>
          </div>
          <div className='col-sm-12'>
            <table className='table'>
              <thead>
                  <tr className=''>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age/sex</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>G. Issue Id</th>
                    <th>G. Issue value</th>
                    <th>Guardian Type</th>
                    <th>Guardian Name</th>
                    <th>Email</th>
                    <th>Emergency No.</th>
                    <th>Nationality</th>
                  </tr>
              </thead>
              <tbody>
                {
                  collection.map((elem,index)=>{
                    return(
                      <tr>
                        <td>{index+1}</td>
                        <td>{elem.name}</td>
                        <td>{elem.birth}/{elem.sex}</td>
                        <td>{elem.mobile}</td>
                        <td>{elem.address}</td>
                        <td>{elem.gorvType}</td>
                        <td>{elem.gorvValue}</td>
                        <td>{elem.guardian}</td>
                        <td>{elem.gName}</td>
                        <td>{elem.email1}</td>
                        <td>{elem.contact}</td>
                        <td>{elem.nationality}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowUser
