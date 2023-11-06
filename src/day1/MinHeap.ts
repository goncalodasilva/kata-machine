export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.length++;
        this.data.push(value);
        this.heapifyUp(this.length -1);
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        this.length--;
        const out = this.data[0];
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data.pop() as number;
        this.heapifyDown(0);
        return out;
    }

    heapifyUp(idx: number) {
        const parentIdx = Math.floor((idx - 1)/2);
        //1st base case
        if (parentIdx < 0) {
            return;
        }
        const parentVal = this.data[parentIdx];
        const currVal = this.data[idx];
        //2nd base case
        if (parentVal < currVal) {
            return;
        }
        //swap
        this.data[idx] = parentVal;
        this.data[parentIdx] = currVal;
        //recurse
        this.heapifyUp(parentIdx);
    }
    
    heapifyDown(idx: number) {
        const leftChildIdx = (2 * idx) + 1;
        const rightChildIdx = (2 * idx) + 2;
        //1st base case
        if (leftChildIdx > this.length) {
            return;
        }
        const leftChild = this.data[leftChildIdx];
        const rightChild = this.data[rightChildIdx];
        const currVal = this.data[idx];
        /** NOT NEEDED
         * 
        if (!rightChild && leftChild < currVal) {
            this.data[leftChildIdx] = currVal;
            this.data[idx] = leftChild;
        }
         */
        
        //fork conditions
        //if leftChild is smaller
        if (leftChild < rightChild && leftChild < currVal) {
            this.data[leftChildIdx] = currVal;
            this.data[idx] = leftChild;
            this.heapifyDown(leftChildIdx);
        } else if (leftChild > rightChild && rightChild < currVal) {
            this.data[rightChildIdx] = currVal;
            this.data[idx] = rightChild;
            this.heapifyDown(rightChildIdx);
        }
    }
}