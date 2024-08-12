import Layout from "@/components/Layout";
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Textarea,
} from "@chakra-ui/react";

export default function Create() {
  return (
    <Layout title="Buat Catatan">
      <Container py={2}>
        <Heading py={4} size="lg">
          Buat catatan baru
        </Heading>

        <form action="">
          <FormControl py={2} isRequired>
            <FormLabel>Judul</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl py={2} isRequired>
            <FormLabel>Isi</FormLabel>
            <Textarea />
          </FormControl>

          <Flex>
            <Spacer />
            <Button px={8} my={2} colorScheme="teal" type="submit">
              Simpan
            </Button>
          </Flex>
        </form>
      </Container>
    </Layout>
  );
}
