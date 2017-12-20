export default class Camera{
    constructor(camera, game){
        this.scale = camera.scale;
        this.camera = camera;
        this.game = game;
        this.bounds = Phaser.Rectangle.clone(this.game.camera.bounds);

    }

    zoomTo(scale, duration){
        var bounds = this.bounds;
        this.scale = scale;
        var cameraBounds = this.game.camera.bounds;
        game.add.tween(cameraBounds).to({
            x      : bounds.width  * (1 - scale) / 2,
            y      : bounds.height * (1 - scale) / 2,
            width  : bounds.width  * scale,
            height : bounds.height * scale
        }, duration).start();
        return game.add.tween(this.game.camera.scale).to({
            x: scale, y: scale
        }, duration).start();
    }

}