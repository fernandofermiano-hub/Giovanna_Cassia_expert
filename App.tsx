
import React, { useState } from 'react';
import { EXPERT_DATA, IMAGES } from './constants';
import Button from './components/Button';
import Lightbox from './components/Lightbox';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="overflow-hidden bg-[#fafafa]">
      <Lightbox imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* 1. HERO */}
      <section className="relative min-h-screen flex flex-col justify-end items-center bg-stone-900 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={`Dra. ${EXPERT_DATA.name}`} 
            className="w-full h-full object-cover object-top opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 pb-16 text-center animate-fade-up">
          <h1 className="text-white text-3xl md:text-5xl font-serif mb-4 leading-tight">
            Eu sou Dra. <span className="text-[#C5A059]">{EXPERT_DATA.name}</span>, sua {EXPERT_DATA.profession} em {EXPERT_DATA.city}.
          </h1>
          <p className="text-stone-300 text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Realço sua beleza natural com segurança, precisão e o cuidado que você merece.
          </p>
          <Button text="Agendar consulta gratuita" />
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="relative mb-10 w-full aspect-[4/5] max-w-[320px]">
            <img 
              src={IMAGES.expert} 
              alt={EXPERT_DATA.name} 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div className="text-left w-full">
            <h2 className="text-3xl font-serif mb-6 text-stone-800">Cuidado Individualizado</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Acredito que cada rosto é único. Meu trabalho é identificar e valorizar os traços que tornam você especial, sempre priorizando a naturalidade e a saúde funcional.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Atendimento exclusivo e humanizado",
                "Tecnologia de ponta em estética facial",
                "Foco total em resultados naturais",
                "Ambiente acolhedor e seguro"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button text="Falar comigo agora" showMicroText={false} />
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-20 bg-stone-50">
        <div className="px-6 mb-10 text-center">
          <h2 className="text-3xl font-serif mb-4 text-stone-800">Transformações</h2>
          <p className="text-stone-500 text-sm">Toque na imagem para ampliar</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2">
          {IMAGES.gallery.map((url, index) => (
            <div 
              key={index} 
              className="aspect-square bg-stone-200 overflow-hidden cursor-pointer active:opacity-80 transition-opacity"
              onClick={() => setSelectedImage(url)}
            >
              <img 
                src={url} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-stone-400 text-[10px] mt-6 px-10">
          Resultados podem variar de pessoa para pessoa. Fotos autorizadas por pacientes.
        </p>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-20 px-6 bg-stone-900 text-white">
        <h2 className="text-3xl font-serif mb-12 text-center text-gold">Por que me escolher?</h2>
        <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto">
          {[
            { title: "Avaliação Honesta", desc: "Apenas o que é necessário para o seu objetivo.", icon: "💎" },
            { title: "Clareza no Processo", desc: "Explicações detalhadas de cada etapa.", icon: "✨" },
            { title: "Foco no Natural", desc: "Nada de resultados artificiais ou 'exagerados'.", icon: "🌿" },
            { title: "Pós-procedimento", desc: "Acompanhamento dedicado para sua recuperação.", icon: "🤝" }
          ].map((card, i) => (
            <div key={i} className="bg-stone-800/50 p-6 rounded-2xl border border-stone-700 hover:border-gold transition-colors">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 text-center bg-white border-b border-stone-100">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-serif mb-4 text-stone-800">Inicie sua mudança hoje</h2>
          <p className="text-stone-600 mb-8">
            Minha primeira consulta de avaliação é gratuita e sem compromisso. Vamos conversar?
          </p>
          <Button text="Quero minha avaliação gratuita" />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-20 px-6 bg-stone-50">
        <h2 className="text-3xl font-serif mb-12 text-center text-stone-800">Passo a Passo</h2>
        <div className="max-w-sm mx-auto space-y-12">
          {[
            { step: "01", title: "WhatsApp", desc: "Clique no botão e envie uma mensagem. Minha equipe ou eu responderemos rapidamente." },
            { step: "02", title: "Agendamento", desc: "Escolhemos o melhor horário para você vir ao meu consultório em Jundiaí." },
            { step: "03", title: "Avaliação", desc: "Conversamos pessoalmente para entender seus desejos e planejar seu tratamento." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="text-4xl font-serif text-gold/30">{item.step}</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-stone-800">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MAIS PROVAS - CERTIFICADO */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-serif mb-8 text-stone-800">Autoridade e Formação</h2>
          <img 
            src={IMAGES.certificate} 
            alt="Certificado de Especialista" 
            className="w-full rounded-xl shadow-lg mb-8 border border-stone-100"
          />
          <p className="text-stone-600 italic">
            "Sempre em busca da perfeição através da ciência e da técnica."
          </p>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-stone-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gold"></div>
        <div className="max-w-md mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            O sorriso dos seus sonhos começa com uma decisão.
          </h2>
          <p className="text-stone-400 mb-10">
            Reserve sua vaga para uma avaliação gratuita agora mesmo via WhatsApp.
          </p>
          <Button text="Agendar meu horário gratuito" className="scale-110" />
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 bg-stone-950 text-stone-500 text-center text-sm border-t border-stone-800">
        <div className="max-w-md mx-auto">
          <p className="font-semibold text-stone-300 mb-1">Dra. {EXPERT_DATA.name}</p>
          <p className="mb-4">{EXPERT_DATA.profession} | {EXPERT_DATA.city}</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href={EXPERT_DATA.instagramLink} target="_blank" rel="noopener" className="hover:text-gold transition-colors">
              Instagram
            </a>
            <a href={EXPERT_DATA.whatsappLink} target="_blank" rel="noopener" className="hover:text-gold transition-colors">
              WhatsApp
            </a>
          </div>
          <p className="text-[10px] opacity-50">
            &copy; {new Date().getFullYear()} Todos os direitos reservados. Design Premium.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default App;
