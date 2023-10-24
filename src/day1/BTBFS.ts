import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: Queue<BinaryNode<number>> = new Queue();
    q.enqueue(head);
    
    while (q.length) {
        const node = q.deque();
        if (!node) {
            continue;
        }
        if (node.value === needle) {
            return true;
        }
        if (node.left) {
            q.enqueue(node.left);
        }
        if (node.right) {
            q.enqueue(node.right);
        }
    }
    return false;
}