import Protester from "./Protester"
import SlotManager from "./SlotManager"
import {
  PROTESTER_MODE_WANDER,
  PROTESTER_MODE_FOLLOW,
  PROTESTER_MODE_ARRESTED
} from "../constants"

const slotsPositions = drawStarPosition(0, 0, 5, 70, 50);

const defaults = {
  interval: 1,

  agitation: {
    duration: 10,
    direction: 0,
    slots: slotsPositions,
  },
  speed: 100,
}

/*
 * Star lifecyle: rest -> moveIn -> agitate -> moveOut -> rest
 */
export class Star extends Protester {
  static STATE = {
    REST: "rest",
    MOVE_IN: "moveIn",
    AGITATE: "agitate",
    ARRESTED: PROTESTER_MODE_ARRESTED,
  }

  constructor({ config, GameObject, ...prefabOptions }) {
    console.log({ config, GameObject, ...prefabOptions })
    const fullConfig = { ...defaults, ...config }
    console.log(prefabOptions)
    super({
      ...GameObject.getRandomCoordinates(),
      spriteKey: `protester1`,
      spriteName: `star`,
      speed: { value: fullConfig.speed },
      ...prefabOptions, GameObject,
    })

    this.starGraphic = this.game.add.graphics();
    this.sprite.addChild(this.starGraphic);

    this.config = fullConfig


    this.restTimer = this.game.time.create(false);
    this.kill()
  }

  setState(state, props = {}) {
    switch(state) {
      case Star.STATE.REST: {
        this.state = { type: Star.STATE.REST }
        this.restTimer.add(this.config.interval * 1000, () => this.setState(Star.STATE.MOVE_IN), this);
        this.restTimer.start();
        break;
      }
      case Star.STATE.MOVE_IN: {
        this.restTimer.stop();
        this.revive()
        this.moveTo(this.GameObject.getRandomCoordinates(), { callback: () => this.setState(Star.STATE.AGITATE) })
        this.state = { type: Star.STATE.MOVE_IN }
        break;
      }
      case Star.STATE.AGITATE: {
        const { slots, duration, direction } = this.config.agitation

        this.direction = direction

        this.moveTo()
        const slotsManager = new SlotManager(this.sprite, this, slots)
        this.state = { type: Star.STATE.AGITATE, slots: slotsManager }
        break
      }
      case Star.STATE.ARRESTED: {
        const { slots, duration, direction } = this.config.agitation

        this.moveTo()
        this.state = { type: Star.STATE.ARRESTED }
        const { x, y } = props
        this.sprite.x = x
        this.sprite.y = y
        break
      }
    }
  }

  update() {


    switch(this.state.type) {
      case Star.STATE.AGITATE: {
        let wanderingProtesters =
          this.GameObject.mz.arrays.protesters.filter(sprite => sprite.alive).map(protester => protester.mz)
              .filter(protester => protester.mode === PROTESTER_MODE_WANDER)

        while (this.state.slots.hasEmptySlots() && wanderingProtesters.length > 0) {
          const protester = wanderingProtesters.shift()
          const slot = this.state.slots.take(protester)
          protester.setMode(PROTESTER_MODE_FOLLOW, { slot })
        }

        break
      }
    }


    this.updateStarGraphic()

    super.update()
  }

  updateStarGraphic(){
      this.starGraphic.clear()
      this.starGraphic.lineStyle(3, 0xffff00, 1);
      drawStar(this.starGraphic, 0, 0, 5, 30,15)
  }

  revive() {
    const { x, y } = this.GameObject.randomOffscreenCoords()
    this.sprite.revive(1);
    this.sprite.x = x;
    this.sprite.y = y;
    this.sprite.body.reset(x, y);
  }

  kill() {
    this.setState(Star.STATE.REST)
    this.moveTo(null);

    this.sprite.kill();
  }
}

export default Star


function drawStar(graphic, cx,cy,spikes,outerRadius,innerRadius){
    var rot=Math.PI/2*3;
    var x=cx;
    var y=cy;
    var step=Math.PI/spikes;

    graphic.moveTo(cx,cy-outerRadius)
    for(var i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*outerRadius;
        y=cy+Math.sin(rot)*outerRadius;
        graphic.lineTo(x,y)
        rot+=step

        x=cx+Math.cos(rot)*innerRadius;
        y=cy+Math.sin(rot)*innerRadius;
        graphic.lineTo(x,y)
        rot+=step
    }
    graphic.lineTo(cx,cy-outerRadius);
    // ctx.closePath();
    // ctx.lineWidth=5;
    // ctx.strokeStyle='blue';
    // ctx.stroke();
    // ctx.fillStyle='skyblue';
    // ctx.fill();
}

function drawStarPosition(cx,cy,spikes,outerRadius,innerRadius){
    var rot=Math.PI/2*3;
    var x=cx;
    var y=cy;
    var step=Math.PI/spikes;
    var list = [];

    for(var i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*outerRadius;
        y=cy+Math.sin(rot)*outerRadius;
        list.push({x,y});
        rot+=step

        x=cx+Math.cos(rot)*innerRadius;
        y=cy+Math.sin(rot)*innerRadius;
        list.push({x,y})
        rot+=step
    }
    list.push({x: cx, y: cy-outerRadius});
    return list;
}