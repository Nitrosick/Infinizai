import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Sponsors } from './components/Sponsors/Sponsors';
import { Shop } from './components/Shop/Shop';
import { Cloud } from './components/Cloud/Cloud';
import { Customize } from './components/Customize/Customize';
import { Features } from './components/Features/Features';
import { News } from './components/News/News';
import { Communities } from './components/Communities/Communities';
import { Footer } from './components/Footer/Footer';
import { Scrollbar } from './components/Scrollbar/Scrollbar';

export const App = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => setScroll(window.pageYOffset);

  useEffect(() => {
    const unsubscribe = window.addEventListener('scroll', handleScroll);
    return unsubscribe;
  }, []);

  return (
    <>
      <Header />
      <main>
        <Main />
        <Sponsors />
        <Shop />
        <Cloud />
        <Customize />
        <Features />
        <News />
        <Communities />
      </main>
      <Footer />
      <Scrollbar scroll={scroll} />
    </>
  );
};
