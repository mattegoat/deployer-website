# Nounish Deployer

> Deploy your custom website for your nounish DAO under 1 minute

This project has been built using

-   Next-Auth
-   Tailwind
-   Next/TypeScript
-   Octokit (Github API)
-   Zudstand (state management)

## Getting Started

First, install dependencies with `yarn install`. Then, initialize the env file with `cp .env.example .env`.

Follow this [guide](https://next-auth.js.org/providers/github) to setup NextAuth for your app

```bash
GITHUB_SECRET=""
GITHUB_ID=""

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=""
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about the components of this kit, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs/) - learn about Tailwind, and browse through the included classes.
-   [Ethers Documentation](https://docs.ethers.io/v5/) - learn about Ethers features and API.
-   [wagmi Documentation](https://wagmi.sh/) - learn about wagmi features and API.
-   [ConnectKit Documentation](https://docs.family.co/connectkit) - learn about ConnectKit's features and API.

## Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new?utm_medium=m1guelpf-dapp-template&filter=next.js), from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This app is open-source and licensed under the MIT license. For more details, check the [License file](LICENSE).
