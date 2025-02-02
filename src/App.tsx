import Hero from './components/Hero';
import PortfolioList from './components/PortfolioList';
import Technology from './components/Technology';
import About from './components/About';
import Footer from './components/Footer';
import './style.css';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import image1 from './assets/email.png';
import image2 from './assets/kegiatan.png';
import image3 from './assets/khodam.png';
import image4 from './assets/kalkulator.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const boxVariants = {
  offscreen: { opacity: 0, y: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8, delay: 0.5 }
  }
};

const aboutVariants = {
  offscreen: { opacity: 0, y: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8, delay: 1 }
  }
};

const portfolioVariants = {
  offscreen: { opacity: 0, y: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8, delay: 1.5 }
  }
};

const technologyVariants = {
  offscreen: { opacity: 0, y: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8, delay: 2 }
  }
};

const footerVariants = {
  offscreen: { opacity: 0, y: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8, delay: 2.5 }
  }
};

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
    {
      name: 'Cek Khodam',
      description: 'Aplikasi untuk mengecek khodam yang ada pada dirimu',
      link: 'https://cek-khodam-new.vercel.app/',
      image: image3
    },
    {
      name: 'Kalkulator Patungan',
      description: 'Aplikasi untuk menghitung patungan saat pemesanan makanan di restoran',
      link: 'https://patungan-id.vercel.app/',
      image: image4
    }
    // Tambahkan lebih banyak proyek jika diperlukan
  ];

  return (
    <>
      <Box id='content'>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={boxVariants}
        >
          <Hero />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={aboutVariants}
        >
          <About />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={portfolioVariants}
        >
          <PortfolioList items={portfolioItems} />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={technologyVariants}
        >
          <Technology />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={footerVariants}
        >
          <Footer />
        </motion.div>
      </Box>
    </>
  );
}

export default App;
