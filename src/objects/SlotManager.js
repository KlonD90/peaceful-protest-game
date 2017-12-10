import Slot from './Slot';

export class SlotManager {
  constructor(target, config) {
    this.slots = config.map(data => new Slot(target, data))
  }

  update() {
    this.slots.forEach(slot => slot.update());
  }

  take (protester) {
    const slot = this.slots.find(x => !x.taken);
    if(!slot) return null
    slot.take(protester);
    return slot;
  }
}

export default SlotManager
