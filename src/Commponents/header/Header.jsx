import React from "react"
import './Header.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Header = ({changeTheme,currentTheme}) => {
 
  return (
    <>
    
      <section className='head'>
        <div className='container d_flex'>
          <div className='left'>
            <i className='fa fa-phone'></i>
            <label> +88012 3456 7894</label>
            <i className='fa fa-envelope'></i>
            <label> support@ui-lib.com</label>
          </div>
          <div className='right RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            
            <select  >
  <option selected>Select Country</option>
  <option value="1">Nepal</option>
  <option value="2">🏳️‍⚧️ Other country </option>
  </select>
  <label onClick={changeTheme} className="color-mode"> { currentTheme === "dark" 
  ? (
<WbSunnyIcon className="sun"/>                ) : (
                <DarkModeIcon className="moon"/>)}</label>
  


          </div>
        </div>
      </section>
    </>
  )
}

export default Header