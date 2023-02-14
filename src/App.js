import './App.css';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import NavBar from './components/NavBar/NavBar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <h1 className='text-6xl font-bold'>This is a big big header</h1>
      <p>This is just a paragraph</p>
      <Pricing />
      <AssignmentMarks />
      <PhoneBar />
    </div>
  );
}

export default App;
