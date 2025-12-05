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
        content: `<h2>📸 Módulo 2 – Capturar</h2>
            
<p><strong>Aprenda a capturar objetos do espaço físico, transformando-os em modelos digitais 3D.</strong></p>

<h3>O que irá aprender neste módulo</h3>

<p>Neste módulo você verá como instalar e usar um aplicativo para capturar um objeto do espaço físico e transformá-lo em um modelo digital 3D.</p>

<div class="video-container mb-4">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-xuyqhV7yGs" title="Introdução ao Módulo 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h3>Capturando um Objeto do mundo físico</h3>

<p>Você irá aprender como utilizar o aplicativo de celular <strong>Luma AI</strong> para fazer a captura de um objeto do mundo físico, convertendo-o para um modelo 3D digital.</p>

<p>Acompanhe pelo vídeo ou pelo tutorial em texto após o vídeo e faça você mesmo.</p>

<div class="video-container mb-4">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/k6Ml0Mwr6xI" title="Tutorial: Capturando um Objeto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="tutorial-carousel">
    <div class="carousel-container">
        <div class="carousel-slide active">
            <img src="images/modulo2/08_img.png" alt="Obtenha o Luma AI">
            <div class="carousel-caption">
                <h4>1. Obtenha o Luma</h4>
                <p>Baixe o Luma AI no seu celular.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/09_img.jpg" alt="Baixe o aplicativo">
            <div class="carousel-caption">
                <h4>2. Baixe o aplicativo</h4>
                <p>Baixe o aplicativo Luma AI na sua loja de apps (disponível para iOS e Android). Este aplicativo usa inteligência artificial para transformar objetos reais em modelos 3D.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/10_img.png" alt="Comece uma captura - Create">
            <div class="carousel-caption">
                <h4>3. Comece uma captura - Create</h4>
                <p>Clique em Create no ícone de "+".</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/11_img.png" alt="Escolha Captura Guiada">
            <div class="carousel-caption">
                <h4>4. Escolha Captura Guiada</h4>
                <p>Clique em Guided para fazer uma captura Guiada.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/12_img.png" alt="Parametrize - Clique no objeto">
            <div class="carousel-caption">
                <h4>5. Parametrize - Clique no objeto</h4>
                <p>Clique no objeto que deseja capturar.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/13_img.png" alt="Centralize o círculo">
            <div class="carousel-caption">
                <h4>6. Centralize o círculo</h4>
                <p>Centralize o círculo no objeto que fará a captura. Observação: Você pode clicar quantas vezes forem necessárias para alinhar o círculo abaixo do objeto e também fazer um movimento de pinça com os dedos para aumentar e diminuir o círculo conforme o tamanho do objeto.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/14_img.png" alt="Finalize a parametrização">
            <div class="carousel-caption">
                <h4>7. Finalize a parametrização</h4>
                <p>Clique em Scan para finalizar a parametrização do domo.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/15_img.png" alt="Confira o domo">
            <div class="carousel-caption">
                <h4>8. Confira o domo</h4>
                <p>Confira se o domo envolve todo o objeto que será capturado.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/16.png" alt="Circule o objeto">
            <div class="carousel-caption">
                <h4>9. Circule o objeto</h4>
                <p>Circule o objeto com seu celular para fazer a captura dos diversos pontos de vista.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/17_img.png" alt="Cubra toda a superfície">
            <div class="carousel-caption">
                <h4>10. Cubra toda a superfície</h4>
                <p>Cubra toda a superfície do domo. Observação: Note que o domo muda de cor uma vez que já passou por aquele ponto de vista.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/18_img.png" alt="Finalize a captura">
            <div class="carousel-caption">
                <h4>11. Finalize a captura</h4>
                <p>Clique Finish após cobrir todos os ângulos do objeto. Observação: O aplicativo pode finalizar a captura automaticamente se detectar que o domo foi coberto por inteiro.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/19_img.png" alt="Nomeie a captura">
            <div class="carousel-caption">
                <h4>12. Nomeie a captura</h4>
                <p>Nomeie a captura que realizou.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/20_img.png" alt="Crie o modelo">
            <div class="carousel-caption">
                <h4>13. Crie o modelo</h4>
                <p>Clique em Create.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/21_img.png" alt="Aguarde o processamento">
            <div class="carousel-caption">
                <h4>14. Aguarde o processamento</h4>
                <p>Espere o carregamento das imagens com o aplicativo aberto. Depois que o Uploading acabar, o aplicativo iniciará o processamento das imagens. O processamento pode ser feito em segundo plano. Esse processamento pode levar um tempo longo, chegando eventualmente a várias horas. Você pode fechar o aplicativo e reabri-lo periodicamente para checar se o processo foi completado. Não é preciso esperar a finalização do processamento de um objeto para capturar outro.</p>
            </div>
        </div>
    </div>
    <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module2-tutorial1')">&lt;</button>
    <button class="carousel-btn next" onclick="moveCarousel(1, 'module2-tutorial1')">&gt;</button>
    <div class="carousel-dots">
        <span class="dot active" onclick="currentSlide(1, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(2, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(3, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(4, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(5, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(6, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(7, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(8, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(9, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(10, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(11, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(12, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(13, 'module2-tutorial1')"></span>
        <span class="dot" onclick="currentSlide(14, 'module2-tutorial1')"></span>
    </div>
</div>

<p><strong>Pronto, você finalizou sua primeira captura!</strong></p>

<h3>Baixando e Utilizando o Modelo 3D Criado</h3>

<p>Conforme mencionado no tópico anterior, é necessário aguardar a ferramenta de IA processar a sua captura. Esse processo pode levar algumas horas (em momentos de muita demanda, até mais de um dia). Mas vale a pena a espera!</p>

<p>Como o processamento é realizado em nuvem, ou seja, em servidores conectados à Internet, e não em seu celular, você poderá sair do aplicativo e retornar posteriormente para acompanhar o progresso.</p>

<p>Recomendamos apenas que aguarde com o aplicativo aberto até que o upload seja concluído (se aparecer outro nome, que não uploading, sobre a barrinha de progresso, como Queued por exemplo, significa que o carregamento foi concluído e agora é só aguardar que a IA faça seu trabalho, sem necessidade de estar com o aplicativo aberto).</p>

<p>Após gerado o modelo, você poderá clicar sobre o mesmo e visualizá-lo em 3D (recurso chamado magic view) movendo-o tridimensionalmente no espaço, usando seu dedo ou pen. Você também poderá ver na forma de vídeo, o qual faz um movimento de câmera em torno do objeto capturado.</p>

<p>O próximo passo é baixar o arquivo do modelo 3D (usar GLB que é o formato utilizado pela plataforma que usaremos para criar a exposição imersiva). O aplicativo também permite posicionar e visualizar, no seu espaço físico, o objeto 3D capturado, usando o recurso de Realidade Aumentada (AR View) do aplicativo.</p>

<p>Acompanhe esses passos pelo vídeo a seguir ou pelo tutorial textual após o vídeo.</p>

<div class="video-container mb-4">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2c52OgEJH3E" title="Tutorial: Baixando e Utilizando" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="tutorial-carousel">
    <div class="carousel-container">
        <div class="carousel-slide active">
            <img src="images/modulo2/22_img.png" alt="Acesse sua biblioteca">
            <div class="carousel-caption">
                <h4>1. Acesse sua biblioteca</h4>
                <p>Acesse sua biblioteca de captações Library.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/23_img.png" alt="Clique no objeto">
            <div class="carousel-caption">
                <h4>2. Clique no objeto</h4>
                <p>Clique no objeto que deseja ver.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/24_img.png" alt="Espere o carregamento">
            <div class="carousel-caption">
                <h4>3. Espere o carregamento</h4>
                <p>Espere o carregamento do objeto.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/26_img.png" alt="Visualize em Magic View">
            <div class="carousel-caption">
                <h4>4. Visualize em Magic View</h4>
                <p>Clique e arraste para ver os vários ângulos do objeto. Observação: Este é o modo de visualização do próprio aplicativo, por este denominado de "Magic View", no qual você já pode experimentar ver o objeto em 3D sob qualquer ângulo. Para visualizar e manipular o objeto fora do aplicativo, será necessário baixar o modelo 3D do objeto e carregá-lo em outras ferramentas, como será mostrado adiante. Para uma visualização não interativa, a aplicação também gera um vídeo do objeto que você pode ver clicando no ícone de Play.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/27_img.png" alt="Compartilhe o Magic View - Parte 1">
            <div class="carousel-caption">
                <h4>5. Compartilhe o Magic View - Parte 1</h4>
                <p>Compartilhe o Magic View do seu objeto.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/28_img.png" alt="Compartilhe o Magic View - Parte 2">
            <div class="carousel-caption">
                <h4>6. Compartilhe o Magic View - Parte 2</h4>
                <p>Você pode compartilhar o link do Magic View com outras pessoas para que elas visualizem seu modelo 3D.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/30_img.png" alt="Faça o download">
            <div class="carousel-caption">
                <h4>7. Faça o download</h4>
                <p>Faça o download do objeto 3D.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/31_img.png" alt="AR View - Clique em AR View">
            <div class="carousel-caption">
                <h4>8. AR View - Clique em AR View</h4>
                <p>Faça a visualização em realidade aumentada. Clique em AR View.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/32_img.png" alt="AR View - Mire a superfície">
            <div class="carousel-caption">
                <h4>9. AR View - Mire a superfície</h4>
                <p>Mire seu celular sobre a superfície que quer projetar o Objeto capturado.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/33_img.png" alt="AR View - Projete o objeto">
            <div class="carousel-caption">
                <h4>10. AR View - Projete o objeto</h4>
                <p>Clique na superfície para projetar o objeto.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/34_img.png" alt="AR View - Redimensione">
            <div class="carousel-caption">
                <h4>11. AR View - Redimensione</h4>
                <p>Clique com dois dedos no objeto e redimensione fazendo movimento de pinça com os dedos.</p>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="images/modulo2/35_img.png" alt="AR View - Caminhe pelo ambiente">
            <div class="carousel-caption">
                <h4>12. AR View - Caminhe pelo ambiente</h4>
                <p>Caminhe pelo ambiente para ter uma visualização em Realidade aumentada completa.</p>
            </div>
        </div>
    </div>
    <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module2-tutorial2')">&lt;</button>
    <button class="carousel-btn next" onclick="moveCarousel(1, 'module2-tutorial2')">&gt;</button>
    <div class="carousel-dots">
        <span class="dot active" onclick="currentSlide(1, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(2, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(3, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(4, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(5, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(6, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(7, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(8, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(9, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(10, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(11, 'module2-tutorial2')"></span>
        <span class="dot" onclick="currentSlide(12, 'module2-tutorial2')"></span>
    </div>
</div>
`
    },

    3: {
        title: "Módulo 3: Curar e Recriar",
        icon: "🎨",
        content: `
            <h2>🎨 Módulo 3 – Curar e Recriar</h2>
            
            <p><strong>Aprenda a buscar modelos 3D prontos e gratuitos, baixá-los e modificá-los, para uso em seus ambientes imersivos. Veja como publicar objetos 3D capturados por você.</strong></p>

            <h3>O que irá aprender neste módulo</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wlFGoC7_UYM" 
                        title="Curar e Recriar - Introdução"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <p>No módulo 2, você aprendeu como criar modelos digitais 3D a partir de objetos físicos e também como compartilhar suas capturas por meio do próprio aplicativo Luma. Além da possibilidade de compartilhar com o link do aplicativo, você também pode enviar o arquivo que baixou. Porém, caso a pessoa não tenha um visualizador de modelos 3D, ela não poderá fazer muita coisa com esse arquivo.</p>
            
            <p>Por isso, existem plataformas de repositório de modelos 3D, por meio das quais você pode fazer o upload do arquivo de seu modelo e enviar em forma de link para quem você deseja que o visualize. Além disso, nesses repositórios (ou armazéns) você pode encontrar milhares de outros modelos 3D, criados por outras pessoas, e baixá-los. Caso encontre modelos prontos dos objetos desejados, pode facilitar bastante, pois dispensará a necessidade de capturá-los (nem sempre há disponibilidade de objetos físicos para tal e a qualidade dos objetos modelados por profissionais e disponibilizados nesses armazéns possuem mais qualidade que aqueles capturados).</p>
            
            <p>Por fim, ensinaremos uma técnica simples e bastante útil, para editar texturas de modelos 3D. A textura é uma imagem que envolve a geometria do modelo 3D, conferindo-lhe realismo. Por exemplo, o modelo geométrico de uma lata de refrigerante é basicamente um cilindro. O que faz com que fique parecendo uma lata de refrigerante é a imagem que o envolve e que contém o rótulo e outros detalhes do material. No tutorial exemplificaremos com um livro baixado do Sketchfab, mostrando como alteramos sua textura para que receba uma nova capa, lombada e contracapa.</p>

            <h3>Sketchfab: Buscando e Publicando Modelos 3D</h3>
            
            <p>Agora você irá aprender a se cadastrar no armazém de objetos 3D Sketchfab, a buscar e baixar modelos em seu enorme acervo e a publicar os modelos que você capturou, caso assim desejar.</p>
            
            <p>Acompanhe o vídeo abaixo e veja como fazer.</p>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/N3omaA8G5fo" 
                        title="Sketchfab: Buscando e Publicando Modelos 3D"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <h3>Baixando um Modelo 3D de um Livro</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/HZKqGdNr658" 
                        title="Baixando um Modelo 3D de um Livro"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <h3>Editando Objetos 3D e alterando suas texturas</h3>
            
            <p>O editor <strong>glfEditor</strong> permite que você carregue um modelo 3D, o visualize e altere algumas de suas configurações, que não sejam as geométricas.</p>
            
            <p>Mostraremos agora, por meio de um exemplo, como alterar a textura do modelo de um livro, trocando sua capa, contracapa e lombada.</p>
            
            <p>Para fazer você mesmo a mudança de textura, recomendamos que baixe os arquivos que disponibilizamos:</p>
            <ul>
                <li>livro basico.glb</li>
                <li>Livro Bascio - CRÉDITOS.docx</li>
                <li>Cópia de Livro Basico-textura base-Com Marcas.png</li>
            </ul>
            
            <p>Acompanhe pelo vídeo e veja como fazer.</p>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Nc-exLa4ZWs" 
                        title="Editando Objetos 3D e alterando suas texturas"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
        `
    },
    4: {
            title: "Módulo 4 – Expor",
            icon: "🏛️",
            duration: "90 min",
            level: "Criar",
            description: "Aprenda a criar sua própria exposição imersiva em metaverso.",
            content: `
                <div class="module-intro">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/WRj9FVLb6So" frameborder="0" allowfullscreen></iframe>
                    </div>
                    
                    <h3>O que irá aprender neste módulo</h3>
                    <p>Agora que já sabe criar modelos virtuais 3D a partir de objetos físicos e também como buscar e baixar modelos 3D prontos, já dá para organizar sua exposição imersiva. A seguir você verá como selecionar um dos inúmeros espaços virtuais imersivos disponíveis pela plataforma Frame VR, dispor seus modelos 3D no ambiente escolhido e configurar algumas ações para que os visitantes de sua exposição interajam com os objetos lá expostos.</p>
                    
                    <p>Acompanhe e execute os tutoriais dos tópicos a seguir e divirta-se enquanto aprende. Ou vice-versa!</p>
                </div>

                <h3>Tutorial 1: Criando seu primeiro ambiente com FrameVR</h3>
                <div class="tutorial-section">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/6FaCPYmQkk4" frameborder="0" allowfullscreen></iframe>
                    </div>
                    

                    <div class="carousel-container">
                        <div class="carousel" id="carousel-module4-tutorial1">

                        <div class="carousel-slide">
                            <img src="images/modulo4/39_img.png" alt="Passo 1">
                            <div class="carousel-text">
                                <p>1.2 Crie sua conta. 
Observação: Recomendamos criar com sua conta Google, pela facilidade, mas caso precise, é possível criar com e-mail da sua instituição e criando uma senha usando o botão Signup.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/40_img.png" alt="Passo 2">
                            <div class="carousel-text">
                                <p>1.3 Selecione a conta do Google que irá utilizar para criar sua conta no Frame VR</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/41_img.png" alt="Passo 3">
                            <div class="carousel-text">
                                <p>1.4 Aguarde o acesso a Home da plataforma.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/42_img.png" alt="Passo 4">
                            <div class="carousel-text">
                                <p>Crie seu primeiro ambiente virtual. 
2.1 Clique em New Frame</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/43_img.png" alt="Passo 5">
                            <div class="carousel-text">
                                <p>2.2 Digite o nome da sua sala virtual (somente letras minúsculas e traço “-”)</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/44_img.png" alt="Passo 6">
                            <div class="carousel-text">
                                <p>Observação: O título do ambiente virtual que você escolher estará contido no link de compartilhamento. 2.3 Clique em Environment para escolher um dos modelos de ambiente disponíveis.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/45_img.png" alt="Passo 7">
                            <div class="carousel-text">
                                <p>Observação: Existem dezenas de modelos, em nosso exemplo vamos utilizar a mesma sala que você conheceu no módulo Explorar, a galeria pequena. Por sua simplicidade e funcionalidade. Mas fique à vontade para experimentar e encontrar um ambiente que seja mais adequado à sua proposta de exposição.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/46_img.png" alt="Passo 8">
                            <div class="carousel-text">
                                <p>2.4 Selecione o ambiente Gallery (Small)</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/47_img.png" alt="Passo 9">
                            <div class="carousel-text">
                                <p>2.5 Clique em New Frame</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/48_img.png" alt="Passo 10">
                            <div class="carousel-text">
                                <p>Observação: O plano gratuito Trial permite a criação de 3 salas gratuitas com 8 pessoas simultâneas em cada uma das salas. Você pode excluir e recriar salas quantas vezes desejarr, respeitando o limite de 3 salas simultâneas. Também deve ser respeitado o limite de o upload de vídeos/imagens de até 500 MB somados. 
 
2.6 Aguarde ser reencaminhado à sua sala virtual.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/49_img.png" alt="Passo 11">
                            <div class="carousel-text">
                                <p>2.7 Digite o nome que deseja exibir para todas as pessoas que estiverem com você na sala.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/50_img.png" alt="Passo 12">
                            <div class="carousel-text">
                                <p>2.8 Clique em Connect</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/51_img.png" alt="Passo 13">
                            <div class="carousel-text">
                                <p>Faça o tutorial do site.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/52_img.png" alt="Passo 14">
                            <div class="carousel-text">
                                <p>Observação: Você pode traduzir o tutorial clicando com o botão direito do mouse na parte preta do menu e selecionando, traduzir para o português na árvore de opções.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/53_img.png" alt="Passo 15">
                            <div class="carousel-text">
                                <p>3.1 Navegue pela sala: 
com as setas do teclado.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/54_img.png" alt="Passo 16">
                            <div class="carousel-text">
                                <p>GIF ou pelas teclas (W↑) (A←) (S↓) (D→) com a mão esquerda no teclado e a mão direita no mouse.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/55_img.png" alt="Passo 17">
                            <div class="carousel-text">
                                <p>GIF 3.2 Utilize a barra inferior para controlar funções na sala virtual.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/56_img.png" alt="Passo 18">
                            <div class="carousel-text">
                                <p>Passo 18</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/57_img.png" alt="Passo 19">
                            <div class="carousel-text">
                                <p>O ícone de microfone para habilitar ou desabilitar seu microfone.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/58_img.png" alt="Passo 20">
                            <div class="carousel-text">
                                <p>Ícone de câmera para habilitar ou desabilitar sua webcam.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/59_img.png" alt="Passo 21">
                            <div class="carousel-text">
                                <p>Ícone do lápis para entrar em modo edição do Frame. Ícone de estrelas para entrar no menu de criação.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/60_img.png" alt="Passo 22">
                            <div class="carousel-text">
                                <p>Passo 22</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/61_img.png" alt="Passo 23">
                            <div class="carousel-text">
                                <p>4. Configure seu perfil. 
4.1Clique no botão disponível na região direita acima da sua tela.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/62_img.png" alt="Passo 24">
                            <div class="carousel-text">
                                <p>4.2 Clique na opção Profile</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/63_img.png" alt="Passo 25">
                            <div class="carousel-text">
                                <p>4.3 Atualize seus dados.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/64_img.png" alt="Passo 26">
                            <div class="carousel-text">
                                <p>Passo 26</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/65_img.png" alt="Passo 27">
                            <div class="carousel-text">
                                <p>Passo 27</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/66_img.png" alt="Passo 28">
                            <div class="carousel-text">
                                <p>Observação: Em suas preferências, defina principalmente o modo de câmera que preferir, entre primeira ou terceira pessoa. As salas que não possuírem modo de câmera padrão definido, permitem alteração. Como administrador, você pode escolher se haverá ou não modo padrão para as suas salas. 
 
 GIF</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/67_img.png" alt="Passo 29">
                            <div class="carousel-text">
                                <p>5. Defina a aparência do seu avatar 
5.1 Clique em Customize avatar 
 
 
5.2 Escolha o formato Android/Humano. 
  
Exemplo Android:</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/68_img.png" alt="Passo 30">
                            <div class="carousel-text">
                                <p>Passo 30</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/69_img.png" alt="Passo 31">
                            <div class="carousel-text">
                                <p>Passo 31</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/70_img.png" alt="Passo 32">
                            <div class="carousel-text">
                                <p>Exemplo Humano</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/71_img.png" alt="Passo 33">
                            <div class="carousel-text">
                                <p>5.3 Personalize o seu avatar. 
Defina tipo de rosto, cor e corte de cabelo e muito mais. Não se esqueça de salvar após finalizar a personalização.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/72_img.png" alt="Passo 34">
                            <div class="carousel-text">
                                <p>Caso não queira escolher todas as opções, você pode clicar em Randomize e deixar que a aleatoriedade defina um avatar para você. 
  
 
 
 
Observação: Você também pode escolher um avatar já pronto em Ready Player me ou criar na plataforma parceira, clicando em Set up ready player me. Agora que já criou seu primeiro ambiente virtual, já está mais que pronto(a) para aprender adicionar os conteúdo e objetos na sua sala.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/73_img.png" alt="Passo 35">
                            <div class="carousel-text">
                                <p>Passo 35</p>
                            </div>
                        </div>
                        </div>
                        <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial1')">&lt;</button>
                        <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial1')">&gt;</button>
                        <div class="carousel-dots">
                            <span class="dot active" onclick="currentSlide(1, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(2, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(3, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(4, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(5, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(6, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(7, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(8, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(9, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(10, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(11, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(12, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(13, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(14, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(15, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(16, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(17, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(18, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(19, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(20, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(21, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(22, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(23, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(24, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(25, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(26, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(27, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(28, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(29, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(30, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(31, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(32, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(33, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(34, 'module4-tutorial1')"></span> <span class="dot" onclick="currentSlide(35, 'module4-tutorial1')"></span>
                        </div>
                    </div>
                </div>

                <h3>Tutorial 2: Inserindo Imagens e Vídeos</h3>
                <div class="tutorial-section">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/kZ7EzP_YLqo" frameborder="0" allowfullscreen></iframe>
                    </div>
                    

                    <div class="carousel-container">
                        <div class="carousel" id="carousel-module4-tutorial2">

                        <div class="carousel-slide">
                            <img src="images/modulo4/74_img.png" alt="Passo 1">
                            <div class="carousel-text">
                                <p>Clique em Creation menu</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/75_img.png" alt="Passo 2">
                            <div class="carousel-text">
                                <p>Observação: Clicando tanto no ícone que está na parede, quanto, no mesmo ícone na barra inferior, você conseguirá carregar sua imagem. A diferença é que usando o que está na parede a imagem já está mais bem posicionada. Mas as duas maneiras você conseguirá posicionar a imagem onde quiser editando a imagem. 
 
1.2 Clique em image. 
 
 
1.3 Carregue sua imagem no menu, escolhendo ou arrastando da sua pasta de arquivo. 
 
 
 
1.4 Clique em done ao carregar a imagem</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/76_img.png" alt="Passo 3">
                            <div class="carousel-text">
                                <p>Passo 3</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/77_img.png" alt="Passo 4">
                            <div class="carousel-text">
                                <p>Passo 4</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/78_img.png" alt="Passo 5">
                            <div class="carousel-text">
                                <p>Passo 5</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/79_img.png" alt="Passo 6">
                            <div class="carousel-text">
                                <p>Observação: Este passo pode ser pulado automaticamente pela plataforma, carregando a imagem.  
 
 
 
 
1.5 Clique no ícone de lápis para entrar no modo de edição e poder modificar a posição e tamanho da imagem.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/80_img.png" alt="Passo 7">
                            <div class="carousel-text">
                                <p>Passo 7</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/81_img.png" alt="Passo 8">
                            <div class="carousel-text">
                                <p>1.6 Com modo de edição ativado, clique na imagem para posicioná-la e/ou redimensioná-la. Observação: Ao abrir o menu lateral de edição, você pode posicionar a imagem clicando e arrastando com o mouse, mas às vezes não é muito preciso. Também haverá um círculo na imagem onde é possível movimentar a imagem nos 3 eixos com mais precisão. Você edita o tamanho da imagem clicando e arrastando as quinas da imagem ao tamanho desejado.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/82_img.png" alt="Passo 9">
                            <div class="carousel-text">
                                <p>1.7 Posicione e ajuste a imagem no local adequado. 
 GIF</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/83_img.png" alt="Passo 10">
                            <div class="carousel-text">
                                <p>1.8 Trave posição, rotação e tamanho da imagem após finalizar a edição.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/84_img.png" alt="Passo 11">
                            <div class="carousel-text">
                                <p>Observação: Você não é obrigado a travar a imagem ao finalizar a edição, mas quando existem muitos elementos num mesmo ambiente, às vezes você pode mover algo que não deseja, então com a posição dele travada você não vai ter esse problema. 
 
Você também pode usar o botão de desfazer, “Undo”, caso queira voltar atrás em alguma edição errada ou indesejada. 1.9 Duplique a imagem 
Se desejar reutilizar a imagem em outro ponto de seu metaverso, você pode duplicá-la e mover a cópia para onde desejar e redimensioná-la e/ou rotacioná-la, se necessário. 
[IMAG85</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/85_img.png" alt="Passo 12">
                            <div class="carousel-text">
                                <p>Passo 12</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/86_img.png" alt="Passo 13">
                            <div class="carousel-text">
                                <p>Adicione um vídeo. 
2.1Clique em Creation menu 
 
 
2.2 Clique na opção video 
 
 
2.3 Carregue seu vídeo, escolhendo ou arrastando da sua pasta de arquivo. 
 
 
 
1.4 Aguarde o processamento do vídeo 
 
 
1.5 Posicione, rotacione e/ou redimensione o vídeo. 
As formas de movimentar, redimensionar e rotacionar um vídeo são as mesmas já explicadas para as imagens. 
 
 
1.6 Trave a posição, rotação e tamanho do vídeo após finalizar a edição. 
Recomendável, para evitar modificações indesejáveis enquanto edita outros elementos do ambiente.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/87_img.png" alt="Passo 14">
                            <div class="carousel-text">
                                <p>Passo 14</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/88_img.png" alt="Passo 15">
                            <div class="carousel-text">
                                <p>Passo 15</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/89_img.png" alt="Passo 16">
                            <div class="carousel-text">
                                <p>Passo 16</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/90_img.png" alt="Passo 17">
                            <div class="carousel-text">
                                <p>Passo 17</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/91_img.png" alt="Passo 18">
                            <div class="carousel-text">
                                <p>Passo 18</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/92_img.png" alt="Passo 19">
                            <div class="carousel-text">
                                <p>Passo 19</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/93_img.png" alt="Passo 20">
                            <div class="carousel-text">
                                <p>1.7 Defina a opção de áudio posicional “positional audio”.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/94_img.png" alt="Passo 21">
                            <div class="carousel-text">
                                <p>Observação: Esta função define como funcionará o áudio do vídeo. Optando por sua ativação, o áudio do vídeo será escutado apenas pelos usuários que estiverem próximos do vídeo. Você pode escolher até que distância o vídeo será escutado. Optando por ela desativada, todas as pessoas da sala ouvirão o vídeo quando este for executado. Clicando no ícone do olho, você verá a distância limite para que o vídeo seja escutado, podendo escolher 3 opções de distância.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/95_img.png" alt="Passo 22">
                            <div class="carousel-text">
                                <p>1.8 Defina a opção de Loop  
 
Observação: Vídeo com essa opção ativa irão ser executados em looping. 
 
 
1.9 Defina opção de autoplay. 
 
Observação: Com essa opção ativa, o vídeo será executado automaticamente assim que o usuário entrar na sala. É uma opção positiva para vídeos de ambientação ou de estética da sala. Mas vídeo de conteúdo em si, essa opção desativada é melhor.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/96_img.png" alt="Passo 23">
                            <div class="carousel-text">
                                <p>Passo 23</p>
                            </div>
                        </div>
                        </div>
                        <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial2')">&lt;</button>
                        <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial2')">&gt;</button>
                        <div class="carousel-dots">
                            <span class="dot active" onclick="currentSlide(1, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(2, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(3, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(4, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(5, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(6, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(7, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(8, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(9, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(10, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(11, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(12, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(13, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(14, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(15, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(16, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(17, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(18, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(19, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(20, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(21, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(22, 'module4-tutorial2')"></span> <span class="dot" onclick="currentSlide(23, 'module4-tutorial2')"></span>
                        </div>
                    </div>
                </div>

                <h3>Tutorial 3: Inserindo objetos 3D</h3>
                <div class="tutorial-section">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/yoIG8nQJ7Qo" frameborder="0" allowfullscreen></iframe>
                    </div>
                    

                    <div class="carousel-container">
                        <div class="carousel" id="carousel-module4-tutorial3">

                        <div class="carousel-slide">
                            <img src="images/modulo4/97_img.png" alt="Passo 1">
                            <div class="carousel-text">
                                <p>Adicionando objetos da biblioteca do Frame. 
1.1 Clique em Creation menu. 
 
 
1.2 Clique em 3D Model.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/98_img.png" alt="Passo 2">
                            <div class="carousel-text">
                                <p>Passo 2</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/99_img.png" alt="Passo 3">
                            <div class="carousel-text">
                                <p>1.3 Utilize o menu lateral para inserir objetos da biblioteca. 
 
 
1.4 Navegue pelas categorias da biblioteca de modelos do Frame em Library.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/100_img.png" alt="Passo 4">
                            <div class="carousel-text">
                                <p>Passo 4</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/101_img.png" alt="Passo 5">
                            <div class="carousel-text">
                                <p>1.5 Clique no modelo escolhido. 
 
 
1.6 Aguarde ser carregado.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/102_img.png" alt="Passo 6">
                            <div class="carousel-text">
                                <p>Passo 6</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/103_img.png" alt="Passo 7">
                            <div class="carousel-text">
                                <p>1.7 Clique no ícone de edição. 
 
 
1.8 Clique no objeto. Observação: Além de definir a posição do objeto, com o modo de edição ativado, você também pode configurar outras coisas do objeto no menu lateral. Se ele levará para outro destino com um link (que pode ser outro ambiente do Frame ou um link para um conteúdo). Se deseja travar sua posição ou ainda se deseja que ele fique rotacionando.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/104_img.png" alt="Passo 8">
                            <div class="carousel-text">
                                <p>Passo 8</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/105_img.png" alt="Passo 9">
                            <div class="carousel-text">
                                <p>1.9 Posicione seu objeto. 
 GIF 
 
Pronto! Inserimos nosso primeiro objeto, agora veremos os outros métodos. Inserido objeto diretamente do Sketchfab. 
Observação: 
No módulo anterior, você aprendeu a buscar e a baixar modelos na plataforma do Sketchfab. O Frame oferece uma conexão direta com aquela plataforma, tornando o processo de importação mais prático, como verá a seguir. Mas nem sempre você irá encontrar todos os modelos disponíveis na plataforma. Se preferir você ainda poderá buscar seus objetos na plataforma do Sketchfab, baixá-los e fazer os uploads no Frame (no próximo tópico você aprenderá como fazer uploads de objetos 3D).</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/106_img.png" alt="Passo 10">
                            <div class="carousel-text">
                                <p>2.1 Clique em Creation menu. 
 
 
2.2 Clique em 3D Model.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/107_img.png" alt="Passo 11">
                            <div class="carousel-text">
                                <p>Passo 11</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/108_img.png" alt="Passo 12">
                            <div class="carousel-text">
                                <p>2.3 Clique em Sketchfab.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/109_img.png" alt="Passo 13">
                            <div class="carousel-text">
                                <p>2.4 Cliquem Log in.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/110_img.png" alt="Passo 14">
                            <div class="carousel-text">
                                <p>2.5 Faça seu login no popup  
 
 
2.6 Busque pelo modelo que deseja na barra de busca “search”. 
 
 
2.7 Navegue até encontrar o modelo desejado. 
 
 
2.8 Selecione o modelo desejado. 
 
 
2.9 Clique em Import. 
 
 
2.10 Defina suas opções de importação. 
 
Observação: A opção “Optimize”, que se refere ao modelo já ser otimizado para o Frame, é sempre bom ser ativada. Em alguns casos a otimização apresentará problemas e você poderá fazer a importação sem otimização. 
A segunda opção,”Add to this Frame”, é para importar no ambiente que estamos editando. Se não deixar essa opção ativada, você pode clicar em Add model e achar que ocorreu algum erro, mas o que aconteceu de fato que o objeto foi para o inventario e não para o ambiente.  
E a terceira opção, "Add to inventory" se refere a adicionar ao seu inventório, para que você não necessite buscar no Sketchfab no futuro. 
 
2.11 Clique em Add model. 
 
 
2.12 Aguarde a optimização e carregamento. 
 
Observação: o tempo de carregamento varia de acordo com tamanho do moledo importado. 
[IMAG116B]</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/111_img.png" alt="Passo 15">
                            <div class="carousel-text">
                                <p>Passo 15</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/112_img.png" alt="Passo 16">
                            <div class="carousel-text">
                                <p>Passo 16</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/113_img.png" alt="Passo 17">
                            <div class="carousel-text">
                                <p>Passo 17</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/114_img.png" alt="Passo 18">
                            <div class="carousel-text">
                                <p>Passo 18</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/115_img.png" alt="Passo 19">
                            <div class="carousel-text">
                                <p>Passo 19</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/116_img.png" alt="Passo 20">
                            <div class="carousel-text">
                                <p>Passo 20</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/117_img.png" alt="Passo 21">
                            <div class="carousel-text">
                                <p>Passo 21</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/118_img.png" alt="Passo 22">
                            <div class="carousel-text">
                                <p>2.13 Clique no ícone de edição. 
 
 
2.14  Clique no objeto</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/119_img.png" alt="Passo 23">
                            <div class="carousel-text">
                                <p>Passo 23</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/120_img.png" alt="Passo 24">
                            <div class="carousel-text">
                                <p>Observação: Algumas vezes o objeto importado possui o centro de edição deslocado do objeto, mas isso não altera sua edição. 
 
2.15 Posicione, rotacione e/ou redimensione  o objeto no local desejado. 
 
 
Pronto! 
Agora você também já sabe importar objetos 3D diretamente do Skechtfab para o Frame.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/121_img.png" alt="Passo 25">
                            <div class="carousel-text">
                                <p>Importando objetos criados e/ou curados por você. 
Com este método, você poderá fazer upload, tanto de modelos que você tenha criado / capturado quanto de arquivos que tenha obtido de outras fontes externas. Lembre-se que o formato dos obetos 3D aceito pelo Frame é o GLB. 
 
3.1 Clique em Creation menu. 3.2 Clique em 3D Model.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/122_img.png" alt="Passo 26">
                            <div class="carousel-text">
                                <p>Passo 26</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/123_img.png" alt="Passo 27">
                            <div class="carousel-text">
                                <p>3.3 Clique em Upload</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/124_img.png" alt="Passo 28">
                            <div class="carousel-text">
                                <p>3.4 Selecione o arquivo do modelo no seu navegador de arquivos (formato GLB) 
 
 
3.5 Defina suas opções de carregamento do modelo.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/125_img.png" alt="Passo 29">
                            <div class="carousel-text">
                                <p>Passo 29</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/126_img.png" alt="Passo 30">
                            <div class="carousel-text">
                                <p>3.6 Clique em Add Model. 
 
 
3.7 Aguarde o processamento.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/127_img.png" alt="Passo 31">
                            <div class="carousel-text">
                                <p>Passo 31</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/128_img.png" alt="Passo 32">
                            <div class="carousel-text">
                                <p>3.8 Clique no ícone de edição. 
 
 
3.9  Clique no objeto.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/129_img.png" alt="Passo 33">
                            <div class="carousel-text">
                                <p>Passo 33</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/130_img.png" alt="Passo 34">
                            <div class="carousel-text">
                                <p>3.10 Posicione, rotacione e/ou redimensione o objeto. 
 
 GIF Observação: Neste exemplo deixamos a função de Spin no objeto como exemplo, na quale o objeto fica girando, sendo que você pode escolher em torno de qual eixo deseja que ele rotacione. 
 
 
 
Dica Extra: 
Você pode clicar e segurar o objeto com seu mouse e caminhar com seu avatar caso queira levar o objeto para algum local mais distante.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/131_img.png" alt="Passo 35">
                            <div class="carousel-text">
                                <p>GIF</p>
                            </div>
                        </div>
                        </div>
                        <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial3')">&lt;</button>
                        <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial3')">&gt;</button>
                        <div class="carousel-dots">
                            <span class="dot active" onclick="currentSlide(1, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(2, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(3, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(4, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(5, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(6, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(7, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(8, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(9, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(10, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(11, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(12, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(13, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(14, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(15, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(16, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(17, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(18, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(19, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(20, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(21, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(22, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(23, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(24, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(25, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(26, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(27, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(28, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(29, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(30, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(31, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(32, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(33, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(34, 'module4-tutorial3')"></span> <span class="dot" onclick="currentSlide(35, 'module4-tutorial3')"></span>
                        </div>
                    </div>
                </div>

                <h3>Tutorial 4: Inserindo texto</h3>
                <div class="tutorial-section">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/fTIlUVPbfvg" frameborder="0" allowfullscreen></iframe>
                    </div>
                    

                    <div class="carousel-container">
                        <div class="carousel" id="carousel-module4-tutorial4">

                        <div class="carousel-slide">
                            <img src="images/modulo4/132_img.png" alt="Passo 1">
                            <div class="carousel-text">
                                <p>Inserindo Text Label. 
1.1 Clique em Creation menu.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/133_img.png" alt="Passo 2">
                            <div class="carousel-text">
                                <p>1.2 Clique em Text Label.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/134_img.png" alt="Passo 3">
                            <div class="carousel-text">
                                <p>Passo 3</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/135_img.png" alt="Passo 4">
                            <div class="carousel-text">
                                <p>1.3 Clique no ícone de edição. 
 
 
1.4 Clique no objeto. 
 
 
1.4 Escreva seu texto na caixa de texto. 
 
Observação: O seu texto é carregado para o elemento no Frame assim que você clica fora do menu de texto. 
 
1.5 Defina a cor da fonte. 
 
Observação: Você pode pegar alguma cor do seu cenário clicando no ícone de conta-gotas na barra de seleção de cor. 
 
1.6 Defina a cor de fundo do seu texto. 
 
 
1.7 Retire a cor de fundo clicando em Transparent. 
 
 
1.8 Posicione, rotacione e/ou redimensione seu texto. 
 GIF</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/136_img.png" alt="Passo 5">
                            <div class="carousel-text">
                                <p>Passo 5</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/137_img.png" alt="Passo 6">
                            <div class="carousel-text">
                                <p>Passo 6</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/138_img.png" alt="Passo 7">
                            <div class="carousel-text">
                                <p>Passo 7</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/139_img.png" alt="Passo 8">
                            <div class="carousel-text">
                                <p>Passo 8</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/140_img.png" alt="Passo 9">
                            <div class="carousel-text">
                                <p>Passo 9</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/141_img.png" alt="Passo 10">
                            <div class="carousel-text">
                                <p>Passo 10</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/142_img.png" alt="Passo 11">
                            <div class="carousel-text">
                                <p>1.9 Defina as configurações do seu texto. 
 
Lock Position — Travar a posição do texto. 
Snap to Surface — Prender o texto à superfície. 
Spin — Rotacionar.  
Alwayes Face Camera — Texto sempre voltado para câmera do usuário.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/143_img.png" alt="Passo 12">
                            <div class="carousel-text">
                                <p>Inserindo Text Area. 
2.1 Clique em Creation menu.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/144_img.png" alt="Passo 13">
                            <div class="carousel-text">
                                <p>2.2 Clique em Text Area 
 
 
2.3 Clique no ícone de edição. 
 
 
2.4 Clique no objeto. 
 
 
2.5 Defina sua fonte. 
 
Observação: Caso não esteja vendo estas opções no menu lateral, role o menu para baixo para ver mais opções. 
 
2.6 Defina seu título. 
 
 
2.7 Escreva seu texto. 
 
 
2.8 Defina a orientação do texto.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/145_img.png" alt="Passo 14">
                            <div class="carousel-text">
                                <p>Passo 14</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/146_img.png" alt="Passo 15">
                            <div class="carousel-text">
                                <p>Passo 15</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/147_img.png" alt="Passo 16">
                            <div class="carousel-text">
                                <p>Passo 16</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/148_img.png" alt="Passo 17">
                            <div class="carousel-text">
                                <p>Passo 17</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/149_img.png" alt="Passo 18">
                            <div class="carousel-text">
                                <p>Passo 18</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/150_img.png" alt="Passo 19">
                            <div class="carousel-text">
                                <p>Passo 19</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/151_img.png" alt="Passo 20">
                            <div class="carousel-text">
                                <p>2.9 Configure as cores de fonte e de fundo. 
 
 
2.10 Posicione, rotacione e/ou redimensione seu texto. 
 
 
2.11 Defina as configurações desejadas. 
 
Observação: Além das configurações que vimos em text label, também é possível adicionar uma imagem de cabeçalho na text area, mudar o tamanho da fonte, ou configurar para o texto desaparecer a uma certa distância. Teste e veja o que acha dessas possibilidades.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/152_img.png" alt="Passo 21">
                            <div class="carousel-text">
                                <p>Passo 21</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/153_img.png" alt="Passo 22">
                            <div class="carousel-text">
                                <p>Passo 22</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/154_img.png" alt="Passo 23">
                            <div class="carousel-text">
                                <p>Adicionando 3D text. 
3.1 Clique em Creation menu.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/155_img.png" alt="Passo 24">
                            <div class="carousel-text">
                                <p>3.2 Clique em 3DText. 
 
 
 
3.3 Clique no ícone de edição. 
 
 
3.4 Clique no objeto. 
 
 
3.5 Escreva seu texto.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/156_img.png" alt="Passo 25">
                            <div class="carousel-text">
                                <p>Passo 25</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/157_img.png" alt="Passo 26">
                            <div class="carousel-text">
                                <p>Passo 26</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/158_img.png" alt="Passo 27">
                            <div class="carousel-text">
                                <p>Passo 27</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/159_img.png" alt="Passo 28">
                            <div class="carousel-text">
                                <p>Passo 28</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/160_img.png" alt="Passo 29">
                            <div class="carousel-text">
                                <p>3.6 Defina sua fonte. 
 
 
3.7 Defina a profundidade do texto.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/161_img.png" alt="Passo 30">
                            <div class="carousel-text">
                                <p>Passo 30</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/162_img.png" alt="Passo 31">
                            <div class="carousel-text">
                                <p>3.8 Configure suas preferências. 
 
 
3.9 Selecione um efeito para o texto.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/163_img.png" alt="Passo 32">
                            <div class="carousel-text">
                                <p>Passo 32</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/164_img.png" alt="Passo 33">
                            <div class="carousel-text">
                                <p>3.10 Clique em Set para ver o resultado. 
 
Muito bem! 
Agora você já sabe tudo que precisa para enriquecer sua exposição com texto.</p>
                            </div>
                        </div>
                        </div>
                        <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial4')">&lt;</button>
                        <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial4')">&gt;</button>
                        <div class="carousel-dots">
                            <span class="dot active" onclick="currentSlide(1, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(2, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(3, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(4, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(5, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(6, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(7, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(8, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(9, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(10, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(11, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(12, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(13, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(14, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(15, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(16, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(17, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(18, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(19, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(20, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(21, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(22, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(23, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(24, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(25, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(26, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(27, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(28, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(29, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(30, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(31, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(32, 'module4-tutorial4')"></span> <span class="dot" onclick="currentSlide(33, 'module4-tutorial4')"></span>
                        </div>
                    </div>
                </div>

                <h3>Tutorial 5: Áudios e Enquetes</h3>
                <div class="tutorial-section">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/Zb3ZzOqW7Ew" frameborder="0" allowfullscreen></iframe>
                    </div>
                    

                    <div class="carousel-container">
                        <div class="carousel" id="carousel-module4-tutorial5">

                        <div class="carousel-slide">
                            <img src="images/modulo4/165_img.png" alt="Passo 1">
                            <div class="carousel-text">
                                <p>Passo 1</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/166_img.png" alt="Passo 2">
                            <div class="carousel-text">
                                <p>1.2 Clique em Audio. 
 
 
1.3 Selecione o arquivo no seu navegador de arquivos. 
 
Observação: Arquivos de MP3.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/167_img.png" alt="Passo 3">
                            <div class="carousel-text">
                                <p>Passo 3</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/168_img.png" alt="Passo 4">
                            <div class="carousel-text">
                                <p>1.4 Aguarde o áudio carregar na plataforma.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/169_img.png" alt="Passo 5">
                            <div class="carousel-text">
                                <p>Observação: O áudio irá ser inserido na forma de uma pequena esfera destacada na imagem. Você pode posicioná-lo como outros elementos 3D. A posição é importante caso você defina áudio posicional e para acionar os comados de volume, play e stop. Caso não selecionar a opção de áudio posicional, todos do ambiente o escutarão em qualquer parte do ambiente em que se encontrarem. 
 
 
1.5 Clique no ícone de lápis para editar o elemento.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/170_img.png" alt="Passo 6">
                            <div class="carousel-text">
                                <p>1.6 Clique na esfera do áudio. 
 
 
 
1.7 Clique em positional audio para definir a distância que será possível escutar a música. 
 
 
Observação: Clicando no ícone de “olho”, você consegue ver a que distância será possível ouvir seu áudio. O círculo branco delimita a região onde se poderá ouvir completamente o áudio, os círculos pretos, onde se poderá ouvir moderadamente. Os avatares que estiverem posicionados fora desses círculos não ouvirão o áudio. 
 
1.8 Defina as opções de áudio.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/171_img.png" alt="Passo 7">
                            <div class="carousel-text">
                                <p>Passo 7</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/172_img.png" alt="Passo 8">
                            <div class="carousel-text">
                                <p>Passo 8</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/173_img.png" alt="Passo 9">
                            <div class="carousel-text">
                                <p>Observações: 
1. A opção Loop define se ele irá tocar em looping e a Opção Auto Play fará com que o aúdio inicia a tocar automaticamente quando o visitante entrar na sala. 
2. A opção Hide at a distance define se a esfera do áudio irá sumir a uma distância, mas não se o áudio será audível ou não. Isso é definido no positional áudio. Inserindo uma enquete. 2.1 Clique em Creation menu</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/174_img.png" alt="Passo 10">
                            <div class="carousel-text">
                                <p>2.2 Clique em Poll. 
 
 
 
2.3 Escreva a pergunta da sua enquete. 
 
 
 
2.4 Escreva as alternativas de resposta da enquete. 
 
 
2.5 Clique em Add choice para adicionar mais alternativas. 
 
 
 
2.6 Defina se a enquete será anônima. 
 
 
2.7 Clique em Ask audience para lançar a enquete.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/175_img.png" alt="Passo 11">
                            <div class="carousel-text">
                                <p>Passo 11</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/176_img.png" alt="Passo 12">
                            <div class="carousel-text">
                                <p>Passo 12</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/177_img.png" alt="Passo 13">
                            <div class="carousel-text">
                                <p>Passo 13</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/178_img.png" alt="Passo 14">
                            <div class="carousel-text">
                                <p>Passo 14</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/179_img.png" alt="Passo 15">
                            <div class="carousel-text">
                                <p>Passo 15</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/180_img.png" alt="Passo 16">
                            <div class="carousel-text">
                                <p>Passo 16</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/181_img.png" alt="Passo 17">
                            <div class="carousel-text">
                                <p>2.8 Posicione a enquete no local desejado. 
 
 
2.9 Confira as alternativas da sua enquete.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/182_img.png" alt="Passo 18">
                            <div class="carousel-text">
                                <p>Passo 18</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/183_img.png" alt="Passo 19">
                            <div class="carousel-text">
                                <p>2.10 Veja o resultado das respostas da enquete no gráfico de pizza. Agora você sabe inserir novos tipos de conteúdos interativos na sua exposição!</p>
                            </div>
                        </div>
                        </div>
                        <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial5')">&lt;</button>
                        <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial5')">&gt;</button>
                        <div class="carousel-dots">
                            <span class="dot active" onclick="currentSlide(1, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(2, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(3, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(4, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(5, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(6, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(7, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(8, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(9, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(10, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(11, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(12, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(13, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(14, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(15, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(16, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(17, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(18, 'module4-tutorial5')"></span> <span class="dot" onclick="currentSlide(19, 'module4-tutorial5')"></span>
                        </div>
                    </div>
                </div>

                <h3>Tutorial 6: Conteúdos Externos</h3>
                <div class="tutorial-section">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/nMdPbPcQhxs" frameborder="0" allowfullscreen></iframe>
                    </div>
                    

                    <div class="carousel-container">
                        <div class="carousel" id="carousel-module4-tutorial6">

                        <div class="carousel-slide">
                            <img src="images/modulo4/184_img.png" alt="Passo 1">
                            <div class="carousel-text">
                                <p>Compartilhando sua apresentação ou alguma janela do seu computador. 
1.1 Clique em Creation menu</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/185_img.png" alt="Passo 2">
                            <div class="carousel-text">
                                <p>1.2 Clique em streaming screen. 
 
 
1.3 Aguarde o carregamento do elemento.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/186_img.png" alt="Passo 3">
                            <div class="carousel-text">
                                <p>Passo 3</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/187_img.png" alt="Passo 4">
                            <div class="carousel-text">
                                <p>1.4 Clique no ícone de lápis para editar o elemento. 
 
 
1.5 Posicione o compartilhamento no local desejado. 
 
 
1.6 Configure as opções do compartilhamento de tela. 
 
Observação:  As opções são as seguintes. 
 
Lock Position | Travar a posição  
Snap to surface | Fixar na superfície 
Make private to zone | Definir uma área de privacidade para o compartilhamento (não utilizado neste curso). 
Green Screen | Tela verde, utilizado para compartilhamento da webcam com fundo verde. Para dar efeito especial de substituição do fundo. 
Hide at a distance | Esconder a uma distância. 
Positional Audio | Áudio posicional, para compartilhamento de tela com áudio e da webcam. 
 
1.7 Clique em Share Screen para compartilhar sua tela.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/188_img.png" alt="Passo 5">
                            <div class="carousel-text">
                                <p>Passo 5</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/189_img.png" alt="Passo 6">
                            <div class="carousel-text">
                                <p>Passo 6</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/190_img.png" alt="Passo 7">
                            <div class="carousel-text">
                                <p>Passo 7</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/191_img.png" alt="Passo 8">
                            <div class="carousel-text">
                                <p>1.8 Selecione o que irá compartilhar no menu pop up. 
 
Observação: Você pode selecionar compartilhar uma guia do seu navegador, uma janela de algum programa que esteja usando ou então a toda a tela do seu computador. Não se esqueça de ativar o compartilhamento de áudio, se desejado. 
 
 
1.9 Clique em Share webcam para compartilhar sua câmera. 
  
Observação: Os usuários podem clicar em Zoom In para ver seu compartilhamento em tela cheia.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/192_img.png" alt="Passo 9">
                            <div class="carousel-text">
                                <p>Passo 9</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/193_img.png" alt="Passo 10">
                            <div class="carousel-text">
                                <p>Passo 10</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/194_img.png" alt="Passo 11">
                            <div class="carousel-text">
                                <p>2. Inserindo Quadro branco. 
2.1 Clique em Creation menu 
 
 
2.2 Clique em Whiteboard. 
 
2.3 Aguarde o carregamento do elemento.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/195_img.png" alt="Passo 12">
                            <div class="carousel-text">
                                <p>Passo 12</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/196_img.png" alt="Passo 13">
                            <div class="carousel-text">
                                <p>Passo 13</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/197_img.png" alt="Passo 14">
                            <div class="carousel-text">
                                <p>2.4 Clique no ícone de lápis para editar o elemento.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/198_img.png" alt="Passo 15">
                            <div class="carousel-text">
                                <p>2.5  Posicione o quadro no local desejado. 
 
2.6 Clique em Start Drawing para começar a desenhar no quadro.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/199_img.png" alt="Passo 16">
                            <div class="carousel-text">
                                <p>2.7 Clique em Zoom para ver o quadro em tela cheia. 
 
 
2.8 Defina o tamanho do traço na barra lateral e as cores no menu de cores a esquerda.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/200_img.png" alt="Passo 17">
                            <div class="carousel-text">
                                <p>Passo 17</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/201_img.png" alt="Passo 18">
                            <div class="carousel-text">
                                <p>2.9 Clique em Download para baixar o que foi desenhado no quadro. Inserindo uma página da Internet | Web Browser 
3.1 Clique em Creation menu</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/202_img.png" alt="Passo 19">
                            <div class="carousel-text">
                                <p>3.2 Clique em Web browser (Navegador da Internet).</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/203_img.png" alt="Passo 20">
                            <div class="carousel-text">
                                <p>3.3 Aguarde o carregamento do elemento. 
 
 
3.4 Selecione o Kiosk Mode para ocultar a barra de busca do navegador. 
 
 
3.5 Defina quem tem autorização para manipulá-lo. 
 
Observação: Na aula seguinte você vai aprender a dar permissões e definir papéis de membros e administradores. É possível permitir que os visitantes tenham controle total do navegador (opção Anyone), mas analise caso-a-caso a conveniência ou não de fazê-lo. 
 
3.6 Insira o link (URL) da página desejada. 
 
 
3.7 Clique em Create browser 
 
 
 
3.8 Clique no ícone de lápis para editar o elemento. 
 
 
3.9 Posicione o navegador no local desejado. 
 
 
3.10 Interaja com o navegador simultaneamente com os outros usuários. Meus parabéns! 
 
Agora você já sabe tudo que precisa (e mais um pouco!) para criar sua exposição interativa e imersiva no metaverso.  
 
Na próxima aula vamos ver como definir papéis e funções para melhorar a qualidade e segurança do seu metaverso. Você já está apto(a) para criar a sua exposição! Crie sua exposição e compartilhe o link conosco na próxima atividade prática.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/204_img.png" alt="Passo 21">
                            <div class="carousel-text">
                                <p>Passo 21</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/205_img.png" alt="Passo 22">
                            <div class="carousel-text">
                                <p>Passo 22</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/206_img.png" alt="Passo 23">
                            <div class="carousel-text">
                                <p>Passo 23</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/207_img.png" alt="Passo 24">
                            <div class="carousel-text">
                                <p>Passo 24</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/208_img.png" alt="Passo 25">
                            <div class="carousel-text">
                                <p>Passo 25</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/209_img.png" alt="Passo 26">
                            <div class="carousel-text">
                                <p>Passo 26</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/210_img.png" alt="Passo 27">
                            <div class="carousel-text">
                                <p>Passo 27</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/211_img.png" alt="Passo 28">
                            <div class="carousel-text">
                                <p>Passo 28</p>
                            </div>
                        </div>
                        </div>
                        <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial6')">&lt;</button>
                        <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial6')">&gt;</button>
                        <div class="carousel-dots">
                            <span class="dot active" onclick="currentSlide(1, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(2, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(3, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(4, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(5, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(6, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(7, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(8, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(9, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(10, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(11, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(12, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(13, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(14, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(15, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(16, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(17, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(18, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(19, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(20, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(21, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(22, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(23, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(24, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(25, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(26, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(27, 'module4-tutorial6')"></span> <span class="dot" onclick="currentSlide(28, 'module4-tutorial6')"></span>
                        </div>
                    </div>
                </div>

                <h3>Tutorial 7: Configurações do Frame</h3>
                <div class="tutorial-section">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/tPuMgQPCyOw" frameborder="0" allowfullscreen></iframe>
                    </div>
                    

                    <div class="carousel-container">
                        <div class="carousel" id="carousel-module4-tutorial7">

                        <div class="carousel-slide">
                            <img src="images/modulo4/212_img.png" alt="Passo 1">
                            <div class="carousel-text">
                                <p>1 Clique no botão disponível na região direita acima da sua tela. 
 
 
1.2 Clique em Frame. 
 
 
 
1.3 Clique em Frame Setting 
 
Observação: Dentro desse menu suspenso há coisas importantes. 
Você pode encontrar o link para o seu metaverso, criado pelo Frame, alterar seu ambiente, ajustar permissões, convidar membros ou administradores e muitas outras coisas. Vamos mostrar o essencial, mas vale pesquisar e conhecer mais opções. 
 
1.4 Clique em General 
 
 
1.5 Defina o modo de vista padrão do seu Frame em Camera Mode Override 
(Escolha entre: Nenhum, primeira pessoa e terceira pessoa).</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/213_img.png" alt="Passo 2">
                            <div class="carousel-text">
                                <p>Passo 2</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/214_img.png" alt="Passo 3">
                            <div class="carousel-text">
                                <p>Passo 3</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/215_img.png" alt="Passo 4">
                            <div class="carousel-text">
                                <p>Passo 4</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/216_img.png" alt="Passo 5">
                            <div class="carousel-text">
                                <p>Passo 5</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/217_img.png" alt="Passo 6">
                            <div class="carousel-text">
                                <p>1 Clique em Permissions And Role para definir funções e permissões. 
 
  
Observação: Isso será importante caso haja mais pessoas trabalhando com você no seu ambiente de metaverso para decidir quem pode ou não editar as coisas no seu espaço imersivo.  
 
2.2 Coloque uma senha na sua sala. 
  
 
2.3 Defina sua se seu Metaverso está aberto para visitas. 
  
Observação: Isso pode ser útil caso esteja fazendo alterações na sala e não queira que ninguém entre. Você pode alterar isso a qualquer momento. 
 
 
2.4 Defina quem poderá editar objetos e ativos do seu ambiente. 
  
 
2.5 Escolha a opção de Adminis para que só membros administradores editem o ambiente.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/218_img.png" alt="Passo 7">
                            <div class="carousel-text">
                                <p>Passo 7</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/219_img.png" alt="Passo 8">
                            <div class="carousel-text">
                                <p>Passo 8</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/220_img.png" alt="Passo 9">
                            <div class="carousel-text">
                                <p>Passo 9</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/221_img.png" alt="Passo 10">
                            <div class="carousel-text">
                                <p>Passo 10</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/222_img.png" alt="Passo 11">
                            <div class="carousel-text">
                                <p>Adicionando papéis e funções. 
3.1 Clique em Admins no menu de Roles. 
  
 
3.2 Atribua a função de administrador escrevendo seu email no campo de texto aberto. 
  
 
3.3 Clique em Add. 
  
 
3.4 Confirme que inseriu o email correto.</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/223_img.png" alt="Passo 12">
                            <div class="carousel-text">
                                <p>Passo 12</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/224_img.png" alt="Passo 13">
                            <div class="carousel-text">
                                <p>Passo 13</p>
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <img src="images/modulo4/225_img.png" alt="Passo 14">
                            <div class="carousel-text">
                                <p>Passo 14</p>
                            </div>
                        </div>
                        </div>
                        <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial7')">&lt;</button>
                        <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial7')">&gt;</button>
                        <div class="carousel-dots">
                            <span class="dot active" onclick="currentSlide(1, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(2, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(3, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(4, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(5, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(6, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(7, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(8, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(9, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(10, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(11, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(12, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(13, 'module4-tutorial7')"></span> <span class="dot" onclick="currentSlide(14, 'module4-tutorial7')"></span>
                        </div>
                    </div>
                </div>

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
    module1: 0,
    'module2-tutorial1': 0,
    'module2-tutorial2': 0,
    'module4-tutorial1': 0,
    'module4-tutorial2': 0,
    'module4-tutorial3': 0,
    'module4-tutorial4': 0,
    'module4-tutorial5': 0,
    'module4-tutorial6': 0,
    'module4-tutorial7': 0
};

function moveCarousel(direction, moduleId) {
    // Encontrar o carrossel específico pelo ID
    const carousel = document.getElementById('carousel-' + moduleId);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    if (!slides.length) return;
    
    // Inicializar índice se não existir
    if (currentSlideIndex[moduleId] === undefined) {
        currentSlideIndex[moduleId] = 0;
    }
    
    // Update index
    currentSlideIndex[moduleId] += direction;
    
    // Loop around
    if (currentSlideIndex[moduleId] >= slides.length) {
        currentSlideIndex[moduleId] = 0;
    }
    if (currentSlideIndex[moduleId] < 0) {
        currentSlideIndex[moduleId] = slides.length - 1;
    }
    
    // Update indicators (which will show/hide slides)
    updateCarouselIndicators(moduleId);
}

function goToSlide(index, moduleId) {
    // Encontrar o carrossel específico pelo ID
    const carousel = document.getElementById('carousel-' + moduleId);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    if (!slides.length) return;
    
    // Inicializar índice se não existir
    if (currentSlideIndex[moduleId] === undefined) {
        currentSlideIndex[moduleId] = 0;
    }
    
    // Update index
    currentSlideIndex[moduleId] = index;
    
    // Update indicators (which will show/hide slides)
    updateCarouselIndicators(moduleId);
}

function updateCarouselIndicators(moduleId) {
    // Encontrar o carrossel específico pelo ID
    const carousel = document.getElementById('carousel-' + moduleId);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    if (!slides.length) return;
    
    // Inicializar índice se não existir
    if (currentSlideIndex[moduleId] === undefined) {
        currentSlideIndex[moduleId] = 0;
    }
    
    const currentIndex = currentSlideIndex[moduleId];
    
    // Mostrar apenas o slide atual
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    // Atualizar dots
    const dotsContainer = carousel.parentElement.querySelector('.carousel-dots');
    if (!dotsContainer) return;
    
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Alias para compatibilidade com os botões HTML
function currentSlide(index, moduleId) {
    goToSlide(index - 1, moduleId); // Subtrai 1 porque os botões usam índice baseado em 1
}

// Initialize carousels when modal opens
function initializeCarousels() {
    [
        'module1', 
        'module2-tutorial1', 
        'module2-tutorial2',
        'module4-tutorial1',
        'module4-tutorial2',
        'module4-tutorial3',
        'module4-tutorial4',
        'module4-tutorial5',
        'module4-tutorial6',
        'module4-tutorial7'
    ].forEach(moduleId => {
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
