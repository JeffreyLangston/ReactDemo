import React from "react";

const Login = (props) => (
	<nav className="Login">
		<h2>Inventory Login</h2>
		<p>Sign in to maange your store's inventory.</p>
		<button className="facebook" onClick={()=> props.authenticate("Facebook")}>Facebook</button>
	</nav>
);

export default Login;