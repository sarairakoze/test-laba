import logo from './color-studios.png';
import './App.css';

function App() {
  return (
  <div>
    
    <div>
      <header className="App-header">
      <img src={logo} className="logo-colors" alt="Logo du studio"/>
      </header>
    </div>
    
    <div> 
      
     
      <div className="main">

      <div className="menu">
      <div className="corps-site">
      <ul className="home" >
          <li><a className="accueil" href="">Accueil</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Travaux</a></li>
          <li><a href="">A propos</a></li>
          <li><a href="">Contact</a></li>
          
        </ul>
        </div>
      </div>
      
        
        <div className="logofond">
          <img src="Color studios.png"/>
        </div>

        <div className="slogan">Sky is the limit</div>
      </div>
      

      
    </div>
    
  </div>
  );
}


export default App;
