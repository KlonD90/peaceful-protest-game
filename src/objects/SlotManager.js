import Slot from './Slot';

export class SlotManager {
  constructor(target, directionObject, config) {
    this.slots = config.map(data => new Slot(target, directionObject, data))
  }

  update() {
    this.slots.filter(slot => slot.taken).forEach(slot => slot.update());
  }

  take (protester) {
    const slot = this.slots.find(x => !x.taken);
    if(!slot) return null
    slot.take(protester);
    return slot;
  }

  hasEmptySlots () {
    return !!this.slots.find(x => !x.taken)
  }

  dismissAll () {
    this.slots.forEach(slot => {
      slot.taken && slot.taken.onSlotDismissing && slot.taken.onSlotDismissing()
      slot.dismiss()
    })
  }

  getTakens(){
    return this.slots.filter(slot => slot.taken).map(slot => slot.taken);
  }
}

export default SlotManager
