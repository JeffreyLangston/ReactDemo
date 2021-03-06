import React from "react";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./login";
import base, {firebaseApp} from "../base";


class Inventory extends React.Component {

state = {
	uid: null,
	owner: null
}

	authHandler = async(authData) => {
		const store = await base.fetch(this.props.storeId, {context: this});

		if(!store.owner){
			const path = `${this.props.storeId }/owner`;
			await base.post(path, {
				data: authData.user.uid
			});
		}
		this.setState({
			uid: authData.user.uid,
			owner: store.owner || authData.user.uid
		});


	};

	authenticate = (provider) => {
		const authProvider = new firebase.auth[`${provider}AuthProvider`]();
		firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
	}

	render() {
		if(!this.state.uid){
			return <Login authenticate={this.authenticate}/>;
		}
		return (<div className="inventory">
			<h2>Inventory</h2>
			{Object.keys(this.props.fishes).map(key => <EditFishForm key={key} index={key} fish={this.props.fishes[key]}
				updateFish = {this.props.updateFish}
				deleteFish = {this.props.deleteFish}
			/>)}
			<AddFishForm addFish={this.props.addFish} />
			<button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
		</div>);

	}
}

export default Inventory;
