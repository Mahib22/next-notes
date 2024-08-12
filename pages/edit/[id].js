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
import { useEffect, useState } from "react";

export default function Edit() {
  const toast = useToast();
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`/api/notes/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setTitle(data.title);
          setBody(data.body);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    router.push("/");
    toast({
      title: "Catatan berhasil diubah",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Layout title="Edit Catatan">
      <Container py={2}>
        <Heading py={4} size="lg">
          Edit catatan
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
