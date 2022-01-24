import React from 'react';
// Добавили компонент Header с логотипом проекта
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import api from '../utils/api';
function App() {
  const [title, setTitle] = React.useState('');
  const [searchArray, setSearchArray] = React.useState({});
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    api.movieList(title).then((data) => setSearchArray(data));
    console.log(searchArray);
  }
  return (
    <div className="App">
      <Header />
      <Main movie={title} functionSubmit={handleSubmit} changeInput={handleTitleChange} moviesList={searchArray} />
      <Footer />
    </div>
  );
}

export default App;
