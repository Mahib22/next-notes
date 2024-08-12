import Layout from "@/components/Layout";
import { Center, Container, Heading, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [note, setNote] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/notes/${id}`)
        .then((response) => response.json())
        .then((data) => setNote(data));
    }
  }, [id]);

  return (
    <Layout title={note?.title || ""}>
      <Container py={2} maxW="container.sm">
        {!note ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <>
            <Heading size="xl">{note.title}</Heading>

            <Text fontSize={"lg"} py={6}>
              {note.body}
            </Text>

            <Text fontSize={"sm"} color={"gray"}>
              {new Date(note.createdAt).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </Text>
          </>
        )}
      </Container>
    </Layout>
  );
}
