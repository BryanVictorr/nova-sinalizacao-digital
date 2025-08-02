import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    // 1. O card principal precisa ser 'relative' para posicionar o ícone
    //    e ter padding à esquerda (pl-16) para o texto não ficar embaixo do ícone.
    <div className="relative bg-brand-dark rounded-2xl p-8 pl-16 h-full flex items-center">
      
      {/* 2. O container do ícone é 'absolute' para flutuar sobre o card. */}
      {/* -left-6 o move para fora da borda esquerda. */}
      {/* top-1/2 -translate-y-1/2 o centraliza verticalmente. */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-6 flex-shrink-0 bg-primary p-4 rounded-xl shadow-lg">
        {React.cloneElement(icon as React.ReactElement, { className: "w-10 h-10 text-brand-dark" })}
      </div>

      {/* 3. O conteúdo do texto fica dentro do card, alinhado pelo padding. */}
      <div>
        <h3 className="font-russo text-2xl text-white mb-2">{title}</h3>
        <p className="font-uni-neue text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;