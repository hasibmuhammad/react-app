import { useState } from "react";

interface Props {
  slots: string[];
  heading: string;
}
function SlotGroup({ slots, heading }: Props) {
  const [selectedSlot, setSelectedSlot] = useState(-1);
  return (
    <>
      <div className="container mx-auto w-1/2">
        <h1 className="text-5xl font-bold text-center">{heading}</h1>
        <hr className="mt-3 mx-auto" />
        {slots.length === 0 && <p>No Slot Found!</p>}
        <ul className="container mx-auto mt-10 border-2 p-4 rounded-lg">
          {slots.map((slot, index) => (
            <li
              key={slot}
              className={
                selectedSlot === index
                  ? "mb-2 cursor-pointer bg-orange-500 text-white rounded py-2 px-2"
                  : "mb-2 cursor-pointer hover:bg-blue-500 hover:text-white hover:rounded py-2 px-2"
              }
              onClick={() => setSelectedSlot(index)}
            >
              {slot}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SlotGroup;
