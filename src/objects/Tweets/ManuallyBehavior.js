import DefaultBehavior from './DefaultBehavior';

export default class extends DefaultBehavior {
  show() {
    if (this.fl_hide === false) return; 
    this.fl_hide = false;
    this.fadeIn();
  }
}