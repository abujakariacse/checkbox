import React from "react";

export default function Products() {
  const products = [
    {
      name: "Jack",
      id: 1,
    },
    {
      name: "Jack",
      id: 2,
    },
    {
      name: "Jack",
      id: 3,
    },
    {
      name: "Jack",
      id: 4,
    },
    {
      name: "Jack",
      id: 5,
    },
  ];
  return (
    <div className="col-span-2">
      <div>Hello Bangladesh</div>
      <div className=" grid grid-cols-3 gap-5">
        {products.map((product) => (
          <div key={product?.id} className="border border-green-500 p-4">
            <div>
              <h1>Hello Bangladesh</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates esse aliquam reiciendis illo facere saepe magni porro
                nihil molestiae quidem.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
