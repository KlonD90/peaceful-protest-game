export default class CirclePool{
    constructor(game){
        this.game = game;
        this.pool = {};
    }
    pull(key, texture, x, y){
        if (!this.pool[key])
        {
            this.pool[key] = {
                offset: 0,
                list: []
            };
        }
        var item = this.pool[key].list[this.pool[key].offset];
        if (!item)
        {
            item = this.game.add.sprite(x, y, texture);
            item.anchor.set(0.5);
            this.pool[key].list.push(item);
        }
        this.pool[key].offset++;
        return item;
    }
    add(key, texture, x, y){
        var sprite = this.pull(key, texture, x, y);
        sprite.x = x;
        sprite.y = y;
    }
    reset(){
        for (var k in this.pool)
        {
            var pool = this.pool[k];
            for (var i=pool.offset; i<pool.list.length; i++)
            {
                pool.list[i].visible = false;
            }
            pool.offset = 0;
        }
    }
}