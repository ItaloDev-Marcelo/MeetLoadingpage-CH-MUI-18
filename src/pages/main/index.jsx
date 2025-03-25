import React from 'react'
import Grid from '@mui/material/Grid2';
import { Stack, Box, Typography } from "@mui/material";
import Img0 from '../../assets/desktop/image-woman-in-videocall.jpg';
import Img1 from '../../assets/desktop/image-women-videochatting.jpg';
import Img2 from '../../assets/desktop/image-men-in-meeting.jpg';
import Img3 from '../../assets/desktop/image-man-texting.jpg';

export default function Main() {
  return (
    <Stack component='section' id='about'    >
       <Box className='grid-container' margin={{xs: '7em 0 2em 0 ', lg: '15em 10em 0 10em'}}  >
           <Grid container rowSpacing={{xs:2, lg: 1}}>
               <Grid size={{xs: 6, md: 3}} paddingBottom={1} >
                  
                  <img src={Img0} alt='' />
                
               </Grid>
               <Grid size={{xs: 6, md: 3}} paddingBottom={1} >
               
                  <img src={Img1} alt='' />
               
               </Grid>
               <Grid size={{xs: 6, md: 3}} >
            
                  <img src={Img2} alt='' />
                 
               </Grid>
               <Grid size={{xs: 6, md: 3}} >
               
                  <img src={Img3} alt='' />
                  
               </Grid>
           </Grid>
       </Box>
       <Box sx={{display:'flex', flexDirection:'column', justifyContent: 'center',textAlign:'center',padding:{xs:'1em',lg: '1em 30em'  }    }}>
          <Typography component='h2' letterSpacing='4px'textTransform='uppercase' fontSize={{xs: '1.1em', lg: '1.2em'}} color='rgb(93, 175, 167)'  padding='1em  0'  >Built for modern use</Typography>
          <Typography component='h3'  padding={{xs: '1em 0.5em', lg: '.5em 1em'}}  fontSize={{xs: '2.5em', lg: '3em'}} lineHeight={{lg: '55px'}}>Smarter meetings, all in one place</Typography>
          <Typography component='p'>Send messages, share files, show your screen, and
             record your meetings — all in one workspace. Control who can join with 
             invite-only team access, data encryption, and data export.</Typography>
       </Box>
        <Stack display='flex' textAlign='center' position='relative' zIndex='1'  top='2em' alignContent='center' alignItems='center' justifyContent='center' >
                <Stack component='div' className='line' height='100px'  width='1px' backgroundColor=' rgb(199, 204, 199)'>
                        </Stack>
                        <Stack component='div' textAlign='center' backgroundColor='white'  color='rgb(175, 130, 175)' display='flex' justifyContent='center' className='circle' width='50px' height='50px'  borderRadius='100%' border='1px solid  rgb(199, 204, 199)'>
                           <strong>02</strong>
                        </Stack>
                </Stack>
    </Stack>
  )
}
