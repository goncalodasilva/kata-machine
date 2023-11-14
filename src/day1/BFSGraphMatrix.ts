import Queue from "./Queue";

export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: Queue<number> = new Queue();
    q.enqueue(source);

    do{
        const curr = q.deque() as number;
        if (curr === needle) {
            break;
        }
        const adjs = graph[curr];
        for(let i = 0; i < graph.length; i++) {
            if (adjs[i] === 0 || seen[i]) {
                continue;
            }
            seen[i] = true;
            prev[i] = curr as number;
            q.enqueue(i);
        }
    } while (q.length)

    // retrieve path
    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    if (out.length) {
        return [source].concat(out.reverse());
    }
    return null;
}