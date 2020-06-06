export default class ArrayElement {
  constructor(value, idx) {
    this.value = value;
    this.idx = idx;
  }
  get height() {
    return this.calcHeight();
  }
  calcHeight() {
    return this.value * 4;
  }
}
