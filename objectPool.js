class ObjectPool{
    constructor(){
        this.pool = {};
        this.counter = 1;
    }
    
    add(obj){
        if(!obj.counter){
            obj.counter = this.counter;
            this.pool[this.counter++]=obj;
        }
    }
    
    contains(obj){
        return obj.counter !== undefined
    }
}

module.exports.ObjectPool = ObjectPool;