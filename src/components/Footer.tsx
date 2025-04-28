
import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Instagram, Youtube, Twitch, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-4 font-game">
              TWO HORN UNICORN
            </h3>
            <p className="text-gray-400 mb-6">
              Создаем инновационные игры, которые открывают двери в новые миры
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-white hover:text-pink-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-pink-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-white hover:text-pink-500 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://twitch.tv" className="text-white hover:text-pink-500 transition-colors">
                <Twitch size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-pink-400 transition-colors">О студии</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-pink-400 transition-colors">Команда</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-pink-400 transition-colors">Карьера</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-pink-400 transition-colors">Новости</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-pink-400 transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Проекты</h4>
            <ul className="space-y-2">
              <li><Link to="/games/neo-hunter" className="text-gray-400 hover:text-pink-400 transition-colors">NEO HUNTER</Link></li>
              <li><Link to="/games/astral-siege" className="text-gray-400 hover:text-pink-400 transition-colors">ASTRAL SIEGE</Link></li>
              <li><Link to="/games/phantom-realms" className="text-gray-400 hover:text-pink-400 transition-colors">PHANTOM REALMS</Link></li>
              <li><Link to="/games" className="text-gray-400 hover:text-pink-400 transition-colors">Все игры</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Новости</h4>
            <p className="text-gray-400 mb-4">Подпишитесь на нашу рассылку</p>
            <div className="flex">
              <Input 
                placeholder="Email" 
                className="bg-white/10 border-white/20 text-white rounded-l-lg rounded-r-none focus:border-pink-500 focus:ring-pink-500"
              />
              <Button className="rounded-l-none bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TWO HORN UNICORN. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-pink-400 text-sm">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-pink-400 text-sm">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
