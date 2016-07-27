/**
 * [key Gestion d'une touche]
 * @param  {int} code [the reference of the key in real]
 * @param  {var} elem [the value of the key]
 * @return {key}      [the object]
 */
function Key(code,elem){
    this.code=null||code;
    this.elem=null||elem;
    this.action=null;
}

/**
 * [keyArray Librairie de touches]
 * @return {keyArray} [the object]
 */
function KeyArray(){
    this.keys=[];
    this.addKey=function(code,elem){
        this.keys[this.keys.length]=new Key(code,elem);
    }
    this.length=this.keys.length;
}




/**
 * [KeyboardPeriod OBJET PRINCIPAL DE GESTION DE CLAVIER]
 */
function KeyboardPeriod(){
    this.keya=new KeyArray();
}
