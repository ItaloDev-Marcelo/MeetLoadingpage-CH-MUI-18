import React from 'react'
import TMLImage from '../../../assets/desktop/image-hero-left.png'
import TMRimage from '../../../assets/desktop/image-hero-right.png'
import Logo from '../../../assets/logo.svg'
import { Stack } from "@mui/material";
import HeroText  from '../../../components/heroText'

export default function HeaderD() {
  return (
    <Stack >
         <Stack component='div'>
           <img src={Logo} alt=''/>
         </Stack>
         <Stack component='div' className='Hero'>
            <img src={TMLImage} alt='' className='Hero-Img'/> 
             <HeroText />
            <img src={TMRimage} alt='' className='Hero-Img'/>
         </Stack>
    </Stack>
  )
}
