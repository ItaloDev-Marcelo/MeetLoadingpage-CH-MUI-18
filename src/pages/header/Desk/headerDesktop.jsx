import React from 'react'
import TMLImage from '../../../assets/desktop/image-hero-left.png'
import TMRimage from '../../../assets/desktop/image-hero-right.png'
import Logo from '../../../assets/logo.svg'
import { Stack } from "@mui/material";
import HeroText  from '../../../components/heroText'

export default function HeaderD() {
  return (
    <Stack component='header' id='HeaderD' >
         <Stack component='nav' display='flex' flexDirection='row' padding='2em 0' justifyContent='center' alignContent='center'>
           <img src={Logo} alt='' className='logo'/>
         </Stack>
         <Stack component='div' id='HeroArea'>
            <img src={TMLImage} alt='' className='Hero-Img'/> 
             <HeroText />
            <img src={TMRimage} alt='' className='Hero-Img'/>
         </Stack>
    </Stack>
  )
}
