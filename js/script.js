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
        title: "Módulo 4: Expor",
        icon: "🏛️",
        content: `
            <h2>🏛️ Módulo 4 – Expor</h2>
            
            <p><strong>Aprenda a criar sua própria exposição imersiva em metaverso.</strong></p>

            <h3>O que irá aprender neste módulo</h3>
            
            <p>Agora que já sabe criar modelos virtuais 3D a partir de objetos físicos e também como buscar e baixar modelos 3D prontos, já dá para organizar sua exposição imersiva. A seguir você verá como selecionar um dos inúmeros espaços virtuais imersivos disponíveis pela plataforma Frame VR, dispor seus modelos 3D no ambiente escolhido e configurar algumas ações para que os visitantes de sua exposição interajam com os objetos lá expostos.</p>
            
            <p>Acompanhe e execute os tutoriais dos tópicos a seguir e divirta-se enquanto aprende. Ou vice-versa!</p>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/WRj9FVLb6So" 
                        title="Módulo 4 - Expor - Introdução"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <hr style="margin: 40px 0; border: none; border-top: 2px solid #333;">

            <h3>Tutorial 1: Criando seu primeiro ambiente com FrameVR</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/6FaCPYmQkk4" 
                        title="Tutorial 1: Criando seu primeiro ambiente com FrameVR"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <div class="carousel-container">
                <div class="carousel" id="carousel-module4-tutorial1">
                    <div class="carousel-slide"><img src="images/modulo4/39_img.png" alt="Passo 1"><p>Passo 1</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/40_img.png" alt="Passo 2"><p>Passo 2</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/41_img.png" alt="Passo 3"><p>Passo 3</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/42_img.png" alt="Passo 4"><p>Passo 4</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/43_img.png" alt="Passo 5"><p>Passo 5</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/44_img.png" alt="Passo 6"><p>Passo 6</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/45_img.png" alt="Passo 7"><p>Passo 7</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/46_img.png" alt="Passo 8"><p>Passo 8</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/47_img.png" alt="Passo 9"><p>Passo 9</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/48_img.png" alt="Passo 10"><p>Passo 10</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/49_img.png" alt="Passo 11"><p>Passo 11</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/50_img.png" alt="Passo 12"><p>Passo 12</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/51_img.png" alt="Passo 13"><p>Passo 13</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/52_img.png" alt="Passo 14"><p>Passo 14</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/53_img.png" alt="Passo 15"><p>Passo 15</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/54_img.png" alt="Passo 16"><p>Passo 16</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/55_img.png" alt="Passo 17"><p>Passo 17</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/56_img.png" alt="Passo 18"><p>Passo 18</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/57_img.png" alt="Passo 19"><p>Passo 19</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/58_img.png" alt="Passo 20"><p>Passo 20</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/59_img.png" alt="Passo 21"><p>Passo 21</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/60_img.png" alt="Passo 22"><p>Passo 22</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/61_img.png" alt="Passo 23"><p>Passo 23</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/62_img.png" alt="Passo 24"><p>Passo 24</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/63_img.png" alt="Passo 25"><p>Passo 25</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/64_img.png" alt="Passo 26"><p>Passo 26</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/65_img.png" alt="Passo 27"><p>Passo 27</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/66_img.png" alt="Passo 28"><p>Passo 28</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/67_img.png" alt="Passo 29"><p>Passo 29</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/68_img.png" alt="Passo 30"><p>Passo 30</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/69_img.png" alt="Passo 31"><p>Passo 31</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/70_img.png" alt="Passo 32"><p>Passo 32</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/71_img.png" alt="Passo 33"><p>Passo 33</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/72_img.png" alt="Passo 34"><p>Passo 34</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/73_img.png" alt="Passo 35"><p>Passo 35</p></div>
                </div>
                <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial1')">‹</button>
                <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial1')">›</button>
                <div class="carousel-dots">
                    <span class="dot active" onclick="currentSlide(1, 'module4-tutorial1')" data-slide="1"></span>
                    <span class="dot" onclick="currentSlide(2, 'module4-tutorial1')" data-slide="2"></span>
                    <span class="dot" onclick="currentSlide(3, 'module4-tutorial1')" data-slide="3"></span>
                    <span class="dot" onclick="currentSlide(4, 'module4-tutorial1')" data-slide="4"></span>
                    <span class="dot" onclick="currentSlide(5, 'module4-tutorial1')" data-slide="5"></span>
                    <span class="dot" onclick="currentSlide(6, 'module4-tutorial1')" data-slide="6"></span>
                    <span class="dot" onclick="currentSlide(7, 'module4-tutorial1')" data-slide="7"></span>
                    <span class="dot" onclick="currentSlide(8, 'module4-tutorial1')" data-slide="8"></span>
                    <span class="dot" onclick="currentSlide(9, 'module4-tutorial1')" data-slide="9"></span>
                    <span class="dot" onclick="currentSlide(10, 'module4-tutorial1')" data-slide="10"></span>
                    <span class="dot" onclick="currentSlide(11, 'module4-tutorial1')" data-slide="11"></span>
                    <span class="dot" onclick="currentSlide(12, 'module4-tutorial1')" data-slide="12"></span>
                    <span class="dot" onclick="currentSlide(13, 'module4-tutorial1')" data-slide="13"></span>
                    <span class="dot" onclick="currentSlide(14, 'module4-tutorial1')" data-slide="14"></span>
                    <span class="dot" onclick="currentSlide(15, 'module4-tutorial1')" data-slide="15"></span>
                    <span class="dot" onclick="currentSlide(16, 'module4-tutorial1')" data-slide="16"></span>
                    <span class="dot" onclick="currentSlide(17, 'module4-tutorial1')" data-slide="17"></span>
                    <span class="dot" onclick="currentSlide(18, 'module4-tutorial1')" data-slide="18"></span>
                    <span class="dot" onclick="currentSlide(19, 'module4-tutorial1')" data-slide="19"></span>
                    <span class="dot" onclick="currentSlide(20, 'module4-tutorial1')" data-slide="20"></span>
                    <span class="dot" onclick="currentSlide(21, 'module4-tutorial1')" data-slide="21"></span>
                    <span class="dot" onclick="currentSlide(22, 'module4-tutorial1')" data-slide="22"></span>
                    <span class="dot" onclick="currentSlide(23, 'module4-tutorial1')" data-slide="23"></span>
                    <span class="dot" onclick="currentSlide(24, 'module4-tutorial1')" data-slide="24"></span>
                    <span class="dot" onclick="currentSlide(25, 'module4-tutorial1')" data-slide="25"></span>
                    <span class="dot" onclick="currentSlide(26, 'module4-tutorial1')" data-slide="26"></span>
                    <span class="dot" onclick="currentSlide(27, 'module4-tutorial1')" data-slide="27"></span>
                    <span class="dot" onclick="currentSlide(28, 'module4-tutorial1')" data-slide="28"></span>
                    <span class="dot" onclick="currentSlide(29, 'module4-tutorial1')" data-slide="29"></span>
                    <span class="dot" onclick="currentSlide(30, 'module4-tutorial1')" data-slide="30"></span>
                    <span class="dot" onclick="currentSlide(31, 'module4-tutorial1')" data-slide="31"></span>
                    <span class="dot" onclick="currentSlide(32, 'module4-tutorial1')" data-slide="32"></span>
                    <span class="dot" onclick="currentSlide(33, 'module4-tutorial1')" data-slide="33"></span>
                    <span class="dot" onclick="currentSlide(34, 'module4-tutorial1')" data-slide="34"></span>
                    <span class="dot" onclick="currentSlide(35, 'module4-tutorial1')" data-slide="35"></span>
                </div>
            </div>

            <hr style="margin: 40px 0; border: none; border-top: 2px solid #333;">

            <h3>Tutorial 2: Inserindo Imagens e Vídeos</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/qmiknpS5ohE" 
                        title="Tutorial 2: Inserindo Imagens e Vídeos"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <div class="carousel-container">
                <div class="carousel" id="carousel-module4-tutorial2">
                    <div class="carousel-slide"><img src="images/modulo4/74_img.png" alt="Passo 1"><p>Passo 1</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/75_img.png" alt="Passo 2"><p>Passo 2</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/76_img.png" alt="Passo 3"><p>Passo 3</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/77_img.png" alt="Passo 4"><p>Passo 4</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/78_img.png" alt="Passo 5"><p>Passo 5</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/79_img.png" alt="Passo 6"><p>Passo 6</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/80_img.png" alt="Passo 7"><p>Passo 7</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/81_img.png" alt="Passo 8"><p>Passo 8</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/82_img.png" alt="Passo 9"><p>Passo 9</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/83_img.png" alt="Passo 10"><p>Passo 10</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/84_img.png" alt="Passo 11"><p>Passo 11</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/85_img.png" alt="Passo 12"><p>Passo 12</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/86_img.png" alt="Passo 13"><p>Passo 13</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/87_img.png" alt="Passo 14"><p>Passo 14</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/88_img.png" alt="Passo 15"><p>Passo 15</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/89_img.png" alt="Passo 16"><p>Passo 16</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/90_img.png" alt="Passo 17"><p>Passo 17</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/91_img.png" alt="Passo 18"><p>Passo 18</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/92_img.png" alt="Passo 19"><p>Passo 19</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/93_img.png" alt="Passo 20"><p>Passo 20</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/94_img.png" alt="Passo 21"><p>Passo 21</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/95_img.png" alt="Passo 22"><p>Passo 22</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/96_img.png" alt="Passo 23"><p>Passo 23</p></div>
                </div>
                <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial2')">‹</button>
                <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial2')">›</button>
                <div class="carousel-dots">
                    <span class="dot active" onclick="currentSlide(1, 'module4-tutorial2')" data-slide="1"></span>
                    <span class="dot" onclick="currentSlide(2, 'module4-tutorial2')" data-slide="2"></span>
                    <span class="dot" onclick="currentSlide(3, 'module4-tutorial2')" data-slide="3"></span>
                    <span class="dot" onclick="currentSlide(4, 'module4-tutorial2')" data-slide="4"></span>
                    <span class="dot" onclick="currentSlide(5, 'module4-tutorial2')" data-slide="5"></span>
                    <span class="dot" onclick="currentSlide(6, 'module4-tutorial2')" data-slide="6"></span>
                    <span class="dot" onclick="currentSlide(7, 'module4-tutorial2')" data-slide="7"></span>
                    <span class="dot" onclick="currentSlide(8, 'module4-tutorial2')" data-slide="8"></span>
                    <span class="dot" onclick="currentSlide(9, 'module4-tutorial2')" data-slide="9"></span>
                    <span class="dot" onclick="currentSlide(10, 'module4-tutorial2')" data-slide="10"></span>
                    <span class="dot" onclick="currentSlide(11, 'module4-tutorial2')" data-slide="11"></span>
                    <span class="dot" onclick="currentSlide(12, 'module4-tutorial2')" data-slide="12"></span>
                    <span class="dot" onclick="currentSlide(13, 'module4-tutorial2')" data-slide="13"></span>
                    <span class="dot" onclick="currentSlide(14, 'module4-tutorial2')" data-slide="14"></span>
                    <span class="dot" onclick="currentSlide(15, 'module4-tutorial2')" data-slide="15"></span>
                    <span class="dot" onclick="currentSlide(16, 'module4-tutorial2')" data-slide="16"></span>
                    <span class="dot" onclick="currentSlide(17, 'module4-tutorial2')" data-slide="17"></span>
                    <span class="dot" onclick="currentSlide(18, 'module4-tutorial2')" data-slide="18"></span>
                    <span class="dot" onclick="currentSlide(19, 'module4-tutorial2')" data-slide="19"></span>
                    <span class="dot" onclick="currentSlide(20, 'module4-tutorial2')" data-slide="20"></span>
                    <span class="dot" onclick="currentSlide(21, 'module4-tutorial2')" data-slide="21"></span>
                    <span class="dot" onclick="currentSlide(22, 'module4-tutorial2')" data-slide="22"></span>
                    <span class="dot" onclick="currentSlide(23, 'module4-tutorial2')" data-slide="23"></span>
                </div>
            </div>

            <hr style="margin: 40px 0; border: none; border-top: 2px solid #333;">

            <h3>Tutorial 3: Inserindo objetos 3D</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/jVap9FbcDd0" 
                        title="Tutorial 3: Inserindo objetos 3D"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <div class="carousel-container">
                <div class="carousel" id="carousel-module4-tutorial3">
                    <div class="carousel-slide"><img src="images/modulo4/97_img.png" alt="Passo 1"><p>Passo 1</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/98_img.png" alt="Passo 2"><p>Passo 2</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/99_img.png" alt="Passo 3"><p>Passo 3</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/100_img.png" alt="Passo 4"><p>Passo 4</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/101_img.png" alt="Passo 5"><p>Passo 5</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/102_img.png" alt="Passo 6"><p>Passo 6</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/103_img.png" alt="Passo 7"><p>Passo 7</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/104_img.png" alt="Passo 8"><p>Passo 8</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/105_img.png" alt="Passo 9"><p>Passo 9</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/106_img.png" alt="Passo 10"><p>Passo 10</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/107_img.png" alt="Passo 11"><p>Passo 11</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/108_img.png" alt="Passo 12"><p>Passo 12</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/109_img.png" alt="Passo 13"><p>Passo 13</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/110_img.png" alt="Passo 14"><p>Passo 14</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/111_img.png" alt="Passo 15"><p>Passo 15</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/112_img.png" alt="Passo 16"><p>Passo 16</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/113_img.png" alt="Passo 17"><p>Passo 17</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/114_img.png" alt="Passo 18"><p>Passo 18</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/115_img.png" alt="Passo 19"><p>Passo 19</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/116_img.png" alt="Passo 20"><p>Passo 20</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/117_img.png" alt="Passo 21"><p>Passo 21</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/118_img.png" alt="Passo 22"><p>Passo 22</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/119_img.png" alt="Passo 23"><p>Passo 23</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/120_img.png" alt="Passo 24"><p>Passo 24</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/121_img.png" alt="Passo 25"><p>Passo 25</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/122_img.png" alt="Passo 26"><p>Passo 26</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/123_img.png" alt="Passo 27"><p>Passo 27</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/124_img.png" alt="Passo 28"><p>Passo 28</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/125_img.png" alt="Passo 29"><p>Passo 29</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/126_img.png" alt="Passo 30"><p>Passo 30</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/127_img.png" alt="Passo 31"><p>Passo 31</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/128_img.png" alt="Passo 32"><p>Passo 32</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/129_img.png" alt="Passo 33"><p>Passo 33</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/130_img.png" alt="Passo 34"><p>Passo 34</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/131_img.png" alt="Passo 35"><p>Passo 35</p></div>
                </div>
                <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial3')">‹</button>
                <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial3')">›</button>
                <div class="carousel-dots">
                    <span class="dot active" onclick="currentSlide(1, 'module4-tutorial3')" data-slide="1"></span>
                    <span class="dot" onclick="currentSlide(2, 'module4-tutorial3')" data-slide="2"></span>
                    <span class="dot" onclick="currentSlide(3, 'module4-tutorial3')" data-slide="3"></span>
                    <span class="dot" onclick="currentSlide(4, 'module4-tutorial3')" data-slide="4"></span>
                    <span class="dot" onclick="currentSlide(5, 'module4-tutorial3')" data-slide="5"></span>
                    <span class="dot" onclick="currentSlide(6, 'module4-tutorial3')" data-slide="6"></span>
                    <span class="dot" onclick="currentSlide(7, 'module4-tutorial3')" data-slide="7"></span>
                    <span class="dot" onclick="currentSlide(8, 'module4-tutorial3')" data-slide="8"></span>
                    <span class="dot" onclick="currentSlide(9, 'module4-tutorial3')" data-slide="9"></span>
                    <span class="dot" onclick="currentSlide(10, 'module4-tutorial3')" data-slide="10"></span>
                    <span class="dot" onclick="currentSlide(11, 'module4-tutorial3')" data-slide="11"></span>
                    <span class="dot" onclick="currentSlide(12, 'module4-tutorial3')" data-slide="12"></span>
                    <span class="dot" onclick="currentSlide(13, 'module4-tutorial3')" data-slide="13"></span>
                    <span class="dot" onclick="currentSlide(14, 'module4-tutorial3')" data-slide="14"></span>
                    <span class="dot" onclick="currentSlide(15, 'module4-tutorial3')" data-slide="15"></span>
                    <span class="dot" onclick="currentSlide(16, 'module4-tutorial3')" data-slide="16"></span>
                    <span class="dot" onclick="currentSlide(17, 'module4-tutorial3')" data-slide="17"></span>
                    <span class="dot" onclick="currentSlide(18, 'module4-tutorial3')" data-slide="18"></span>
                    <span class="dot" onclick="currentSlide(19, 'module4-tutorial3')" data-slide="19"></span>
                    <span class="dot" onclick="currentSlide(20, 'module4-tutorial3')" data-slide="20"></span>
                    <span class="dot" onclick="currentSlide(21, 'module4-tutorial3')" data-slide="21"></span>
                    <span class="dot" onclick="currentSlide(22, 'module4-tutorial3')" data-slide="22"></span>
                    <span class="dot" onclick="currentSlide(23, 'module4-tutorial3')" data-slide="23"></span>
                    <span class="dot" onclick="currentSlide(24, 'module4-tutorial3')" data-slide="24"></span>
                    <span class="dot" onclick="currentSlide(25, 'module4-tutorial3')" data-slide="25"></span>
                    <span class="dot" onclick="currentSlide(26, 'module4-tutorial3')" data-slide="26"></span>
                    <span class="dot" onclick="currentSlide(27, 'module4-tutorial3')" data-slide="27"></span>
                    <span class="dot" onclick="currentSlide(28, 'module4-tutorial3')" data-slide="28"></span>
                    <span class="dot" onclick="currentSlide(29, 'module4-tutorial3')" data-slide="29"></span>
                    <span class="dot" onclick="currentSlide(30, 'module4-tutorial3')" data-slide="30"></span>
                    <span class="dot" onclick="currentSlide(31, 'module4-tutorial3')" data-slide="31"></span>
                    <span class="dot" onclick="currentSlide(32, 'module4-tutorial3')" data-slide="32"></span>
                    <span class="dot" onclick="currentSlide(33, 'module4-tutorial3')" data-slide="33"></span>
                    <span class="dot" onclick="currentSlide(34, 'module4-tutorial3')" data-slide="34"></span>
                    <span class="dot" onclick="currentSlide(35, 'module4-tutorial3')" data-slide="35"></span>
                </div>
            </div>

            <hr style="margin: 40px 0; border: none; border-top: 2px solid #333;">

            <h3>Tutorial 4: Inserindo texto</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/oIKrDQk1_nc" 
                        title="Tutorial 4: Inserindo texto"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <div class="carousel-container">
                <div class="carousel" id="carousel-module4-tutorial4">
                    <div class="carousel-slide"><img src="images/modulo4/132_img.png" alt="Passo 1"><p>Passo 1</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/133_img.png" alt="Passo 2"><p>Passo 2</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/134_img.png" alt="Passo 3"><p>Passo 3</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/135_img.png" alt="Passo 4"><p>Passo 4</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/136_img.png" alt="Passo 5"><p>Passo 5</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/137_img.png" alt="Passo 6"><p>Passo 6</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/138_img.png" alt="Passo 7"><p>Passo 7</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/139_img.png" alt="Passo 8"><p>Passo 8</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/140_img.png" alt="Passo 9"><p>Passo 9</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/141_img.png" alt="Passo 10"><p>Passo 10</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/142_img.png" alt="Passo 11"><p>Passo 11</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/143_img.png" alt="Passo 12"><p>Passo 12</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/144_img.png" alt="Passo 13"><p>Passo 13</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/145_img.png" alt="Passo 14"><p>Passo 14</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/146_img.png" alt="Passo 15"><p>Passo 15</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/147_img.png" alt="Passo 16"><p>Passo 16</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/148_img.png" alt="Passo 17"><p>Passo 17</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/149_img.png" alt="Passo 18"><p>Passo 18</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/150_img.png" alt="Passo 19"><p>Passo 19</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/151_img.png" alt="Passo 20"><p>Passo 20</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/152_img.png" alt="Passo 21"><p>Passo 21</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/153_img.png" alt="Passo 22"><p>Passo 22</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/154_img.png" alt="Passo 23"><p>Passo 23</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/155_img.png" alt="Passo 24"><p>Passo 24</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/156_img.png" alt="Passo 25"><p>Passo 25</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/157_img.png" alt="Passo 26"><p>Passo 26</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/158_img.png" alt="Passo 27"><p>Passo 27</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/159_img.png" alt="Passo 28"><p>Passo 28</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/160_img.png" alt="Passo 29"><p>Passo 29</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/161_img.png" alt="Passo 30"><p>Passo 30</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/162_img.png" alt="Passo 31"><p>Passo 31</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/163_img.png" alt="Passo 32"><p>Passo 32</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/164_img.png" alt="Passo 33"><p>Passo 33</p></div>
                </div>
                <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial4')">‹</button>
                <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial4')">›</button>
                <div class="carousel-dots">
                    <span class="dot active" onclick="currentSlide(1, 'module4-tutorial4')" data-slide="1"></span>
                    <span class="dot" onclick="currentSlide(2, 'module4-tutorial4')" data-slide="2"></span>
                    <span class="dot" onclick="currentSlide(3, 'module4-tutorial4')" data-slide="3"></span>
                    <span class="dot" onclick="currentSlide(4, 'module4-tutorial4')" data-slide="4"></span>
                    <span class="dot" onclick="currentSlide(5, 'module4-tutorial4')" data-slide="5"></span>
                    <span class="dot" onclick="currentSlide(6, 'module4-tutorial4')" data-slide="6"></span>
                    <span class="dot" onclick="currentSlide(7, 'module4-tutorial4')" data-slide="7"></span>
                    <span class="dot" onclick="currentSlide(8, 'module4-tutorial4')" data-slide="8"></span>
                    <span class="dot" onclick="currentSlide(9, 'module4-tutorial4')" data-slide="9"></span>
                    <span class="dot" onclick="currentSlide(10, 'module4-tutorial4')" data-slide="10"></span>
                    <span class="dot" onclick="currentSlide(11, 'module4-tutorial4')" data-slide="11"></span>
                    <span class="dot" onclick="currentSlide(12, 'module4-tutorial4')" data-slide="12"></span>
                    <span class="dot" onclick="currentSlide(13, 'module4-tutorial4')" data-slide="13"></span>
                    <span class="dot" onclick="currentSlide(14, 'module4-tutorial4')" data-slide="14"></span>
                    <span class="dot" onclick="currentSlide(15, 'module4-tutorial4')" data-slide="15"></span>
                    <span class="dot" onclick="currentSlide(16, 'module4-tutorial4')" data-slide="16"></span>
                    <span class="dot" onclick="currentSlide(17, 'module4-tutorial4')" data-slide="17"></span>
                    <span class="dot" onclick="currentSlide(18, 'module4-tutorial4')" data-slide="18"></span>
                    <span class="dot" onclick="currentSlide(19, 'module4-tutorial4')" data-slide="19"></span>
                    <span class="dot" onclick="currentSlide(20, 'module4-tutorial4')" data-slide="20"></span>
                    <span class="dot" onclick="currentSlide(21, 'module4-tutorial4')" data-slide="21"></span>
                    <span class="dot" onclick="currentSlide(22, 'module4-tutorial4')" data-slide="22"></span>
                    <span class="dot" onclick="currentSlide(23, 'module4-tutorial4')" data-slide="23"></span>
                    <span class="dot" onclick="currentSlide(24, 'module4-tutorial4')" data-slide="24"></span>
                    <span class="dot" onclick="currentSlide(25, 'module4-tutorial4')" data-slide="25"></span>
                    <span class="dot" onclick="currentSlide(26, 'module4-tutorial4')" data-slide="26"></span>
                    <span class="dot" onclick="currentSlide(27, 'module4-tutorial4')" data-slide="27"></span>
                    <span class="dot" onclick="currentSlide(28, 'module4-tutorial4')" data-slide="28"></span>
                    <span class="dot" onclick="currentSlide(29, 'module4-tutorial4')" data-slide="29"></span>
                    <span class="dot" onclick="currentSlide(30, 'module4-tutorial4')" data-slide="30"></span>
                    <span class="dot" onclick="currentSlide(31, 'module4-tutorial4')" data-slide="31"></span>
                    <span class="dot" onclick="currentSlide(32, 'module4-tutorial4')" data-slide="32"></span>
                    <span class="dot" onclick="currentSlide(33, 'module4-tutorial4')" data-slide="33"></span>
                </div>
            </div>

            <hr style="margin: 40px 0; border: none; border-top: 2px solid #333;">

            <h3>Tutorial 5: Áudios e Enquetes</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/d_2KjOEjL88" 
                        title="Tutorial 5: Áudios e Enquetes"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <div class="carousel-container">
                <div class="carousel" id="carousel-module4-tutorial5">
                    <div class="carousel-slide"><img src="images/modulo4/165_img.png" alt="Passo 1"><p>Passo 1</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/166_img.png" alt="Passo 2"><p>Passo 2</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/167_img.png" alt="Passo 3"><p>Passo 3</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/168_img.png" alt="Passo 4"><p>Passo 4</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/169_img.png" alt="Passo 5"><p>Passo 5</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/170_img.png" alt="Passo 6"><p>Passo 6</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/171_img.png" alt="Passo 7"><p>Passo 7</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/172_img.png" alt="Passo 8"><p>Passo 8</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/173_img.png" alt="Passo 9"><p>Passo 9</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/174_img.png" alt="Passo 10"><p>Passo 10</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/175_img.png" alt="Passo 11"><p>Passo 11</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/176_img.png" alt="Passo 12"><p>Passo 12</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/177_img.png" alt="Passo 13"><p>Passo 13</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/178_img.png" alt="Passo 14"><p>Passo 14</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/179_img.png" alt="Passo 15"><p>Passo 15</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/180_img.png" alt="Passo 16"><p>Passo 16</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/181_img.png" alt="Passo 17"><p>Passo 17</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/182_img.png" alt="Passo 18"><p>Passo 18</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/183_img.png" alt="Passo 19"><p>Passo 19</p></div>
                </div>
                <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial5')">‹</button>
                <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial5')">›</button>
                <div class="carousel-dots">
                    <span class="dot active" onclick="currentSlide(1, 'module4-tutorial5')" data-slide="1"></span>
                    <span class="dot" onclick="currentSlide(2, 'module4-tutorial5')" data-slide="2"></span>
                    <span class="dot" onclick="currentSlide(3, 'module4-tutorial5')" data-slide="3"></span>
                    <span class="dot" onclick="currentSlide(4, 'module4-tutorial5')" data-slide="4"></span>
                    <span class="dot" onclick="currentSlide(5, 'module4-tutorial5')" data-slide="5"></span>
                    <span class="dot" onclick="currentSlide(6, 'module4-tutorial5')" data-slide="6"></span>
                    <span class="dot" onclick="currentSlide(7, 'module4-tutorial5')" data-slide="7"></span>
                    <span class="dot" onclick="currentSlide(8, 'module4-tutorial5')" data-slide="8"></span>
                    <span class="dot" onclick="currentSlide(9, 'module4-tutorial5')" data-slide="9"></span>
                    <span class="dot" onclick="currentSlide(10, 'module4-tutorial5')" data-slide="10"></span>
                    <span class="dot" onclick="currentSlide(11, 'module4-tutorial5')" data-slide="11"></span>
                    <span class="dot" onclick="currentSlide(12, 'module4-tutorial5')" data-slide="12"></span>
                    <span class="dot" onclick="currentSlide(13, 'module4-tutorial5')" data-slide="13"></span>
                    <span class="dot" onclick="currentSlide(14, 'module4-tutorial5')" data-slide="14"></span>
                    <span class="dot" onclick="currentSlide(15, 'module4-tutorial5')" data-slide="15"></span>
                    <span class="dot" onclick="currentSlide(16, 'module4-tutorial5')" data-slide="16"></span>
                    <span class="dot" onclick="currentSlide(17, 'module4-tutorial5')" data-slide="17"></span>
                    <span class="dot" onclick="currentSlide(18, 'module4-tutorial5')" data-slide="18"></span>
                    <span class="dot" onclick="currentSlide(19, 'module4-tutorial5')" data-slide="19"></span>
                </div>
            </div>

            <hr style="margin: 40px 0; border: none; border-top: 2px solid #333;">

            <h3>Tutorial 6: Conteúdos Externos</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Y4tgdMs5C8Q" 
                        title="Tutorial 6: Conteúdos Externos"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <div class="carousel-container">
                <div class="carousel" id="carousel-module4-tutorial6">
                    <div class="carousel-slide"><img src="images/modulo4/184_img.png" alt="Passo 1"><p>Passo 1</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/185_img.png" alt="Passo 2"><p>Passo 2</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/186_img.png" alt="Passo 3"><p>Passo 3</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/187_img.png" alt="Passo 4"><p>Passo 4</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/188_img.png" alt="Passo 5"><p>Passo 5</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/189_img.png" alt="Passo 6"><p>Passo 6</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/190_img.png" alt="Passo 7"><p>Passo 7</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/191_img.png" alt="Passo 8"><p>Passo 8</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/192_img.png" alt="Passo 9"><p>Passo 9</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/193_img.png" alt="Passo 10"><p>Passo 10</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/194_img.png" alt="Passo 11"><p>Passo 11</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/195_img.png" alt="Passo 12"><p>Passo 12</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/196_img.png" alt="Passo 13"><p>Passo 13</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/197_img.png" alt="Passo 14"><p>Passo 14</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/198_img.png" alt="Passo 15"><p>Passo 15</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/199_img.png" alt="Passo 16"><p>Passo 16</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/200_img.png" alt="Passo 17"><p>Passo 17</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/201_img.png" alt="Passo 18"><p>Passo 18</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/202_img.png" alt="Passo 19"><p>Passo 19</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/203_img.png" alt="Passo 20"><p>Passo 20</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/204_img.png" alt="Passo 21"><p>Passo 21</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/205_img.png" alt="Passo 22"><p>Passo 22</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/206_img.png" alt="Passo 23"><p>Passo 23</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/207_img.png" alt="Passo 24"><p>Passo 24</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/208_img.png" alt="Passo 25"><p>Passo 25</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/209_img.png" alt="Passo 26"><p>Passo 26</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/210_img.png" alt="Passo 27"><p>Passo 27</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/211_img.png" alt="Passo 28"><p>Passo 28</p></div>
                </div>
                <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial6')">‹</button>
                <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial6')">›</button>
                <div class="carousel-dots">
                    <span class="dot active" onclick="currentSlide(1, 'module4-tutorial6')" data-slide="1"></span>
                    <span class="dot" onclick="currentSlide(2, 'module4-tutorial6')" data-slide="2"></span>
                    <span class="dot" onclick="currentSlide(3, 'module4-tutorial6')" data-slide="3"></span>
                    <span class="dot" onclick="currentSlide(4, 'module4-tutorial6')" data-slide="4"></span>
                    <span class="dot" onclick="currentSlide(5, 'module4-tutorial6')" data-slide="5"></span>
                    <span class="dot" onclick="currentSlide(6, 'module4-tutorial6')" data-slide="6"></span>
                    <span class="dot" onclick="currentSlide(7, 'module4-tutorial6')" data-slide="7"></span>
                    <span class="dot" onclick="currentSlide(8, 'module4-tutorial6')" data-slide="8"></span>
                    <span class="dot" onclick="currentSlide(9, 'module4-tutorial6')" data-slide="9"></span>
                    <span class="dot" onclick="currentSlide(10, 'module4-tutorial6')" data-slide="10"></span>
                    <span class="dot" onclick="currentSlide(11, 'module4-tutorial6')" data-slide="11"></span>
                    <span class="dot" onclick="currentSlide(12, 'module4-tutorial6')" data-slide="12"></span>
                    <span class="dot" onclick="currentSlide(13, 'module4-tutorial6')" data-slide="13"></span>
                    <span class="dot" onclick="currentSlide(14, 'module4-tutorial6')" data-slide="14"></span>
                    <span class="dot" onclick="currentSlide(15, 'module4-tutorial6')" data-slide="15"></span>
                    <span class="dot" onclick="currentSlide(16, 'module4-tutorial6')" data-slide="16"></span>
                    <span class="dot" onclick="currentSlide(17, 'module4-tutorial6')" data-slide="17"></span>
                    <span class="dot" onclick="currentSlide(18, 'module4-tutorial6')" data-slide="18"></span>
                    <span class="dot" onclick="currentSlide(19, 'module4-tutorial6')" data-slide="19"></span>
                    <span class="dot" onclick="currentSlide(20, 'module4-tutorial6')" data-slide="20"></span>
                    <span class="dot" onclick="currentSlide(21, 'module4-tutorial6')" data-slide="21"></span>
                    <span class="dot" onclick="currentSlide(22, 'module4-tutorial6')" data-slide="22"></span>
                    <span class="dot" onclick="currentSlide(23, 'module4-tutorial6')" data-slide="23"></span>
                    <span class="dot" onclick="currentSlide(24, 'module4-tutorial6')" data-slide="24"></span>
                    <span class="dot" onclick="currentSlide(25, 'module4-tutorial6')" data-slide="25"></span>
                    <span class="dot" onclick="currentSlide(26, 'module4-tutorial6')" data-slide="26"></span>
                    <span class="dot" onclick="currentSlide(27, 'module4-tutorial6')" data-slide="27"></span>
                    <span class="dot" onclick="currentSlide(28, 'module4-tutorial6')" data-slide="28"></span>
                </div>
            </div>

            <hr style="margin: 40px 0; border: none; border-top: 2px solid #333;">

            <h3>Tutorial 7: Configurações do Frame</h3>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/CtFW7HdalgQ" 
                        title="Tutorial 7: Configurações do Frame"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            <div class="carousel-container">
                <div class="carousel" id="carousel-module4-tutorial7">
                    <div class="carousel-slide"><img src="images/modulo4/212_img.png" alt="Passo 1"><p>Passo 1</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/213_img.png" alt="Passo 2"><p>Passo 2</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/214_img.png" alt="Passo 3"><p>Passo 3</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/215_img.png" alt="Passo 4"><p>Passo 4</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/216_img.png" alt="Passo 5"><p>Passo 5</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/217_img.png" alt="Passo 6"><p>Passo 6</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/218_img.png" alt="Passo 7"><p>Passo 7</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/219_img.png" alt="Passo 8"><p>Passo 8</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/220_img.png" alt="Passo 9"><p>Passo 9</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/221_img.png" alt="Passo 10"><p>Passo 10</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/222_img.png" alt="Passo 11"><p>Passo 11</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/223_img.png" alt="Passo 12"><p>Passo 12</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/224_img.png" alt="Passo 13"><p>Passo 13</p></div>
                    <div class="carousel-slide"><img src="images/modulo4/225_img.png" alt="Passo 14"><p>Passo 14</p></div>
                </div>
                <button class="carousel-btn prev" onclick="moveCarousel(-1, 'module4-tutorial7')">‹</button>
                <button class="carousel-btn next" onclick="moveCarousel(1, 'module4-tutorial7')">›</button>
                <div class="carousel-dots">
                    <span class="dot active" onclick="currentSlide(1, 'module4-tutorial7')" data-slide="1"></span>
                    <span class="dot" onclick="currentSlide(2, 'module4-tutorial7')" data-slide="2"></span>
                    <span class="dot" onclick="currentSlide(3, 'module4-tutorial7')" data-slide="3"></span>
                    <span class="dot" onclick="currentSlide(4, 'module4-tutorial7')" data-slide="4"></span>
                    <span class="dot" onclick="currentSlide(5, 'module4-tutorial7')" data-slide="5"></span>
                    <span class="dot" onclick="currentSlide(6, 'module4-tutorial7')" data-slide="6"></span>
                    <span class="dot" onclick="currentSlide(7, 'module4-tutorial7')" data-slide="7"></span>
                    <span class="dot" onclick="currentSlide(8, 'module4-tutorial7')" data-slide="8"></span>
                    <span class="dot" onclick="currentSlide(9, 'module4-tutorial7')" data-slide="9"></span>
                    <span class="dot" onclick="currentSlide(10, 'module4-tutorial7')" data-slide="10"></span>
                    <span class="dot" onclick="currentSlide(11, 'module4-tutorial7')" data-slide="11"></span>
                    <span class="dot" onclick="currentSlide(12, 'module4-tutorial7')" data-slide="12"></span>
                    <span class="dot" onclick="currentSlide(13, 'module4-tutorial7')" data-slide="13"></span>
                    <span class="dot" onclick="currentSlide(14, 'module4-tutorial7')" data-slide="14"></span>
                </div>
            </div>

            <hr style="margin: 40px 0; border: none; border-top: 2px solid #333;">
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
    // Encontrar o carrossel no modal aberto
    const modal = document.getElementById('module-modal');
    if (!modal) return;
    
    const carousels = modal.querySelectorAll('.tutorial-carousel');
    if (!carousels.length) return;
    
    // Para módulos com múltiplos carrosséis, identificar qual usar
    let carousel = null;
    if (moduleId.includes('tutorial1')) {
        carousel = carousels[0];
    } else if (moduleId.includes('tutorial2')) {
        carousel = carousels[1] || carousels[0];
    } else {
        carousel = carousels[0];
    }
    
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelector('.carousel-indicators');
    
    if (!slides.length) return;
    
    // Inicializar índice se não existir
    if (currentSlideIndex[moduleId] === undefined) {
        currentSlideIndex[moduleId] = 0;
    }
    
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

function goToSlide(index, moduleId) {
    // Encontrar o carrossel no modal aberto
    const modal = document.getElementById('module-modal');
    if (!modal) return;
    
    const carousels = modal.querySelectorAll('.tutorial-carousel');
    if (!carousels.length) return;
    
    // Para módulos com múltiplos carrosséis, identificar qual usar
    let carousel = null;
    if (moduleId.includes('tutorial1')) {
        carousel = carousels[0];
    } else if (moduleId.includes('tutorial2')) {
        carousel = carousels[1] || carousels[0];
    } else {
        carousel = carousels[0];
    }
    
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    if (!slides.length) return;
    
    // Inicializar índice se não existir
    if (currentSlideIndex[moduleId] === undefined) {
        currentSlideIndex[moduleId] = 0;
    }
    
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
    // Encontrar o carrossel no modal aberto
    const modal = document.getElementById('module-modal');
    if (!modal) return;
    
    const carousels = modal.querySelectorAll('.tutorial-carousel');
    if (!carousels.length) return;
    
    // Para módulos com múltiplos carrosséis, identificar qual usar
    let carousel = null;
    if (moduleId.includes('tutorial1')) {
        carousel = carousels[0];
    } else if (moduleId.includes('tutorial2')) {
        carousel = carousels[1] || carousels[0];
    } else {
        carousel = carousels[0];
    }
    
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    
    if (!dotsContainer) return;
    
    // Atualizar apenas as classes dos dots existentes ao invés de recriar
    const dots = dotsContainer.querySelectorAll('.dot');
    
    dots.forEach((dot, index) => {
        if (index === currentSlideIndex[moduleId]) {
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
    ['module1', 'module2-tutorial1', 'module2-tutorial2'].forEach(moduleId => {
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
