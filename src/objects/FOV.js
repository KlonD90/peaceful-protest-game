import { FOV_MODE_NORMAL, FOV_MODE_CAPTURE } from '../constants.js';

const DEFAULT_COLORS = {
    [FOV_MODE_NORMAL]: 0x2b3992,
    [FOV_MODE_CAPTURE]: 0x2b3992
};

class FOV {
    constructor({ game, radius, angle, colors = DEFAULT_COLORS }) {
        
        this.game = game;
        this.radius = radius;
        this.radiusSq = this.radius ** 2;
        this.halfViewAngle = this.game.math.degToRad(angle / 2);
        this.colors = colors;

        this.graphics = this.game.add.sprite(0, 0, "ALL_IMAGES", "FOV");
        this.graphics.anchor.set(0);
        this.center = null;
        this.isActive = true;
    }

    update({ x, y, angle, mode }) {
        this.center = { x, y };
        this.angle = angle;

       // this.graphics.clear();

        if (!this.isActive) {
            return;
        }

        this.graphics.tint = this.colors[mode || FOV_MODE_NORMAL];
        this.graphics.alpha = mode === FOV_MODE_NORMAL ? 0.2 : 0.5;
        this.graphics.x = x;
        this.graphics.y = y;

        this.graphics.angle = this.game.math.radToDeg(angle) - 45;// - this.halfViewAngle;
        
        
    }

    containsPoint({ x, y }) {
        if (!this.center) {
            return false;
        }
        const distanceSq = this.game.math.distanceSq(this.center.x, this.center.y, x, y);
        if (distanceSq > this.radiusSq) {
            return false;
        }
        let angle = this.game.math.angleBetweenPoints(this.center, { x, y });

        const leftAngle = this.angle - this.halfViewAngle;
        const rightAngle = this.angle + this.halfViewAngle;

        if (leftAngle <= angle && angle <= rightAngle) {
            return true;
        }

        angle -= 2 * Math.PI * Math.sign(angle);

        return leftAngle <= angle && angle <= rightAngle;
    }

    destroy() {
        this.graphics.destroy();
        this.isActive = false;
    }

    kill() {
        this.graphics.kill();
        this.isActive = false;
    }

    revive() {
        this.graphics.revive();
        this.isActive = true;
    }
}

export default FOV;
