import React, { useEffect, useState } from 'react'
import {UserContext} from '../UserContext'
import {useStore, useSTore1} from '../store'
import { Group,Text,TextInput } from '@mantine/core'


// interface props{
//   log:boolean
//   setLog:React.Dispatch<React.SetStateAction<boolean>>
// }

function Test() {
    // if(data == undefined){
    //   return <>No issue</>
    // }
    // else{
      const nums = useStore(state => state.nums)
      const setNums = useStore(state => state.setNums)
      const setLogT =  useSTore1(state => state.setLogT)
      const setLogF =  useSTore1(state => state.setLogF)
      const log = useSTore1(state => state.log)

      localStorage.setItem('daa',JSON.stringify(false))

      useEffect(()=>{
        var g = log
        localStorage.setItem('daa',JSON.stringify(log))
      },[log])

      return (
        <Group style={{background:'rgba(255,255,255,0.2)', backdropFilter:'blur(10px)', borderRadius:'10px'}} p='10px' position='apart'  direction='row' align='apart' grow>
          <Text style={{}} align='left'>Just checking</Text>
          <Group style={{}} direction='row' position='right' >
            <Text>Your Name :</Text>
            <TextInput
              placeholder="Your name"
              // label="Full name"
              radius="md"
              required
            />
          </Group>
        </Group>
      )
    // }
}

export default Test