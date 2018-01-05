export function getFormattedTime(seconds) {
    return String(Math.floor(seconds / (60*60))).padStart(2, '0') + ':'
    +String(Math.floor(seconds / 60)).padStart(2, '0') + ':' +
        String(seconds % 60).padStart(2, '0');
}

export function lineIntersection(line1, line2) {
    const A1 = line1[1].y - line1[0].y;
    const B1 = line1[0].x - line1[1].x;
    const C1 = A1 * line1[0].x + B1 * line1[0].y;

    const A2 = line2[1].y - line2[0].y;
    const B2 = line2[0].x - line2[1].x;
    const C2 = A2 * line2[0].x + B2 * line2[0].y;

    const x = (B2 * C1 - B1 * C2) / (A1 * B2 - A2 * B1);

    const det = A1 * B2 - A2 * B1;
    const y = (A1 * C2 - A2 * C1) / det
    return {x, y};
}