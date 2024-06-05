import { Icon } from "@iconify/react/dist/iconify.js";

const Header = () => {
	return (
		<header className="w-full flex flex-row justify-between px-4 py-3 items-center bg-red-400 shadow-xl">
			<Icon width="52" height="52" icon="mdi:cat" />
			<span className="text-5xl text-white">Pet Family</span>
			<Icon width="52" height="52" icon="mdi:cat" />
		</header>
	);
};

export { Header };
