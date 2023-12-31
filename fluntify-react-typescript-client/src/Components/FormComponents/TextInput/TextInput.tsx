import { Input } from "@chakra-ui/react";

export default function TextInput({ props }) {
  return (
    <>
      <Input
        placeholder="Basic usage"
        padding={"1rem"}
        border="0px"
        borderBottom={"2px white solid"}
        color={"white"}
        borderRadius={"0"}
        fontSize={"1.5rem"}
        {...props}
      />
    </>
  );
}
