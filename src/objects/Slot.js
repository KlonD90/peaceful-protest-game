export default class Slot {
    constructor(target, baseCoords){
        this.target = target;
        this.basePoint = new Phaser.Point(baseCoords)
        this.taken = null;
        this.callback = null;

        this.update()
    }

    get x() {
        this.point.x
    }

    get y() {
        this.point.y
    }

    update(){
      const { basePoint, target: { x, y, direction }} = this;
      this.point = basePoint.rotate(x, y, direction, true);
    }

    take(protester){
        this.update();
        this.taken = protester;
    }
    dismiss() {
        this.taken = null
    }
}
