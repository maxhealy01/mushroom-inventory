import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./pages/Home";
import Shell from "./components/Shell";

// In order for the {StoreProvider} to be accessible, we need a big old reducer function first

const client = new ApolloClient({
	request: (operation) => {
		// we'll need the logic for setting id_token -- related to auth, both in client and server
		const token = localStorage.getItem("id_token");
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : "",
			},
		});
	},
	uri: "/graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Shell />
			</Router>
		</ApolloProvider>
	);
}

export default App;
