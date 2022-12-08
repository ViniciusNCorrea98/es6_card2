import './App.css';
import closeIcon from './assets/877932.png';
import alertIcon from './assets/alert.png';

function App() {
  return (
    <div className="card">
      <img src={closeIcon} alt = 'Icone Fechar' className='closeModal'/>
      <img src={alertIcon} alt = 'Icone Alerta' className='alerta'/>
      <span>Você será deslogado <br/> imediatamente</span>
      <button>Extender login</button>
    </div>
  );
}

export default App;
