// import { useAuth } from "../../providers/AuthProvider";

import { Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { PetCard } from "../../components/PetCard";
import Slider from "react-slick";

const Profile = () => {
  // const { token, role } = useAuth();

  const cardsData = [1, 2, 3, 4, 5, 6];

  const volunteerData = {
    name: "Иван Иванов",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula nibh varius libero congue pharetra. Nulla vitae dui mi. Morbi consequat malesuada felis ac semper. Aliquam vitae euismod nisl. Integer eros velit, volutpat et iaculis eu, vulputate eget orci. Phasellus lacus velit, dapibus non luctus nec, consequat rutrum est. Phasellus semper lacinia justo in vehicula.",
    photo:
      "https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg",
    exp: 5,
    animalsAtHome: 205,
    phone: "+79001111111",
    email: "volunteer@gmail.com",
    socials: {
      inst: "inst.inst",
      tg: "tg.tg",
      tikTok: "tik.tok",
    },
  };

  const sliderSettings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: true,
  };

  // вынести куда-нибудь, много где пригодится
  const getNoun = (number: number, one: string, two: string, five: string) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  };

  return (
    <section className="w-full flex flex-col items-center pt-10 gap-20">
      <div className="flex fle-row gap-12">
        <div className="flex flex-col gap-6">
          <img src={volunteerData.photo} className="w-56 h-60 object-cover" />

          <div className="flex flex-col gap-3">
            <Button colorScheme="red">Помочь волонтеру</Button>
            <Button colorScheme="black" size="sm" variant="outline">
              Редактировать профиль
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold">{volunteerData.name}</h1>

          <p className="max-w-xl">{volunteerData.descr}</p>

          <ul className="list-none">
            <li className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded" />
              Является волонетром {volunteerData.exp}{" "}
              {getNoun(volunteerData.exp, "год", "года", "лет")}
            </li>
            <li className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded" />
              {volunteerData.animalsAtHome}{" "}
              {getNoun(
                volunteerData.animalsAtHome,
                "животное",
                "животных",
                "животных"
              )}{" "}
              животных нашли дом
            </li>
          </ul>

          <ul className="list-none flex flex-row">
            <li className="flex flex-col gap-2 px-3 border-l-2 border-gray-500 border-dashed">
              <div className="flex flex-row items-center gap-2">
                <Icon icon="ph:phone-call" className="w-5 h-5" />
                <span>{volunteerData.phone}</span>
              </div>

              <div className="flex flex-row items-center gap-2">
                <Icon icon="clarity:email-line" className="w-5 h-5" />
                <span>{volunteerData.email}</span>
              </div>
            </li>

            <li className="grid grid-cols-2 gap-2 px-3 border-l-2 border-gray-500 border-dashed">
              <div className="flex flex-row items-center gap-2">
                <Icon icon="uil:instagram" className="w-5 h-5" />
                <span>{volunteerData.socials.inst}</span>
              </div>

              <div className="flex flex-row items-center gap-2">
                <Icon icon="icon-park-outline:tiktok" className="w-5 h-5" />
                <span>{volunteerData.socials.tikTok}</span>
              </div>

              <div className="flex flex-row items-center gap-2">
                <Icon icon="mingcute:telegram-fill" className="w-5 h-5" />
                <span>{volunteerData.socials.tg}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full px-12">
        <h2 className="text-xl font-semibold">Животные, которые ищут дом</h2>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {cardsData.map((card) => (
              <PetCard
                key={card}
                pet={{
                  id: "1",
                  nickName: "123",
                  description: "123",
                  contactPhoneNumber: "123",
                }}
              />
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full px-12">
        <h2 className="text-xl font-semibold">
          Животные, которые пока не могут искать дом и нуждаются в помощи
        </h2>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {cardsData.map((card) => (
              <PetCard
                key={card}
                pet={{
                  id: "1",
                  nickName: "123",
                  description: "123",
                  contactPhoneNumber: "123",
                }}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export { Profile };
