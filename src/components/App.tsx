import '../assets/WestwoodSans-Regular.ttf';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import AppWrapper from './shared/AppWrapper';
import HomePage from '../pages/HomePage';
import AnooshkhaPage from '../pages/AnooshkhaPage';
import JeffreyPage from '../pages/JeffreyPage';
// Import other person pages here

function App(): JSX.Element {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AnooshkhaPage" element={<AnooshkhaPage />} />
          <Route path="/JeffreyPage" element={<JeffreyPage />} />
          {/* Add routes for other person pages */}
          {/* For example:
          <Route path="/Person2Page" element={<Person2Page />} />
          <Route path="/Person3Page" element={<Person3Page />} />
          */}
        </Routes>
    </Router>
  );
}

export default App;
