
import './App.js';
import './style.css';
import footer from './images/little.png';

function Menu() {
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
    return (
        <>
        <div>

            <h1 className='heading'>
                OUR DAILY MENU
            </h1>
            <p className='heading'>At our restaurant our customers are our priority please expect the 
                best of the best service from us
            </p>
            </div>
                    <div className="background-style">
            <ul className="unordered-menu">
                <li>Matooke</li>
                <li>Irish</li>
                <li>Rice</li>
                <li>Posho</li>
                <li>Cassava</li>
            </ul>
            <ol className="ordered-menu">
                <li>Burger</li>
                <li>Grilled Chicken</li>
                <li>Pasted Fish</li>
                <li>nyama choma</li>
                <li>Goats meat</li>
            </ol>
        </div>

        <footer style={footerStyle}>
    <img src={footer} alt="footer" className="footer" />

    <div className="flex-container">
            <div>

            </div>
            <div>
                <p>Copyright little Lemon</p>
            </div>
           
        </div>
      </footer>
        </>
    );
}

export default Menu;