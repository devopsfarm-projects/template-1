import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon.io(1)/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.io(1)/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon.io(1)/favicon-16x16.png" />
        <link rel="manifest" href="favicon.io(1)/site.webmanifest" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
