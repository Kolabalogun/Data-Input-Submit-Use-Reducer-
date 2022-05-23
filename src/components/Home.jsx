import "./Style.css";

import Modal from "./Modal";
import { data } from "./Data";

import React from "react";

import Reducer from "./Reducer";


const Home = () => {
  // USE Reducer

  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContext: "",
  };

  const [state, dispatch] = React.useReducer(Reducer, defaultState);

  const [name, nameF] = React.useState("");
  //   const [people, peopleF] = React.useState(data);
  //   const [showModal, showModalF] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };

      dispatch({ type: "TESTING", payload: newItem });

      //   showModalF(true);
      //   peopleF((prev) => {
      //     return [...prev, { id: new Date().getTime().toString(), name }];
      //   });
      nameF("");
    } else {
      dispatch({ type: "NO_VALUE" });
      //   showModalF(true);
    }
  }
  function handleChange(e) {
    nameF(e.target.value);
  }
  function handleClick(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  const PeopleElement = state.people.map((p) => (
    <div key={p.id} id={p.id} className="list">
      <p>{p.name}</p>
      <span onClick={() => handleClick(p.id)}>remove</span>
    </div>
  ));

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div className="container">
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContext={state.modalContext} />
      )}
      <form className="main" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Details</button>
      </form>

      <div className="lists">{PeopleElement}</div>
    </div>
  );
};

export default Home;
