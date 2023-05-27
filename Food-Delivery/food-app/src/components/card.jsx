import React from "react";

const card = () => {
  return (
    <>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          className="card-img-top"
          src="https://media.istockphoto.com/id/625232510/photo/breakfast-served-with-coffee-juice-egg-and-rolls.jpg?s=612x612&w=0&k=20&c=FpzWoH6EyCJGzUntgj5vmyj-BncNETFqQ1af78EMBb8="
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Order Food from this App</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price </div>
          </div>
        </div>
      </div>{" "}
      <div></div>
    </>
  );
};

export default card;
