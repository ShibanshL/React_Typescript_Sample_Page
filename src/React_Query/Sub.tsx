import React from 'react'
import { useMutation } from 'react-query'


function Sub() {
    var Email = 'JohnDoe@gmail.com'
    var Password = 'Password123'
    var id = (new Date()).getTime()

    var daa:any = []

    const handleSubmit = async () => {
        var res = await fetch('https://reactfirebasebackend-default-rtdb.firebaseio.com/userDataRecord_1.json')
        var data = await res.json()
        daa = data
        console.log('Data ', daa)
        // const res = await fetch('https://reactfirebasebackend-default-rtdb.firebaseio.com/userDataRecord_1.json',
        //     {
        //         method:'POST',
        //         headers:{
        //            'Content-Type':'application/json'
        //         },
        //         body:JSON.stringify({
        //             Email,Password,id
        //         })
        //     })
    }

  return (
    <>
        <div>Sub</div>
        <button onClick={handleSubmit}>Submit</button>
        <p>
            {/* {daa.map((e:any) => e)} */}
        </p>
    </>
  )
}

export default Sub