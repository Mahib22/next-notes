import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Spacer,
} from "@chakra-ui/react";
import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarComponent() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" pb={8}>
      <Box>
        <Heading size={{ base: "lg", md: "xl" }} color={"teal"} as={"u"}>
          Catatanku
        </Heading>
      </Box>
      <Spacer />

      {pathname === "/" ? (
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          size={{ base: "sm", md: "md" }}
          onClick={() => router.push("/create")}
        >
          Buat Baru
        </Button>
      ) : (
        <Button
          leftIcon={<HamburgerIcon />}
          colorScheme="teal"
          size={{ base: "sm", md: "md" }}
          onClick={() => router.push("/")}
        >
          Daftar Catatan
        </Button>
      )}
    </Flex>
  );
}
