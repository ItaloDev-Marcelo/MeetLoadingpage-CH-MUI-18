import React from 'react'
import { Box,  Stack, Typography, Button} from "@mui/material";

export  default function Footer()  {
  return (
    <Stack component='div' className='rodape-area'>
        <Typography component='h4'>Experience more together</Typography>
        <Typography component='p'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</Typography>
        <Button>Download v1.3</Button>
    </Stack>
  )
}
