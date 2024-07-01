# NovelNook

[Screenshots](/docs/images/screenshots/)

This is an online bookstore application with the following features:

- Browsing books
- Searching books by
  - title
  - description
- View book details
- Browing authors
- Searching authors by
  - name
  - bio
- Login/Signup
- Favoriting books
- Managing favorites

## Technologies in this Project

### Frontend

- NextJS
- Tailwind CSS

### Backend

- NextJS, Server Actions
- Prisma
- Postgres

### Tooling

- Docker Compose

## Setup and Running Instructions

Docker compose for containerization and easy project setup.

1. Clone the repository:

```bash
git clone https://github.com/zthh626/novel-nook.git
cd novel-nook
```

2. Setup environment variables:

Modify the `.env` file in the root directory. `SECRET_KEY` is the key used for signing the JWT key change this to some secret key for security purposes. `DATABASE_URL` is pointed to the docker-compose PostgreSQL instance.

3. Install node modules with `npm install`

4. Run the application with docker-compose:

```bash
docker-compose up
```

5. Seed the database with `npx prisma db seed`

This command uses the `DATABASE_URL` in the `.env` file. The mock data for this seed is located at [authors.json](/prisma/seed/authors.json) and [books.json](/prisma/seed/books.json).

4. Access the application at `http://localhost:3000/`

## Database

The database schema has the following 4 tables:

- Users
- Favorites
- Books
- Authors

For a deeper explanation view [database.md](/docs/database.md).

## Design Decisions

[design-decisions.md](/docs/design-decisions.md)

## Authentication

[authentication.md](/docs/authentication.md)

## lib functions

[/src/lib](/src/lib/README.md)

## TODO

- Misnamed `favourites` in database schema but everything else is called `favorites`.
- `SearchInput` has quick search half implemented, the feature will have a short list of search results as the user typed.
