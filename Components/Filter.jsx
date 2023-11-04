"use client";
import React from "react";

export default function Filter({ handleCheckboxSelect, checkedList, filters }) {
  return (
    <div className="border border-green-500 pl-5">
      <h1>Filters </h1>
      <div>
        <ul className="">
          {filters.map((filter, i) => (
            <li key={filter?.id}>
              <label className="select-none cursor-pointer">
                <input
                  type="checkbox"
                  name=""
                  checked={checkedList[i]}
                  id={filter?.id}
                  onChange={() => handleCheckboxSelect(i, filter)}
                />
                <span className="pl-3">{filter?.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
