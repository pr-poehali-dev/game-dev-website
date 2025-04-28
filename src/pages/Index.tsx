import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GameCard from '@/components/GameCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const featuredGames = [
  {
    id: 'cosmic-adventure',
    title: 'Cosmic Adventure',
    imageUrl: 'https://images.unsplash.com/photo-1614085232483-1b01c59d9174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    genre: 'Космический экшн',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X'],
  },
  {
    id: 'night-warriors',
    title: 'Night Warriors',
    imageUrl: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    genre: 'Приключения',
    platforms: ['PC', 'Nintendo Switch'],
  },
  {
    id: 'fantasy-realm',
    title: 'Fantasy Realm',
    imageUrl: 'https://images.unsplash.com/photo-1531053270060-6643c8e70e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    genre: 'RPG',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X'],
    comingSoon: true,
  },
];

const achievements = [
  { number: '10+', text: 'Успешных проектов' },
  { number: '5M+', text: 'Счастливых игроков' },
  { number: '100+', text: 'Талантливых сотрудников' },
];

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero-gradient min-h-screen flex items-center justify-center text-white relative">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center py-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-game leading-tight max-w-4xl mx-auto">
              Создаем <span className="game-gradient">легендарные</span> игры для будущего поколения
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Мы — команда опытных разработчиков и креативных дизайнеров, создающих захватывающие игровые миры и истории.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl">
                <Link to="/games">Наши игры</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/about">О нас</Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <div className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши <span className="game-gradient">лучшие</span> проекты</h2>
                <p className="text-muted-foreground max-w-xl">
                  Погрузитесь в захватывающие миры с нашими инновационными играми, созданными с любовью к деталям и геймплею.
                </p>
              </div>
              <Button asChild variant="outline" className="mt-6 md:mt-0">
                <Link to="/games">Все игры</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGames.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-gaming-dark text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Создаем миры, <span className="game-gradient">которые запоминаются</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  GameDev Studio — это инновационная компания, специализирующаяся на разработке высококачественных игр для различных платформ. 
                  Наша миссия — создавать незабываемые игровые впечатления, которые вдохновляют и развлекают игроков по всему миру.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <h3 className="text-3xl md:text-4xl font-bold game-gradient mb-2">
                        {achievement.number}
                      </h3>
                      <p className="text-sm text-gray-400">{achievement.text}</p>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/about">Подробнее о нас</Link>
                </Button>
              </div>
              <div className="relative float-animation">
                <img
                  src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Команда разработчиков"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gaming-purple text-white p-4 rounded-lg shadow-xl">
                  <p className="text-sm font-medium">Основаны в 2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-gaming-purple to-gaming-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы присоединиться к нашей команде?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Мы всегда ищем талантливых разработчиков, дизайнеров и креативщиков. Давайте вместе создавать будущее игр!
            </p>
            <Button asChild variant="secondary" size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl">
              <Link to="/careers">Открытые вакансии</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
