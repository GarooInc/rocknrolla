import "@/styles/globals.css";
import "@/public/assets/fonts/fonts.css";

export const metadata = {
  title: "Rocknrolla.23 - OUR WORK DEFINES US",
  description: "We believe in a natural, open culture inspired by the mentality of our leaders.",
  url: "https://rocknrolla23.com/",
  image: "/assets/images/home/principal.png",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" type="image/png+xml" href="/assets/images/logo.png" />
        <link rel="apple-touch-icon" href="/assets/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta name="keywords" content="rocknrolla23, rocknrolla, rock, rolla, 23, rocknrolla.23, rocknrolla23.com" />
      </head>
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;