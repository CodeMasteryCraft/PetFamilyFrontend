import axios from "axios";
import { PetCard } from "../components/PetCard";
import { Envelope } from "../types/Envelope";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { getPets } from "../services/petsService";

export type Pet = {
	id: string;
	nickName: string;
	description: string;
	city: string;
	street: string;
	building: string;
	index: string;
	contactPhoneNumber: string;
	createdDate: Date;
};

const Pets = () => {
	const [pets, setPets] = useState<Pet[] | null>([]);

	useEffect(() => {
		const fetch = async () => {
			const petsResponse = await getPets();

			setPets(petsResponse);
		};

		fetch();
	}, []);

	return (
		<section className="w-full pt-7 grid gap-8 grid-cols-3">
			{pets?.map((p) => (
				<PetCard key={p.id} pet={p} />
			))}
		</section>
	);
};

export { Pets };
