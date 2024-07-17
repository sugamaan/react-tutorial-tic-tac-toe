import { useState } from "react";

function Square({ props }) {
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log(`props: ${props}`);
    setValue(props);
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [value, setValue] = useState("X");

  function handleValue() {
    console.log(`value: ${value}`);
    if (value == "X") {
      setValue("O");
    } else {
      setValue("X");
    }
  }

  return (
    <>
      <Square props={value} onClick={handleValue} />
      <Square props={value} onClick={handleValue} />
      <Square props={value} onClick={handleValue} />
    </>
  );
}
