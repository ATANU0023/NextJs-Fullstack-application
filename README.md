This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


1. Now we will install few of our dependencies 
- axios
- bcryptjs // it is a libray to encryption purposes, also for creating tokens
- jsonwebtoken
- nodemailer 
- react-hot-toast
- mongoose
2. Now under src create a new folder name models , and a helper folder.
3. we need to create a .env file , so for the production security purposes.
4. now as we know in next everything works done under app directory, so we will be creating a folder name 'login' under app, this folder will for the frontend purpose ,  and more important thing the under login folder there will be a file with name 'page.tsx' , here naming convention is important the name of the file must be 'page'.
5. It is better when ever u are creating a file , make sure to create a folder outside of it,
6. now again inside app dirctory create a folder name 'singup'.
7. for the backend the backend codes must be lies under api folder inside the app directory.
8. inside api folder u have the files u need for your project , example inside api folder there are 2 folders 'users' and 'home' , so the routing will be like - api/users, api/home.
9. now inside users folder we are creating signup folder, and inside it creating a file , for the naming convention  the name of the file will be 'route' , route.ts.

10 . Now we are connection the database , so under src we are creating a new folder 'dbconfig' and inside  it a folder name 'dbconfig.ts' here naming convention not that much. 


2.1 now we are going to work with api