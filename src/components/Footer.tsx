import React from 'react';
import { Link } from 'react-router-dom';
import { GitHubIcon, TwitterIcon, InstagramIcon } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-gaming-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <span className="text-2xl font-bold game-gradient font-game">
                GameDev Studio
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Создаем увлекательные миры и незабываемые истории с 2020 года.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Игры</h3>
            <ul className="space-y-3">
              <li><Link to="/games/cosmic-adventure" className="text-gray-400 hover:text-white transition-colors">Cosmic Adventure</Link></li>
              <li><Link to="/games/night-warriors" className="text-gray-400 hover:text-white transition-colors">Night Warriors</Link></li>
              <li><Link to="/games/fantasy-realm" className="text-gray-400 hover:text-white transition-colors">Fantasy Realm</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Компания</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Карьера</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white transition-colors">Пресса</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Подписка</h3>
            <p className="text-gray-400 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости о новых играх и обновлениях.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="bg-gaming-dark border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white rounded-md px-4 py-2 hover:bg-primary/90 transition-colors"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} GameDev Studio. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
