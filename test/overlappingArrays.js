
foo = (arrays) => {
    const  data =arrays.map(el => ({start: el[0],end: el[1]}))
        .sort(function (a, b) { return a.start - b.start || a.end - b.end; })
        .reduce(function (r, a) {
            var last = r[r.length - 1] || [];
            if (last.start <= a.start && a.start <= last.end) {

                if (last.end < a.end) {
                    last.end = a.end;
                }
                return r;
            }
            return r.concat(a);
        }, []);
    return data.map(el => ([el.start, el.end]));
}


console.log("[[0, 3], [6, 10]] : ",foo([[0, 3], [6, 10]]));
console.log("[[0, 5], [3, 10]] : ",foo([[0, 5], [3, 10]]));
console.log("[[0, 5], [2, 4]] : ",foo([[0, 5], [2, 4]]));
console.log("[[7, 8], [3, 6], [2, 4]] : ",foo([[7, 8], [3, 6], [2, 4]]));
console.log("[[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]] : ",foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]));
