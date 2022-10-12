import './App.css';
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList';
function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <StarshipList />
      </div>
    </>
  );
}

export default App;
