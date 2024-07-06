const graphColoring = (graph, m, n) => {
  const colors = new Array(n).fill(0);
  return solver(graph, m, n, 0, colors) ? 1 : 0;
};

const solver = (graph, m, n, node, colors) => {
  if (node === n) return true;

  for (let i = 1; i <= m; i++) {
    if (isSafe(node, colors, graph, n, i)) {
      colors[node] = i;
      if (solver(graph, m, n, node + 1, colors)) return true;
      colors[node] = 0;
    }
  }
  return false;
};

const isSafe = (node, colors, graph, n, color) => {
  for (let i = 0; i < n; i++) {
    if (graph[node][i] === 1 && colors[i] === color) return false;
  }
  return true;
};

const createGraph = (edges, n) => {
  const graph = Array.from({ length: n }, () => Array(n).fill(0));
  edges.forEach(([u, v]) => {
    graph[u - 1][v - 1] = 1;
    graph[v - 1][u - 1] = 1;
  });
  return graph;
};

const n = 5;
const m = 1;
const edges = [[5, 1], [5, 3], [4, 5]];
const graph = createGraph(edges, n);

console.log(graphColoring(graph, m, n)); 
