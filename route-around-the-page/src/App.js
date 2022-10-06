import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

import './App.css';

const About = () => {
  return <h1>This is the About page.</h1>;
};
const Contacts = () => {
  return <h1>This is the Contacts page.</h1>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />;
        <Route path='contacts' element={<Contacts />} />;
      </Route>
    </Routes>
  );
}

export default App;
