import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaHandsHelping, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Lagos State Citizen Interaction Platform
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your gateway to engaging with the Lagos state government. Share your feedback, get information, and stay connected.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/lagos-state-logo.png" alt="Lagos State Logo" />
        </Box>
        <VStack spacing={4} width="100%">
          <Button leftIcon={<FaHandsHelping />} colorScheme="teal" size="lg" width="100%">
            Provide Feedback
          </Button>
          <Button leftIcon={<FaInfoCircle />} colorScheme="blue" size="lg" width="100%">
            Get Information
          </Button>
          <Button leftIcon={<FaEnvelope />} colorScheme="purple" size="lg" width="100%">
            Contact Us
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;