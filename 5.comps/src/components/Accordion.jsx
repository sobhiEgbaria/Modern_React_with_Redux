import { useState } from "react";
import { FaAngleLeft, FaAngleDown } from "react-icons/fa6";

const Accordion = () => {
  const items = [
    {
      id: 1,
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: 2,
      label: "Can I use Javascript on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: 3,
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    index === expandedIndex ? setExpandedIndex(null) : setExpandedIndex(index);
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = isExpanded ? <FaAngleDown /> : <FaAngleLeft />;
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3  bg-gray-50  border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label} <span className="text-xl">{icon}</span>
        </div>
        <div>
          {isExpanded ? <div className="border-b p-5">{item.content}</div> : ""}
        </div>
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderItems}</div>;
};

export default Accordion;
