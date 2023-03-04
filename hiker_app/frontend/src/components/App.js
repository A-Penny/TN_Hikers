import '../App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      
      <div className='app-footer-container'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
