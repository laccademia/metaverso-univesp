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
            
            <p>O ambiente foi criado com o <strong>FrameVR</strong>, a ferramenta de metaverso para criação de ambientes imersivos e interativos tridimensionais que será ensinada neste curso.</p>

            <h3>Visita a uma exposição no Metaverso</h3>
            
            <p>Para compreender melhor como é passear por uma exposição imersiva, acesse este link e ingresse na exposição 3D que criamos especialmente para este curso.</p>
            
            <p><strong>IMPORTANTE:</strong> antes de entrar digite seu nome no lugar da palavra "GUEST" (nome sugerido pelo ambiente, que significa "convidado"). Assim se outras pessoas estiverem no ambiente saberão seu nome (ficaria muito ruim para interagir com outros visitantes se todos estiverem identificados como GUEST, não acha?).</p>

            <h3>📖 Mini Tutorial: Como Navegar no Metaverso</h3>
            
            <div class="tutorial-carousel">
                <div class="carousel-container">
                    <div class="carousel-slide active">
                        <img src="images/tutorial_01_connect.png" alt="Tela de conexão do FrameVR">
                        <div class="carousel-caption">
                            <h4>1. Dê o Primeiro Passo: Conecte-se</h4>
                            <p>Sua jornada começa aqui! Antes de entrar, personalize sua identidade no metaverso. Digite seu nome ou apelido no campo <strong>"Name"</strong> e clique em <strong>CONNECT</strong> para ingressar na exposição. Usar um nome único torna a interação com outros visitantes muito mais interessante!</p>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="images/tutorial_02_wasd.png" alt="Navegação com teclado WASD">
                        <div class="carousel-caption">
                            <h4>2. Explore o Ambiente: Movimentação</h4>
                            <p>A liberdade de explorar está na ponta dos seus dedos. Use as <strong>setas do teclado</strong> ou as teclas <strong>W, A, S, D</strong> para se movimentar pelo espaço. Se estiver em um celular ou tablet, basta usar o controle virtual na tela. Sinta-se à vontade para caminhar por toda a galeria.</p>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="images/tutorial_03_mouse.png" alt="Controle de câmera com mouse">
                        <div class="carousel-caption">
                            <h4>3. Encontre o Melhor Ângulo: Controle da Câmera</h4>
                            <p>A perspectiva em primeira pessoa coloca você diretamente na cena. Para olhar ao redor, simplesmente <strong>clique e segure o botão do mouse</strong> e mova-o na direção que deseja ver. Você é o câmera! Enquadre as obras, observe os detalhes e aprecie a arquitetura do local.</p>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="images/tutorial_04_avatar.png" alt="Avatares e interação multiplayer">
                        <div class="carousel-caption">
                            <h4>4. Encontre Outras Pessoas: Avatares e Interação</h4>
                            <p>Você não está sozinho! Outros visitantes são representados por "avatares". Se encontrar alguém, aproxime-se. Ative seu microfone para conversar em tempo real e compartilhar a experiência. A sala permite até 8 visitantes simultaneamente, tornando cada visita única.</p>
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
                    <span>🥽 Bônus: Imersão Total com Óculos de Realidade Virtual</span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    <div class="vr-section">
                        <img src="images/tutorial_05_vr.webp" alt="Meta Quest 3 - Óculos de Realidade Virtual" class="vr-image">
                        <p><em>Meta Quest 3 - Imagem de divulgação da empresa Meta, fabricante desse equipamento</em></p>
                    </div>
                    <p>Se você possui um <strong>HMD (Head-Mounted Display)</strong>, o popular "óculos de realidade virtual", prepare-se para levar sua experiência a outro nível. A imersão é total, permitindo que você ande pela galeria como se estivesse fisicamente lá, sentindo a escala e a profundidade do ambiente.</p>
                    <p>Nós testamos com o Meta Quest 3 e a integração é perfeita. Basta acessar o link da exposição pelo navegador do próprio óculos e clicar no ícone de VR que aparece na interface do ambiente. <strong>Aperte os cintos e mergulhe de cabeça!</strong></p>
                </div>
            </div>
        `
    },
    2: {
        title: "Módulo 2: Capturar",
        icon: "📸",
        content: `
            <h2>📸 Módulo 2 – Capturar</h2>
            
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

            <h3>Os passos são:</h3>

            <p><strong>1. Obtenha o Luma AI</strong></p>
            <p>Baixe o Luma AI no seu celular.</p>

            <p><strong>2. Comece uma captura</strong></p>
            <p>2.1 Clique em Create no ícone de "+".</p>
            <p>2.2 Clique em Guided para fazer uma captura Guiada.</p>

            <p><strong>3. Escolha o que capturar</strong></p>
            <p>3.1 Escolha o objeto que você quer capturar.</p>
            <p>3.2 Posicione-o de forma que fique bem iluminado e que você possa circular ao redor dele.</p>

            <p><strong>4. Capture o objeto</strong></p>
            <p>4.1 Siga as instruções na tela do aplicativo.</p>
            <p>4.2 Circule o objeto lentamente, mantendo-o sempre no centro da tela.</p>
            <p>4.3 O aplicativo irá guiá-lo durante todo o processo.</p>

            <p><strong>5. Faça o upload</strong></p>
            <p>5.1 Após finalizar a captura, clique em Upload.</p>
            <p>5.2 Aguarde o processamento (pode levar de 10 a 30 minutos).</p>
            <p>5.3 Você receberá uma notificação quando estiver pronto.</p>

            <p><strong>6. Visualize e baixe</strong></p>
            <p>6.1 Abra o modelo 3D processado.</p>
            <p>6.2 Use gestos de toque para rotacionar e ampliar.</p>
            <p>6.3 Toque em "AR View" para ver o objeto em realidade aumentada.</p>
            <p>6.4 Para baixar, toque no ícone de compartilhar e selecione "Download".</p>
            <p>6.5 Escolha o formato GLB (recomendado para metaverso).</p>

            <p><strong>Nota:</strong> O conteúdo completo com imagens e instruções detalhadas está disponível no PDF original do curso.</p>
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
    module1: 1
};

function moveCarousel(direction, moduleId) {
    const slides = document.querySelectorAll('.tutorial-carousel .carousel-slide');
    const dots = document.querySelectorAll('.tutorial-carousel .dot');
    
    if (!slides.length) return;
    
    // Remove active class
    slides[currentSlideIndex[moduleId] - 1].classList.remove('active');
    dots[currentSlideIndex[moduleId] - 1].classList.remove('active');
    
    // Update index
    currentSlideIndex[moduleId] += direction;
    
    // Loop around
    if (currentSlideIndex[moduleId] > slides.length) {
        currentSlideIndex[moduleId] = 1;
    }
    if (currentSlideIndex[moduleId] < 1) {
        currentSlideIndex[moduleId] = slides.length;
    }
    
    // Add active class
    slides[currentSlideIndex[moduleId] - 1].classList.add('active');
    dots[currentSlideIndex[moduleId] - 1].classList.add('active');
}

function currentSlide(n, moduleId) {
    const slides = document.querySelectorAll('.tutorial-carousel .carousel-slide');
    const dots = document.querySelectorAll('.tutorial-carousel .dot');
    
    if (!slides.length) return;
    
    // Remove active class
    slides[currentSlideIndex[moduleId] - 1].classList.remove('active');
    dots[currentSlideIndex[moduleId] - 1].classList.remove('active');
    
    // Update index
    currentSlideIndex[moduleId] = n;
    
    // Add active class
    slides[currentSlideIndex[moduleId] - 1].classList.add('active');
    dots[currentSlideIndex[moduleId] - 1].classList.add('active');
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
