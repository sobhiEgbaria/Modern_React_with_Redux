import React from "react";

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
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.label}</div>
            <div>{item.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
