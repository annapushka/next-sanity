import '../globals.css'

export const metadata = {
  title: 'My Awesome Site!',
  description: 'Generated by create Next + Sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
