"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import Products from "./Products";

export default function MainPage() {
  const filters = [
    {
      id: 1,
      name: "Men's",
    },
    {
      id: 2,
      name: "Women's",
    },
    {
      id: 3,
      name: "Watch",
    },
    {
      id: 4,
      name: "Phone",
    },
    {
      id: 5,
      name: "Laptop",
    },
  ];

  const [checkedList, setCheckList] = useState(filters.map((filter) => false));
  const [selected, setSelected] = useState([]);

  const handleCheckboxSelect = (e, filter) => {
    /*    const { id, value, checked } = e.target;
    console.log(id, value, checked); */
    const newCheckList = [...checkedList];

    if (!newCheckList[e]) {
      setSelected([...selected, filter]);
    }

    newCheckList[e] = !newCheckList[e];
    setCheckList(newCheckList);
  };

  const handleClose = (id) => {
    const i = filters.findIndex((item) => item.id == id);

    if (i >= 0) {
      toggleCheckboxByIndex(i);

      setSelected(selected.filter((item) => item.id !== id));
    }
  };

  const toggleCheckboxByIndex = (i) => {
    const newCheckList = [...checkedList];
    newCheckList[i] = !newCheckList[i];
    setCheckList(newCheckList);
  };

  return (
    <div className="grid grid-cols-3 min-h-screen">
      {selected.map((item) => (
        <div key={item.id}>
          {item.name}{" "}
          <span className="cursor-pointer" onClick={() => handleClose(item.id)}>
            x
          </span>
        </div>
      ))}
      <Filter
        handleCheckboxSelect={handleCheckboxSelect}
        checkedList={checkedList}
        filters={filters}
      ></Filter>
      <Products />
    </div>
  );
}
