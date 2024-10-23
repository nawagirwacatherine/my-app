import './App.js';
import image3Images from './images/image3.jpg';

function Login() {
    const backgroundStyle={

         backgroundImage:`linear-gradient(rgba(0,0,0,0.2),#009688),url(${image3Images})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    }
        return(
            <div style={backgroundStyle}></div>
        )
    

}

export default Login;