import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-24">
        <div className="text-center max-w-md">
          <div className="text-9xl font-bold game-gradient mb-6">404</div>
          <h1 className="text-3xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-muted-foreground mb-8">
            К сожалению, страница, которую вы ищете, не существует или была перемещена.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
            <Button asChild className="rounded-full">
              <Link to="/">Вернуться домой</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/games">Наши игры</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Lost in space" 
            className="w-64 h-64 object-cover rounded-lg shadow-lg opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="font-medium">Похоже, вы заблудились...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
