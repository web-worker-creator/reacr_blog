import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, NavLink, Route} from "react-router-dom";
import {AddArticle} from "./components/AddArticle";
import {MainPage} from "./components/MainPage";
import {Article} from "./components/Article";
import {EditArticle} from "./components/EditArticle";

function Menu(){
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Front-end</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact-us">Контакты</NavLink>
                            </li>
                        </ul>
                        <a className="btn btn-success me-3" href="/auth">Войти</a>
                        <a className="btn btn-success" href="/reg">Регистрация</a>
                    </div>
                </div>
            </nav>
        )


}


function App() {
  return (
      <div>
          <BrowserRouter>
              <Menu/>
              <div className="container py-5">
              <Route exact path="/">
                <MainPage/>
              </Route>
              <Route path="/addArticle">
                  <AddArticle/>
              </Route>
                  <Route path="/blog">
                      <Article/>
                  </Route>
                  <Route path="/edit">
                    <EditArticle/>
                  </Route>
              <Route path="/auth">
                  <h1 className="text-center my-3">Вход на сайт</h1>
                  <div className="col-sm-6 mx-auto">
                      <form onSubmit="sendForm(this); return false;">
                          <div className="mb-3">
                              <input name="email" type="email" className="form-control" placeholder="E-mail (Логин)"/>
                          </div>
                          <div className="mb-3">
                              <input name="pass" type="password" className="form-control" placeholder="Пароль"/>
                          </div>
                          <p id="info" hidden>Логин или пароль введены не правильно!</p>
                          <div className="mb-3">
                              <input type="submit" className="form-control btn btn-primary" value="Войти"/>
                          </div>
                      </form>
                  </div>
              </Route>
              <Route path="/reg">
                  <h1 className="text-center my-3">Связаться с нами</h1>
                  <div className="col-sm-6 mx-auto" id="info">
                      <form action="/php/handlerReg.php" onSubmit="sendForm(this); return false;" method="POST">
                          <div className="mb-3">
                              <input name="name" type="text" className="form-control" placeholder="Имя"/>
                          </div>
                          <div className="mb-3">
                              <input name="lastname" type="text" className="form-control" placeholder="Фамилия"/>
                          </div>
                          <div className="mb-3">
                              <input name="email" type="email" className="form-control" placeholder="E-mail (Логин)"/>
                          </div>
                          <div className="mb-3">
                              <input name="pass" type="password" className="form-control" placeholder="Пароль"/>
                          </div>
                          <div className="mb-3">
                              <input type="submit" className="form-control btn btn-primary" value="Зарегистрироваться"/>
                          </div>
                      </form>
                  </div>
              </Route>
              </div>
          </BrowserRouter>
      </div>

  );
}

export default App;
