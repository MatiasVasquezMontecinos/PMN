import { Footer } from 'app/components/shared/Footer';
import 'app/sass/globals.sass'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

      </body>
    </html>
  );
}
