import "../app/globals.css";

export const metadata = {
  title: "Ana De Canha",
  description: "Ana's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
