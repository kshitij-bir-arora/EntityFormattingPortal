import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
// learn list and keys in react js

const Content = () => {
  const [items, setItem] = useState([
    {
      id: 1,
      checked: false,
      description: "Cocoa Powder",
    },
    {
      id: 2,
      checked: false,
      description: "chocolate bar",
    },
    {
      id: 3,
      checked: false,
      description: "baby soap",
    },
  ]);

  const handleCheck = (id) => {
    console.log("Key:", { id });
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItem(listItems);
    localStorage.setItem("Shopping List", JSON.stringify(listItems));
  };

  return (
    <main>
      <h3>Learn list and keys</h3>
      {/* display the list in our main section */}
      <ul className='list-group'>
        {/* the way to display the list is using our map functions */}
        {items.map((item) => (
          <li
            className='list-group-item'
            key={item.id}
          >
            <input
              type='checkbox'
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label className='mx-2'>{item.description}</label>
            <FaTrashAlt
              onClick={() => {
                handleDelete(item.id);
              }}
              role='button'
              tabIndex='0'
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
