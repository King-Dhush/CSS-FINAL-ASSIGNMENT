import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Food Explorer',
  description: 'An all-in-one app: Map, Recipes, and Food Gallery',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <header
          style={{
            backgroundColor: '#f2f2f2',
            padding: '1rem',
            fontSize: '1.5rem',
          }}
        >
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/">Home</Link>
            <Link href="/map">Map</Link>
            <Link href="/recipes">Recipes</Link>
            <Link href="/gallery">Gallery</Link>
          </nav>
        </header>

        <main
          style={{
            flex: '1',
            padding: '1rem',
            fontSize: '1.2rem',
          }}
        >
          {children}
        </main>

        <footer
          style={{
            backgroundColor: '#f2f2f2',
            padding: '1rem',
            fontSize: '0.9rem',
            marginTop: 'auto',
          }}
        >
          <p>2025 Food Explorer | CSS Group Project.</p>
        </footer>
      </body>
    </html>
  );
}