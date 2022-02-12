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
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Main />
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
