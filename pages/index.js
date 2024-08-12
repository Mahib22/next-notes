import CardNote from "@/components/CardNote";
import Layout from "@/components/Layout";
import { Center, Grid, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/notes")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteSuccess = (deletedId) => {
    setNotes(notes.filter((note) => note.id !== deletedId));
  };

  return (
    <Layout title="Daftar Catatan">
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : notes.length === 0 ? (
        <Center py={2}>
          <Heading>Tidak ada catatan</Heading>
        </Center>
      ) : (
        <Grid
          templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
        >
          {notes.map((note) => (
            <CardNote
              note={note}
              key={note.id}
              onDeleteSuccess={handleDeleteSuccess}
            />
          ))}
        </Grid>
      )}
    </Layout>
  );
}
