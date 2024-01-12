import React from 'react'
import Header from '../Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Components/Banner';
import Intro from '../Components/Intro';
import Flip from '../Components/Flip';
import ContectForm from '../Components/ContectForm';


function Home() {
const URL = 'https://popsmokemedia.com/diplomatic-turbulence-blinkens-return-to-the-middle-east-amidst-a-storm-of-red-sea-lebanon-iran-and-iraq-attacks'
  return (
   <>
   <Header />
   <Banner />
   <Intro />
   <Flip />
   <ContectForm />
  
  

  
   </>
  )
}

export default Home