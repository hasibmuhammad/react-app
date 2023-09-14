import ListGroup from "./ListGroup";
import SlotGroup from "./SlotGroup";

function App() {
  const items = [
    "Bangladesh",
    "Afganistan",
    "Srilanka",
    "Pakistan",
    "Nepal",
    "India",
  ];

  const slots = ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00"];
  return (
    <>
      <ListGroup items={items} heading="Countries" />
      <SlotGroup slots={slots} heading="Slots" />
    </>
  );
}

export default App;
