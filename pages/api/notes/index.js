import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const notes = await prisma.note.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(notes);
  } else if (req.method === "POST") {
    const { title, body } = req.body;
    const newNote = await prisma.note.create({
      data: {
        title,
        body,
      },
    });
    res.status(201).json(newNote);
  }
}
