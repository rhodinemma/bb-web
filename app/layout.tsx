import './globals.css'

export const metadata = {
  title: 'Baby Bridge',
  description: 'Bringing families together, one surrogate at a time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen font-nun">
          {children}
        </main>
      </body>
    </html>
  )
}
