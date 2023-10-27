import React, { useContext } from "react";
import { AuthContext } from "../useAuth";
import { Box, Button, Grid, Heading, Image, Img, Text } from "@chakra-ui/react";
import myTheme, { getThemeObject } from "../../theme";
import { LandingPageFeatureUI, LandingPageWrapper } from "./UI/UiUtils";

export default function LandingPage() {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  const themeObj = getThemeObject("white");

  return (
    <Box
      minH={"100vh"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
    >
      <Heading
        my={{ lg: "8", sm: "4" }}
        textAlign={{ sm: "center", lg: "center" }}
        fontSize={"5xl"}
        letterSpacing={"-.05em"}
        color={getThemeObject("white")["bgColorComplementary"]}
      >
        Welcome to Fluentify
      </Heading>
      <LandingPageWrapper>
        <Grid templateColumns={{ lg: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" }}>
          <Image
            src="https://unsplash.com/photos/ORDz1m1-q0I/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNjI2ODA5fA&force=true&w=2400"
            maxW={{ sm: "50%" }}
            rounded={"2xl"}
          />
          <Box
            mb="2"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={{ lg: "center" }}
            alignItems={"center"}
            minH={{ lg: "80vh" }}
          >
            {/* <Heading
            my={{ lg: "8", sm: "4" }}
            textAlign={{ sm: "center", lg: "left" }}
            fontSize={"5xl"}
            letterSpacing={"-.05em"}
            color={getThemeObject("white")["bgColorComplementary"]}
          >
            Welcome to Fluentify
          </Heading> */}
            <Box
              fontSize={"lg"}
              mx={"auto"}
              fontWeight={"bold"}
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
            {/* Button container */}
            <Box display={"flex"} gap="4">
              <Button
                as={"a"}
                href="#features"
                bg={getThemeObject("white")["bgColorPrimary"]}
                color={"white"}
              >
                Checkout the latest features
              </Button>
              <Button
                as={"a"}
                href="/signup"
                bg={getThemeObject("white")["bgColorComplementary"]}
                color={"white"}
              >
                Signup or Use as Guest
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* Features */}
        <Box minH="100vh" maxW={"1200px"} mx={"auto"}>
          <Heading
            my={{ lg: "32", sm: "4" }}
            textAlign={{ sm: "center", lg: "center" }}
            fontSize={"5xl"}
            letterSpacing={"-.05em"}
            color={getThemeObject("white")["bgColorComplementary"]}
            id="features"
          >
            Features
          </Heading>
          {/* Flex box of features */}
          <Box
            display={{ lg: "flex", sm: "flex" }}
            flexDirection={{ sm: "column" }}
            justifyContent={{ lg: "left", sm: "center" }}
            alignItems={{ sm: "center" }}
            gap="4rem"
          >
            <Img
              src="https://unsplash.com/photos/5Z8mR4vqJD4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk4NDEwOTcxfA&force=true&w=1920"
              flexGrow={"0"}
              maxW={"600px"}
              rounded={"2xl"}
              maxWidth={{ sm: "80%" }}
            />
            <Box width={"100%"}>
              {/* Title of feature */}
              <Text
                fontWeight={"extrabold"}
                fontSize={"2rem"}
                letterSpacing={"tight"}
                color={themeObj.bgColorPrimary}
                textAlign={"center"}
                mb="12"
              >
                Translation
              </Text>
              <Text
                fontSize={"1.2rem"}
                letterSpacing={"tight"}
                lineHeight={"1.5"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                officiis, excepturi molestias adipisci harum veritatis aliquam
                illum quae doloribus ipsam corporis iste minima at nostrum
                maiores culpa ipsa natus tenetur!
              </Text>
            </Box>
          </Box>
        </Box>
      </LandingPageWrapper>
    </Box>
  );
}
