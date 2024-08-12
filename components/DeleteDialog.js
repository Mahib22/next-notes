import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";

export default function DeleteDialog({
  isOpen,
  onClose,
  cancelRef,
  note,
  onDeleteSuccess,
}) {
  const toast = useToast();

  const handleDelete = async () => {
    const response = await fetch(`/api/notes/${note.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      onDeleteSuccess(note.id);
    }

    onClose();

    toast({
      title: "Catatan berhasil dihapus",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Hapus Catatan
          </AlertDialogHeader>

          <AlertDialogBody>
            Anda yakin ingin menghapus catatan <b>{note.title}</b>?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Batal
            </Button>
            <Button colorScheme="red" onClick={handleDelete} ml={3}>
              Ya, Hapus
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
