class MinStack {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    // push
    this.stack.push(val);
  }

  pop(): void {
    // remove
    this.stack.pop();
  }

  top(): number {
    // return the last element
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    // return the min from the stack
    return Math.min(...this.stack);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
