import React from 'react'
import {useStore, useSTore1} from '../store'
import {Grid, Group, Text} from '@mantine/core'

// interface props{
//     log:boolean
//     setLog:React.Dispatch<React.SetStateAction<boolean>>
// }

function Pretest() {
  const log = useSTore1(state => state.log)

  return (
    <Grid align='row' grow p='10px'>
      <Grid.Col style={{background:'rgba(255,255,255,0.1)', backdropFilter:'blur(10px)', borderRadius:'10px'}} p='10px' span={6}>
        <Text align='center'>First One</Text>
        <Grid.Col m='10px'>
          <Group p='10px'><Text align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt quod unde magnam et ea nisi atque, ad sapiente. Ea labore doloribus vel, mollitia iusto, dolorem temporibus obcaecati repellat culpa autem nihil quibusdam. Vitae minus laborum distinctio consequuntur dignissimos aperiam? Deserunt ad corrupti eum fugiat eligendi dolorum adipisci obcaecati magnam architecto molestiae animi asperiores, vel, modi, recusandae libero? Placeat eligendi temporibus cupiditate laborum facilis accusantium doloribus ipsa, deleniti alias quo hic eos voluptas a similique quis. Repellendus nobis quae laborum explicabo, esse modi facilis repudiandae optio ipsum iste accusantium corporis amet cum praesentium incidunt iure? Ducimus autem molestias enim dolores!</Text></Group>
          <Group p='10px'><Text align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis tempora ullam quo aperiam vero quidem, accusantium autem, ex cupiditate incidunt labore eius, delectus iusto voluptate facilis dolorem impedit hic dolores veritatis accusamus laudantium quasi harum? Officiis illo adipisci nesciunt nobis possimus nam ad aliquid veritatis fuga laborum consectetur ipsa quas vitae, provident autem aliquam aspernatur dolorem commodi quam. Natus minima optio perspiciatis. Voluptatibus quo quasi quod veritatis possimus voluptate quisquam esse quia ipsum saepe, eligendi iste, eos magni expedita minus nostrum explicabo. Maiores tempora ut assumenda est officiis non qui maxime eos, minima obcaecati possimus alias error facilis vel!</Text></Group>
        </Grid.Col>
      </Grid.Col>
      <Grid.Col style={{background:'rgba(255,255,255,0.1)', backdropFilter:'blur(10px)', borderRadius:'10px'}} p='10px' span={6}>
      <Text align='center'>Second One</Text>
        <Grid.Col m='10px'>
          <Group p='10px'><Text align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, cumque impedit ad sapiente beatae sequi repellendus dolores totam doloribus nesciunt architecto placeat libero corporis voluptatibus nulla, a enim blanditiis. Enim pariatur consequatur perferendis, nostrum totam rem vero consequuntur! Aliquam optio aliquid qui odit consectetur consequatur iusto expedita mollitia aspernatur laudantium odio laborum dolorum ullam rem, asperiores non tempore illum quisquam ratione cupiditate tenetur facilis assumenda? Earum, reprehenderit a rerum libero expedita commodi magnam id laudantium sint nobis dolores. Laboriosam praesentium id obcaecati assumenda magnam maxime saepe, totam accusantium soluta sunt perferendis expedita possimus nihil vel nostrum distinctio omnis quos animi.</Text></Group>
          <Group p='10px'><Text align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex quis tenetur sint voluptatibus, nulla nam repellendus. Quaerat, excepturi id quas impedit exercitationem eos reprehenderit nesciunt, facilis, sed delectus in ad totam. Debitis deleniti rerum explicabo quam ab reprehenderit, laborum iure! Accusamus optio alias illum beatae aspernatur eos quibusdam, cumque iure? Ad voluptate tempore et, eaque unde quia. Laborum ducimus dolorem quam repellat omnis? Architecto ipsa fugit necessitatibus nisi odit, a similique tempore neque obcaecati dolores voluptatum debitis aliquam adipisci quisquam quo voluptate maxime nemo nam! Earum unde quis, explicabo recusandae ut totam impedit soluta. Totam, ducimus impedit. Inventore, numquam?</Text></Group>
        </Grid.Col>
      </Grid.Col>
    </Grid>
  )
}

export default Pretest