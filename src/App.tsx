import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import SlotGroup from "./components/SlotGroup";

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

  const handleSelectItem = (item: string) => {
    console.log(`You have selected item: ${item}`);
  };

  const handleSelectSlot = (slot: string) => {
    console.log(`You have selected slot: ${slot}`);
  };

  return (
    <>
      <Alert>
        Hello, this is <span className="bg-black rounded p-2">World.</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
      <SlotGroup
        slots={slots}
        heading="Slots"
        onSelectSlot={handleSelectSlot}
      />
    </>
  );
}

export default App;
