import CardNote from "@/components/CardNote";
import Layout from "@/components/Layout";
import { Grid } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout title="Daftar Catatan">
      <Grid
        templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
      >
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
      </Grid>
    </Layout>
  );
}
