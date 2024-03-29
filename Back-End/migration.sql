DROP DATABASE IF EXISTS EspiritoSanto;

  CREATE DATABASE IF NOT EXISTS EspiritoSanto;

  CREATE TABLE EspiritoSanto.user(
    user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(40) NOT NULL
  ) engine = InnoDB;

  CREATE TABLE EspiritoSanto.posts(
    posts_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(3000) NOT NULL,
    user_id INT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    milagres TEXT(15383) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
  ) engine = InnoDB;
  
  INSERT INTO EspiritoSanto.user (name, email, password)
  VALUES
    ('user1', 'user1@gmail.com', '123');
    
    INSERT INTO EspiritoSanto.posts (title, user_id, date, milagres)
  VALUES
    ('TESTEMUNHO DE NADYA DA SILVA – A MULHER QUE NASCEU DE NOVO', 1, NOW(),'Nadya conta o seu testemunho com muita emoção. Certa noite, Nadya saiu de casa com aquela impressão de que não deveria sair, que deveria ficar em casa. Mas como estava uma noite agradável e ela queria se divertir com amigos, ela se benzeu e saiu. Nesta noite, o motorista do carro dormiu ao volante, bateu em uma árvore e Nadya, que estava no banco do passageiro sem cinto de segurança, bateu a cabeça do teto com muita força, fraturando sua coluna.

Ela acordou e percebeu que algo muito grave acontecia, as pessoas ao redor diziam: “Nadya, acorda! Você precisa acordar”. Ela sentia uma dor muito forte nas suas costas, e desde aquele momento já começou a pedir pela intercessão de Deus e pedir o seu socorro. Após chegar ao hospital e fazer diversos exames foi constatado: uma explosão da vértebra “L1”, com fragmentos de ossos espetados na medula e a fratura da vértebra “L3”, ambas da coluna lombar . Os médicos foram sinceros e consideraram que Nadya não voltaria mais a andar. Ela se recusou a acreditar, pois apesar do diagnóstico dos médicos ela afirmava sentir os pés. O técnico da tomografia dizia que era impossível alguém com a medula naquele estado estar sentindo qualquer coisa da cintura para baixo, mas Nadya jamais desistiu.

Era preciso tentar restaurar a coluna de Nadya e ela foi submetida à primeira cirurgia de alto risco. Após a cirurgia de 8 horas, Nadya pegou uma infecção grave, uma bactéria resistente à antibióticos estava em seu sangue, e os médicos deram a Nadya apenas mais 8 horas de vida. Mas ela não desistiu do seu milagre. Mesmo diante do desespero e choro das pessoas ao seu redor, ela triplicou as orações e clamou pelo sobrenatural de Deus.

Em certo momento, o Espírito Santo revelou a Nadya que Deus tinha planos para a sua existência e que ela não morreria. Então Nadya sentiu uma paz muito grande e se sentia preparada para enfrentar o que quer que fosse. Foi então que mais um obstáculo foi encontrado: uma osteomielite, ou seja, uma infecção gravíssima nos ossos, que a medicina ainda não tem cura. Também foram constatados que os tecidos em volta das vértebras e quadril estavam necrosados e cheiravam mal. Nadya apegou à palavra de Filipenses 4:13 – “Tudo posso naquele que me fortalece”, contra tudo e contra todos.

Nadya foi submetida a mais duas cirurgias de alto risco, e depois precisaria fazer alguns meses de fisioterapia para reaprender a sentar e andar. “Para honra e glória do Senhor, não precisei fazer fisioterapia. Ao me levantar da cama, o sobrenatural de Deus revigorou meus músculos das pernas e eu sai andando pelos corredores. Todos ficaram perplexos, principalmente o fisioterapeuta, pois, segundo ele,  eu levaria de três a quatro meses para caminhar perfeitamente.”. Depois deste episódio, Nadya precisou ainda sofrer mais 2 cirurgias para a cura da osteomielite e retirada dos pinos colocados em sua coluna, o que a causava muitas dores na coluna. “Os metais foram retirados da minha coluna com êxito de modo sobrenatural e comecei a melhorar dia após dia. Para surpresa dos médicos, após cinco anos eu recebi alta médica. Fiquei curada da osteomielite.”

Hoje Nadya está curada. Anda perfeitamente e tem boa saúde. Ela agradece a Deus pelos seu milagre, pois ela nunca deixou de acreditar mesmo quando os médicos a condenavam à morte ou à paralisia. Nadya alcançou o seu milagre.'),
    ('TESTEMUNHO DE FÁBIO E CRISTINA – A BUSCA PELO BEBÊ', 1, NOW(),'Fábio e Cristina estão casados há 18 anos. No começo do casamento, alguns acontecimentos fizeram com que o início da vida a dois do casal fosse difícil, houve muitos desentendimentos. Em meio a um turbilhão de emoções e sentimentos, Cristina ficou grávida. Mas a gravidez não durou muito, com poucos meses ela sofreu um aborto espontâneo que deixou um sentimento de perda e vazio muito grande no casal. O casal retomou o seu sentimento e passaram a buscar uma nova gravidez, mas nunca dava certo. Em 2008, o casal descobriu que Cristina possuía um mioma no útero que a impossibilitava de engravidar. Ela teve sangramentos severos que a deixaram internada no hospital e foi submetida a 8 histeroscopias (cirurgias). Com o passar dos anos, o casamento foi perdendo o brilho e em 2012 houve uma crise muito forte e o casal começou a falar em separação. Por conselho de uma amiga em comum, eles resolveram dar uma última chance e passaram a frequentar uma igreja. No momento em que entraram na igreja e se colocaram em oração, ambos sentiram o poder do Espírito Santo na vida do casal. A palavra de Deus restaurou o casamento de Fábio e Cristina e eles começaram uma vida nova, cheia de esperanças.

Após algum tempo da conversão, o casal tentou uma fertilização in vitro, na esperança de conseguir um bebê tão desejado para sacramentar a união, mas o procedimento não funcionou. Com a força de Deus, eles não perderam a fé e passaram a rezar fervorosamente para que a gravidez de Cristina acontecesse naturalmente. Num dia, no fim da oração do casal, Cristina sentiu um calor muito forte em seu ventre e sentiu a presença de Deus. Logo percebeu que estava sangrando e chorando, dizendo que se sentia curada. O milagre foi concedido. Contra tudo o que a medicina havia previsto, Cristina ficou grávida de forma natural. Em 2014 Sara nasceu, saudável, grande e cheia de vida, como forma do poder divino sobre a vida do casal.'),
('TESTEMUNHO DE BIANCA TOLEDO – A CANTORA QUE SAIU DO COMA', 1, NOW(),'Bianca Toledo é uma cantora cristã que passou por uma difícil provação em sua vida e alcançou um milagre. Em 2010 a cantora teve a notícia que estava grávida do seu primeiro filho. No momento de dar a luz, a cantora deu entrada no hospital com suspeita de rompimento da bolsa. Entretanto, durante o parto o intestino da cantora se rompeu gerando uma infecção generalizada. O bebê nasceu forte e teve alta, mas Bianca entrou em coma. “Quando estava em coma, tive uma série de sonhos, e quando acordei, descobri que foram situações que aconteceram. Lembro das músicas que colocaram para tocar no CTI, que profetizavam liberdade. Eu sonhava que estava presa, amarrada, mas ouvia vozes e me soltavam”. Ela esteve em coma por 52 dias, fez 10 cirurgias no pulmão e intestinos, fez 300 transfusões de sangue e homodiálises, sofreu 2 paradas cardíacas.

Logo que acordou do coma, a cantora conseguia mover apenas os olhos. Com o passar do tempo e com a fisioterapia, melhorou o seu estado e ela saiu do hospital em uma cadeira de rodas.Ela ainda estava em quarentena e não poderia ter contato físico com ninguém. Ela ainda não conhecia o seu filho, que já tinha 5 meses. Quando o bebê viu a mãe pela primeira vez, ele sorriu. “Mesmo sem poder mexer nele, meu filho sabia quem eu era.”.

Após tantas cirurgias, incluindo uma na garganta, os médicos duvidaram que Bianca sobrevivesse. Quando ela sobreviveu, disseram que sua voz jamais seria a mesma: “Pensei que se havia vencido essa batalha, poderia vencer outra. Minha voz ficou diferente por causa da laringe, mas não abri mão da possibilidade de cantar.”

Hoje Bianca está bem, saudável e exerce o ministério de louvor se apresentando no Brasil e exterior.')

