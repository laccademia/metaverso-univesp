// Conteúdo detalhado dos módulos - EXTRAÍDO DO PDF ORIGINAL
const modulesContent = {
    1: {
        title: "Módulo 1: Explorar",
        icon: "🔍",
        content: `
            <h2>🔍 Módulo 1 – Explorar</h2>
            
            <p><strong>Visite uma exposição imersiva em um metaverso e passe pela experiência de explorar, interagir e aprender com esse tipo de ambiente.</strong></p>

            <h3>O que irá aprender neste módulo</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QAcpr0176xY" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <p>Neste módulo você irá explorar um espaço imersivo que criamos para exemplificar o tipo de experiência que aprenderá a criar ao fazer este curso. A ideia é fazer a visita como convidado mesmo, sem se preocupar com questões técnicas e de desenvolvimento.</p>
            
            <p>O ambiente foi criado com o <strong><a href="https://framevr.io/" target="_blank" rel="noopener noreferrer">FrameVR</a></strong>, a ferramenta de metaverso para criação de ambientes imersivos e interativos tridimensionais que será ensinada neste curso.</p>

            <h3>Visita a uma exposição no Metaverso</h3>
            
            <p>Para compreender melhor como é passear por uma exposição imersiva, <a href="https://framevr.io/mtesd-galeria" target="_blank" rel="noopener noreferrer">acesse este link</a> e ingresse na exposição 3D que criamos especialmente para este curso.</p>
            
            <p><strong>IMPORTANTE:</strong> antes de entrar digite seu nome no lugar da palavra "GUEST" (nome sugerido pelo ambiente, que significa "convidado"). Assim se outras pessoas estiverem no ambiente saberão seu nome (ficaria muito ruim para interagir com outros visitantes se todos estiverem identificados como GUEST, não acha?).</p>

            <h3>📖 Mini Tutorial: Como Navegar no Metaverso</h3>
            
            <div class="tutorial-carousel">
                <div class="carousel-container">
                    <div class="carousel-slide active">
                        <img src="images/tutorial_01_connect.png" alt="Tela de conexão do FrameVR">
                        <div class="carousel-caption">
                            <h4>1. Conectar ao Ambiente</h4>
                            <p>Após digitar seu nome (ou apelido) aperte o botão <strong>CONNECT</strong> para ingressar na exposição.</p>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="images/tutorial_02_wasd.png" alt="Navegação com teclado WASD">
                        <div class="carousel-caption">
                            <h4>2. Movimentação</h4>
                            <p>A navegação é bem intuitiva. É possível mover-se usando as setas do teclado ou as teclas <strong>AWSD</strong> (ou usando dedo ou pen, se estiver usando celular ou tablet).</p>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="images/tutorial_03_mouse.png" alt="Controle de câmera com mouse">
                        <div class="carousel-caption">
                            <h4>3. Controle de Câmera</h4>
                            <p>Clicando e segurando o mouse dá para girar a câmera. Configuramos para que a navegação seja em primeira pessoa, ou seja, a câmera será seus olhos e você não verá a si próprio.</p>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="images/tutorial_04_avatar.png" alt="Avatares e interação multiplayer">
                        <div class="carousel-caption">
                            <h4>4. Interação Multiplayer</h4>
                            <p>Caso outra pessoa entre no ambiente, você verá um bonequinho, que chamamos de "avatar", representando-a e também será visto por ela. Se ambos ativarem seus microfones poderão conversar. São permitidos 8 usuários simultâneos na sala.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module1')">&lt;</button>
                <button class="carousel-btn next" onclick="moveCarousel(1, 'module1')">&gt;</button>
                <div class="carousel-dots">
                    <span class="dot active" onclick="currentSlide(1, 'module1')"></span>
                    <span class="dot" onclick="currentSlide(2, 'module1')"></span>
                    <span class="dot" onclick="currentSlide(3, 'module1')"></span>
                    <span class="dot" onclick="currentSlide(4, 'module1')"></span>
                </div>
            </div>
            
            <p>Explore os limites e possibilidades do ambiente, assim, quando for criar o seu próprio, já saberá como é passar por essa experiência.</p>

            <p>A título de bônus, criamos uma pequena "gamificação", a qual está fora do escopo deste curso e por isso os tutoriais não abordarão como foi criada. Para poder abrir a porta que dá acesso às salas de tutoriais você precisará descobrir uma senha. Recomendamos que clique nos objetos e vasculhe o espaço para encontrar um presente escondido. Se conseguir acessar a sala de tutoriais poderá seguir por lá, caso desejar. Ou então, retorne aqui para prosseguir para os outros módulos.</p>
            
            <p><strong>Divirta-se!</strong></p>

            <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                    <span>🥽 Explorando a exposição com "Óculos de Realidade Virtual"</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    <div class="vr-section">
                        <img src="images/tutorial_05_vr.webp" alt="Meta Quest 3 - Óculos de Realidade Virtual" class="vr-image">
                        <p><em>Meta Quest 3 - Imagem de divulgação da empresa Meta, fabricante desse equipamento</em></p>
                    </div>
                    <p>Caso você possua um, ou tenha acesso a algum, <strong>HMD (Head-Mounted Display)</strong>, nome técnico do popular "óculos" de realidade virtual, recomendamos que experimente navegar na exposição com o máximo de imersão propiciado por esse equipamento. Você poderá andar pelo recinto de exposição como se lá estivesse, vendo tudo em tamanho real.</p>
                    <p>Testamos no Meta Quest 3 e funcionou muito bem. Bastou <a href="https://framevr.io/mtesd-galeria" target="_blank" rel="noopener noreferrer">entrarmos no endereço da exposição</a> usando o browser de Internet do próprio Meta Quest e clicarmos no símbolo do "óculos" de RV que aparece embaixo, na própria cena.</p>
                    <p><strong>Imerja-se!</strong></p>
                </div>
            </div>
        `
    },
    2: {
        title: "Módulo 2: Capturar",
        icon: "📸",
        content: `            <h2>📸 Módulo 2 – Capturar</h2>
            
            <p><strong>Aprenda a capturar objetos do espaço físico, transformando-os em modelos digitais 3D.</strong></p>

            <h3>O que irá aprender neste módulo</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/-xuyqhV7yGs" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <p>Neste módulo você verá como instalar e usar um aplicativo para capturar um objeto do espaço físico e transformá-lo em um modelo digital 3D.</p>

            <h3>Capturando um Objeto do mundo físico</h3>
            
            <p>Você irá aprender como utilizar o aplicativo de celular <strong>Luma AI</strong> para fazer a captura de um objeto do mundo físico, convertendo-o para um modelo 3D digital.</p>
            
            <p>Acompanhe pelo vídeo ou pelo tutorial em texto após o vídeo e faça você mesmo.</p>

            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/k6Ml0Mwr6xI" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <h3>Tutorial Passo a Passo</h3>
            
            <div class="carousel-container" id="carousel-modulo2">
                <button class="carousel-btn prev" onclick="moveCarousel('modulo2', -1)">‹</button>
                <button class="carousel-btn next" onclick="moveCarousel('modulo2', 1)">›</button>
                
                <div class="carousel-slide active">
                    <img src="images/modulo2/08_img.png" alt="Tela inicial do Luma AI">
                    <div class="carousel-text">
                        <h4>1. Obtenha o Luma AI</h4>
                        <p>Baixe o aplicativo Luma AI na sua loja de apps (disponível para iOS e Android). Este aplicativo usa inteligência artificial para transformar objetos reais em modelos 3D.</p>
                    </div>
                </div>
                
                <div class="carousel-slide">
                    <img src="images/modulo2/09_img.jpg" alt="Botão Create">
                    <div class="carousel-text">
                        <h4>2. Comece uma captura</h4>
                        <p>Após abrir o aplicativo, clique no ícone de "+" para criar uma nova captura.</p>
                    </div>
                </div>
                
                <div class="carousel-slide">
                    <img src="images/modulo2/10_img.png" alt="Opção Guided">
                    <div class="carousel-text">
                        <h4>3. Escolha Captura Guiada</h4>
                        <p>Clique em "Guided" para fazer uma captura assistida. Esta opção é ideal para iniciantes, pois o aplicativo guia você durante todo o processo.</p>
                    </div>
                </div>
                
                <div class="carousel-slide">
                    <img src="images/modulo2/11_img.png" alt="Círculo de captura">
                    <div class="carousel-text">
                        <h4>4. Parametrize o Domo</h4>
                        <p>Clique no objeto que deseja capturar e centralize o círculo sobre ele. Você pode ajustar o tamanho do círculo fazendo um movimento de pinça com os dedos.</p>
                    </div>
                </div>
                
                <div class="carousel-slide">
                    <img src="images/modulo2/12_img.png" alt="Botão Scan">
                    <div class="carousel-text">
                        <h4>5. Confirme a Parametrização</h4>
                        <p>Após ajustar o domo de captura, clique em "Scan" para confirmar. Confira se o domo envolve todo o objeto que será capturado.</p>
                    </div>
                </div>
                
                <div class="carousel-slide">
                    <img src="images/modulo2/13_img.png" alt="Captura em 360 graus">
                    <div class="carousel-text">
                        <h4>6. Capture o Objeto</h4>
                        <p>Circule o objeto com seu celular, cobrindo todos os ângulos do domo. O domo mudará de cor para indicar as áreas já capturadas. Cubra toda a superfície do domo.</p>
                    </div>
                </div>
                
                <div class="carousel-slide">
                    <img src="images/modulo2/14_img.png" alt="Botão Finish">
                    <div class="carousel-text">
                        <h4>7. Finalize a Captura</h4>
                        <p>Clique em "Finish" após cobrir todos os ângulos do objeto. O aplicativo também pode finalizar automaticamente se detectar que o domo foi coberto por inteiro.</p>
                    </div>
                </div>
                
                <div class="carousel-slide">
                    <img src="images/modulo2/15_img.png" alt="Nomear captura">
                    <div class="carousel-text">
                        <h4>8. Nomeie a Captura</h4>
                        <p>Dê um nome para sua captura e clique em "Create".</p>
                    </div>
                </div>
                
                <div class="carousel-slide">
                    <img src="images/modulo2/17_img.png" alt="Upload e processamento">
                    <div class="carousel-text">
                        <h4>9. Aguarde o Processamento</h4>
                        <p>Espere o carregamento das imagens com o aplicativo aberto. Depois que o upload acabar, o aplicativo iniciará o processamento. Esse processo pode levar algumas horas.</p>
                    </div>
                </div>
                
                <div class="carousel-slide">
                    <img src="images/modulo2/18_img.png" alt="Visualização 3D">
                    <div class="carousel-text">
                        <h4>10. Visualize seu Modelo 3D</h4>
                        <p>Após o processamento, acesse sua biblioteca (Library) e clique no objeto. Você pode visualizar em "Magic View", girando o modelo 3D com o dedo.</p>
                    </div>
                </div>
                
                <div class="carousel-indicators"></div>
            </div>

            <div class="accordion">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                    <span>🥽 Visualizando em Realidade Aumentada</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    <img src="images/modulo2/35_img.png" alt="Realidade Aumentada" style="max-width: 450px; width: 100%; height: auto; margin: 1rem 0; border-radius: 0.5rem;">
                    
                    <p>O Luma AI também permite visualizar seu modelo 3D no mundo real usando a câmera do seu celular. Para isso, siga os passos:</p>
                    
                    <ol>
                        <li>Clique em "AR View".</li>
                        <li>Mire seu celular sobre a superfície onde quer projetar o objeto capturado.</li>
                        <li>Clique na superfície para projetar o objeto.</li>
                        <li>Clique com dois dedos no objeto e redimensione fazendo movimento de pinça.</li>
                        <li>Caminhe pelo ambiente para ter uma visualização em Realidade Aumentada completa.</li>
                    </ol>
                    
                    <p>Pronto! Você finalizou sua primeira captura e já sabe como visualizá-la em 3D e em Realidade Aumentada!</p>
                </div>
            </div>

            <p><strong>Nota:</strong> Consulte o PDF original do curso para instruções detalhadas e exemplos visuais completos.</p>
`
    },
    3: {
        title: "Módulo 3: Curar e Recriar",
        icon: "🎨",
        content: `
            <h2>🎨 Módulo 3 – Curar e Recriar</h2>
            
            <p><strong>Aprenda a buscar modelos 3D prontos e gratuitos, baixá-los e modificá-los, para uso em seus ambientes imersivos.</strong></p>

            <h3>O que irá aprender neste módulo</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <p>Além de criar modelos 3D a partir de objetos físicos, é possível baixar modelos já prontos. Um grande armazém de modelos 3D é o <strong>SketchFab</strong>, o qual você poderá usar para buscar novos modelos e baixá-los para inclusão em seus ambientes.</p>
            
            <p>Ensinaremos também como modificar texturas de modelos prontos, a fim de personalizá-los de acordo com o uso que deles fará.</p>

            <h3>Trabalhando com Sketchfab</h3>
            
            <p>O Sketchfab é uma das maiores plataformas de modelos 3D do mundo, com milhões de objetos gratuitos e pagos disponíveis.</p>

            <h3>Criando sua conta</h3>
            <ul>
                <li>Acesse <a href="https://sketchfab.com" target="_blank" style="color: #3b82f6;">sketchfab.com</a></li>
                <li>Clique em "Sign Up" (Cadastrar)</li>
                <li>Preencha seus dados ou use login social</li>
                <li>Confirme seu email</li>
            </ul>

            <h3>Buscando e baixando modelos</h3>
            <ul>
                <li>Use a barra de busca no topo</li>
                <li>Filtre por "Downloadable" (Baixável)</li>
                <li>Filtre por licença "CC BY" ou "CC0" (uso livre)</li>
                <li>Visualize o modelo em 3D antes de baixar</li>
                <li>Clique em "Download 3D Model"</li>
                <li>Escolha o formato GLB ou GLTF</li>
            </ul>

            <h3>Editando Texturas</h3>
            
            <p>Texturas são as "pinturas" que cobrem os modelos 3D, dando-lhes cor e detalhes. Você pode modificá-las usando ferramentas online como o glfEditor.</p>

            <p><strong>Nota:</strong> O tutorial completo com capturas de tela e instruções passo a passo está disponível no PDF original do curso.</p>
        `
    },
    4: {
        title: "Módulo 4: Expor",
        icon: "🏛️",
        content: `
            <h2>🏛️ Módulo 4 – Expor</h2>
            
            <p><strong>Preparados seus modelos, é chegado o momento de expô-los em um ambiente imersivo. Este módulo o(a) capacitará a preparar e disponibilizar um ambiente de metaverso imersivo, usando o Frame VR, no qual inserirá seus objetos e interações.</strong></p>

            <h3>O que irá aprender neste módulo</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <p>Neste módulo você aprenderá a criar sua própria exposição imersiva no <strong>FrameVR</strong>, desde a criação da conta até a publicação final.</p>

            <h3>Principais etapas:</h3>

            <p><strong>1. Criando sua conta no FrameVR</strong></p>
            <ul>
                <li>Acesse <a href="https://framevr.io" target="_blank" style="color: #3b82f6;">framevr.io</a></li>
                <li>Cadastre-se e confirme seu email</li>
            </ul>

            <p><strong>2. Configurando seu Avatar</strong></p>
            <ul>
                <li>Personalize aparência, roupas e cores</li>
                <li>Defina seu perfil</li>
            </ul>

            <p><strong>3. Criando um Novo Ambiente</strong></p>
            <ul>
                <li>Clique em "Create Frame"</li>
                <li>Escolha um template ou comece do zero</li>
                <li>Dê um nome à sua exposição</li>
            </ul>

            <p><strong>4. Inserindo Elementos</strong></p>
            <ul>
                <li><strong>Imagens:</strong> Upload direto ou via URL</li>
                <li><strong>Vídeos:</strong> Links do YouTube ou Vimeo</li>
                <li><strong>Objetos 3D:</strong> Upload de arquivos GLB ou integração com Sketchfab</li>
            </ul>

            <p><strong>5. Criando Interações</strong></p>
            <ul>
                <li>Adicione ações aos objetos (links, textos, etc.)</li>
                <li>Configure comportamentos interativos</li>
            </ul>

            <p><strong>6. Publicando sua Exposição</strong></p>
            <ul>
                <li>Clique em "Publish"</li>
                <li>Escolha visibilidade (pública ou privada)</li>
                <li>Compartilhe o link</li>
            </ul>

            <p><strong>Nota:</strong> Este módulo contém tutoriais extensos com capturas de tela detalhadas. Consulte o PDF original do curso para o conteúdo completo com todas as imagens e instruções passo a passo.</p>
        `
    },
    5: {
        title: "Módulo 5: Colaborar",
        icon: "🤝",
        content: `
            <h2>🤝 Módulo 5 – Colaborar</h2>
            
            <p><strong>Finalmente, apresentaremos uma proposta de atividade colaborativa, na qual grupos de alunos criam suas próprias exposições que serão acessadas a partir de uma sala principal com portas para cada uma das exposições criadas pelos alunos.</strong></p>

            <h3>O que irá aprender neste módulo</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <p>O verdadeiro poder do metaverso está na colaboração. Neste módulo você aprenderá a criar atividades colaborativas conectando exposições de diferentes autores.</p>

            <h3>Conceito: Sala Principal com Portais</h3>
            
            <p>A ideia é criar uma <strong>sala principal</strong> que funciona como um "hub" central, com portas (portais) que levam às exposições individuais de cada participante.</p>

            <h3>Como funciona:</h3>

            <p><strong>1. Criando a Sala Principal</strong></p>
            <ul>
                <li>Um membro do grupo cria um novo Frame no FrameVR</li>
                <li>Escolha um template de sala ampla</li>
                <li>Adicione um título central identificando o grupo</li>
                <li>Crie áreas para cada exposição individual</li>
            </ul>

            <p><strong>2. Criando Portais</strong></p>
            <ul>
                <li>Clique no botão "+" e selecione "Portal"</li>
                <li>Cole o link da exposição individual</li>
                <li>Adicione uma imagem de preview</li>
                <li>Adicione um texto descritivo</li>
                <li>Posicione o portal adequadamente</li>
            </ul>

            <p><strong>3. Organizando os Portais</strong></p>
            <ul>
                <li>Distribua os portais de forma equilibrada</li>
                <li>Adicione placas com os nomes dos autores</li>
                <li>Use cores ou ícones para diferenciar temas</li>
            </ul>

            <p><strong>4. Testando a Navegação</strong></p>
            <ul>
                <li>Entre no modo de visualização</li>
                <li>Teste cada portal</li>
                <li>Verifique se os links estão corretos</li>
                <li>Ajuste posições se necessário</li>
            </ul>

            <h3>Atividade Proposta</h3>
            
            <p>Formar grupos de 4-5 pessoas e criar uma exposição temática colaborativa onde cada membro cria sua exposição individual sobre um aspecto do tema escolhido, e todas são conectadas através de uma sala principal com portais.</p>

            <p><strong>Nota:</strong> Consulte o PDF original do curso para instruções detalhadas e exemplos visuais completos.</p>
        `
    }
};

// Função para alternar texto introdutório
function toggleIntro() {
    const fullIntro = document.getElementById('full-intro');
    const btn = document.querySelector('.btn-read-more');
    
    if (fullIntro.classList.contains('hidden')) {
        fullIntro.classList.remove('hidden');
        btn.textContent = 'Ler menos';
    } else {
        fullIntro.classList.add('hidden');
        btn.textContent = 'Ler mais';
    }
}

// Função para abrir detalhes do módulo
function toggleModule(moduleId) {
    const modal = document.getElementById('module-modal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = modulesContent[moduleId].content;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Initialize carousels after content is loaded
    setTimeout(() => {
        initializeCarousels();
    }, 100);
}

// Função para fechar detalhes do módulo
function closeModuleDetails() {
    const modal = document.getElementById('module-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModuleDetails();
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada dos cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos os cards de módulos
document.addEventListener('DOMContentLoaded', function() {
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        observer.observe(card);
    });
});

// ===================================
// CARROSSEL DE IMAGENS
// ===================================

let currentSlideIndex = {
    modulo1: 0,
    modulo2: 0
};

function moveCarousel(moduleId, direction) {
    const carouselId = `carousel-${moduleId}`;
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelector('.carousel-indicators');
    
    if (!slides.length) return;
    
    // Remove active class from current slide
    slides[currentSlideIndex[moduleId]].classList.remove('active');
    
    // Update index
    currentSlideIndex[moduleId] += direction;
    
    // Loop around
    if (currentSlideIndex[moduleId] >= slides.length) {
        currentSlideIndex[moduleId] = 0;
    }
    if (currentSlideIndex[moduleId] < 0) {
        currentSlideIndex[moduleId] = slides.length - 1;
    }
    
    // Add active class to new slide
    slides[currentSlideIndex[moduleId]].classList.add('active');
    
    // Update indicators
    updateCarouselIndicators(moduleId);
}

function goToSlide(moduleId, index) {
    const carouselId = `carousel-${moduleId}`;
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    if (!slides.length) return;
    
    // Remove active class from current slide
    slides[currentSlideIndex[moduleId]].classList.remove('active');
    
    // Update index
    currentSlideIndex[moduleId] = index;
    
    // Add active class to new slide
    slides[currentSlideIndex[moduleId]].classList.add('active');
    
    // Update indicators
    updateCarouselIndicators(moduleId);
}

function updateCarouselIndicators(moduleId) {
    const carouselId = `carousel-${moduleId}`;
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelector('.carousel-indicators');
    
    if (!indicators) return;
    
    // Clear and rebuild indicators
    indicators.innerHTML = '';
    
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (index === currentSlideIndex[moduleId] ? ' active' : '');
        dot.onclick = () => goToSlide(moduleId, index);
        indicators.appendChild(dot);
    });
}

// Initialize carousels when modal opens
function initializeCarousels() {
    ['modulo1', 'modulo2'].forEach(moduleId => {
        updateCarouselIndicators(moduleId);
    });
}

// ===================================
// ACCORDION
// ===================================

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.accordion-icon');
    const isOpen = content.style.maxHeight;
    
    // Fechar todos os accordions
    document.querySelectorAll('.accordion-content').forEach(item => {
        item.style.maxHeight = null;
    });
    
    document.querySelectorAll('.accordion-icon').forEach(item => {
        item.textContent = '+';
    });
    
    document.querySelectorAll('.accordion-header').forEach(item => {
        item.classList.remove('active');
    });
    
    // Abrir o accordion clicado se estava fechado
    if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '−';
        button.classList.add('active');
    }
}
