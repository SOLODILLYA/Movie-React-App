import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MovieInfo from './MovieInfo';

function App() {
  return (
    <div>
      <h1 className="app-heading">Favorite Movie</h1>
      <MovieInfo
        title="Inception"
        director="Christopher Nolan"
        year="2010"
        studio="Warner Bros. Pictures"
        poster="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
        description="A skilled thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a C.E.O."
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
