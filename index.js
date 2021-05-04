class SortedList {
  constructor() {
    this.length = 0; //see index.spec line 12
    this.items = []; // see index.spec line 13
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a,b) => a-b);
    console.log(this.items);
  }

  get(pos) {
    if (pos >= this.length || pos < 0) {
      throw new Error ("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error ("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error ("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    if (this.length === 0) throw new Error ("EmptySortedList");
      return this.sum() / this.length;
  }
}

module.exports = SortedList;
