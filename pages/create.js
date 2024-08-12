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
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    router.push("/");
    toast({
      title: "Catatan berhasil dibuat",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Layout title="Buat Catatan">
      <Container py={2}>
        <Heading py={4} size="lg">
          Buat catatan baru
        </Heading>

        <form onSubmit={handleSubmit}>
          <FormControl py={2} isRequired>
            <FormLabel>Judul</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>

          <FormControl py={2} isRequired>
            <FormLabel>Isi</FormLabel>
            <Textarea value={body} onChange={(e) => setBody(e.target.value)} />
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
