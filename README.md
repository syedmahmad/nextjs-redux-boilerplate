## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

For build:

```bash
npm run build
# or
yarn build
```

To start build on the server:

```bash
npm run start
# or
yarn start
```
Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

You can start by adding new pages in /src/pages directory. Each page act as a route.

Redux store is setup with redux-persist which persist store data even after refresh page.

This Project also contains Sign_in, Sign_up, Confirmatin_email and forgot-password pages. You just need to update API routes as per your backend in the src/api/auth.js file and good to go.

## Caution Before Start: 

- Please add config/environment file in gitignore.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
