# Authentication

This project uses JWT cookie session for authentication.

There is [middleware](/src/middleware.ts) that matches on the `favorites` path. Normally, I would match the opposite, so I would have to exclude any routes that need authentication. Since there is only one route, I decided to do it this way.

## Favorites

In the middleware, we check for if the JWT is valid on `/favorites/:path*`, if not then it redirects to `/login`.

## JWT Flow

Inside [/src/lib/auth/index.ts](/src/lib/auth/index.ts) it contains all functions involved with creating and verifying the JWT tokens.

Using the lightweight `Jose` package, JWTs are created using a `secret key` that comes from `.env`. This token is handed to the user on a valid `login` or `signup`, it is added as a cookie to the user's headers and returned back. By default the cookie expires in 1 hour and will not be refreshed.

The `verifyJWT` function is used in the middleware to verify a user is logged in.

## Logging in / Signing Up

After a user enters a valid email and password then it is hashed with a salt and stored in this format `HASH.SALT`. On login the salt is parsed out and the hash of the passwords are compared. When either of these processes are successful, then a JWT is set in the cookies for the user.