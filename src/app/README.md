# App layout

## /

Home page with a simple splash screen and a reusuable search field.
Has a layout with header + footer which is applied to each screen in this app.

## /auth/login - /auth/signup

Used for getting JWT token for `/favorites` page and being able to mutate and add to the user's favorites.

## /authors

Layout has [BreadCrumbs](/src/components/navigation/BreadCrumbs.tsx) at the top which is used for navigation. Lists all authors and uses the `search` param for filtering based on the serverside rendering.

### /authors/[id]

Statically generated pages for all authors.

## /books

Very similar to `/authors` but uses a more complicated [BookRow](/src/components/list/BookRow.tsx) which accounts for whether the user has favorited the book or not and displays a star based on that state.

### /books/[id]

Statically generated pages for all books

## /favorites

Shows a page of all the users favorites. Redirects them if the user is not logged in. The user is able to unfavorite books from this page.
