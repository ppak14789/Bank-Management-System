import logo from './logo.svg';

// import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TelanganaBank from './Components/Home';
import BankHeader from './Components/Home';
import DepositFunds from './Components/DepositFunds';
import WithdrawalFunds from './Components/WithdrawlFunds';


function App() {
  return (
<>

{/* <Homepage/> */}
<BankHeader />
<DepositFunds />
<WithdrawalFunds />
<Footer/>

</>
  );
}

export default App;
