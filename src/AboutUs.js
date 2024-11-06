import "./style.css"
import footer from './images/little.png';

function AboutPage () {

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
      return(
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
      )

}

export default AboutPage;