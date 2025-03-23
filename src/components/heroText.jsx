import React from 'react'
import { Box,  Stack, Typography, Button} from "@mui/material";

export  default function HeroText()  {
  return (
    <Stack component='div'>
        <Typography component='h1'>Group Chat for Everyone
        </Typography>
        <Typography component='p'>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</Typography>
        <Box component='div'>
         <Button>Download v1.3</Button>
         <Button>What is it?</Button>
        </Box>
    </Stack>
  )
}
