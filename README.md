# Portfolio Nitto

Um portfólio pessoal moderno e interativo desenvolvido com Next.js, apresentando projetos, habilidades e experiência profissional de forma elegante e dinâmica.

🌐 **Acesse o portfólio online**: [https://portfolio-kappa-wine-51.vercel.app](https://portfolio-kappa-wine-51.vercel.app)

## 🚀 Tecnologias Utilizadas

- **Next.js 13.4.3** - Framework React para produção
- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **Framer Motion 10.12.16** - Biblioteca de animações para React
- **Tailwind CSS 3.3.2** - Framework CSS utilitário
- **Swiper 9.4.0** - Biblioteca de carrosséis e sliders
- **React Particles (tsparticles)** - Efeitos de partículas interativas
- **React Icons** - Ícones populares para React
- **React CountUp** - Animação de contagem numérica

## ✨ Funcionalidades

- 🏠 **Página Inicial** - Apresentação impactante com animações e efeitos de partículas
- 👤 **Sobre** - Seção detalhada com habilidades, experiência, prêmios e credenciais
- 💼 **Trabalhos** - Galeria de projetos com slider interativo
- 🛠️ **Serviços** - Apresentação dos serviços oferecidos
- 💬 **Depoimentos** - Seção de feedbacks e recomendações
- 📧 **Contato** - Formulário de contato para comunicação

## 🎨 Características de Design

- Design moderno e responsivo
- Animações suaves com Framer Motion
- Efeitos de partículas interativas
- Transições de página elegantes
- Interface totalmente responsiva (mobile, tablet, desktop)
- Tema escuro com gradientes e efeitos visuais

## 📁 Estrutura do Projeto

```
portfolio_nitto/
├── components/          # Componentes reutilizáveis
│   ├── Avatar.jsx
│   ├── AvatarRight.jsx
│   ├── Bulb.jsx
│   ├── CardLeft.jsx
│   ├── CardRight.jsx
│   ├── Circles.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── Nav.jsx
│   ├── ParticlesContainer.jsx
│   ├── ProjectsBtn.jsx
│   ├── ServiceSlider.jsx
│   ├── Socials.jsx
│   ├── TestimonialSlider.jsx
│   ├── TopLeftImg.jsx
│   ├── Transition.jsx
│   └── WorkSlider.jsx
├── pages/               # Páginas da aplicação
│   ├── _app.jsx        # Configuração global da aplicação
│   ├── index.jsx       # Página inicial
│   ├── about/          # Página sobre
│   ├── contact/        # Página de contato
│   ├── services/       # Página de serviços
│   ├── testimonials/   # Página de depoimentos
│   └── work/           # Página de trabalhos
├── public/             # Arquivos estáticos (imagens, ícones)
├── styles/             # Estilos globais
│   └── globals.css
├── variants.js         # Variantes de animação do Framer Motion
├── tailwind.config.js  # Configuração do Tailwind CSS
├── next.config.js      # Configuração do Next.js
└── package.json        # Dependências do projeto
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositório>
cd portfolio_nitto
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## 🚀 Como Executar

### Modo de Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção
```bash
npm run build
npm start
# ou
yarn build
yarn start
```

### Linting
```bash
npm run lint
# ou
yarn lint
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build otimizada para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 🎯 Próximos Passos

Para personalizar o portfólio:

1. **Atualizar informações pessoais**: Edite os dados em `pages/about/index.jsx`
2. **Adicionar projetos**: Configure os projetos em `components/WorkSlider.jsx`
3. **Personalizar cores**: Ajuste o tema em `tailwind.config.js`
4. **Adicionar conteúdo**: Atualize textos e descrições nas páginas
5. **Configurar formulário de contato**: Integre com um serviço de email ou API

## 📄 Licença

Este projeto é privado e de uso pessoal.

## 👨‍💻 Desenvolvedor

**Nitto Dev**

Desenvolvedor Full Stack com mais de 4 anos de experiência, especializado em React, React Native e Next.js no frontend, além de Fastify e Nest.js no backend. Proativo, comunicativo e sempre em busca de aprimoramento contínuo para entregar soluções digitais de alta qualidade.

---

Desenvolvido com ❤️ por [Nitto Dev](https://portfolio-kappa-wine-51.vercel.app)

---

**Nota**: Este é um projeto em desenvolvimento. Alguns conteúdos podem ser placeholders e precisam ser atualizados com informações reais.
