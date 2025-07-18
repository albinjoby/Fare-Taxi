import "./globals.css";

export const metadata = {
  title: "Kerala Fare Calculator",
  description: "An easier way to check fare charges in kerala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`intialiased`}>{children}</body>
    </html>
  );
}
