import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const cats = [
  {
    id: 1,
    name: 'Рыжик',
    image: 'https://cdn.poehali.dev/projects/c03a2e6f-a82d-40fa-8b5f-e5719d88b684/files/f218f823-a9b9-4a64-b88c-aaeac5096d9c.jpg',
    breed: 'Рыжий табби'
  },
  {
    id: 2,
    name: 'Грей',
    image: 'https://cdn.poehali.dev/projects/c03a2e6f-a82d-40fa-8b5f-e5719d88b684/files/24666ad5-8bc9-4a83-89b8-821958ac3f1e.jpg',
    breed: 'Британский короткошерстный'
  },
  {
    id: 3,
    name: 'Сима',
    image: 'https://cdn.poehali.dev/projects/c03a2e6f-a82d-40fa-8b5f-e5719d88b684/files/97ba9eab-4a25-4cbc-9373-fb0304a89fc4.jpg',
    breed: 'Сиамская'
  },
  {
    id: 4,
    name: 'Мурзик',
    image: 'https://cdn.poehali.dev/projects/c03a2e6f-a82d-40fa-8b5f-e5719d88b684/files/f218f823-a9b9-4a64-b88c-aaeac5096d9c.jpg',
    breed: 'Рыжий табби'
  },
  {
    id: 5,
    name: 'Дымка',
    image: 'https://cdn.poehali.dev/projects/c03a2e6f-a82d-40fa-8b5f-e5719d88b684/files/24666ad5-8bc9-4a83-89b8-821958ac3f1e.jpg',
    breed: 'Британский короткошерстный'
  },
  {
    id: 6,
    name: 'Тайя',
    image: 'https://cdn.poehali.dev/projects/c03a2e6f-a82d-40fa-8b5f-e5719d88b684/files/97ba9eab-4a25-4cbc-9373-fb0304a89fc4.jpg',
    breed: 'Сиамская'
  }
];

const Index = () => {
  const [clickedCat, setClickedCat] = useState<number | null>(null);

  const handleCatClick = (catId: number) => {
    setClickedCat(catId);
    
    const utterance = new SpeechSynthesisUtterance('Я за свою страну болею');
    utterance.lang = 'ru-RU';
    utterance.rate = 1;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);

    setTimeout(() => {
      setClickedCat(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="py-8 px-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Галерея Котиков
          </h1>
          <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Нажми на любого котика, чтобы он заговорил! 🐱
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cats.map((cat) => (
            <Card
              key={cat.id}
              className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                clickedCat === cat.id ? 'scale-105 ring-4 ring-primary shadow-2xl' : ''
              }`}
              onClick={() => handleCatClick(cat.id)}
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {clickedCat === cat.id && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center animate-pulse">
                    <div className="bg-white/90 rounded-full p-4">
                      <Icon name="Volume2" size={48} className="text-primary" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {cat.name}
                </h3>
                <p className="text-muted-foreground flex items-center gap-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Icon name="Sparkles" size={16} />
                  {cat.breed}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-4 justify-center mb-4">
              <Icon name="Info" size={24} className="text-primary" />
              <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Как это работает?
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Просто кликни на любого котика, и он произнесёт фразу "Я за свою страну болею"! 
              Каждый клик активирует голосовой синтезатор браузера.
            </p>
          </Card>
        </div>
      </main>

      <footer className="py-8 mt-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Интерактивная галерея котиков 🐾 Создано с любовью
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
