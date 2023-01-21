import './App.css';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';



function App() {
  return (
    <div className='app-container'>
      <div className="App">
      <Header />
      <MainContent />
      </div>
      <div className='app-footer-container'>
      <Footer />
      </div>
    </div>
    
  );
}

export default App;
