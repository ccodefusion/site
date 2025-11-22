import React, { useState, useEffect } from 'react';
import { 
  Code, Zap, Smartphone, Globe, Check, Star, 
  ArrowRight, Menu, X, Instagram, Phone, Mail, 
  ShoppingCart, Heart, User, MapPin, Activity, 
  Dumbbell, Clock, ShieldCheck, ChevronRight,
  Scissors, Calendar, Search, ShoppingBag, Tag,
  Facebook, Twitter, PlayCircle, Truck, RefreshCw
} from 'lucide-react';

// ==========================================
// COMPONENTES GERAIS (REUTILIZÁVEIS)
// ==========================================

// Logo CodeFusion (Principal)
const CodeFusionLogo = ({ className = "h-8" }) => (
  <div className={`flex items-center gap-2 font-bold text-2xl tracking-tighter ${className}`}>
    <div className="relative flex items-center justify-center w-10 h-10 bg-black border border-[#00FF3C] rounded-lg shadow-[0_0_15px_rgba(0,255,60,0.5)]">
      <Code className="text-[#00FF3C]" size={24} />
    </div>
    <span className="text-white">Code<span className="text-[#00FF3C]">Fusion</span></span>
  </div>
);

// Botão Neon Principal (CodeFusion)
const NeonButton = ({ children, onClick, fullWidth, variant = 'primary' }) => {
  const baseStyle = "relative px-8 py-3 font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2";
  
  const styles = {
    primary: "bg-[#00FF3C] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,60,0.8)]",
    secondary: "bg-transparent border-2 border-[#00FF3C] text-[#00FF3C] hover:bg-[#00FF3C] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,60,0.5)]",
    dark: "bg-black border border-gray-800 text-white hover:border-[#00FF3C] hover:text-[#00FF3C]"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyle} ${styles[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </button>
  );
};

// ==========================================
// SITE 1: SEU PETSHOP AQUI (LARANJA #ff6a00)
// ==========================================
const PetShopSite = ({ onBack }) => {
  const orange = "#ff6a00";
  
  return (
    <div className="min-h-screen bg-white font-sans animate-fade-in text-gray-800">
      {/* BARRA DE NAVEGAÇÃO DO PORTFÓLIO */}
      <div className="bg-black text-white py-2 text-center text-xs font-bold tracking-widest uppercase sticky top-0 z-[60]">
        Visualizando Modelo: PetShop Premium <button onClick={onBack} className="ml-4 bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition-colors">Fechar X</button>
      </div>

      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-8 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#ff6a00] font-black text-2xl uppercase tracking-tighter">
            <Heart fill="#ff6a00" /> Seu Petshop
          </div>
          <nav className="hidden md:flex items-center gap-6 font-medium text-sm uppercase tracking-wide">
            {['Início', 'Serviços', 'Produtos', 'Banho & Tosa', 'Veterinário', 'Contato'].map(item => (
              <a key={item} href="#" className="hover:text-[#ff6a00] transition-colors">{item}</a>
            ))}
          </nav>
          <button className="bg-[#ff6a00] text-white px-6 py-2 rounded-full font-bold hover:bg-black transition-colors shadow-lg">
            Agendar Agora
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Pet" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 max-w-3xl">
            Cuidando do seu pet com <span className="text-[#ff6a00]">amor</span> e profissionalismo
          </h1>
          <p className="text-xl mb-8 max-w-xl text-gray-200">
            Seu melhor amigo merece o melhor tratamento. Profissionais qualificados e ambiente monitorado 24h.
          </p>
          <button className="bg-[#ff6a00] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,106,0,0.5)]">
            Agendar Banho & Tosa
          </button>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#ff6a00] font-bold uppercase tracking-widest text-sm">Nossos Serviços</span>
            <h2 className="text-4xl font-black mt-2">Tudo que seu pet precisa</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Scissors size={32} />, title: "Banho e Tosa", desc: "Estética completa com produtos hipoalergênicos." },
              { icon: <Activity size={32} />, title: "Consultas", desc: "Veterinários especialistas prontos para atender." },
              { icon: <ShieldCheck size={32} />, title: "Vacinas", desc: "Mantenha a saúde do seu amigo em dia." },
              { icon: <Star size={32} />, title: "Adestramento", desc: "Aulas comportamentais para cães de todas as idades." },
              { icon: <MapPin size={32} />, title: "Hospedagem", desc: "Vai viajar? Deixe seu pet em segurança conosco." },
              { icon: <Heart size={32} />, title: "Day Care", desc: "Um dia inteiro de diversão e socialização." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group border border-gray-100">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-[#ff6a00] mb-6 group-hover:bg-[#ff6a00] group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE / DIFERENCIAIS */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ff6a00] opacity-10 skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Por que escolher o <span className="text-[#ff6a00]">Seu Petshop</span>?</h2>
            <div className="space-y-6">
              {[
                "Profissionais 100% certificados e amantes de animais",
                "Estrutura monitorada por câmeras 24h",
                "Atendimento rápido, seguro e sem estresse",
                "Preço justo e pacotes mensais"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="bg-[#ff6a00] p-1 rounded-full"><Check size={16} className="text-white" /></div>
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500" alt="Dog Smiling" />
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black">Favoritos da Loja</h2>
              <p className="text-gray-500 mt-2">Mimos que seu pet vai amar.</p>
            </div>
            <button className="text-[#ff6a00] font-bold flex items-center gap-2 hover:gap-4 transition-all">Ver tudo <ArrowRight size={20}/></button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="bg-gray-100 aspect-square rounded-xl mb-4 relative overflow-hidden">
                  <img src={`https://source.unsplash.com/random/400x400?pet-toy,${item}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Product" />
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white p-3 rounded-full shadow-lg hover:bg-[#ff6a00] hover:text-white transition-colors">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
                <h3 className="font-bold mb-1">Brinquedo Premium {item}</h3>
                <p className="text-[#ff6a00] font-bold">R$ 49,90</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="py-20 bg-[#ff6a00]">
        <div className="max-w-4xl mx-auto px-4 bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-black text-center mb-8 text-black">Agende seu Horário</h2>
          <form className="grid md:grid-cols-2 gap-6">
             <input type="text" placeholder="Seu Nome" className="bg-gray-50 border border-gray-200 p-4 rounded-lg focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] outline-none" />
             <input type="text" placeholder="Nome do Pet" className="bg-gray-50 border border-gray-200 p-4 rounded-lg focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] outline-none" />
             <select className="bg-gray-50 border border-gray-200 p-4 rounded-lg outline-none">
               <option>Selecione o Serviço</option>
               <option>Banho & Tosa</option>
               <option>Consulta</option>
             </select>
             <input type="datetime-local" className="bg-gray-50 border border-gray-200 p-4 rounded-lg outline-none" />
             <button className="md:col-span-2 bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-900 transition-colors">Confirmar Agendamento</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#ff6a00] font-black text-xl uppercase tracking-tighter mb-6">
              <Heart fill="#ff6a00" /> Seu Petshop
            </div>
            <p className="text-gray-400 text-sm">Cuidando com carinho de quem sempre está ao seu lado.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Início</li>
              <li>Serviços</li>
              <li>Sobre</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>(11) 9999-9999</li>
              <li>contato@seupetshop.com</li>
              <li>Rua dos Pets, 123</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Horários</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Seg - Sex: 08h às 19h</li>
              <li>Sáb: 09h às 18h</li>
              <li>Dom: Fechado</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          © 2025 Seu Petshop Aqui. Criado com CodeFusion.
        </div>
      </footer>
    </div>
  );
};

// ==========================================
// SITE 2: SUA ACADEMIA AQUI (DARK MODE + ORANGE)
// ==========================================
const GymSite = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans animate-fade-in uppercase">
      {/* BARRA DE NAVEGAÇÃO DO PORTFÓLIO */}
      <div className="bg-[#ff6a00] text-black py-2 text-center text-xs font-bold tracking-widest sticky top-0 z-[60]">
        Visualizando Modelo: Academia Pro <button onClick={onBack} className="ml-4 bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors">Fechar X</button>
      </div>

      {/* HEADER */}
      <nav className="border-b border-gray-900 sticky top-8 z-50 bg-black/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="text-3xl font-black italic tracking-tighter">
            SUA<span className="text-[#ff6a00]">ACADEMIA</span>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-sm tracking-wider text-gray-400">
            {['Home', 'Treinos', 'Planos', 'Instrutores', 'Estrutura'].map(item => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <button className="bg-white text-black px-8 py-3 font-black text-sm hover:bg-[#ff6a00] hover:text-white transition-colors skew-x-[-10deg]">
            <span className="skew-x-[10deg] inline-block">MATRICULE-SE</span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative h-[80vh] flex items-center">
         <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Gym" className="w-full h-full object-cover opacity-50 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 italic leading-none">
            TRANSFORME <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-red-600">SEU CORPO.</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-lg normal-case mb-10 border-l-4 border-[#ff6a00] pl-6">
            Não é apenas sobre levantar peso. É sobre superar seus limites todos os dias com a melhor estrutura da cidade.
          </p>
          <button className="bg-[#ff6a00] text-black px-10 py-4 font-black text-lg hover:bg-white transition-colors">
            COMEÇAR AGORA
          </button>
        </div>
      </header>

      {/* DIFERENCIAIS */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {[
             { title: "Equipamentos", sub: "Importados e Modernos", icon: <Dumbbell className="text-[#ff6a00]" size={40} /> },
             { title: "Treinos", sub: "100% Personalizados", icon: <Activity className="text-[#ff6a00]" size={40} /> },
             { title: "Time", sub: "Certificado e Especialista", icon: <User className="text-[#ff6a00]" size={40} /> },
             { title: "Ambiente", sub: "Climatizado e Seguro", icon: <MapPin className="text-[#ff6a00]" size={40} /> },
          ].map((item, i) => (
            <div key={i} className="bg-black p-8 border border-zinc-800 hover:border-[#ff6a00] transition-colors group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-black mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm normal-case">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-5xl font-black italic">Nossa <span className="text-[#ff6a00]">Estrutura</span></h2>
             <p className="text-gray-500 normal-case text-right hidden md:block">Mais de 1000m² dedicados <br/>ao seu resultado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
            <div className="md:col-span-2 bg-zinc-800 relative group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="Gym 1" />
              <div className="absolute bottom-0 left-0 bg-[#ff6a00] text-black px-6 py-2 font-black">ÁREA DE PESO LIVRE</div>
            </div>
            <div className="bg-zinc-800 relative group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="Gym 2" />
               <div className="absolute bottom-0 left-0 bg-white text-black px-6 py-2 font-black">CARDIO</div>
            </div>
            <div className="bg-zinc-800 relative group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="Gym 3" />
               <div className="absolute bottom-0 left-0 bg-white text-black px-6 py-2 font-black">CROSS TRAINING</div>
            </div>
            <div className="md:col-span-2 bg-zinc-800 relative group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="Gym 4" />
               <div className="absolute bottom-0 left-0 bg-[#ff6a00] text-black px-6 py-2 font-black">ESTÚDIO DE DANÇA</div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-4xl font-black mb-16">Escolha seu Plano</h2>
           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {/* Básico */}
             <div className="bg-black p-8 border border-zinc-800 hover:border-white transition-colors">
               <h3 className="text-xl text-gray-400 font-bold mb-4">IRON</h3>
               <div className="text-4xl font-black text-white mb-8">R$ 89,90<span className="text-sm text-gray-500 font-normal">/mês</span></div>
               <ul className="space-y-4 text-sm text-gray-400 mb-8 text-left normal-case">
                 <li className="flex gap-2"><Check size={18} className="text-[#ff6a00]"/> Acesso à musculação</li>
                 <li className="flex gap-2"><Check size={18} className="text-[#ff6a00]"/> Sem taxa de adesão</li>
                 <li className="flex gap-2"><Check size={18} className="text-[#ff6a00]"/> Horário restrito</li>
               </ul>
               <button className="w-full border border-white text-white py-3 font-bold hover:bg-white hover:text-black transition-colors">ASSINAR</button>
             </div>
             {/* Intermediário */}
             <div className="bg-zinc-800 p-8 border-2 border-[#ff6a00] transform md:scale-110 relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff6a00] text-black text-xs font-black px-4 py-1">MAIS VENDIDO</div>
               <h3 className="text-xl text-[#ff6a00] font-bold mb-4">STEEL</h3>
               <div className="text-4xl font-black text-white mb-8">R$ 129,90<span className="text-sm text-gray-500 font-normal">/mês</span></div>
               <ul className="space-y-4 text-sm text-gray-300 mb-8 text-left normal-case">
                 <li className="flex gap-2"><Check size={18} className="text-[#ff6a00]"/> Musculação Livre</li>
                 <li className="flex gap-2"><Check size={18} className="text-[#ff6a00]"/> Aulas Coletivas</li>
                 <li className="flex gap-2"><Check size={18} className="text-[#ff6a00]"/> Livre Horário</li>
               </ul>
               <button className="w-full bg-[#ff6a00] text-black py-3 font-bold hover:bg-white transition-colors">ASSINAR</button>
             </div>
             {/* Premium */}
             <div className="bg-black p-8 border border-zinc-800 hover:border-white transition-colors">
               <h3 className="text-xl text-gray-400 font-bold mb-4">TITANIUM</h3>
               <div className="text-4xl font-black text-white mb-8">R$ 199,90<span className="text-sm text-gray-500 font-normal">/mês</span></div>
               <ul className="space-y-4 text-sm text-gray-400 mb-8 text-left normal-case">
                 <li className="flex gap-2"><Check size={18} className="text-[#ff6a00]"/> Tudo do Steel</li>
                 <li className="flex gap-2"><Check size={18} className="text-[#ff6a00]"/> Leve um amigo</li>
                 <li className="flex gap-2"><Check size={18} className="text-[#ff6a00]"/> Cadeira de Massagem</li>
               </ul>
               <button className="w-full border border-white text-white py-3 font-bold hover:bg-white hover:text-black transition-colors">ASSINAR</button>
             </div>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black pt-20 pb-10 border-t border-zinc-900 normal-case">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black italic tracking-tighter">
            SUA<span className="text-[#ff6a00]">ACADEMIA</span>
          </div>
          <div className="flex gap-6 text-gray-500">
             <Instagram className="hover:text-[#ff6a00] cursor-pointer" />
             <Facebook className="hover:text-[#ff6a00] cursor-pointer" />
             <Twitter className="hover:text-[#ff6a00] cursor-pointer" />
          </div>
          <div className="text-gray-500 text-sm text-center md:text-right">
             Rua Fitness, 999 - Centro <br/>
             (11) 98888-8888
          </div>
        </div>
      </footer>
    </div>
  );
};

// ==========================================
// SITE 3: SUA LOJA DE ROUPAS AQUI (CLEAN + FASHION + ORANGE)
// ==========================================
const StoreSite = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white text-black font-sans animate-fade-in">
       {/* BARRA DE NAVEGAÇÃO DO PORTFÓLIO */}
       <div className="bg-gray-100 text-gray-500 py-2 text-center text-xs font-bold tracking-widest uppercase sticky top-0 z-[60]">
        Visualizando Modelo: Fashion Store <button onClick={onBack} className="ml-4 bg-black text-white px-3 py-1 rounded hover:bg-[#ff6a00] transition-colors">Fechar X</button>
      </div>

      {/* TOPO PROMOCIONAL */}
      <div className="bg-black text-white text-center text-xs py-3 font-bold uppercase tracking-[0.2em] sticky top-8 z-50">
        Frete Grátis acima de R$ 299 • 10% OFF na primeira compra
      </div>

      {/* NAV */}
      <nav className="border-b border-gray-100 sticky top-[calc(32px+32px)] bg-white/95 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            SUA<span className="text-[#ff6a00]">LOJA</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            {['Novidades', 'Feminino', 'Masculino', 'Acessórios', 'Sale'].map(item => (
              <a key={item} href="#" className={`hover:text-[#ff6a00] transition-colors ${item === 'Sale' ? 'text-[#ff6a00]' : ''}`}>{item}</a>
            ))}
          </div>
          <div className="flex gap-6 items-center">
            <Search size={20} className="cursor-pointer hover:text-[#ff6a00]" />
            <div className="relative cursor-pointer group">
              <ShoppingBag size={20} className="group-hover:text-[#ff6a00]" />
              <div className="absolute -top-2 -right-2 bg-[#ff6a00] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</div>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="grid md:grid-cols-2 h-[700px]">
        <div className="bg-[#f9f9f9] flex flex-col justify-center px-12 md:px-24 order-2 md:order-1">
          <span className="text-[#ff6a00] font-bold tracking-widest text-sm mb-4 block">NOVA COLEÇÃO 2025</span>
          <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-8">
            Moda que <br/>combina com <br/>você.
          </h1>
          <p className="text-gray-500 mb-10 max-w-md leading-relaxed">
            Peças minimalistas com cortes modernos e tecido premium. Descubra seu novo estilo hoje.
          </p>
          <button className="bg-black text-white px-10 py-4 w-max hover:bg-[#ff6a00] transition-colors text-sm font-bold tracking-widest uppercase">
            Conhecer Coleção
          </button>
        </div>
        <div className="bg-gray-200 relative order-1 md:order-2 h-full">
           <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="w-full h-full object-cover" alt="Fashion Model" />
        </div>
      </header>

      {/* CATEGORIAS */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Feminino", img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { title: "Masculino", img: "https://images.unsplash.com/photo-1516257984-b1b4d8c9230e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
            { title: "Acessórios", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
          ].map((cat, i) => (
            <div key={i} className="relative h-[500px] group cursor-pointer overflow-hidden">
              <img src={cat.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={cat.title} />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute bottom-10 left-8">
                <h3 className="text-white text-3xl font-bold mb-2">{cat.title}</h3>
                <span className="text-white border-b border-white pb-1 text-sm tracking-widest group-hover:text-[#ff6a00] group-hover:border-[#ff6a00] transition-colors">VER PRODUTOS</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
             <div className="w-20 h-1 bg-[#ff6a00] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] mb-4 bg-white overflow-hidden">
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 z-10">NOVO</span>
                  <img src={`https://source.unsplash.com/random/400x500?fashion,clothes,${i}`} className="w-full h-full object-cover group-hover:opacity-0 transition-opacity absolute inset-0" alt="Prod" />
                  <img src={`https://source.unsplash.com/random/400x500?model,${i}`} className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0" alt="Prod Hover" />
                  
                  {/* Botão Hover */}
                  <div className="absolute bottom-0 left-0 w-full bg-white py-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-gray-100">
                    <button className="text-xs font-bold tracking-widest hover:text-[#ff6a00]">ADICIONAR AO CARRINHO</button>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-900">Essential Cotton Tee</h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-gray-500">R$ 129,00</p>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-black border border-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ff6a00] border border-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-white border border-gray-200"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="border border-black px-8 py-3 text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors">
              Carregar Mais Produtos
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-black text-white text-center">
         <div className="max-w-lg mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Inscreva-se e Ganhe 10% OFF</h2>
            <p className="text-gray-400 mb-8 text-sm">Fique por dentro das novidades e promoções exclusivas.</p>
            <div className="flex">
              <input type="email" placeholder="Seu e-mail" className="flex-1 bg-white/10 border-none text-white px-4 py-3 focus:ring-1 focus:ring-[#ff6a00] outline-none" />
              <button className="bg-[#ff6a00] text-white font-bold px-6 py-3 hover:bg-white hover:text-black transition-colors">ENVIAR</button>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
           <div>
             <span className="text-xl font-bold tracking-tighter block mb-6">
                SUA<span className="text-[#ff6a00]">LOJA</span>
             </span>
             <div className="flex gap-4 text-gray-400">
               <Instagram size={20} className="hover:text-black" />
               <Facebook size={20} className="hover:text-black" />
             </div>
           </div>
           <div>
             <h4 className="font-bold text-sm mb-4">AJUDA</h4>
             <ul className="space-y-2 text-sm text-gray-500">
               <li>Meus Pedidos</li>
               <li>Trocas e Devoluções</li>
               <li>Fale Conosco</li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-sm mb-4">INSTITUCIONAL</h4>
             <ul className="space-y-2 text-sm text-gray-500">
               <li>Sobre a Marca</li>
               <li>Trabalhe Conosco</li>
               <li>Política de Privacidade</li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-sm mb-4">PAGAMENTO</h4>
             <div className="flex gap-2">
               <div className="w-10 h-6 bg-gray-100 rounded"></div>
               <div className="w-10 h-6 bg-gray-100 rounded"></div>
               <div className="w-10 h-6 bg-gray-100 rounded"></div>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

// ==========================================
// LANDING PAGE PRINCIPAL (CODEFUSION)
// ==========================================

const LandingPage = () => {
  const [activePortfolio, setActivePortfolio] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para mudar o header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Se houver um portfólio ativo, renderize apenas ele
  if (activePortfolio === 'pet') return <PetShopSite onBack={() => setActivePortfolio(null)} />;
  if (activePortfolio === 'gym') return <GymSite onBack={() => setActivePortfolio(null)} />;
  if (activePortfolio === 'store') return <StoreSite onBack={() => setActivePortfolio(null)} />;

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#00FF3C] selection:text-black overflow-x-hidden">
      
      {/* HEADER */}
      <header className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-black/80 backdrop-blur-md border-gray-800 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <CodeFusionLogo />
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Início', 'Sobre', 'Vantagens', 'Portfólio'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-sm text-gray-300 hover:text-[#00FF3C] transition-colors uppercase tracking-wider font-medium"
              >
                {item}
              </button>
            ))}
            <NeonButton variant="secondary" onClick={() => scrollToSection('planos')}>
              Ver Planos
            </NeonButton>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-gray-800 p-4 flex flex-col gap-4 animate-fade-in-down">
            {['Início', 'Sobre', 'Portfólio', 'Planos'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))} 
                className="text-left py-2 text-gray-300 border-b border-gray-800"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00FF3C] rounded-full opacity-5 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#00FF3C]/30 bg-[#00FF3C]/10 text-[#00FF3C] text-sm font-bold tracking-wider animate-pulse">
            TECNOLOGIA DE PONTA + IA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Sites e Apps Profissionais <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF3C] to-emerald-600">
              Criados com Inteligência Artificial
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            A CodeFusion une design premium e velocidade absurda. Tenha um site com qualidade de grande empresa por um preço que cabe no seu bolso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton variant="primary" onClick={() => scrollToSection('planos')}>
              Ver Nossos Planos <ArrowRight size={20} />
            </NeonButton>
            <NeonButton variant="dark" onClick={() => scrollToSection('portfolio')}>
              Ver Exemplos Reais
            </NeonButton>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8 max-w-4xl mx-auto">
            {[
              { label: "Entrega Expressa", val: "48h" },
              { label: "Clientes Satisfeitos", val: "+500" },
              { label: "Qualidade", val: "100%" },
              { label: "Suporte", val: "24/7" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="sobre" className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute inset-0 bg-[#00FF3C] rounded-2xl rotate-3 blur-lg opacity-20"></div>
             <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
               <Code size={48} className="text-[#00FF3C] mb-6" />
               <h3 className="text-2xl font-bold mb-4">Não somos apenas uma agência.</h3>
               <p className="text-gray-400 leading-relaxed">
                 Somos uma fusão de designers experientes e algoritmos avançados. Enquanto agências tradicionais demoram semanas, a 
                 <span className="text-white font-bold"> CodeFusion</span> entrega perfeição em dias.
               </p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">O Futuro do Desenvolvimento Web</h2>
            <p className="text-gray-400 mb-6">
              Utilizamos IA generativa para criar layouts, escrever textos persuasivos e otimizar códigos. Isso elimina custos desnecessários e repassa a economia para você.
            </p>
            <ul className="space-y-4">
              {['Qualidade Premium', 'Preço Justo', 'Velocidade Incomparável'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="bg-[#00FF3C]/20 p-1 rounded-full text-[#00FF3C]">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* POR QUE NÓS (VANTAGENS) */}
      <section id="vantagens" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que escolher a CodeFusion?</h2>
            <p className="text-gray-400">Esqueça sites lentos, feios e caros. Aqui é outro nível.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Velocidade Absurda", desc: "Seu site no ar em tempo recorde. Não perca tempo esperando meses." },
              { icon: <Smartphone />, title: "Mobile First", desc: "Layouts que funcionam perfeitamente em qualquer celular, tablet ou PC." },
              { icon: <Globe />, title: "SEO Otimizado", desc: "Estrutura preparada para o Google encontrar seu negócio mais rápido." },
              { icon: <ShieldCheck />, title: "Segurança Total", desc: "Certificado SSL e proteção contra ataques incluídos em todos os planos." },
              { icon: <Star />, title: "Design Premium", desc: "Visual moderno que passa credibilidade imediata para seu cliente." },
              { icon: <Activity />, title: "Alta Conversão", desc: "Focados em transformar visitantes em vendas reais." },
            ].map((card, i) => (
              <div key={i} className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-[#00FF3C]/50 transition-all hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-[#00FF3C] mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00FF3C] transition-colors">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS E PREÇOS */}
      <section id="planos" className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#00FF3C] font-bold tracking-wider uppercase text-sm">Promoção por Tempo Limitado</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Escolha seu Plano</h2>
            <p className="text-gray-400 max-w-2xl mx-auto bg-zinc-900 py-2 px-4 rounded-full border border-zinc-800 inline-block">
              ⚠ Atenção: Esses valores eram muito mais altos. Aproveite a redução de preços.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* PLANO INICIANTE */}
            <div className="bg-black p-8 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-colors">
              <h3 className="text-gray-400 font-medium mb-2">Plano Iniciante</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-500 line-through">R$ 297</span>
                <span className="text-4xl font-bold text-white">R$ 50</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-400 text-sm">
                <li className="flex gap-2"><Check size={16} className="text-[#00FF3C]" /> Site One-Page (1 Página)</li>
                <li className="flex gap-2"><Check size={16} className="text-[#00FF3C]" /> Design Responsivo</li>
                <li className="flex gap-2"><Check size={16} className="text-[#00FF3C]" /> Publicação Incluída</li>
                <li className="flex gap-2"><Check size={16} className="text-[#00FF3C]" /> Botão WhatsApp</li>
              </ul>
              <a href="https://kiwify.com.br" target="_blank" rel="noreferrer" className="block text-center w-full bg-zinc-800 text-white py-3 rounded-lg font-bold hover:bg-zinc-700 transition-colors">
                Comprar Agora
              </a>
            </div>

            {/* PLANO PREMIUM (DESTAQUE) */}
            <div className="bg-zinc-900 p-8 rounded-2xl border-2 border-[#00FF3C] relative transform md:scale-105 shadow-[0_0_30px_rgba(0,255,60,0.1)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00FF3C] text-black font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider">
                Mais Popular
              </div>
              <h3 className="text-[#00FF3C] font-bold text-lg mb-2">Plano Profissional</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-500 line-through">R$ 597</span>
                <span className="text-5xl font-bold text-white">R$ 150</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-300">
                <li className="flex gap-2"><Check size={20} className="text-[#00FF3C]" /> <strong>Até 4 Páginas</strong></li>
                <li className="flex gap-2"><Check size={20} className="text-[#00FF3C]" /> Design Ultra Moderno</li>
                <li className="flex gap-2"><Check size={20} className="text-[#00FF3C]" /> Galeria de Fotos</li>
                <li className="flex gap-2"><Check size={20} className="text-[#00FF3C]" /> Formulário de Contato</li>
                <li className="flex gap-2"><Check size={20} className="text-[#00FF3C]" /> Hospedagem Configurada</li>
              </ul>
              <NeonButton fullWidth onClick={() => window.open('https://kiwify.com.br', '_blank')}>
                Garantir Oferta
              </NeonButton>
            </div>

            {/* PLANO EMPRESARIAL */}
            <div className="bg-black p-8 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-colors">
              <h3 className="text-white font-medium mb-2">Plano Premium</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-500 line-through">R$ 997</span>
                <span className="text-4xl font-bold text-white">R$ 300</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-400 text-sm">
                <li className="flex gap-2"><Check size={16} className="text-[#00FF3C]" /> <strong>Até 6 Páginas</strong></li>
                <li className="flex gap-2"><Check size={16} className="text-[#00FF3C]" /> Animações Premium</li>
                <li className="flex gap-2"><Check size={16} className="text-[#00FF3C]" /> SEO Avançado</li>
                <li className="flex gap-2"><Check size={16} className="text-[#00FF3C]" /> Integração WhatsApp Pro</li>
                <li className="flex gap-2"><Check size={16} className="text-[#00FF3C]" /> Painel Administrativo</li>
              </ul>
              <a href="https://kiwify.com.br" target="_blank" rel="noreferrer" className="block text-center w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                Comprar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO INTERATIVO */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Projetos</h2>
            <p className="text-gray-400">Clique em "Ver Site" para testar a experiência real.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ITEM 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 cursor-pointer" onClick={() => setActivePortfolio('pet')}>
              <div className="aspect-video bg-white flex items-center justify-center relative border-b border-gray-800">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                   <button className="bg-[#00FF3C] text-black font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                     Ver Site Ao Vivo
                   </button>
                </div>
                {/* Preview Miniatura */}
                <div className="text-center opacity-70 group-hover:opacity-30 transition-opacity">
                    <Heart size={64} className="mx-auto text-[#ff6a00] mb-2" />
                    <span className="font-bold text-gray-800">Seu Petshop</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">PetShop Premium</h3>
                <p className="text-sm text-gray-500">Estilo Clean • Agendamento Online</p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 cursor-pointer" onClick={() => setActivePortfolio('gym')}>
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative border-b border-black">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                   <button className="bg-[#00FF3C] text-black font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                     Ver Site Ao Vivo
                   </button>
                </div>
                <div className="text-center opacity-70 group-hover:opacity-30 transition-opacity">
                    <Dumbbell size={64} className="mx-auto text-[#ff6a00] mb-2" />
                    <span className="font-black italic text-white">SUA ACADEMIA</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Academia Pro</h3>
                <p className="text-sm text-gray-500">Dark Mode • Galeria de Fotos</p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 cursor-pointer" onClick={() => setActivePortfolio('store')}>
              <div className="aspect-video bg-gray-100 flex items-center justify-center relative border-b border-gray-800">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                   <button className="bg-[#00FF3C] text-black font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                     Ver Site Ao Vivo
                   </button>
                </div>
                <div className="text-center opacity-70 group-hover:opacity-30 transition-opacity">
                    <ShoppingBag size={64} className="mx-auto text-black mb-2" />
                    <span className="font-serif text-2xl text-black">Sua Loja</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Fashion Store</h3>
                <p className="text-sm text-gray-500">E-commerce • Design Minimalista</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-12">Como ter seu site em 3 passos</h2>
           
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { step: "01", title: "Escolha o Plano", text: "Selecione o pacote ideal e faça o pagamento seguro via Kiwify." },
               { step: "02", title: "Envie os Dados", text: "Preencha um formulário simples com as infos do seu negócio." },
               { step: "03", title: "Receba Pronto", text: "Em até 48h nossa IA + Equipe entregam seu site funcionando." }
             ].map((s, i) => (
               <div key={i} className="relative">
                 <div className="text-8xl font-black text-zinc-800 absolute -top-8 left-1/2 -translate-x-1/2 z-0 opacity-50">{s.step}</div>
                 <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                   <p className="text-gray-400 text-sm">{s.text}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Carlos Mendes", role: "Advogado", text: "Impressionante. O site ficou pronto em 2 dias e parece que paguei 5 mil reais. Recomendo demais!" },
              { name: "Fernanda Souza", role: "Dona de Confeitaria", text: "Eu não entendo nada de tecnologia e a CodeFusion resolveu tudo. O suporte no WhatsApp é nota 10." },
              { name: "Igor Tech", role: "Youtuber", text: "Design futurista muito top. O plano de R$ 150 vale muito a pena pela qualidade entregue." }
            ].map((d, i) => (
              <div key={i} className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                <div className="flex gap-1 text-[#00FF3C] mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 mb-6 italic">"{d.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center font-bold text-white">
                    {d.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{d.name}</div>
                    <div className="text-xs text-gray-500">{d.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 bg-gradient-to-r from-[#00FF3C] to-emerald-600 rounded-3xl p-12 text-center shadow-[0_0_50px_rgba(0,255,60,0.3)]">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6">Pronto para elevar seu nível?</h2>
          <p className="text-black/80 text-xl mb-8 font-medium">Não deixe para depois. A promoção de R$ 50 pode acabar a qualquer momento.</p>
          <button onClick={() => scrollToSection('planos')} className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
            Quero Meu Site Agora
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <CodeFusionLogo className="mb-6" />
            <p className="text-gray-500 max-w-sm mb-6">
              A CodeFusion é uma empresa de tecnologia focada em democratizar o acesso a sites profissionais usando o poder da Inteligência Artificial.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#00FF3C] hover:text-black transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#00FF3C] hover:text-black transition-colors cursor-pointer">
                <Phone size={20} />
              </div>
              <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#00FF3C] hover:text-black transition-colors cursor-pointer">
                <Mail size={20} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-[#00FF3C] cursor-pointer">Início</li>
              <li className="hover:text-[#00FF3C] cursor-pointer">Sobre Nós</li>
              <li className="hover:text-[#00FF3C] cursor-pointer">Planos e Preços</li>
              <li className="hover:text-[#00FF3C] cursor-pointer">Termos de Uso</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li>contato@codefusion.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} CodeFusion. Todos os direitos reservados. <br/>
          <span className="opacity-50">Site criado com IA pela CodeFusion</span>
        </div>
      </footer>

      {/* GLOBAL STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .animate-fade-in-down { animation: fade-in-down 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default LandingPage;