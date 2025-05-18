function generateMap(x, y, pos) {
  let map = [];
  for (let i = 0; i < y; i++) {
    let row = [];
    for (let j = 0; j < x; j++) {
      row.push(0);
    }
    map.push(row);
  }
  map[pos[0]][pos[1]] = 10;
  let currentpos = pos;
  let dir = ["up", "down", "left", "right"]
  let lastdir = dir[Math.floor(Math.random() * dir.length)];
  let i = 0;
  while (true) {
    const [r, c] = currentpos;
    const neighbors = [];
    if(Math.random() > 0.25) {
      if (map[r - 1] && map[r - 1][c] == 0) {
        neighbors.push([r - 1, c, "up"]);
      }; // up
      if (map[r + 1] && map[r + 1][c] == 0) {
        neighbors.push([r + 1, c, "down"]);
      }; // down
      if (map[r] && map[r][c - 1] == 0) {
        neighbors.push([r, c - 1, "left"]);
      }; // left
      if (map[r] && map[r][c + 1] == 0) {
        neighbors.push([r, c + 1, "right"]);
      }; // right
    } else {
      let none = false;
      if (lastdir == "up") {
        if (map[r - 1] && map[r - 1][c] == 0) {
          neighbors.push([r - 1, c, "up"]);
        } else {
          none = true;
        }; // up
      } else if (lastdir == "down") {
        if (map[r + 1] && map[r + 1][c] == 0) {
          neighbors.push([r + 1, c, "down"]);
        } else {
          none = true;
        }; // down
      } else if (lastdir == "left") {
        if (map[r] && map[r][c - 1] == 0) {
          neighbors.push([r, c - 1, "left"]);
        } else {
          none = true;
        }; // left
      } else if (lastdir == "right") {
        if (map[r] && map[r][c + 1] == 0) {
          neighbors.push([r, c + 1, "right"]);
        } else {
          none = true;
        }; // right
      }
      if (none) {
        i--;
        continue;
      }
    }
    if (neighbors.length == 0) {
      map[r][c] = 25;
      break;
    }
    const [newRow, newCol, dir] = neighbors[Math.floor(Math.random() * neighbors.length)];
    lastdir = dir;
    i++;
    map[newRow][newCol] = 10;
    currentpos = [newRow, newCol];
    if (i >= (x+y)) {
      map[newRow][newCol] = 25;
      break;
    }
  }
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (map[i][j] == 0) {
        let chance = Math.random();
        if (chance < 0.333) {
          map[i][j] = 10;
        } else if (chance < 0.667) {
          map[i][j] = 20;
        } else {
          map[i][j] = 0;
        }
      }
    }
  }
  return map;
}