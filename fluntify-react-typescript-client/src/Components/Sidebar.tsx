import { Box, Link, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { PillButton } from "./UI/PillButton";
import { AuthContext } from "../useAuth";
import CustomButton from "./UI/CustomButton";

export const Sidebar: React.FC = (props) => {
  const authData = useContext(AuthContext);
  const isLoggedIn = authData.firebaseAuthState.isLoggedIn;
  return (
    <Box
      bg={"gray.100"}
      minH={"100vh"}
      w={"15%"}
      display={"flex"}
      flexDir={"column"}
      gap={"2rem"}
    >
      {/* Fluentify Box */}
      <Box justifyContent={"center"} display={"flex"}>
        <Link
          fontSize={"3xl"}
          letterSpacing={"tighter"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Quizzify
        </Link>
      </Box>
      <Box display={"flex"} alignItems={"center"} flexDir={"column"}>
        {isLoggedIn ? (
          <>
            <Text fontSize={"1.5rem"}>Welcome,</Text>
            <Text fontWeight={"bold"} fontSize={"1.5rem"}>
              John Doe
            </Text>
          </>
        ) : (
          <Text>
            <CustomButton as={"a"} href="/signup">
              Login
            </CustomButton>
          </Text>
        )}
      </Box>
      {/* <PillButton bg={"orange.500"} color={"white"}>
        Progress
      </PillButton> */}
    </Box>
  );
};