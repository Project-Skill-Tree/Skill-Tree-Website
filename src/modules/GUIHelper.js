export function LineTo(x, y) {
  return "L" + x + " " + y + " "
}
export function MoveTo(x, y) {
  return "M" + x + " " + y + " "
}


/*export function TreeLine(x1, y1, x2, y2, r, percentage) {
  const midPoint = (y2 + y1) / 2

  return MoveTo(x1, y1)
  + LineTo(x1, midPoint - r)
  + LineTo(x1 + r, midPoint)
  + LineTo(x2 - r, midPoint)
  + LineTo(x2, midPoint + r)
  + LineTo(x2, y2)
}*/

export function TreeLine(x1, y1, x2, y2, r, scroll) {
  const s = x1 > x2 ? -1 : 1
  // Define the points of the path
  const points = [
    { x: x1, y: y1 },
    { x: x1, y: (y2 + y1) / 2 - r },
    { x: x1 + r * s, y: (y2 + y1) / 2 },
    { x: x2 - r * s, y: (y2 + y1) / 2 },
    { x: x2, y: (y2 + y1) / 2 + r },
    { x: x2, y: y2 }
  ];

  // Calculate the total length of the path
  let totalLength = 0;
  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    totalLength += Math.sqrt(dx * dx + dy * dy);
  }

  // Calculate the scroll adjusted length for each segment
  const adjustedLength = totalLength * scroll;

  // Construct the path string with adjusted segment lengths
  let currentLength = 0;
  let pathString = MoveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    const segmentLength = Math.sqrt(dx * dx + dy * dy);
    if (currentLength + segmentLength >= adjustedLength) {
      const remainingLength = adjustedLength - currentLength;
      const ratio = remainingLength / segmentLength;
      const adjustedX = points[i - 1].x + dx * ratio;
      const adjustedY = points[i - 1].y + dy * ratio;
      pathString += LineTo(adjustedX, adjustedY);
      break;
    } else {
      pathString += LineTo(points[i].x, points[i].y);
      currentLength += segmentLength;
    }
  }

  return pathString;
}