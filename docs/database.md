# Database Schema

The database schema has 4 tables: `users`, `books`, `authors`, and `favorites`.

## Overview of Schema

![Overview of Schema](/docs/images/database/relations.png)

## User Table

![User Table](/docs/images/database/users.png)

## Book Table

![Book Table](/docs/images/database/books.png)

## Authors Table

![Authors Table](/docs/images/database/authors.png)

## Favorite Table

![Favorite Table](/docs/images/database/favourites.png)

## Relations

### User and Favorite

- One-to-Many Relationship: A single user can have many favorite books.
    - This relationship is implemented because a user might want to save multiple books to their favorites list. Each entry in the favorites table links a user to a specific book they have marked as a favorite.

### Book and Favorite

- One-to-Many Relationship: A single book can be favorited by many users.
    - Rationale: This relationship allows the same book to appear in the favorites list of multiple users. Each favorite record associates a user with a specific book, enabling many-to-many associations via the favorites table.

### Author and Book

- One-to-Many Relationship: A single author can write many books.
    - Rationale: This relationship reflects the real-world scenario where an author may publish multiple books. The books table includes a foreign key (author_id) that references the authors table, establishing this connection.