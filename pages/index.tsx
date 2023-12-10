import React from "react";
import Button from "../src/components/Button";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button
        backgroundColor="red"
        color="white"
        onClick={() => console.log("Click")}
      >
        Test
      </Button>
    </>
  );
}
