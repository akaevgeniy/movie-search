import React from 'react';
// Добавили компонент Header с логотипом проекта
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Contacts from './Contacts/Contacts';
import About from './About/About';
import MyList from './MyList/MyList';
import MoviePage from './MoviePage/MoviePage';
import Menu from './Menu/Menu';
import * as api from '../utils/api';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  const [title, setTitle] = React.useState('');
  const [findingMovie, setFindingMovie] = React.useState({});
  const items = [
    { value: 'Search movie', href: '/' },
    { value: 'Watch List', href: '/list' },
    { value: 'About us', href: '/about' },
    { value: 'Contacts', href: '/contacts' },
  ];
  //функция, выводящая в консоль ошибку при запросе к АПИ
  const parseError = (err) => {
    console.log(err);
  };

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function getMovieInfo(imdb) {
    api
      .movieImdbSearch({ imdb })
      .then((data) => {
        setFindingMovie(data);
      })
      .catch((err) => parseError(err));
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Menu items={items} header="Menu" />
        <Switch>
          <Route exact path="/">
            <Main movie={title} changeInput={handleTitleChange} moreInfo={getMovieInfo} />
          </Route>
          <Route exact path="/list">
            <MyList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/movie/:id">
            <MoviePage findMovie={findingMovie} />
          </Route>
          <Route path="*">
            <p>Not found</p>
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
