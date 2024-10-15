// Classe base: Personagem
function Personagem(nome,nivel,vida){
    this.nome = nome;
    this.nivel = nivel;
    this.vida = vida;
}

Personagem.prototype.showDisplay = function(){
    console.log(`Sobre o seu personage: Nome: ${this.nome}, Nível: ${this.nivel}, Vida: ${this.vida} `)
}

Personagem.prototype.Ataque = function(){
    console.log(`${this.nome} realizou um ataque`)
}

// Classe derivada: Guerreiro

function Guerreiro(nome, nivel, vida, forca) {
    Personagem.call(this, nome, nivel, vida);
    this.forca = forca
}

Guerreiro.prototype = Object.create(Personagem.prototype)
Guerreiro.prototype.constructor = Guerreiro;

Guerreiro.prototype.showDisplay = function(){
    Personagem.prototype.showDisplay.call(this);
    console.log(`Força: ${this.forca}. Ele é um Guerreiro`)
};

Guerreiro.prototype.Ataque = function(){
    console.log(`${this.nome} realiza um ataque poderoso com sua força de ${this.forca}`)
}

// Classe derivada: Mago
function Mago(nome, nivel, vida, mana){
    Personagem.call(this, nome, nivel, vida)
    this.mana = mana
}

Mago.prototype = Object.create(Personagem.prototype)
Mago.prototype.constructor = Mago

Mago.prototype.showDisplay = function(){
    Personagem.prototype.showDisplay.call(this);
    console.log(`Mana: ${this.mana} Ele é um Mago`)
}

Mago.prototype.Ataque = function(){
    console.log(`${this.nome} lançou uma magia poderosa gastando ${this.mana} de sua mana! `)
}

// Criando instâncias de personagens

const Guerreiro1 = new Guerreiro('Tobias', 10, 200, 80)
const Mago1 = new Mago('Patolino', 6, 80, 100)
const Guerreiro2 = new Guerreiro('Aragorn', 8, 120, 70);

// Exibindo informações e ataques dos personagens

Guerreiro1.showDisplay();
Guerreiro1.Ataque();

Mago1.showDisplay();
Mago1.Ataque();

Guerreiro2.showDisplay();
Guerreiro2.Ataque(); 