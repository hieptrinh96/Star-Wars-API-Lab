import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList'
import StarShipPage from './pages/StarshipPage/StarshipPage'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarShipPage />} />
      </Routes>
    </>
  );
}

export default App;
