export default class Slot {
    constructor(target, directionObject, {x, y}){
        this.target = target;
        this.directionObject = directionObject;
        this.basePoint = new Phaser.Point(x, y);
        this.taken = null;
        this.callback = null;
        this.point = {x: target.x, y: target.y};
        console.log('constructor slot', this);
        this.update()
    }

    get x() {
        return this.point.x
    }

    get y() {
        return this.point.y
    }

    get follow(){
        return true;
    }

    update(){
      console.log('update slot', this);
      const { basePoint, target: { x, y }} = this;
      this.point = Phaser.Point.rotate(new Phaser.Point(x+basePoint.x, y+basePoint.y), x, y, this.directionObject.direction, true);

      if (Number.isNaN(this.x) || Number.isNaN(this.y)) throw new Error("Slot mathematics error")
    }

    take(protester){
        this.update();
        this.taken = protester;
    }
    dismiss() {
        this.taken = null
    }
}
