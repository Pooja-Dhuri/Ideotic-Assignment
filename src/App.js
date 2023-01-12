import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <AllRoutes/>
      <Footer/> */}
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
