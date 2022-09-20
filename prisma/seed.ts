import { prisma } from "../src/database.js";

async function main() {
  await prisma.comment.deleteMany();
  await prisma.game.deleteMany();
  await prisma.game.createMany({
    data: [
      {
        title: "gris",
        imageUrl: "https://i.ytimg.com/vi/-isZLgItgDA/maxresdefault.jpg",
        iconUrl:
          "https://notadogame.com/uploads/game/cover/250x/5c1b9e9c96312.jpg",
        description: `Gris é uma jovem esperançosa, perdida em seu próprio mundo, que lida com uma dolorosa experiência. Sua jornada pela tristeza se manifesta em seu vestido, que concede a ela novas habilidades para navegar melhor por sua realidade desbotada. Ao longo da história, Gris evolui emocionalmente e passa a ver o mundo de outra forma, revelando novos caminhos para explorar com o uso de suas novas habilidades.

        GRIS é uma experiência serena e evocativa, sem perigos, frustrações ou mortes. O jogador deve explorar um mundo elaborado meticulosamente, com um estilo delicado, animações detalhadas e uma elegante trilha sonora. Ao longo do jogo, irão se revelar quebra-cabeças simples, sequências de plataformas e desafios opcionais baseados em habilidades, à medida que você vai abrindo o mundo de Gris.
        
        GRIS é uma experiência quase sem texto, apenas com simples lembretes de controles representados por ícones universais. Qualquer um pode jogar, seja qual for seu idioma.`,
      },
      {
        title: "night in the woods",
        imageUrl:
          "https://pt.videogamer.com/wp-content/uploads/27164d77-1004-4bb7-8ee0-52fecb101e3d_a72686e5-5a03-458f-a3ea-e715033ec641_Night_in_the_Woods_Analise_Topspot.png",
        iconUrl:
          "https://cdn1.epicgames.com/abd29ccc8c2a4a40a31f27de63cb0603/offer/EGS_NightintheWoods_InfiniteFall_S2-1200x1600-c6e902bb51df819a40f3b3f2b8081849.jpg",
        description: `A desistente da faculdade, Mae Borowski, volta para casa na antiga cidade mineira de Possum Springs, em ruínas, procurando retomar sua antiga vida sem rumo e se reconectar com os amigos que deixou para trás. Mas as coisas não são as mesmas. O lar parece diferente agora e seus amigos cresceram e mudaram. As folhas estão caindo e o vento está ficando mais frio. Coisas estranhas estão acontecendo à medida que a luz se desvanece.

        E há algo na floresta.
        
        NIGHT IN THE WOODS é um jogo de aventura focado em exploração, história e personagens, apresentando dezenas de personagens para conhecer e muito o que fazer em um mundo exuberante e vibrante. Depois de um Kickstarter de sucesso, está sendo feito por Infinite Fall, uma equipe de Alec Holowka (Aquaria), Scott Benson (Late Night Work Club) e Bethany Hockenberry.`,
      },{
        title: "Hellblade",
        imageUrl:
          "https://media.gq.com/photos/59947955d48ec673e16de3d6/master/pass/hellblade01.jpg",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/pt/2/28/Hellblade_poster.jpg",
        description: `Dos criadores de Heavenly Sword, Enslaved: Odyssey to the West, e DmC: Devil May Cry, chega agora a viagem brutal de uma guerreira até ao mito e a loucura.

        Na era dos vikings, uma guerreira celta parte numa jornada pessoal arrepiante até ao inferno viking para lutar pela alma de seu falecido amado.
        
        Criado em parceria com neurocientistas e pessoas que vivenciam psicose, Hellblade: Senua’s Sacrifice vai te levar para as profundezas da mente de Senua.`,
      },{
        title: "Celeste",
        imageUrl:
          "https://hot-game.info/uploads/media/poster_game/0001/24/thumb_23338_poster_game_full.jpeg",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/pt/e/e9/Celeste_capa.jpg",
        description: `Ajude Madeline a enfrentar seus demônios internos em sua jornada até o topo da Montanha Celeste, nesse jogo meticuloso e super afiado de plataforma dos criadores do clássico multiplayer TowerFall.`,
      },{
        title: "life is strange 1",
        imageUrl:
          "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2016/07/life-is-strange.jpg?resize=1024,569",
        iconUrl:
          "https://image.api.playstation.com/vulcan/ap/rnd/202105/1412/bJYCCmymxvgviuuolfOx8srg.png",
        description: `Life is Strange é uma premiada aventura em episódios, aclamada pela crítica, que permite ao jogador voltar no tempo e alterar passado, presente e futuro.

        Siga a história de Max Caulfield, uma estudante de fotografia que descobre ser capaz de rebobinar o tempo ao salvar a melhor amiga, Chloe Price.
        
        As duas logo começam a investigar o desaparecimento misterioso da amiga e também estudante Rachel Amber, e desvendam o lado sombrio da vida em Arcadia Bay. Ao mesmo tempo, Max aprende rápido que alterar o passado pode por vezes levar a um futuro devastador.`,
      },{
        title: "Omori",
        imageUrl:
          "https://www.pdvg.it/wp-content/uploads/2022/06/OMORI_Console-1024x576.jpg",
        iconUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2JgOENlnFbstBKMzLGhBqrbqz0QLCoteZ8sac_z9pKTZwUJr3glk_NBOlkesq67sxzw&usqp=CAU",
        description: `Explore um mundo estranho cheio de amigos e inimigos coloridos. Navegue pelo vibrante e mundano para descobrir um passado esquecido. Quando chegar a hora, o caminho que você escolheu determinará seu destino... e talvez o destino de outros também.`,
      },{
        title: "sea of solitude",
        imageUrl:
          "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/s/sea-of-solitude-the-directors-cut-switch/hero",
        iconUrl:
          "https://sm.ign.com/ign_br/screenshot/default/sos-image-component_vr66.jpg",
        description: `Quando os seres humanos ficam muito solitários, eles viram monstros...

        Em Sea of Solitude, você embarca na jornada pessoal de uma jovem lidando com a solidão. Explore um mundo belo e envolvente, onde nada é exatamente o que parece. Encontre monstros e criaturas fantásticas, conheça suas histórias e resolva desafios. Explore uma cidade alagada de barco, a pé ou nadando pela água. Atreva-se a olhar para o que está embaixo da superfície, em um assombroso conflito entre escuridão e luz, e descubra o que realmente significa ser humano.`,
      },{
        title: "milk out a bag of milk",
        imageUrl:
          "https://mackerelphones.com/wp-content/uploads/sites/2/2022/01/vlcsnap-2022-01-05-01h54m40s032-1024x576.png",
        iconUrl:
          "https://steamuserimages-a.akamaihd.net/ugc/1835782964259684292/3588DD6CA41F7E0E05A770DBF8B7D3B64FAF3F92/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        description: `(Como se sente?)
        - Eu certamente e simplesmente sinto. Às vezes, só isso já basta.
        (Mesmo assim, você está aflita, não está?)
        - Mas claro. Além disso, estou apavorada. Está tão óbvio assim?
        (Você está olhando para todas as direções, exceto para cima.)
        - Ah, isso...
        - Eu já te contei, não já?
        (Sobre o quê?)
        - Ah, você sabe, coisas fúteis.
        (E coisas fúteis são capazes de apavorá-la?)
        - É... difícil de explicar.
        Eu subo no corrimão de metal e me sento, deixando as minhas pernas penduradas para fora. Eu olho de relance para o abismo de vez em quando. Ele me responde com um bafo furioso e frio. É assim que interagimos um com o outro. Como velhos amigos.
        - Às vezes sinto que o mundo inteiro está fingindo ser louco.
        - Como se estivesse tentando me convencer de algo que não existe.
        (Isso é estranho, não é?)
        
        Este jogo é a continuação de Milk inside a bag of milk inside a bag of milk.
        Os eventos desse jogo começam onde os do primeiro terminam.`,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
