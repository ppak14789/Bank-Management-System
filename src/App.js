import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
<>
<Navbar/>
<Homepage/>
<Footer/>

</>
  );
}

export default App;
