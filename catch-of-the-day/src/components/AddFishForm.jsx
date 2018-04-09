import React from "react";


class AddFishForm extends React.Component {
	nameRef = React.creatRef();
	priceRef = React.creatRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createFish = (event) =>{
		event.preventDefault();
		const fish={
			image: this.image.value.value,
			name: this.name.value.value,
			price: parseFloat(this.price.value.value),
			status: this.status.value.value,
			desc: this.desc.value.value
		};

	}

	render(){
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" />
				<input name="price" ref={this.priceRef} type="text" placeholder="Price" />

				<select name="status" ref={this.statusRef}>
					<option value="available">Fresh</option>
					<option value="unavailable">Sold out</option>
				</select>

				<input name="image" ref={this.imageRef} type="text" placeholder="Image" />
				<textarea name="desc" ref={this.descRef} placeholder="Desc" />
				<button type="submit">+ Add Fish</button>
			</form>
		);
	}
}

export default AddFishForm;