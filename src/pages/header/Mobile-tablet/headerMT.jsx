import React from 'react'
import TMTopImage from '../../../assets/tablet/image-hero.png'
import Logo from '../../../assets/logo.svg'
import {Stack} from "@mui/material";
import HeroText  from '../../../components/heroText'
export default function HeaderMT() {
  return (
    <Stack>
         <Stack component='div'>
           <img src={Logo} alt=''/>
         </Stack>
         <Stack component='div'>
            <img src={TMTopImage} alt='' className='Hero'/>
         </Stack>
         <HeroText />
    </Stack>
  )
}
