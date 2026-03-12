import './globals.css';

export const metadata = {
  title: 'OJAS - Global EdTech Marketplace',
  description: 'Anyone can teach. Everyone can learn.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
