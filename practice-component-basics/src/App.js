import keyConceptsImage from './assets/images/key-concepts.png';
import Header from './components/Header';
import Concepts from './components/Concept/Concepts';

function App() {
  return (
    <div>
      <Header 
        keyConceptsImage = {keyConceptsImage}
      />
      <Concepts />
    </div>
  );
}

export default App;
