import './App.css';
import Header from './components/header/Header';
import MainContent from "./components/main-content/Main-Content"
import { useState } from 'react';
function App() {
  const movies = [];
  const [movieItem, setMovieItem] = useState(movies);

  const addNewExpensesHandler = (data) => {
    setMovieItem([...movieItem, data]);
  };
  function deleteMovie(id) {
    const newData = movieItem.filter((el) => el.id !== id)
    setMovieItem(newData)
  }
  return (
    <div className="App">
      <Header onSubmit={addNewExpensesHandler}></Header>
      <MainContent onClick={deleteMovie} movies={movieItem}></MainContent>
    </div>
  );
}

export default App;
