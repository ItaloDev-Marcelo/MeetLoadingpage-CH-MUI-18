import React from 'react'
import { Box,  Stack, Typography, Button} from "@mui/material";

export  default function HeroText()  {
  return (
    <Stack component='div' className='hero-text' >
        <Typography component='h1' fontSize='3em' padding='0 .5em' lineHeight='45px'>Group Chat for Everyone
        </Typography>
        <Typography component='p' padding={{xs: '1.2em 0', lg: ' 1.5em 4em'}}>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</Typography>
        <Box component='div' display='flex' flexDirection={{xs: 'column', lg: 'row'}} 
         justifyContent='center' alignItems='center'>
         <Button sx={{backgroundColor: 'rgb(93, 175, 167)', color:'#fff',marginRight: '1em', borderRadius: '25px', textTransform: 'capitalize', height: '40px', marginBottom: {xs: '1em', lg: '0'}, padding:'0 1em ' , width: {xs: '150px', lg: 'auto'} }}>Download v1.3</Button>
         <Button sx={{backgroundColor: ' rgb(175, 130, 175)', color:'#fff', borderRadius: '25px',  textTransform: 'capitalize', height: '40px', padding:{xs: '0', lg: '0 1em'}, width: {xs: '100px', lg: 'auto'} }}>What is it?</Button>
        </Box>
    </Stack>
  )
}
