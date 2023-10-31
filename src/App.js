import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Trello from './components/Trello';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Banner></Banner>
      <Trello></Trello>
      <Header/>
      <Footer></Footer>
    </div>
  );
}

export default App;
