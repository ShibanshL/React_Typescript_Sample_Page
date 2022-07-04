import React from 'react'
import { Group,Text,Grid,Button, Input, Anchor } from '@mantine/core'
import {HiSearch} from 'react-icons/hi'
import {FiMic} from 'react-icons/fi'
function Main() {
  return (
   <Grid align={'center'} mt='20px' style={{}}>
    <Grid.Col span={12} mt='8vh' p='20px' style={{}}>
        <Group align='center' position='center'>
            <img src='./googlelogo.png' />
        </Group>
    </Grid.Col>
    <Grid.Col p='10px 450px' span={12}>
        <Group p='5px' position='center' style={{border:'2px solid #303134', borderRadius:'25px'}} grow>
            <Group position='left' p='0 10px'>
                <HiSearch color='white'/>
            </Group>
            <Input width='180px' variant="unstyled"/>
            <Group position='right' p='0 10px'>
                <FiMic color='white'/>
            </Group>
        </Group>
    </Grid.Col>
    <Grid.Col span={12}>
        <Group position='center'>
            <Button  color="dark">Google Search</Button>
            <Button  color="dark">I'm Feeling Lucky</Button>
        </Group>
    </Grid.Col>
    <Grid.Col pb='200px' span={12}>
        <Group position='center' p='0 380px' style={{}}>
            <Text size='sm' color='white'>Google Offered in :</Text>
            <Anchor size='sm'>हिन्दी</Anchor>
            <Anchor size='sm'> বাংলা</Anchor>
            <Anchor size='sm'>తెలుగు</Anchor>
            <Anchor size='sm'>मराठी</Anchor>
            <Anchor size='sm'>தமிழ்</Anchor>
            <Anchor size='sm'>ગુજરાતી</Anchor>
            <Anchor size='sm'>ಕನ್ನಡ</Anchor>
            <Anchor size='sm'>മലയാളം</Anchor>
            <Anchor size='sm'>ਪੰਜਾਬੀ</Anchor>
        </Group>
    </Grid.Col>

   </Grid>
  )
}

export default Main