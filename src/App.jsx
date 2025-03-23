import { useState } from 'react'
import HeaderMT from './pages/header/Mobile-tablet/headerMT'
import HeaderD from './pages/header/Desk/headerDesktop'
import { Stack } from "@mui/material";
import Main from './pages/main';
import Footer from './pages/Footer';
function App() {


  return (
    <>
      <Stack display={{xs: 'block', lg: 'none'}}>
      <HeaderMT/>
      </Stack>
    
      <Stack display={{xs: 'none', lg: 'block'}}>
      <HeaderD/>
      </Stack>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
