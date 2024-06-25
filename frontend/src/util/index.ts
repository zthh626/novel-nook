import { Author, Book } from "@prisma/client";

export function capitalizeFirstChar(str: string) {
  if (!str) return str; // Return if the string is empty or undefined
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateBookSlug(book: Book) {
  return `${book.id}-${encodeURIComponent(book.title)}`;
}

export function generateAuthorSlug(author: Author) {
  return `${author.id}-${encodeURIComponent(author.name)}`;
}

export function getCurrentDateHumanReadable(date: Date) {
  const year = date.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
}
