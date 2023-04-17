import React from 'react';
// npm i @types/react-router-dom -D  要想typscript认识react-router-dom，我们还要安装对应的声明文件
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Film from '../views/Film';
import Cinema from '../views/Cinema';
import Mine from '../views/Mine';
import Details from '../views/Details';

export default function IndexRoute() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/films" component={Film} />
        <Route path="/cinemas" component={Cinema} />
        <Route path="/mine" component={Mine} />
        <Route path="/details/:id" component={Details} />

        <Redirect from="/" to="/films" />
      </Switch>
    </HashRouter>
  );
}
