import './App.js';
import image4Images from  './images/image4.jpg'
function Menu () {
    const backgroundStyle = {
        backgroundImage:`linear-gradient(rgba(0,0,0,0.2),#009688),url(${image4Images})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
    return(
        <div Style={backgroundStyle}>
            <li>
       <ul> matooke</ul>
       <ul>Irish </ul>
       <ol>burger</ol>
       <ol>grilled chicken</ol>
       <ol> pasted fish</ol>
       </li>
        </div>
    )

}

export default Menu ;