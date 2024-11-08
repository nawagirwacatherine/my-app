import './App.js';
import image3Images from './images/image3.jpg';
import Footer from './Footer';


function Login() {

    const footerStyle = {
        backgroundColor: '#3c4313',  
        color: '#fff', 
        textAlign: 'center',
        padding: '10px 0',
        position: 'relative', 
        width: '100%',
        bottom: '0',
        borderRadius: '10px',
      };
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
            <>
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

{/* <footer style={footerStyle}>
<img src={footer} alt="footer" className="footer" />

<div className="flex-container">
        <div>

        </div>
        <div>
            <p>Copyright little Lemon</p>
        </div>
       
    </div>
  </footer> */}
  {<Footer />}

  </>
        )
    

}

export default Login;