/**
 * [key Gestion d'une touche]
 * @param  {string} code [the reference of the key in real]
 * @param  {int} which [the reference of the key]
 * @param  {string} elem [the value of the key]
 * @return {key} [the object]
 */
function Key(code,which,elem){
    this.code=code||null;
    this.which=which||null;
    this.elem=elem||null;
    this.actionDown=new KeyActionArray();
    this.actionPress=new KeyActionArray();
    this.actionUp=new KeyActionArray();
    this.toStr=function(){
        return "[ `"+this.code+"` => `"+this.elem+"` ("+this.which+") ]";
    };
    this.itsMeC=function(code){
        return (this.code==code) ;
    }
    this.itsMeW=function(which){
        return (this.which==which) ;
    }
}

/**
 * [keyArray Librairie de touches]
 * @return {keyArray} [the object]
 */
function KeyArray(){
    var that=this;
    this.keys=[];
    this.addKey=function(code,which,elem){
        this.keys.push(new Key(code,which,elem));
    }
    this.length=function(){return this.keys.length;}
    this.get=function(id){
        return this.keys[id];
    }
    this.getC=function(code){
        for(var i=0;i<this.length();i++){
            if(this.keys[i].itsMeC(code)) return this.keys[i];
        }
    }
    this.getW=function(which){
        for(var i=0;i<this.length();i++){
            if(this.keys[i].itsMeW(which)) return this.keys[i];
        }
    }
    this.execute=function(ev){
        var k = (typeof ev.originalEvent.code == "undefined") ? that.getW(ev.originalEvent.which) : that.getC(ev.originalEvent.code);

        if(typeof k == "undefined") return;

        if(ev.type=="keydown"){
            k.actionDown.execute();
        return;}
        if(ev.type=="keypress"){
            k.actionPress.execute();
        return;}
        if(ev.type=="keyup"){
            k.actionUp.execute();
        return;}
    }
    // Hydratation du clavier depuis un array
    // Exemple d'array :
    // [["KeyA",81,"q"],["KeyB",66,"b"],["KeyC",67,"c"]]
    this.hydrateFromArray=function(array){
        array.forEach(function(item,index){
            that.addKey(item[0],item[1],item[2]);
        });
    }
    this.displaySelf=function(){
        this.keys.forEach(function(item,index){
            item.actionDown.addAction(function(){console.log(item.toStr());});
        });
    }
}
/**
 * [KeyAction action utilisable]
 * @param {action} [L'action a executer]
 * @param {condition} [la condition à l'execution de l'action]
 * @return {KeyAction} [the object]
 */
function KeyAction(action,condition){
    this.action=action||function(){console.log("default key action");}
    this.condition=condition||true;
    this.execute=function(){
        var cond = (typeof this.condition == "function") ? this.condition():this.condition;
        if(cond){
            this.action();
        }
    }
}
/**
 * [KeyActionArray Gestionnaire d'actions]
 * @return {KeyActionArray} [the object]
 */
function KeyActionArray(){
    var that = this;
    this.actions=[];
    this.add=function(keyAction){
        this.actions.push(keyAction);
    }
    this.addAction=function(action,condition){
        this.actions.push(new KeyAction(action,condition))
    }
    this.length=function(){return this.actions.length;}
    this.get=function(id){
        return this.actions[id];
    }
    this.executeOne=function(item,index){
        item.execute();
    }
    this.execute=function(){
        this.actions.forEach(this.executeOne);
    }
}

function KeyActionLib(){
    this.items=[];
    this.add=function(item){
        this.items.push(item);
    }
    this.addItem=function(ref,action){
        this.add(new KeyActionLibItem(ref,action));
    }
    this.addItemAction=function(ref,action){
        this.addItem(ref,action);
    }
    this.length=function(){
        return this.items.length;
    }
    this.get=function(ref){
        for(var i=0;i<this.length();i++){
            if(this.items[i].itsMe(ref)) return this.items[i];
        }
    }
    this.getAction=function(ref){
        return this.get(ref).action;
    }
    this.setAction=function(ref,action){
        this.getAction(ref).action=action;
    }
}

function KeyActionLibItem(ref,action){
    this.ref=ref;
    this.action=action;
    this.itsMe=function(ref){
        return this.ref==ref;
    }
}

/**
 * [KeyboardPeriod OBJET PRINCIPAL DE GESTION DE CLAVIER]
 */
function KeyboardPeriod(){
    var that = this;

    this.keya=new KeyArray();
    this.elemEvent=document;
    this.kal=new KeyActionLib();
    //this.keyme="[";

    this.enableEvents=function(){
        $(this.elemEvent).on("keypress",this.keya.execute);
        $(this.elemEvent).on("keydown",this.keya.execute);
        $(this.elemEvent).on("keyup",this.keya.execute);
    }
    this.setKeymap=function(array){
        this.keya.keys=[];
        this.keya.hydrateFromArray(array);
    }

    this.fixFackingKeys=function(){
        $(document).on("keydown",disableF5);
        $(document).on("keydown",disableBCKSP)
    }

    this.enableEvents();
    this.fixFackingKeys();
}

// fixFackingKeys suite
function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); };
function disableBCKSP(e) { if ((e.which || e.keyCode) == 8) e.preventDefault(); };
