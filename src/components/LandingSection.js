import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarPic from "../images/profilepic.JPG";

const greeting = "Hello, I am Hunter!";
const bio1 = "A Frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar src = {avatarPic} boxSize={['150px', '300px', '450px']} />
      <Heading as="h1" size="lg"  style={{ marginBottom: "30px" }}>
        {greeting}
      </Heading>
      <Heading as="h2" size="2xl">
        {bio1}
      </Heading>
      <Heading as="h3" size="2xl">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;