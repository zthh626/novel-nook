# Design Decisions

I chose to use `Server Actions` instead of a tradtional `REST API` on seperate `Express` server, or a set of `/api/` endpoints on the NextJS server. This decision was influenced by the following considerations.

1. Simplicity and Cohesion
    - Server actions allow for a more integrated approach, since I knew that there was only a few databases calls that needed to be shared.
    - By using Server actions, all function calls can be kept server-side by centralizing the app logic.
2. Reduced Boilerplate Code
    - By using server actions, I reduced the amount of boilerplate code needed with setting up a seperate `Express` or defining multiple `API` routes.
3. Simple Deployment
    - Even with a docker compose, I was able to deploy the entire full stack application with only 2 services (Postgres and the application itself).
4. Security
    - By using only server-side logic, this reduces the attack surface
    - Server actions leverage NextJs's built in security features, like `API` route protection.
