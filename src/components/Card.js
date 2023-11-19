import React from "react";
import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box backgroundColor="white" borderRadius="8px">
      <VStack align={"left"}>
        <Image src={imageSrc} alt={title} borderRadius="8px"/>
        <Heading as="h3" size="md" mb={4} textColor='black' padding='3'>
          {title}
        </Heading>
        <Text fontSize="md" lineHeight="1.5" textColor='black' padding='3'>
          {description}
        </Text>
        <HStack mt={4}>
          <Text fontSize="sm" lineHeight="1.5" textColor='black' padding='3' fontWeight="bold">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" textAlign="left" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;