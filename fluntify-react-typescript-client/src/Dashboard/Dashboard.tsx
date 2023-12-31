import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Input,
  Spinner,
} from "@chakra-ui/react";
import QuizDashboardItem from "../Components/QuizDashboardItem/QuizDashboardItem";
import TextToSpeech from "../Components/Speech";
import useRequest from "../hooks/useRequest";
import { useEffect, useState } from "react";
import axios from "axios";
import TransparentBox from "../Components/TransparentBox";
import CustomButton from "../Components/UI/CustomButton";
import CardMatch from "../Components/CardMatch/CardMatch";
import RandomWord from "../Components/RandomWord";
import { TRANSLATION_API_URL } from "../services";
import DynamicRenderer from "../Components/DynamicRenderer";

export default function Dashboard({ quizzes }) {
  const [text, setText] = useState(
    "I can now translate new things very easily!"
  );

  const { fetch, loading, data, error } = useRequest(() =>
    axios.post(TRANSLATION_API_URL, {
      text: text,
    })
  );

  return (
    <DynamicRenderer>
      <Box>
        {/* Lower section */}
        {/* Buttons Box */}
        <Box
          width={{ lg: "60%", sm: "100%" }}
          margin={{ lg: "auto" }}
          padding={{ lg: "4rem" }}
        >
          <Box
            display={"flex"}
            gap={{ lg: "8" }}
            mb={"12"}
            mt="8"
            flexWrap={{ sm: "wrap" }}
          >
            <Button bg={"green.400"} color={"white"}>
              Learn Language
            </Button>
            <Button background={"orange.400"} color={"white"}>
              Review your Progress
            </Button>
            <Button color={"white"} bg={"red.400"}>
              View Statistics
            </Button>
            <Button background={"magenta"} color={"white"}>
              Improve mistakes
            </Button>
          </Box>

          {/* Transparent Box */}

          <TransparentBox headingText={"Translate on the Go!"}>
            <Image
              // src="https://unsplash.com/photos/33hgRYo45qc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8amFwYW5lc2UlMjB0ZXh0fGVufDB8fHx8MTY5MDYyODMyMXww&force=true&w=1920"
              src="https://unsplash.com/photos/yri82tuk2TQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGxhbmd1YWdlJTIwdHJhbnNsYXRlfGVufDB8fHx8MTY5MDYyODUyNXww&force=true&w=2400"
              h={"200px"}
              w="100%"
              objectFit={"cover"}
            />
            <Box bg="#55A0AF" p="8" rounded="md" mb="8">
              <Heading fontSize={"1.5rem"} mb="4">
                Translate on the go and learn new words
              </Heading>
              <Input
                placeholder="Basic usage"
                mb="4"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <CustomButton onClick={fetch}>
                Translate {loading && "LOading"}
              </CustomButton>
              <Box
                bg="gray.200"
                minH="10vh"
                rounded={"md"}
                mt="4"
                color={"black"}
                p="8"
                display={"flex"}
                justifyContent={"center"}
              >
                {data?.data?.text
                  ? data?.data?.text
                  : "Translated text goes here!"}
              </Box>
              {error && error}
            </Box>
          </TransparentBox>
          <TransparentBox headingText={"Card Match Game"}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/4d/WMCZ_Protected_Areas_Card_Game-7_%28cropped%29.jpg"
              h="200px"
              w="100%"
              objectFit={"cover"}
            />
            <Heading fontSize={"1.5rem"} textAlign={"center"}>
              Take a rest from learning and play a card match game
            </Heading>
            <Heading
              fontSize={"1rem"}
              textAlign={"center"}
              mt="1rem"
              fontWeight={"medium"}
            >
              Don't worry the results are not evaluated!
            </Heading>
            <Box
              my="12"
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <CardMatch mode="screened" />
              <CustomButton variant={"primary"} color="black" href="/cardmatch">
                Click here to play the Game in full screen
              </CustomButton>
            </Box>
          </TransparentBox>
          <TransparentBox headingText={"Your Language Packs"}>
            <Image
              src="https://unsplash.com/photos/HH4WBGNyltc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Ym9va3xlbnwwfHx8fDE2OTA1NDcwNDd8MA&force=true&w=2400"
              h="200px"
              w="100%"
              objectFit={"cover"}
            />
            <Box bg={""}>
              {quizzes.status === "loading" && (
                <Box display={"flex"} justifyContent={"center"} my="4">
                  <Spinner />
                </Box>
              )}
              {quizzes.data &&
                quizzes.data.map((quiz) => (
                  <QuizDashboardItem key={quiz._id} data={quiz} />
                ))}
            </Box>
          </TransparentBox>
          <TransparentBox
            headingText={"Word of the day"}
            headingProps={{
              textAlign: "center",
            }}
            boxProps={{
              _hover: {
                cursor: "pointer",
                transform: "scale(1.2)",
              },
            }}
          >
            <RandomWord />
          </TransparentBox>
        </Box>
      </Box>
    </DynamicRenderer>
  );
}
