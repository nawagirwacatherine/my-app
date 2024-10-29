import './App.js';
import image3Images from './images/image3.jpg';

function Login() {
    const backgroundStyle={

    backgroundImage:`linear-gradient(rgba(2,5,10,0.4),#009688),url(${image3Images})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    }
        return(
            <div style={backgroundStyle}>

<div className="Field">
      <label htmlFor="password">password</label>
      <input
      id="password"
      type="password" />
     </div>

                <div className="Field">
      <label htmlFor="email">email</label>
      <input
      id="email"
      type="email" />
     </div>
     <button type="submit">Submit</button>
            </div>
        )
    

}

export default Login;