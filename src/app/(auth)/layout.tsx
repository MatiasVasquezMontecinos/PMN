'use client'

import { MainHeader } from 'app/components/shared/Header/MainHeader';
import 'app/sass/globals.sass'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
          
      </body>
    </html>
  );
}
