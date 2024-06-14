import { Link, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Tab, TabList, Tabs } from "@chakra-ui/react";

const App = () => {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Tabs isFitted>
					<TabList>
						<Tab as={Link} to={"/"}>
							Домашние животные
						</Tab>
						<Tab as={Link} to={"/volunteers"}>
							Волонтёры
						</Tab>
						<Tab as={Link} to={"/applications"}>
							Новости и объявления
						</Tab>
					</TabList>
				</Tabs>
				<Outlet />
			</main>
			<footer />
		</div>
	);
};

export default App;
