import '../src/styles/globals.css' // Sesuaikan path jika berbeda

export const metadata = {
  title: 'ISO 37001 Training',
  description: 'Platform pelatihan komprehensif untuk ISO 37001',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  )
}