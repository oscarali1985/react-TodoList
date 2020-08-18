import React, { useState } from "react";

//include images into your bundle

//create your first component
export function TodoList(props) {


		this.state = {
			newItem: "",
			list: []
		};

	const updateInput(key, value) {
		//update
		this.setState({
			[key]: value
		});
	};

	constaddItem() {
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.newItem.slice()
		};

		//Copy list
		const list = [...this.state.list];

		//add item
		list.push(newItem);

		//update state
		this.setState({
			list,
			newItem: ""
		});
	};

	deleteItem(id) {
		const list = [...this.state.list];

		//filter list
		const updateList = list.filter(item => item.id !== id);

		this.setState({ list: updateList });
	};

	countTask() {
		let msj = `Ha realizado todas las tareas pendientes`;
		let task = this.state.list.length;

		task > 0 ? (msj = `Tiene ${task} pendientes`) : msj;

		return msj;
	};

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
