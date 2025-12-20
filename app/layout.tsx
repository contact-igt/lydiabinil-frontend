import type { Metadata } from "next";
import { Lato, Playfair_Display, Cormorant_Garamond, Great_Vibes, Crimson_Text } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Time to Heal | Lydia Binil",
  description: "You've Conquered Life's Battles — Now, It's Time to Heal From the Root.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* FontAwesome CDN */}
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${lato.variable} ${playfair.variable} ${cormorant.variable} ${greatVibes.variable} ${crimson.variable} antialiased font-sans bg-cream-50 text-charcoal`}
      >
        {children}

        {/* <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        /> */}
        <Script dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
                   c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                   t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "umb7r8k3au");`}} />


        <Script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                   })(window,document,'script','dataLayer','GTM-T6M74VXX')`}} />

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6M74VXX"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }} ></iframe></noscript>

      </body>


    </html>
  );
}
