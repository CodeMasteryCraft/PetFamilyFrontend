import { Card, CardBody, Text } from "@chakra-ui/react";

function App() {
	return (
		<div className="h-screen flex flex-col gap-8 justify-center items-center bg-slate-300">
			<Card className="h-1/5">
				<CardBody>
					<Text>View a summary of all your customers over the last month.</Text>
				</CardBody>
			</Card>
			<Card className="h-1/5">
				<CardBody>
					<Text>View a summary of all your customers over the last month.</Text>
				</CardBody>
			</Card>
			<Card className="h-1/5">
				<CardBody>
					<Text>View a summary of all your customers over the last month.</Text>
				</CardBody>
			</Card>
		</div>
	);
}

export default App;
