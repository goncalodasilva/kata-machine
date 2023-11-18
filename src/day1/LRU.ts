type Node<T> = {
    val: T,
    next?: Node<T>,
    prev?: Node<T>
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;
    
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        // does it exist?
        let node = this.lookup.get(key);
        if (!node) {
            // if not create it
            node = {val: value} as Node<V>;
            // inscrease length
            this.length++;
            this.prepend(node);
            this.trimCache();

            // add the new node in the maps
            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
        } else {
            // move it to the front of the list
            this.detach(node);
            this.prepend(node);

            //update node's value
            node.val = value; 
        }


    }
    
    get(key: K): V | undefined {
        // check got existance
        const node = this.lookup.get(key);
        if (!node) {
            return undefined;
        }
        
        // update the value we found by moving it to the front
        this.detach(node);
        this.prepend(node);
        
        // return the value found or undefined if not found (done above) 
        return node.val;
    }
    
    private detach(node: Node<V>): void {
        if (node.prev) {
            node.prev.next = node.next;
        }    
        if (node.next) {
            node.next.prev = node.prev;
        }

        // checks if node is head or tail
        if (this.head === node) {
            this.head = this.head.next;
        }
        if (this.tail === node) {
            this.tail = this.tail.prev;
        }

        node.next = node.prev = undefined;
    }
    
    private prepend(node: Node<V>): void {
        if (!this.head) {
            this.head = this.tail = node;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    
    private trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }

        // keep a ref for tail
        const tail = this.tail as Node<V>;
        // remove the tail from the maps
        this.detach(this.tail as Node<V>);
        const tailKey = this.reverseLookup.get(tail as Node<V>) as K;
        this.reverseLookup.delete(tail);
        this.lookup.delete(tailKey);

        // decrease the length
        this.length--;
    }
}