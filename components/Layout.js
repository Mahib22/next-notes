import { Inter } from "next/font/google";
import { Box, Center } from "@chakra-ui/react";
import Head from "next/head";
import NavbarComponent from "./NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{`${props.title} - Catatanku`}</title>
        <meta name="description" content="Website untuk menyimpan catatan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className}`}>
        <Center>
          <Box w="90%" py={8}>
            <NavbarComponent />

            {props.children}
          </Box>
        </Center>
      </main>
    </>
  );
}
