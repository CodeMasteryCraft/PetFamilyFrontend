import { useState } from "react";
import PetCard from "./components/PetCard";

function App() {
	const [counter] = useState(2);

	return (
		<div className="h-screen flex flex-col gap-8 justify-center items-center bg-slate-300">
			<PetCard counter={counter} />
		</div>
	);
}

export default App;
