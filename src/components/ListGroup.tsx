import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1 className="text-5xl text-center font-bold mt-3">{heading}</h1>

      {items.length === 0 && <p className="text-center">No team found!</p>}

      {items.length !== 0 && (
        <>
          <hr className="w-1/2 mx-auto mt-3" />
          <ul className="container mx-auto mt-10 w-1/2 border-2 p-4 rounded-lg">
            {items.map((item, index) => (
              <li
                key={item}
                className={
                  selectedItem === index
                    ? "mb-2 cursor-pointer bg-orange-500 text-white rounded py-2 px-2"
                    : "mb-2 cursor-pointer hover:bg-blue-500 hover:text-white hover:rounded py-2 px-2"
                }
                onClick={() => {
                  setSelectedItem(index);
                  onSelectItem(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ListGroup;
