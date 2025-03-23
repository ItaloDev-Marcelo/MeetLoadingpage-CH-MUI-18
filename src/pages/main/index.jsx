import React from 'react'
import Grid from '@mui/material/Grid2';
import { Stack, Box, Typography } from "@mui/material";
import Img0 from '../../assets/desktop/image-woman-in-videocall.jpg';
import Img1 from '../../assets/desktop/image-women-videochatting.jpg';
import Img2 from '../../assets/desktop/image-men-in-meeting.jpg';
import Img3 from '../../assets/desktop/image-man-texting.jpg';

export default function Main() {
  return (
    <Stack component='section' id='about'>
       <Box className='grid-container'>
           <Grid container spacing={2}>
               <Grid size={{xs: 6, md: 3}}>
                  <img src={Img0} alt='' />
               </Grid>
               <Grid size={{xs: 6, md: 3}}>
                  <img src={Img1} alt='' />
               </Grid>
               <Grid size={{xs: 6, md: 3}}>
                  <img src={Img2} alt='' />
               </Grid>
               <Grid size={{xs: 6, md: 3}}>
                  <img src={Img3} alt='' />
               </Grid>
           </Grid>
       </Box>
       <Box>
          <Typography component='h2'>Built for modern use</Typography>
          <Typography component='h3'>Smarter meetings, all in one place</Typography>
          <Typography component='p'>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</Typography>
       </Box>
    </Stack>
  )
}
