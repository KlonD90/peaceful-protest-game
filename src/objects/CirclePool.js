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
            item = this.add(key, texture, x, y);
        }
        
        item.visible = true;
        item.x = x;
        item.y = y;
        this.pool[key].offset++;
        return item;
    }
    add(key, texture, x, y){

        let sprite = this.game.add.sprite(x, y, "ALL_IMAGES",texture.tex);
        sprite.tint = texture.color;
        sprite.anchor.set(0.5);
        this.pool[key].list.push(sprite);
        return sprite;
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