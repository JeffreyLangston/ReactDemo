import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import StorePicker from "./storePicker";
import App from "./App";

import NotFound from "./NotFound";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route component={StorePicker} exact path="/" />
			<Route component={App} exact path="/store/:storeId" />
			<Route component={NotFound} exact />
		</Switch>
	</BrowserRouter>
);

export default Router;
