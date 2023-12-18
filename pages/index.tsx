import React from "react";
import Button from "../src/components/Button";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button
        backgroundColor="blue"
        color="yellow"
        style={{ margin: "1em" }}
        onClick={() => console.log("Click")}
      >
        Test
      </Button>
    </>
  );
}
