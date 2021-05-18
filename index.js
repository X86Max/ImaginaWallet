const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login("voce deveria colocar o token aqui, tu acha que vou colocar o meu token aqui?");
bot.once('ready', () => {
    bot.user.setActivity("dinheiro para as pessoas.\nDigite !ajuda pra ver os comandos.");
    console.log(`Bot online: ${bot.user.tag}!`);
});



bot.on('message', msg => {
    if(msg.content === '!sobre'){
        msg.reply('Bem vindo ao Imagina Wallet!\nSou o bot oficial do ImaginaCoin, ou sigka para Imagination Coin. Fui criado dia 18 de maio de 2021, após a sugestão de Max do projeto, e da aprovação de Ramon e Victor.\nEla só é aceita no servidor Jogo Minimalista.\nSeu simbolo monetário é I₵.');
    }
});

bot.on('message', msg => {
    if(msg.content === '!ajuda'){
        msg.reply('Lista de comandos\n!ajuda - você está aqui.\n!sobre - ué, é sobre.\n!cotaçao - você ve a cotação da moeda, tendo como moeda base o dólar.\n!contas - Você vê as contas disponíveis.\n!criar - você cria sua conta.\n!transferir - você transfere I₵.');
    }
});

bot.on('message', msg => {
    if(msg.content === '!criar'){
        msg.reply('Coloque seus dados nessa tabela.\nNome: \nApelido: \nE por favor, dá um ping no Max pra ele reparar e atualizar. Bom dia.');
    }
});

bot.on('message', msg => {
    if(msg.content === '!cotaçao'){
        msg.reply('1 ImaginaCoin = 1 dólar\nAtualizado em: 18/05/2021 às 15:55 (GMT-3)');
    }
});

bot.on('message', msg => {
    if(msg.content === '!contas'){
        msg.reply('!max - conta do Max\n!ramon - conta do Ramon\n!victor - conta do victor');
    }
});

bot.on('message', msg => {
    if(msg.content === '!transferir'){
        msg.reply('Perdão, a transferencia está desativada por que: **o desenvolvedor não sabe como fazer.**\nAjude-o e ganhe I₵ 50,00.');
    }
});

bot.on('message', msg => {
    if(msg.content === '!max'){
        msg.reply('----- CONTA 0002 -----\nTitular: Maxsuel\nApelido: Max\nSaldo disponível: I₵ 10,00.');
    }
});

bot.on('message', msg => {
    if(msg.content === '!ramon'){
        msg.reply('----- CONTA 0003 -----\nTitular: Ramon\nApelido: Gaspor\nSaldo disponível: I₵ 10,00.');
    }
});

bot.on('message', msg => {
    if(msg.content === '!victor'){
        msg.reply('----- CONTA 0004 -----\nTitular: Victor\nApelido: Friday\nSaldo disponível: I₵ 10,00.');
    }
});
