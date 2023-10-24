export default function bs_list(haystack: number[], needle: number): boolean {
    console.log(haystack);
    if (haystack.length === 0) {
        return false;
    }
    if (haystack.length === 1) {
        if (haystack[0] === needle) {
            return true;
        }
        return false;
    }
    const midIdx = Math.floor(haystack.length/2);
    const mid = haystack[midIdx];
    console.log(midIdx, mid);
    if (mid === needle) {
        return true;
    }
    
    if (mid < needle) {
        return bs_list(haystack.slice(midIdx + 1, haystack.length), needle);
    }
    return bs_list(haystack.slice(0, midIdx), needle);

}