import DefaultBehavior from './DefaultBehavior';

export default class ManuallyBehavior extends DefaultBehavior {
  show() {
    this.showed = true;
    if (this.fl_hide === false) return; 
    this.fl_hide = false;
    this.fadeIn();
  }
}