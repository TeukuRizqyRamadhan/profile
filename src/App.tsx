import Hero from './components/Hero';
import PortfolioList from './components/PortfolioList';
import Technology from './components/Technology';
import About from './components/About';
import Footer from './components/Footer';
import './style.css';
import { Box } from '@mui/material';
import image1 from './assets/email.png';
import image2 from './assets/kegiatan.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const portfolioItems = [
    {
      name: 'Kirim Laporan via Email',
      description: 'Aplikasi input form yang isinya langsung terkirim ke email yang dituju',
      link: 'https://form-email-delta.vercel.app/',
      image: image1
    },
    {
      name: 'Kegiatanku',
      description: 'Aplikasi pembuat kegiatan sederhana yang dilengkapi CRUD',
      link: 'https://kegiatan-fe.vercel.app/',
      image: image2
    },
    // Tambahkan lebih banyak proyek jika diperlukan
  ];

  return (
    <>
      <Box id='content'>
        <Hero />
        <About />
        <PortfolioList items={portfolioItems} />
        <Technology />
      </Box>
      <Footer />
    </>
  );
}

export default App;
