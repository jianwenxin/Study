export function solve(grid,start,goal) {
  const rows=grid.length,cols=grid[0].length;
  const id=([r,c])=>r*cols+c, from=n=>[Math.floor(n/cols),n%cols];
  const source=id(start),target=id(goal),open=[source],g=new Map([[source,0]]),parent=new Map(),closed=new Set(),visited=[];
  const h=n=>{const [r,c]=from(n);return Math.abs(r-goal[0])+Math.abs(c-goal[1]);};
  if(grid[start[0]]?.[start[1]] || grid[goal[0]]?.[goal[1]]) return {path:[],visited:[],cost:null};
  while(open.length){
    open.sort((a,b)=>(g.get(a)+h(a))-(g.get(b)+h(b)) || h(a)-h(b) || a-b);
    const u=open.shift();if(closed.has(u))continue;closed.add(u);visited.push(from(u));
    if(u===target){let path=[u];while(parent.has(path[0]))path.unshift(parent.get(path[0]));return {path:path.map(from),visited,cost:g.get(u)};}
    const [r,c]=from(u);
    for(const [dr,dc] of [[1,0],[0,1],[-1,0],[0,-1]]){
      const nr=r+dr,nc=c+dc;if(nr<0||nc<0||nr>=rows||nc>=cols||grid[nr][nc])continue;
      const v=id([nr,nc]),tentative=g.get(u)+1;
      if(tentative<(g.get(v)??Infinity)){g.set(v,tentative);parent.set(v,u);open.push(v);closed.delete(v);}
    }
  }
  return {path:[],visited,cost:null};
}
