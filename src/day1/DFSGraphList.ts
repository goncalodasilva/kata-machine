function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {
    if (curr === needle) {
        return true;
    }
    if (seen[curr]) {
        return false;
    }
    seen[curr] = true;
    for (let i = 0; i < graph[curr].length; i++) {
        const next = graph[curr][i].to;
        if (walk(graph, next, needle, seen, path)) {
            path.push(next);
            return true;
        }
    }
    return false;
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];
    walk(graph, source, needle, seen, path)
    if (path.length) {
        return [source].concat(path.reverse());
    }
    return null;
}