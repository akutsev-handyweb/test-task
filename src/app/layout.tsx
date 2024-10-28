import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';
import './globals.css'


export default function RootLayout({children,}: {children: React.ReactNode;}) { 
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}