/*

class personne {
    constructor(nom, prenom, age, taille){
        this.nom = nom; 
        this.prenom = prenom; 
        this.age = age; 
        this.taille = taille;
        
        this.saluer = () => {
            return `Bonjour ${this.prenom}!`; 
        } 
        this.caract = () => {
            return `Bonjour ${this.prenom} ${this.nom}. Tu as ${age} an(s) et mesure ${taille}.  `
        }   
    }
};

let daw = new personne("Tara","Daw", 20, "1m70"); 

console.log(daw.saluer());

console.log(daw.caract());


*/
// Exo 2 

/*
class pers{
    constructor(nom, age, ville){
        this.nom = nom; 
        this.age = age; 
        this.ville = ville; 

        this.salut = () =>{
            return `Bonjuur ${this.nom} tu as ${age} an(s) et tu habite ${this.ville}.`; 
        }
        
    }
}

let daw = new pers("Dawid", 23, "Bruxelles"); 
let tar = new pers("Tararuj", 25, "Charleroi"); 

console.log(daw.salut());
console.log(tar.salut());

*/


class lieu { 
    piece = []; 
    ingrediend = []; 

    constructor(nom, piece=0, contenu=0){
        this.nom = nom; 
        let pieces = piece != 0 ? piece.split(" ") : 0;

        if(pieces != undefined && pieces != 0){
            this.piece.push(piece);
        }
        
        this.aff = () => { 
            return `voici ${this.nom}. il y a ${pieces.length} pieces`;
        }
       

    }
}

Class ingredient extends lieu{
     constructor(nom, etat, prix){
                this.nom = nom; 
                this.etat = etat; 
                this.prix = prix; 

                this.lieu.ingrediend.push({nom, etat, prix }); 
                console.log(this.lieu.ingrediend);
            }
}
let maison = new lieu("Maison","Cuisine Chambre1"); 
let epicerie = new lieu("Epicerie","rayons entrepot"); 

console.log(maison.aff());

console.log(epicerie.aff());

let poivron = new ingredient("Piovron", "entier", 1.50); 

