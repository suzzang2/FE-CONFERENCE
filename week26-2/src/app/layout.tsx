import Link from 'next/link';
import './globals.css';
import { FaHome } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link id='home' href="/">
              <FaHome />
            </Link>
            <Link id='notes' href="/notes">
              <TbNotes />
            </Link>
          </nav>
          {children} 
        </main>
      </body>
    </html>
  );
}