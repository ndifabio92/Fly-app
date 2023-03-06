export const getPlaces = (arr, name) => {
    return [... new Set(arr.map(item => item[name]))]
        .map(item => { return { [name]: item } })
}