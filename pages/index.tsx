import React from "react";
import Button from "../src/components/Button";
import Box from "../src/components/Box";

export default function Home() {
  return (
    <Box tag="main">
      <h1>Home</h1>
      <Button
        backgroundColor="blue"
        color="yellow"
        style={{ margin: "1em" }}
        onClick={() => console.log("Click")}
      >
        Test
      </Button>
    </Box>
  );
}
