import { Group,Text } from '@mantine/core'
import React from 'react'
import {IoApps} from 'react-icons/io5'
function Header_M() {
  return (
    <Group style={{}} p='10px' position='right'>
      <Group>
        <Text color='white' weight={400} style={{cursor:'pointer'}}>Gmail</Text>
      </Group>
      <Group>
        <Text color='white' weight={400} style={{cursor:'pointer'}}>Images</Text>
      </Group>
      <Group grow>
        <IoApps width='42px' color='white' style={{cursor:'pointer'}}/>
      </Group>
      <img src='https://lh3.googleusercontent.com/ogw/ADea4I69ABpzu-uAuxPos6Fx39tPHJVh6PLGHS70OMJEhA=s32-c-mo' width='32px' style={{cursor:'pointer',borderRadius:'50%', border:'4px solid black'}}/>
    </Group>
  )
}

export default Header_M