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

export default function CardNote({ note, onDeleteSuccess }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{note.title}</Heading>
        </CardHeader>

        <CardBody py={0}>
          <Text>{note.body}</Text>
        </CardBody>

        <CardFooter gap={2} justify={"end"}>
          <IconButton
            colorScheme="blue"
            aria-label="Lihat Detail"
            icon={<ViewIcon />}
            onClick={() => router.push(`/detail/${note.id}`)}
          />
          <IconButton
            colorScheme="yellow"
            aria-label="Edit"
            icon={<EditIcon />}
            onClick={() => router.push(`/edit/${note.id}`)}
          />
          <IconButton
            colorScheme="red"
            aria-label="Hapus"
            icon={<DeleteIcon />}
            onClick={onOpen}
          />
        </CardFooter>
      </Card>

      <DeleteDialog
        isOpen={isOpen}
        cancelRef={cancelRef}
        onClose={onClose}
        note={note}
        onDeleteSuccess={onDeleteSuccess}
      />
    </>
  );
}
