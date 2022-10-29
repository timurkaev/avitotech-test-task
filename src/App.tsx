import React from "react";
import { Route, Switch } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { NewsPage } from "./pages/NewsPage";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./pages/404";

export const App: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/news/:id"} component={NewsPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Layout>
  );
};
