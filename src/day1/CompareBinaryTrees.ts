export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // MY implementation
    // if (a !== b) {
    //     return false;
    // }
    // if (a !== null && b !== null) {
    //     if (!compare(a.left, b.left) || !compare(a.right, b.right)) {
    //         return false;
    //     }
    // }
    // return true;

    // Class implementation (much cleaner, better and probably with way less bugs)
    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}