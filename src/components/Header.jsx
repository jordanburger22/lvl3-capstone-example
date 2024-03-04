import Logo from '../assets/Logo.png'
import VSchoolLogo from '../assets/vschool-logo.avif'

function Header({isFooter}) {
    return ( 
        <div className='header'>
            <img src={Logo}/>
            {isFooter && <img className='vschool-logo' src={VSchoolLogo}/>}
            <h4 className='header--project'>React Course - Level 3 Capstone</h4>
        </div>
     );
}

export default Header;