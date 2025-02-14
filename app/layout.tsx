import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       <div className=''> 
       
        <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
