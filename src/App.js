import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Data from './Data';

function App() {
  let cards = Data.map(card => {
    return(<Card 
     key={card.key} 
     card={card}
    />)
  })

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
