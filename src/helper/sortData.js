// Higher Order Function
// func that returns a func
export function sortByField(field) {
    return function (a, b) {
        return new Date(b[field]) - new Date(a[field])
    }
}