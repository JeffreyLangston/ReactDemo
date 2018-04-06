import React from "react";
import { render } from "react-dom";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	constructor() {
		super();
	}

	myInput = React.createRef();

	goToStore = event => {
		event.preventDefault();

		const storeName = this.myInput;
	};

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2> Please Enter A Store </h2> <input type="text" required placeholder="Store Name" ref={this.myInput} defaultValue={getFunName()} />{" "}
				<button type="submit"> Visit Store - > </button>
			</form>
		);
	}
}

export default StorePicker;
