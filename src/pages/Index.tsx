
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { motion } from '@/components/ui/motion';
import { PlayCircle, Users, Code, Award, ArrowRight, ChevronDown } from 'lucide-react';

const projects = [
  {
    id: 'neo-hunter',
    title: 'NEO HUNTER',
    description: 'Киберпанк-приключение в открытом мире будущего',
    imageUrl: 'https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'RPG',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X'],
  },
  {
    id: 'astral-siege',
    title: 'ASTRAL SIEGE',
    description: 'Космическая стратегия с элементами выживания',
    imageUrl: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Стратегия',
    platforms: ['PC', 'Nintendo Switch'],
  },
  {
    id: 'phantom-realms',
    title: 'PHANTOM REALMS',
    description: 'Мистический экшен с процедурно-генерируемым миром',
    imageUrl: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Action',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X'],
  },
];

const awards = [
  {
    title: 'Game of the Year',
    year: '2023',
    event: 'The Game Awards',
    game: 'Phantom Realms'
  },
  {
    title: 'Best Art Direction',
    year: '2022',
    event: 'DICE Awards',
    game: 'Neo Hunter'
  },
  {
    title: 'Best Indie Game',
    year: '2021',
    event: 'Golden Joystick Awards',
    game: 'Astral Siege'
  }
];

const Index = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = parallaxRef.current.getBoundingClientRect();
      
      const moveX = clientX / width - 0.5;
      const moveY = clientY / height - 0.5;
      
      parallaxRef.current.style.setProperty('--move-x', `${moveX * 30}px`);
      parallaxRef.current.style.setProperty('--move-y', `${moveY * 30}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={parallaxRef} 
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 30%), radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.3) 0%, transparent 30%), black',
        }}
      >
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-40 mix-blend-overlay"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'translate(calc(var(--move-x, 0) * -0.5), calc(var(--move-y, 0) * -0.5))',
              transition: 'transform 0.1s ease',
            }}
          ></div>
          
          {/* Mesh Grid Overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>
          
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10"></div>
        </div>
        
        {/* Floating Elements */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-pink-500/20 blur-3xl"
          style={{ 
            top: '20%', 
            left: '10%',
            transform: 'translate(calc(var(--move-x, 0) * -1.5), calc(var(--move-y, 0) * -1.5))',
            transition: 'transform 0.2s ease'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 rounded-full bg-purple-500/30 blur-3xl"
          style={{ 
            top: '60%', 
            right: '10%',
            transform: 'translate(calc(var(--move-x, 0) * 1.5), calc(var(--move-y, 0) * 1.5))',
            transition: 'transform 0.2s ease'
          }}
        ></div>
        
        {/* Hero Content */}
        <div className="container relative z-10 px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center md:text-left md:items-start max-w-4xl mx-auto md:mx-0"
          >
            <Badge className="bg-white/10 text-pink-400 mb-4 px-4 py-1 text-sm">Инновационная игровая студия</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none font-game">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                СОЗДАЕМ ИГРЫ
              </span>
              <span className="block text-white mt-2">
                НОВОЙ ЭПОХИ
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-8">
              Мы — команда разработчиков, художников и сторителлеров, объединенных одной миссией — 
              создавать инновационные игровые опыты, которые останутся в памяти игроков навсегда.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg group">
                <span>Наши проекты</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
                <PlayCircle className="mr-2" size={18} />
                <span>Смотреть шоурил</span>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-20">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>
      
      {/* Featured Project */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Badge className="bg-pink-500/20 text-pink-400 mb-4 px-3 py-1 text-sm">Флагманский проект</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-game">
                NEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">HUNTER</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Погрузитесь в мрачный киберпанк-мегаполис будущего, где технологии изменили ход эволюции человечества. 
                Вы — охотник за корпоративными секретами, обладающий уникальными кибернетическими имплантами.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-sm text-gray-400">Жанр</p>
                  <p className="text-white font-medium">Action RPG</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-sm text-gray-400">Платформы</p>
                  <p className="text-white font-medium">PC / PS5 / Xbox Series X</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-sm text-gray-400">Релиз</p>
                  <p className="text-white font-medium">2025</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg group">
                <span>Подробнее</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </div>
            <div className="md:w-1/2 relative group">
              <div className="relative z-10 rounded-xl overflow-hidden border-2 border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <img 
                  src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Neo Hunter" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl blur-xl -z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-pink-400 mb-4 px-3 py-1 text-sm">Наши проекты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-game">
              ПОРТФОЛИО <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">ИГР</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Каждый наш проект — это уникальный виртуальный мир с собственной историей, визуальным стилем и игровой механикой
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 group">
              <Link to="/games">
                <span>Все проекты</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Studio Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background with noise texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-pink-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute -right-1/4 bottom-1/4 w-1/2 h-1/2 bg-purple-600/20 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="bg-pink-500/20 text-pink-400 mb-4 px-3 py-1 text-sm">О студии</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-game">
                TWO HORN <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">UNICORN</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Мы — инновационная студия разработки игр, основанная в 2012 году группой разработчиков, объединенных страстью к созданию уникальных игровых миров и неординарных историй.
              </p>
              <p className="text-gray-300 mb-8">
                За годы нашего существования мы выпустили более 20 игр разных жанров и масштабов, завоевавших признание игроков и критиков по всему миру.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-purple-500/20">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">12+</h3>
                  <p className="text-sm text-gray-400 mt-2">Лет опыта</p>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-purple-500/20">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">20+</h3>
                  <p className="text-sm text-gray-400 mt-2">Игр выпущено</p>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-purple-500/20">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">50+</h3>
                  <p className="text-sm text-gray-400 mt-2">Сотрудников</p>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 py-6 group">
                <span>О нас подробнее</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-xl overflow-hidden border-2 border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Наша команда"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-pink-400 mb-4 px-3 py-1 text-sm">Преимущества</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-game">
              ПОЧЕМУ <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">МЫ</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Нашу студию отличает уникальный подход к разработке игр и особая атмосфера творчества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Талантливая команда</h3>
              <p className="text-gray-400">
                Наши специалисты — опытные разработчики, художники и дизайнеры с богатым опытом в игровой индустрии.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Инновационные технологии</h3>
              <p className="text-gray-400">
                Мы используем передовые технологии и постоянно экспериментируем с новыми подходами к разработке.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Признание индустрии</h3>
              <p className="text-gray-400">
                Наши игры получили множество наград и положительных отзывов от игроков и критиков.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Awards Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <Badge className="bg-pink-500/20 text-pink-400 mb-4 px-3 py-1 text-sm">Наши достижения</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-game">
                НАГРАДЫ И <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">ПРИЗНАНИЕ</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Мы гордимся тем, что наши игры получают признание и высокие оценки от игрового сообщества и индустрии
              </p>
              
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{award.title}</h4>
                      <Badge className="bg-purple-500/80 text-white">{award.year}</Badge>
                    </div>
                    <p className="text-gray-400 mb-2">{award.event}</p>
                    <p className="text-sm text-pink-400">Game: {award.game}</p>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="mt-8 border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 group">
                <span>Все награды</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </div>
            
            <div className="md:w-1/2 relative group order-1 md:order-2">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Awards"
                  className="w-full h-auto rounded-xl border-2 border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.3)]"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl blur-xl -z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-900/60 to-purple-900/60 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-game">
            ПРИСОЕДИНЯЙТЕСЬ К КОМАНДЕ
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Мы всегда ищем талантливых специалистов, готовых создавать игры будущего
          </p>
          <Button className="bg-white text-purple-900 hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-medium group">
            <span>Смотреть вакансии</span>
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
