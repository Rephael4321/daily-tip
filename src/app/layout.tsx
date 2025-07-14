export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-sans bg-gray-100 text-gray-900 text-right">
        <main className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
