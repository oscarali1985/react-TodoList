import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home(props) {
	const [word, setWord] = useState("");
	const [words, setWords] = useState([]);

	const handleSubmit = () => {
		setWords([...words, word]);
		setWord("");
	};
	const handleDelete = wordToDelete => {
		const newWords = words.filter((word, index) => {
			return index != wordToDelete;
		});
		setWords(newWords);
	};
	return (
		<div className="d-flex flex-column justify-content-center p-3">
			<div className="row">
				<input
					type="text"
					value={word}
					onChange={e => setWord(e.target.value)}
				/>
				<button
					type="button"
					className="btn btn-primary"
					onClick={handleSubmit}>
					{"agregar"}
				</button>
			</div>
			<div className="col">
				<ul>
					{words.map((word, index) => {
						return (
							<li
								key={index}
								onClick={event => handleDelete(index)}>
								{word}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
