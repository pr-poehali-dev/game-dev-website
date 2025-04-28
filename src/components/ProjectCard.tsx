
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from '@/components/ui/motion';
import { Badge } from '@/components/ui/badge';

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  platforms: string[];
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="game-card group relative overflow-hidden rounded-xl bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-70"></div>
      
      <div className="relative overflow-hidden aspect-[3/4]">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex items-center space-x-2 mb-2">
          <Badge className="bg-primary/80 hover:bg-primary text-white">{project.category}</Badge>
          {project.platforms.map((platform) => (
            <Badge key={platform} variant="outline" className="border-white/30 text-white bg-black/50">
              {platform}
            </Badge>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 font-game tracking-wider">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        <Link 
          to={`/games/${project.id}`}
          className="inline-block py-2 px-4 bg-primary/90 hover:bg-primary text-white rounded-lg transition-colors duration-300 text-sm font-medium"
        >
          Подробнее
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
