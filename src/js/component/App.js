import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newItem: "",
			list: []
		};
	}

	updateInput(key, value) {
		//update
		this.setState({
			[key]: value
		});
	}

	addItem() {
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.newItem.slice()
		};

		//Copy list
		const list = [...this.state.list];

		//update state
		this.setState({
			list,
			newItem: ""
		});

		newItem.value === "" ? alert(`Ingrese algun valor`) :(

		//add item
		list.push(newItem)

		);
	}

	deleteItem(id) {
		const list = [...this.state.list];

		//filter list
		const updateList = list.filter(item => item.id !== id);

		this.setState({ list: updateList });
	}

	countTask() {
		let msj = `Ha realizado todas las tareas pendientes`;
		let task = this.state.list.length;

		task > 0 ? (msj = `Tiene ${task} pendientes`) : msj;

		return msj;
	}

	render() {
		return (
			<div className="App">
				<div>
					Todo List
					<br />
					<input
						type="text"
						placeholder="type item"
						value={this.state.newItem}
						onChange={e =>
							this.updateInput("newItem", e.target.value)
						}
						onKeyPress={e => {
							e.key === "Enter" ? this.addItem() : null;
						}}
					/>
					<button onClick={() => this.addItem()}>Add</button>
					<br />
					<ul>
						{this.state.list.map(item => {
							return (
								<li key={item.id}>
									{item.value}
									<button
										onClick={() =>
											this.deleteItem(item.id)
										}>
										x
									</button>
								</li>
							);
						})}
					</ul>
					<div>{this.countTask()}</div>
				</div>
			</div>
		);
	}
}

export default App;
