import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
        // Iphone, Ipad
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
        // Mac
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
        // windows
      />
      <link
        rel="manifest"
        type="image/png"
        sizes="16x16"
        href="/site.webmanifest"
        // android-chrome-512x512, android-chrome-192x192
      />
      <link
        rel="mask-icon"
        type="/safari-pinned-tab.svg"
        color="red"
        // IOS
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Sora:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <meta name="ms-application-TileColor" content="#0F8F8D" />
      <meta name="theme-color" content="#333333" />
      <meta name="charset" content="UTF-8" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
