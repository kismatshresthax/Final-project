import { DeliveryDining } from '@mui/icons-material'
import React from 'react'
import Categories from './Categories'
import Deliver from './deliver/Deliver'
import Electrical from './Electrical/Electrical'
import LatestCard from './flashDeal/LatestCard'
import SliderHome from './SlideCard/SliderHome'

export const HomePage = () => {
  return (
<>
<section className="home">
  <div className="container d_flex">
<Categories/>
<SliderHome/>

  </div>
</section>
<LatestCard/>
<Electrical/>
<Deliver/>


</> 
 )
}
