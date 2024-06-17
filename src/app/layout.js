import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Nav from './components/nav/nav';
import Color from './components/color/color';


export const metadata = {
  title: "Mehul's Portfolio",
  description: "Mehul Bansal Portfofio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Color/>
        {children}
      </body>
    </html>
  );
}
