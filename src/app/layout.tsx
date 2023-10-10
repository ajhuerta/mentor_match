import Providers from '@/components/chat/Providers'
import './globals.css'

// Done after the video and optional: add page metadata
export const metadata = {
  title: 'MentorMatch',
  description: 'Welcome to MentorMatch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}