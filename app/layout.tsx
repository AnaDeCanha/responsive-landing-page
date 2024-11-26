import "../app/globals.css";

export const metadata = {
  title: "SolCraft Studios",
  description: "SolCraft Studios",
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
