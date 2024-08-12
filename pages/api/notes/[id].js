import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const note = await prisma.note.findUnique({
      where: { id: parseInt(id) },
    });
    res.status(200).json(note);
  } else if (req.method === "PUT") {
    const { title, body } = req.body;
    const updatedNote = await prisma.note.update({
      where: { id: parseInt(id) },
      data: { title, body },
    });
    res.status(200).json(updatedNote);
  } else if (req.method === "DELETE") {
    await prisma.note.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  }
}
