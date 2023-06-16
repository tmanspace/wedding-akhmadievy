import './App.css';
import Gallery from './scenes/Gallery';
import Header from './scenes/Header';
import Hero from './scenes/Hero';
import Leading from './scenes/Leading';
import Story from './scenes/Story';
import Guests from './scenes/Guests';
import Menu from './scenes/Menu';

function App() {
  return (
    <main className="App">
      <Header />
      <Hero />
      <Story />
      <Gallery />
      <Leading />
      <Guests />
      <Menu />
    </main>
  );
}

export default App;
