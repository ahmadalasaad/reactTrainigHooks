import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalNav from './components/GlobalNav';
import MoviesList from './pages/MoviesList';

function App() {
  return (
    <div className="App">
      <GlobalNav/>
      <MoviesList/>
    </div>
  );
}

export default App;
