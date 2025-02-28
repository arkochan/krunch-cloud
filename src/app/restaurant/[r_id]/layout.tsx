import Cart from "@/components/Cart";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex fex-row justify-between antialiased h-screen "}>
        {children}
        <Cart />
      </body>
    </html>
  );
}
