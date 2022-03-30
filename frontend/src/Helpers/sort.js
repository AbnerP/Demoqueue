export default function sortAndReturnNumerically (queue) {
    return queue.sort((a, b) => {
        return b.votes - a.votes;
    });
}

export function sortAndReturnAlphabetically (queue) {
    return queue.sort((a, b) => {
        if( a.name < b.name) return -1;
        if( a.name > b.name) return 1;
        return 0;
    });
}