import React from 'react'
import TMTopImage from '../../../assets/tablet/image-hero.png'
import Logo from '../../../assets/logo.svg'
import {Stack} from "@mui/material";
import HeroText  from '../../../components/heroText'
export default function HeaderMT() {
  return (
    <Stack component='header' id='HeaderMT'>
         <Stack component='nav' display='flex' flexDirection='row' padding='2em 0' justifyContent='center' alignContent='center'  >
           <img src={Logo} alt=''  className='logo'/>
         </Stack>
         <Stack display='flex' justifyContent='center' textAlign='center' >
         <Stack component='div' className='Hero' >
            <img src={TMTopImage} alt='' />
         </Stack>
         <Stack  padding='1em' margin='2em 0  '>
         <HeroText />
         </Stack>
         </Stack>
         <Stack display='flex' textAlign='center' position='relative' top='2em' alignContent='center' alignItems='center' justifyContent='center' >
         <Stack component='div' className='line' height='100px'  width='1px' backgroundColor=' rgb(199, 204, 199)'>
                 </Stack>
                 <Stack component='div' textAlign='center' display='flex' justifyContent='center' className='circle' width='50px' height='50px'  borderRadius='100%' border='1px solid  rgb(199, 204, 199)'>
                    <strong>01</strong>
                 </Stack>
         </Stack>
    </Stack>
  )
}
