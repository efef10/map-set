class ObjectPool{
    constructor(){
        this.pool = {};
    }
    
    add(obj){
        this.pool[obj.toString()]=obj;
    }
    
    contains(obj){
        return this.pool[obj.toString()] === obj
    }
}

module.exports.ObjectPool = ObjectPool;