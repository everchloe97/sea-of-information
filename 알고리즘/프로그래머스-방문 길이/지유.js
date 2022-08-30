const solution = (dirs) => {
  const directions = {
    U: ({ x, y }) => y < 5 ? { x, y: y + 1, visitedPath: `${x}/${y + 0.5}`, } : { x, y, visitedPath: '', },
    D: ({ x, y }) => y > -5 ? { x, y: y - 1, visitedPath: `${x}/${y - 0.5}`, } : { x, y, visitedPath: '', },
    R: ({ x, y }) => x < 5 ? { x: x + 1, y, visitedPath: `${x + 0.5}/${y}`, } : { x, y, visitedPath: '', },
    L: ({ x, y }) => x > -5 ? { x: x - 1, y, visitedPath: `${x - 0.5}/${y}`, } : { x, y, visitedPath: '', },
  }
  let coordinates = {
    x: 0,
    y: 0,
  };

  return [...[...dirs].reduce((visitedPaths, direction) => {
      const { x, y, visitedPath } = directions[direction](coordinates);
      coordinates = { x, y };

      return visitedPaths.add(visitedPath);
    }, new Set())].filter(Boolean).length;
};