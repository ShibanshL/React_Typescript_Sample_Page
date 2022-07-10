import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'


function Sub() {
    var Email = 'JohnDoe@gmail.com'
    var Password = 'Password123'
    var id = (new Date()).getTime()
    var daa:any = []

    const handleSubmit = async () => {
      var res =  await fetch('http://jsonplaceholder.typicode.com/users')
      var info = await res.json()
      return info
  }

    const {isLoading,data,isError,error} = useQuery('My_hero',handleSubmit)
   
  if(isLoading){
    return <h2>Loading ...</h2>
  }

  else if(isError){
    return <h2>There's some kind of error</h2>
  }

  // console.log('D ',data)


  // else{
    return( 
    <>
        <div>Sub</div>
       <h2>{data?.map((e:any) => {return(
        <>
        <h2 key={e.name}>{e.name}</h2><br></br>
        </>
       )})}</h2>
    </>
  )
  // }
}

export default Sub