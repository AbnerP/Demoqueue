export default function sortAndReturn (queue) {
    return queue.sort((a, b) => {
        return b.votes - a.votes;
    });
}