import React from 'react';

interface ValuesListCardProps {
  icon: React.ReactNode;
  title: string;
  items: {
    title: string;
    text: string;
  }[];
}

const ValuesListCard: React.FC<ValuesListCardProps> = ({ icon, title, items }) => {
  return (
    <div className="relative bg-brand-dark rounded-2xl p-8 pl-16 mt-8">
      {/* Ícone sobreposto */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-6 flex-shrink-0 bg-primary p-4 rounded-xl shadow-lg">
        {React.cloneElement(icon as React.ReactElement, { className: "w-10 h-10 text-brand-dark" })}
      </div>

      {/* Título principal */}
      <h3 className="font-russo text-2xl text-white mb-6">{title}</h3>

      {/* Grid usa a lista de 'items' recebida via props */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <h4 className="font-uni-neue font-bold text-white mb-1">• {item.title}</h4>
            <p className="font-uni-neue text-white/80 text-sm leading-relaxed pl-4">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesListCard;