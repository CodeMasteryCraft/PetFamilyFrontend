import { Link } from "react-router-dom";
import { Tab, TabList, Tabs } from "@chakra-ui/react";

const App = () => {
  const tabData = [
    {
      title: "Домашние животные",
      link: "/",
    },
    {
      title: "Волонтёры",
      link: "/volunteers",
    },
    {
      title: "Новости и объявления",
      link: "/applications",
    },
  ];

  const selectedStyle = {
    color: "black",
    borderBottom: "2px solid var(--primary)",
    bg: "rgb(244 244 245)",
  };

  return (
    <Tabs colorScheme="primary" isFitted className="text-slate-400">
      <TabList>
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            as={Link}
            to={tab.link}
            _selected={selectedStyle}
            _focus={{ boxShadow: "none" }}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default App;
