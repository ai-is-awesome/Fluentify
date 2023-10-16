import React, { useContext } from "react";
import { AuthContext } from "../useAuth";
import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react";
import myTheme, { getThemeObject } from "../../theme";
import { LandingPageFeatureUI } from "./UI/UiUtils";

export default function LandingPage() {
  const authContext = useContext(AuthContext);
  console.log(authContext);

  return (
    <Box
      minH={"100vh"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
    >
      <Grid
        templateColumns={{ lg: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" }}
        px={{ sm: "4", lg: "20" }}
      >
        <Image
          src="https://unsplash.com/photos/ORDz1m1-q0I/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNjI2ODA5fA&force=true&w=2400"
          rounded={"2xl"}
        />

        <Box
          mb="8"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={{ lg: "center" }}
          alignItems={"center"}
          h={{ lg: "80vh" }}
        >
          <Heading
            my={{ lg: "8", sm: "4" }}
            textAlign={{ sm: "center", lg: "left" }}
            fontSize={"5xl"}
            letterSpacing={"-.05em"}
            color={getThemeObject("white")["bgColorComplementary"]}
          >
            Welcome to Fluentify
          </Heading>
          <Box
            fontSize={"lg"}
            mx={"auto"}
            width={"75%"}
            textAlign={{ sm: "center" }}
            mb="8"
          >
            A new platform for learning language quickly. Learn and improve at
            any time of the time at your convinience
          </Box>
          {/* Features box */}
          <Box
            // border={"2px solid"}
            // borderColor={"gray.300"}
            // borderStyle={"solid"}
            w="75%"
            mb="8"
          >
            <LandingPageFeatureUI
              featureTitle={"Feature 2"}
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quis libero nesciunt nemo minima. Pariatur illo placeat repellat! Est, quod?"
            />
            <LandingPageFeatureUI
              featureTitle={"Translation"}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                laboriosam consectetur dicta pariatur possimus debitis quidem
                expedita eius, illum suscipit!"
            />
            <LandingPageFeatureUI
              featureTitle={"Translation"}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                laboriosam consectetur dicta pariatur possimus debitis quidem
                expedita eius, illum suscipit!"
            />
          </Box>

          <Button
            bg={getThemeObject("white")["bgColorPrimary"]}
            color={"white"}
          >
            Explore the App now!
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}