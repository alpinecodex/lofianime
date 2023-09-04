# [lofianime.com](https://lofianime.com)

LofiAnime.com is a simple Next.js 13 app to generate lofi-anime inspired landscape images.

## Getting Started

### Clone

First, clone this repository:

```bash
git clone https://github.com/alpinecodex/lofianime.git
```

### Install Dependencies

Open the newly created `lofianime` project and install dependencies.

```bash
cd lofianime
npm install
```

### Setting up environment variables

Go to your [Vercel dashboard](https://vercel.com) and create a new Postgres database. (You can also use other services like Supabase or PlanetScale. If you opt to use a MySQL database, you may need to alter the `schema.prisma` file. Alternatively, you could create a local database on your machine.)

Create an account on [Upstash](https://upstash.com) and create a Redis database.

Duplicate `.env.example` and create an `.env` file in the root of your directory. Add all required environment variables for this project:

1. Create a [NextAuth secret](https://next-auth.js.org/configuration/options#secret)
2. Create [Google credentials](https://developers.google.com/identity/protocols/oauth2) for OAuth
3. Add Vercel Postgres configuration
4. Create a [Replicate account](https://replicate.com) and add your API key
5. Add REST URL and access token for Upstash

### Using Prisma

Generate Prisma client

```bash
npx prisma generate
```

### Running the application

Run the application locally.

```bash
npm run dev
```

The application will be available at http://localhost:3000.

## One-click Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Falpinecodex%2Flofianime&env=NEXTAUTH_URL,NEXTAUTH_SECRET,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,DATABASE_URL,REPLICATE_API_KEY,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN&demo-title=LofiAnime&demo-url=https%3A%2F%2Fwww.lofianime.com%2F)

## Contributing

Your feedback and contributions are welcome! Please create an issue on this repository and describe any issues. Alternatively, fork this repository, make changes, and create a pull request.

## Powered by

- [Next.js](https://nextjs.org) (Next 13 App Router)
- [Vercel](https://vercel.com) (serverless hosting)
- [Upstash](https://upstash.com/) (serverless Redis rate limiting)
- [Replicate](https://replicate.com/) (AI APIs—using SDXL model trained by [Pietro Schirano](https://twitter.com/skirano))
- [shadcn/ui](https://ui.shadcn.com/) (React component library)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) (serverless database hosting)
- [Auth.js](https://authjs.dev/) (Authentication)
