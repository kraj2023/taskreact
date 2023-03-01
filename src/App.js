import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import First from './component/First';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './component/Main';
import LoginPage from './component/LoginPage';
import RegistrationPage from './component/RegistrationPage';
import Website from './component1/Website';

function App() {
  return (
   <>

   <Router>
   <Main />
   <Routes>
   <Route path='/loginpage' element={<LoginPage />} />
   <Route path='/registrationpage' element={<RegistrationPage />} />
   <Route path='/first' element={<First />} />
   <Route path='/website' element={<Website />} />
   <Route path='/website' element={<Website />} />
   </Routes>
   </Router>
   </>
  );
}

export default App;
