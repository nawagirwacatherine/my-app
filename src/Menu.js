
import './App.js';
import './style.css';

function Menu() {
    return (
        <>
        <div>

            <h1>
                OUR DAILY MENU
            </h1>
            <p>At our restaurant our customers are our priority please expect the 
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
        </>
    );
}

export default Menu;