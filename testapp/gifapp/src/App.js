import "./App.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

//async lets you use word "await" in function

function App() {
	const [text, setText] = useState("");
	const [gif, setGif] = useState([]);

	async function search(text) {
		const key = "H1aDzfqcQU2fQ7iKIqdWb1I982EAqNMC";
		const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${text}&limit=25&offset=0&lang=en`;
		const r = await fetch(url);
		const j = await r.json();
		console.log(j);
		setGif(j.data);
	}

	return (
		<div className="App">
			<div className="searchBar">
				<TextField //uses MUI text field, outlined variant has a nice animation
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					onChange={(e) => setText(e.target.value)}
					value={text}
					onKeyPress={(e) => {
						// console.log(e); //This helps us debug and know to use "Enter" instead of "enter"
						if (e.key === "Enter") search(text);
					}}
				/>
				<Button
					variant="outlined"
					size="large"
					onClick={(e) => search(text)}>
					Search
				</Button>
			</div>
			<div className="gifs">
				{gif.map((gif, i) => {
					console.log(i);
					return <img key={i} src={gif.images.fixed_height.url}></img>;
				})}
			</div>
		</div>
	);
}

export default App;
