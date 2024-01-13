# CineFlix - Movie Rental Web Application

CineFlix is a Next.js project designed for online movie browsing and rental. It leverages the power of Next.js and includes automatic font optimization using Inter, a custom Google Font.

## Getting Started

To get started, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/CineFlix.git
Navigate to the project directory:

bash
Copy code
cd CineFlix
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 with your browser to see the application.

Page Functions
Home Page (/)
Displays a grid of movie cards.
Each card includes the movie title, genre, rating, and price.
Users can click on "View Details" to see more information about a movie.
Add to Cart functionality allows users to add movies to their shopping cart.
Movie Details Page (/movies/[id])
Shows detailed information about a specific movie.
Displays the movie title, description, year, duration, genre, rating, and price.
Users can add the movie to their cart from this page.
Cart Page (/cart)
Lists all the movies added to the shopping cart.
Each item includes the movie title, genre, and price.
Users can remove items from the cart or proceed to checkout.

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
