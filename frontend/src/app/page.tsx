import { books } from "@/lib/prisma-client";

export default async function Home() {
  const booksData = await books.getAll();
  console.log(booksData);
  return <div>hi</div>;
}
