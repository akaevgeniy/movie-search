import { useState } from 'react';
// Добавили компонент Header с логотипом проекта
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Contacts from './Contacts/Contacts';
import About from './About/About';
import MyList from './MyList/MyList';
import MoviePage from './MoviePage/MoviePage';
import Menu from './Menu/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  const [title, setTitle] = useState('');

  const items = [
    { value: 'Search movie', href: '/' },
    { value: 'Watch List', href: '/list' },
    { value: 'About us', href: '/about' },
    { value: 'Contacts', href: '/contacts' },
  ];

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Menu items={items} header="Menu" />
        <Switch>
          <Route exact path="/">
            <Main movie={title} changeInput={handleTitleChange} />
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
            <MoviePage />
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
