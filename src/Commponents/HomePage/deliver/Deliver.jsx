import React from "react"
import './Deliver.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const Deliver = () => {
  const data = [
    {
      cover:<LocalShippingIcon fontSize="large" />,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <CreditCardIcon fontSize="large"/>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover:<SecurityIcon fontSize="large"/> ,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <SupportAgentIcon fontSize="large"/>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div  className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Deliver