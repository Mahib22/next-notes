import Layout from "@/components/Layout";
import { Container, Heading, Text } from "@chakra-ui/react";

export default function Detail() {
  return (
    <Layout title="Detail Catatan">
      <Container py={2} maxW="container.sm">
        <Heading size="xl"> Customer dashboard</Heading>

        <Text fontSize={"lg"} py={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tempore
          ex rem beatae nobis possimus veritatis? Minus, nam tempora eos ea
          laborum veniam obcaecati quidem iusto ullam accusantium! Officiis,
          accusamus.
        </Text>

        <Text fontSize={"sm"} color={"gray"}>
          10/10/10
        </Text>
      </Container>
    </Layout>
  );
}
