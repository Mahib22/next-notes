import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import DeleteDialog from "./DeleteDialog";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function CardNote() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>

        <CardBody py={0}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            tempore ex rem beatae nobis possimus veritatis? Minus, nam tempora
            eos ea laborum veniam obcaecati quidem iusto ullam accusantium!
            Officiis, accusamus.
          </Text>
        </CardBody>

        <CardFooter gap={2} justify={"end"}>
          <IconButton
            colorScheme="blue"
            aria-label="Lihat Detail"
            icon={<ViewIcon />}
            onClick={() => router.push("/detail/1")}
          />
          <IconButton
            colorScheme="yellow"
            aria-label="Edit"
            icon={<EditIcon />}
            onClick={() => router.push("/edit/1")}
          />
          <IconButton
            colorScheme="red"
            aria-label="Hapus"
            icon={<DeleteIcon />}
            onClick={onOpen}
          />
        </CardFooter>
      </Card>

      <DeleteDialog isOpen={isOpen} cancelRef={cancelRef} onClose={onClose} />
    </>
  );
}
