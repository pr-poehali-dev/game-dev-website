import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

export interface GameCardProps {
  id: string;
  title: string;
  imageUrl: string;
  genre: string;
  platforms: string[];
  comingSoon?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  imageUrl,
  genre,
  platforms,
  comingSoon = false,
}) => {
  return (
    <Link to={`/games/${id}`} className="game-card group bg-card rounded-xl overflow-hidden shadow-lg">
      <div className="aspect-[16/9] overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {comingSoon && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary text-white font-medium animate-pulse-glow">
              Скоро
            </Badge>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="game-title text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs font-medium">
            {genre}
          </Badge>
          <div className="flex space-x-1 text-sm text-muted-foreground">
            {platforms.map((platform, index) => (
              <span key={index}>{platform}{index < platforms.length - 1 ? " • " : ""}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
