import Queue from "./Queue";

export default function bfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);
    const q: Queue<number> = new Queue();
    q.enqueue(source);
    seen[source] = true;
    
    do {
        const node = q.deque()
        if (node === needle) {
            

        }
    } while (q.length)
}