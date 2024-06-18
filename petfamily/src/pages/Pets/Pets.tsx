import { PetCard } from "../../components/PetCard";
import FilterAnimalsForm from "../../components/FilterAnimalsForm";
import { useEffect, useState } from "react";
import { getPets } from "../../services/petsService";
import { Pet } from "../../types/models/Pet";

const Pets = () => {
  const [pets, setPets] = useState<Pet[] | null>([]);

  useEffect(() => {
    const fetch = async () => {
      const petsResponse = await getPets();

      setPets(petsResponse);
    };

    //fetch();
  }, []);

  return (
    <section className="flex px-5 py-6 flex-row gap-14">
      <FilterAnimalsForm />

      <ul className="w-full grid gap-8 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <li>
          <PetCard
            key={1}
            pet={{
              id: "1",
              nickName: "123",
              description: "123",
              contactPhoneNumber: "123",
            }}
          />
        </li>

        <li>
          <PetCard
            key={1}
            pet={{
              id: "1",
              nickName: "123",
              description: "123",
              contactPhoneNumber: "123",
            }}
          />
        </li>

        <li>
          <PetCard
            key={1}
            pet={{
              id: "1",
              nickName: "123",
              description: "123",
              contactPhoneNumber: "123",
            }}
          />
        </li>

        <li>
          <PetCard
            key={1}
            pet={{
              id: "1",
              nickName: "123",
              description: "123",
              contactPhoneNumber: "123",
            }}
          />
        </li>
      </ul>
    </section>
  );
};

export { Pets };
