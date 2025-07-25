function generateMap(x, y, pos) {
  let map = [];
  let stuck = false;
  while (true) {
    map = [];
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
    let path = [];
    stuck = false;
    while (true) {
      const [r, c] = currentpos;
      const neighbors = [];
      if (Math.random() > 0.25) {
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
        stuck = true;
        break;
      }
      const [newRow, newCol, dir] = neighbors[Math.floor(Math.random() * neighbors.length)];
      lastdir = dir;
      i++;
      map[newRow][newCol] = 10;
      path.push([newRow, newCol]);
      currentpos = [newRow, newCol];
      if (i >= (x + y)) {
        map[newRow][newCol] = 25;
        if (map[newRow - 1] && map[newRow - 1][newCol] == 0) {
          map[newRow - 1][newCol] = 20;
        }; // up
        if (map[newRow + 1] && map[newRow + 1][newCol] == 0) {
          map[newRow + 1][newCol] = 20;
        }; // down
        if (map[newRow] && map[newRow][newCol - 1] == 0) {
          map[newRow][newCol - 1] = 20;
        }; // left
        if (map[newRow] && map[newRow][newCol + 1] == 0) {
          map[newRow][newCol + 1] = 20;
        }; // right
        break;
      }
    }
    if(!stuck) {
      let start = path[Math.floor(Math.random() * path.length)];
      currentpos = start;
      lastdir = dir[Math.floor(Math.random() * dir.length)];
      i = 0;
      while (true) {
        const [r, c] = currentpos;
        const neighbors = [];
        if (Math.random() > 0.25) {
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
          map[r][c] = 21;
          break;
        }
        const [newRow, newCol, dir] = neighbors[Math.floor(Math.random() * neighbors.length)];
        lastdir = dir;
        i++;
        map[newRow][newCol] = 10;
        currentpos = [newRow, newCol];
        if (i >= (x + y)) {
          map[newRow][newCol] = 21;
          if (map[newRow - 1] && map[newRow - 1][newCol] == 0) {
            map[newRow - 1][newCol] = 20;
          }; // up
          if (map[newRow + 1] && map[newRow + 1][newCol] == 0) {
            map[newRow + 1][newCol] = 20;
          }; // down
          if (map[newRow] && map[newRow][newCol - 1] == 0) {
            map[newRow][newCol - 1] = 20;
          }; // left
          if (map[newRow] && map[newRow][newCol + 1] == 0) {
            map[newRow][newCol + 1] = 20;
          }; // right
          break;
        }
      }
    }
    let majority = Math.random();
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
        if (map[i][j] == 0) {
          if (majority < 0.1) {
            map[i][j] = 20;
          } else if (majority < 0.2) {
            map[i][j] = 0;
          } else if (majority < 0.3) {
            let chance = Math.random();
            if (chance < 0.143) {// 1/7
              map[i][j] = 10;
            } else if (chance < 0.714) {// 4/7
              map[i][j] = 20;
            } else if (chance < 0.857) {// 1/7
              map[i][j] = 30;
            } else {// 1/7
              map[i][j] = 0;
            }
          } else if (majority < 0.4) {
            let chance = Math.random();
            if (chance < 0.143) {// 1/7
              map[i][j] = 10;
            } else if (chance < 0.286) {// 1/7
              map[i][j] = 20;
            } else if (chance < 0.429) {// 1/7
              map[i][j] = 30;
            } else {// 4/7
              map[i][j] = 0;
            }
          } else {
            let chance = Math.random();
            if (chance < 0.286) {// 2/7
              map[i][j] = 10;
            } else if (chance < 0.571) {// 2/7
              map[i][j] = 20;
            } else if (chance < 0.714) {// 1/7
              map[i][j] = 30;
            } else {// 2/7
              map[i][j] = 0;
            }
          }
        }
      }
    }
    const rows = map.length;
    const cols = map[0].length;
    let validexit = true;
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const ny = pos[0] + dy;
        const nx = pos[1] + dx;
        if (
          ny >= 0 &&
          ny < rows &&
          nx >= 0 &&
          nx < cols &&
          map[ny][nx] == 25
        ) {
          validexit = false;
        }
      }
    }
    const hasExit = map.some(row => row.includes(25));
    if (validexit && hasExit) {
      break;
    }
  }
  return [map, !stuck];
}