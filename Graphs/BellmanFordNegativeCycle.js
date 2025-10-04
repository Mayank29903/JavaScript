/*
 * Author: Mayank
 * Bellman-Ford Algorithm implementation in JavaScript
 * Detects shortest paths and checks for negative weight cycles in a graph.
 */

// Bellman-Ford with negative cycle detection

function bellmanFordNegativeCycle(graph, vertices, start) {
  const dist = new Array(vertices).fill(Infinity)
  dist[start] = 0

  // relax all edges (V - 1) times
  for (let i = 0; i < vertices - 1; i++) {
    for (let [u, v, w] of graph) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w
      }
    }
  }

  // check for negative cycle
  for (let [u, v, w] of graph) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      return { hasNegativeCycle: true, dist }
    }
  }

  return { hasNegativeCycle: false, dist }
}

export { bellmanFordNegativeCycle }
