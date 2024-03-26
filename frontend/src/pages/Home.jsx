import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/places');
    }
  }, [userInfo, navigate]);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <header className="bg-white px-2 py-6">
        <div>
          <Logo />
        </div>
      </header>
      <main
        // rgba(64,192,87, 0.3)
        className="flex h-full items-center justify-center bg-cover bg-center px-8 py-6"
        style={{
          backgroundImage: `linear-gradient(
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0.9)
          ),url(${process.env.PUBLIC_URL}/hero.jpg)`,
        }}
      >
        <div className="w-full rounded-md bg-white px-5 py-4 shadow-[0_0px_32px_-0px_rgba(0,0,0,0.15)] sm:w-3/4 lg:w-1/2 xl:w-1/3">
          <Outlet />
        </div>
      </main>
      <div className="bg-white px-6 py-4">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
