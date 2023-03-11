function range(start, end) {
    if (end < start) {
        return [];
    } else {
        const r = range(start, end - 1);
        r.push(end);
        return r;
    }
}

console.log(range(1, 2));
