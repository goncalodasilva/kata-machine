type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
}
    pop(): T | undefined {
        // this implementation is 3 lines shorter than ThePrimeagen's
        // After reviewing it carefully I've conclued the do the exact same thing
        if (!this.head || this.length === 0) {
            return;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.prev;
        return head.value;

}
    peek(): T | undefined {
        return this.head?.value;
}
}
