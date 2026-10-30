import test from 'node:test';import assert from 'node:assert/strict';import {solve} from './astar.mjs';
const blank=(r,c)=>Array.from({length:r},()=>Array(c).fill(0));
test('Manhattan shortest path without obstacles',()=>{const r=solve(blank(5,5),[0,0],[4,4]);assert.equal(r.cost,8);assert.deepEqual(r.path[0],[0,0]);assert.deepEqual(r.path.at(-1),[4,4]);});
test('detour around obstacles',()=>{const g=blank(3,3);g[0][1]=1;g[1][1]=1;const r=solve(g,[0,0],[0,2]);assert.equal(r.cost,6);});
test('unreachable returns no path',()=>{const g=blank(3,3);g[0][1]=1;g[1][0]=1;const r=solve(g,[0,0],[2,2]);assert.equal(r.cost,null);assert.deepEqual(r.path,[]);});
test('start equals goal',()=>{const r=solve(blank(2,2),[1,1],[1,1]);assert.equal(r.cost,0);assert.deepEqual(r.path,[[1,1]]);});
