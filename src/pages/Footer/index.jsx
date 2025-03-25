import React from 'react'
import { Box,  Stack, Typography, Button} from "@mui/material";

export  default function Footer()  {
  return (
     
       
       <Stack component='footer' className='rodape-area' padding={{xs: 1, lg: '0 7em 0 4em'}}
        position='relative' textAlign={{xs: 'center', lg: 'left'}} display='flex'
         flexDirection={{xs: 'column', lg: 'row'}}
          justifyContent={{xs: 'center', lg: 'space-evenly'}} 
          alignItems='center'
          >
        <Typography component='h4' zIndex='1' width={{lg: '400px'}} color='white' margin={{xs: '1.2em 0', lg: '0'}} fontSize={{xs: '1.4em', lg: '2.5em'}}>Experience more together</Typography>
        <Typography component='p'  zIndex='1'  color='white' margin={{xs: '1.2em 0', lg: '-2em 7em 0 0'}} width={{xs: '300px', sm: '500px', lg: '275px'}}>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</Typography>
        <Button sx={{zIndex: '1', backgroundColor: ' rgb(175, 130, 175)', color:'#fff', borderRadius: '25px',  textTransform: 'capitalize', height: '40px', width: '150px', padding:'2em '}}  >Download v1.3</Button>
        </Stack>
     
  )
}
