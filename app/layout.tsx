import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "A software engineer's scribbles | justin.ly",
  description:
    'Random thoughts, ideas, and opinions on software engineering, technology, and life.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-2xl">{children}</div>
      </body>
    </html>
  );
}
