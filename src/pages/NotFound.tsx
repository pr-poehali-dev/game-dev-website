
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="container px-4 text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl blur-xl opacity-70"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center text-7xl font-bold">
              404
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-game">
            СТРАНИЦА <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">НЕ НАЙДЕНА</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Похоже, что страница, которую вы ищете, не существует или была перемещена.
          </p>
          
          <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg">
            <Link to="/">
              <Home className="mr-2" size={18} />
              <span>Вернуться на главную</span>
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
