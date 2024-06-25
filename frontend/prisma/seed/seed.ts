import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  const authorsData = await fs.readFile(
    path.join(__dirname, "authors.json"),
    "utf-8",
  );
  const booksData = await fs.readFile(
    path.join(__dirname, "books.json"),
    "utf-8",
  );

  const authors = JSON.parse(authorsData);
  const books = JSON.parse(booksData);

  // Seed authors
  for (const author of authors) {
    await prisma.author.upsert({
      where: { id: author.id },
      update: {},
      create: {
        id: author.id,
        name: author.name,
        bio: author.bio,
        birthdate: new Date(author.birthdate),
      },
    });
  }

  // Seed books
  for (const book of books) {
    await prisma.book.upsert({
      where: { id: book.id },
      update: {},
      create: {
        id: book.id,
        title: book.title,
        author_id: book.author_id,
        description: book.description,
        published_date: new Date(book.published_date),
        isbn: book.isbn,
        image_url: book.image_url,
      },
    });
  }

  console.log("Seeding completed");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
