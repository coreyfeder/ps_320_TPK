import { useReducer, useState } from "react";
// ???: why were these all pointing to the directory above?
// ???: why does it still work if they point to the current directory?
import TextInput from "./TextInput";
import ActionButton from "./ActionButton";
import PartyMember from "./PartyMember";
import partyReducer from "./partyReducer";
import MarchingOrder from "./MarchingOrder";

export default function App() {
  const [name, setName] = useState("");
  const [party, dispatch] = useReducer(partyReducer, initialState);

  const partyList = party.map((member) => {
    return (
      <PartyMember key={member.name} member={member} dispatch={dispatch} />
    );
  });

  return (
    <>
      {/* <MarchingOrder member={member} dispatch={dispatch} /> */}
      <MarchingOrder party={party} />
      <h1>Adventuring Party</h1>
      <div>
        Add a New Adventurer <br />
        <TextInput state={name} setState={setName} />
        <ActionButton
          type="add_adventurer"
          payload={{ name }}
          dispatch={dispatch}
        >
          Add to Party
        </ActionButton>
      </div>
      <div>
        <h2>Party Status</h2>
        {partyList}
      </div>
    </>
  );
}

const initialState = [
  { name: "Gandalf", health: 100 },
  { name: "Aragorn", health: 100 },
  { name: "Frodo", health: 100 },
  { name: "Sam", health: 100 },
  { name: "Pippin", health: 100 },
  { name: "Merry", health: 100 },
  { name: "Legolas", health: 100 },
  { name: "Gimli", health: 100 },
  { name: "Boromir", health: 100 },
];
