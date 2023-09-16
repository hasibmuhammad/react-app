import { useState } from "react";

const App = () => {
  const [person, setPerson] = useState({
    id: 1,
    contact: {
      name: "John",
    },
  });
  const handleclick = () => {
    setPerson({ ...person, contact: { ...person.contact, name: "Shuvo" } });
  };

  return (
    <>
      <button
        className="bg-orange-500 text-white py-2 px-4 rounded "
        onClick={() => handleclick()}
      >
        Click
      </button>

      {person && <p>{person.contact.name}</p>}
    </>
  );
};

export default App;
