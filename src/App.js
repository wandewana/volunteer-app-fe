import './App.css';
import { EventList } from './components';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>Volunteer Connect</h1>
      </nav>
      <main className="main-content">
        <EventList />
      </main>
    </div>
  );
}

export default App;
