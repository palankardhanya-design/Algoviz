'use strict';
// ═══════════════════════════════════════════════
//  AlgoSight
//  34 algorithms · Race mode · Code snippets
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
//  ALGORITHM METADATA
// ═══════════════════════════════════════════════
const META = {
  bubble:{title:'Bubble Sort',tags:['Comparison','In-Place','Stable'],desc:'Repeatedly compares adjacent elements and swaps them if out of order. Each pass moves the largest unsorted element to its final position.',best:'O(n)',avg:'O(n²)',worst:'O(n²)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-comparing)',label:'Comparing'},{color:'var(--c-swapping)',label:'Swapping'},{color:'var(--c-sorted)',label:'Sorted'}]},
  selection:{title:'Selection Sort',tags:['Comparison','In-Place','Unstable'],desc:'Finds the minimum element in the unsorted region and swaps it to its correct position. Builds a sorted prefix one element at a time.',best:'O(n²)',avg:'O(n²)',worst:'O(n²)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-comparing)',label:'Current Min'},{color:'var(--c-swapping)',label:'Comparing'},{color:'var(--c-sorted)',label:'Sorted'}]},
  insertion:{title:'Insertion Sort',tags:['Comparison','In-Place','Stable'],desc:'Builds a sorted array one item at a time by inserting each new element into its correct position within the already-sorted prefix.',best:'O(n)',avg:'O(n²)',worst:'O(n²)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-pivot)',label:'Key Element'},{color:'var(--c-comparing)',label:'Comparing'},{color:'var(--c-sorted)',label:'Sorted'}]},
  merge:{title:'Merge Sort',tags:['Divide & Conquer','Stable','O(n) Space'],desc:'Recursively divides the array in half, sorts each half, then merges the sorted halves. Guarantees O(n log n) in all cases.',best:'O(n log n)',avg:'O(n log n)',worst:'O(n log n)',space:'O(n)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-left)',label:'Left Half'},{color:'var(--c-right)',label:'Right Half'},{color:'var(--c-comparing)',label:'Merging'},{color:'var(--c-sorted)',label:'Sorted'}]},
  quick:{title:'Quick Sort',tags:['Divide & Conquer','In-Place','Unstable'],desc:'Selects a pivot element and partitions the array around it. Elements smaller than the pivot go left; larger go right. Recursively applied.',best:'O(n log n)',avg:'O(n log n)',worst:'O(n²)',space:'O(log n)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-pivot)',label:'Pivot'},{color:'var(--c-comparing)',label:'Comparing'},{color:'var(--c-swapping)',label:'Swapping'},{color:'var(--c-sorted)',label:'Sorted'}]},
  counting:{title:'Counting Sort',tags:['Non-Comparison','Stable','O(n+k) Space'],desc:'Counts the occurrences of each distinct element, then uses arithmetic to determine positions. Efficient for small range of integers.',best:'O(n+k)',avg:'O(n+k)',worst:'O(n+k)',space:'O(n+k)',legend:[{color:'var(--c-default)',label:'Original'},{color:'var(--c-bucket)',label:'Counting'},{color:'var(--c-comparing)',label:'Placing'},{color:'var(--c-sorted)',label:'Sorted'}]},
  heap:{title:'Heap Sort',tags:['Comparison','In-Place','Unstable'],desc:'Builds a max-heap from the array, then repeatedly extracts the maximum element. Uses the heap property to efficiently find and remove the largest element each iteration.',best:'O(n log n)',avg:'O(n log n)',worst:'O(n log n)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-heap)',label:'Heapifying'},{color:'var(--c-comparing)',label:'Comparing'},{color:'var(--c-swapping)',label:'Swapping'},{color:'var(--c-sorted)',label:'Sorted'}]},
  radix:{title:'Radix Sort',tags:['Non-Comparison','Stable','O(n\u00b7d) Time'],desc:'Sorts integers by processing individual digits from least significant to most significant. Uses counting sort as a subroutine for each digit position.',best:'O(n\u00b7d)',avg:'O(n\u00b7d)',worst:'O(n\u00b7d)',space:'O(n+k)',legend:[{color:'var(--c-default)',label:'Original'},{color:'var(--c-comparing)',label:'Reading Digit'},{color:'var(--c-bucket)',label:'Placing'},{color:'var(--c-sorted)',label:'Sorted'}]},
  twopointers:{title:'Two Pointers',tags:['Technique','O(n) Time','In-Place'],desc:'Uses two pointers moving from opposite ends to find a pair that sums to a target. Demonstrates the fundamental two-pointer pattern.',best:'O(n)',avg:'O(n)',worst:'O(n)',space:'O(1)',legend:[{color:'var(--c-left)',label:'Left Pointer'},{color:'var(--c-right)',label:'Right Pointer'},{color:'var(--c-comparing)',label:'Checking Sum'},{color:'var(--c-found)',label:'Found Pair'},{color:'var(--c-elim)',label:'Eliminated'}]},
  slidingwindow:{title:'Sliding Window',tags:['Technique','O(n) Time','Fixed Window'],desc:'Maintains a window of fixed size that slides through the array. Finds the maximum sum subarray of size k using efficient window updates.',best:'O(n)',avg:'O(n)',worst:'O(n)',space:'O(1)',legend:[{color:'var(--c-bucket)',label:'In Window'},{color:'var(--c-comparing)',label:'Adding to Window'},{color:'var(--c-found)',label:'Best Window'},{color:'var(--c-elim)',label:'Outside Window'}]},
  kadane:{title:"Kadane's Algorithm",tags:['Technique','O(n) Time','Max Subarray'],desc:"Finds the contiguous subarray with the largest sum using dynamic programming. Tracks current sum and resets when it drops below zero.",best:'O(n)',avg:'O(n)',worst:'O(n)',space:'O(1)',legend:[{color:'var(--c-bucket)',label:'Current Subarray'},{color:'var(--c-comparing)',label:'Scanning'},{color:'var(--c-found)',label:'Best Subarray'},{color:'var(--c-elim)',label:'Rejected'}]},
  prefixsum:{title:'Prefix Sum',tags:['Technique','O(n) Build','Range Query'],desc:'Builds a prefix sum array where each element stores the cumulative sum from the start. Enables O(1) range sum queries after O(n) preprocessing.',best:'O(n)',avg:'O(n)',worst:'O(n)',space:'O(n)',legend:[{color:'var(--c-bucket)',label:'Building Prefix'},{color:'var(--c-comparing)',label:'Computing'},{color:'var(--c-found)',label:'Query Result'},{color:'var(--c-left)',label:'Range Start'},{color:'var(--c-right)',label:'Range End'}]},
  frequencycounter:{title:'Frequency Counter',tags:['Technique','O(n) Time','Hash Map'],desc:'Counts the frequency of each element using a hash map. Identifies the most frequent element (mode) in a single pass through the array.',best:'O(n)',avg:'O(n)',worst:'O(n)',space:'O(n)',legend:[{color:'var(--c-comparing)',label:'Scanning'},{color:'var(--c-bucket)',label:'Counting'},{color:'var(--c-found)',label:'Mode (Most Frequent)'},{color:'var(--c-elim)',label:'Checked'}]},
  dutchflag:{title:'Dutch National Flag',tags:['Technique','O(n) Time','3-Way Partition'],desc:'Partitions an array into three sections around a pivot value: elements less than, equal to, and greater than the pivot. Uses three pointers in a single pass.',best:'O(n)',avg:'O(n)',worst:'O(n)',space:'O(1)',legend:[{color:'var(--c-left)',label:'Low (< pivot)'},{color:'var(--c-bucket)',label:'Mid (= pivot)'},{color:'var(--c-right)',label:'High (> pivot)'},{color:'var(--c-comparing)',label:'Examining'},{color:'var(--c-swapping)',label:'Swapping'}]},
  linear:{title:'Linear Search',tags:['Search','Sequential','Unsorted OK'],desc:'Checks each element in sequence from start to end until the target is found or the array ends. Works on unsorted arrays.',best:'O(1)',avg:'O(n)',worst:'O(n)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Not Checked'},{color:'var(--c-current)',label:'Checking'},{color:'var(--c-found)',label:'Found'},{color:'var(--c-elim)',label:'Not Match'}]},
  binary:{title:'Binary Search',tags:['Search','Iterative','Sorted Required'],desc:'Locates a target in a sorted array by repeatedly halving the search range. Compares the target with the midpoint and discards the irrelevant half.',best:'O(1)',avg:'O(log n)',worst:'O(log n)',space:'O(1)',legend:[{color:'var(--c-left)',label:'Left pointer'},{color:'var(--c-right)',label:'Right pointer'},{color:'var(--c-mid)',label:'Mid (checking)'},{color:'var(--c-found)',label:'Found'},{color:'var(--c-elim)',label:'Eliminated'}]},
  shell:{title:'Shell Sort',tags:['Comparison','In-Place','Unstable'],desc:'An optimization of insertion sort that compares elements separated by a gap, progressively reducing the gap until it becomes 1. Moves elements closer to their final position faster.',best:'O(n log n)',avg:'O(n^1.25)',worst:'O(n²)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-pivot)',label:'Key Element'},{color:'var(--c-comparing)',label:'Comparing'},{color:'var(--c-swapping)',label:'Swapping'},{color:'var(--c-sorted)',label:'Sorted'}]},
  cocktail:{title:'Cocktail Shaker Sort',tags:['Comparison','In-Place','Stable'],desc:'A bidirectional variant of bubble sort that traverses the array in both directions alternately. Moves small elements left and large elements right in each pass.',best:'O(n)',avg:'O(n²)',worst:'O(n²)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-comparing)',label:'Comparing'},{color:'var(--c-swapping)',label:'Swapping'},{color:'var(--c-sorted)',label:'Sorted'}]},
  comb:{title:'Comb Sort',tags:['Comparison','In-Place','Unstable'],desc:'Improves on bubble sort by using a shrinking gap to eliminate small values at the end (turtles). The gap starts large and shrinks by a factor of 1.3 each pass.',best:'O(n log n)',avg:'O(n²/2^p)',worst:'O(n²)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-comparing)',label:'Comparing'},{color:'var(--c-swapping)',label:'Swapping'},{color:'var(--c-sorted)',label:'Sorted'}]},
  jump:{title:'Jump Search',tags:['Search','Block Jump','Sorted Required'],desc:'Searches a sorted array by jumping ahead by fixed steps (√n), then performing a linear scan in the identified block. A balance between linear and binary search.',best:'O(1)',avg:'O(√n)',worst:'O(√n)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Not Checked'},{color:'var(--c-current)',label:'Checking'},{color:'var(--c-found)',label:'Found'},{color:'var(--c-elim)',label:'Eliminated'}]},
  bfs:{title:'Breadth-First Search',tags:['Pathfinding','Unweighted','Optimal'],desc:'Explores nodes level by level using a queue. Guarantees the shortest path in an unweighted grid. Visits all neighbors at distance d before any at d+1.',best:'O(V+E)',avg:'O(V+E)',worst:'O(V+E)',space:'O(V)',legend:[{color:'var(--c-sorted)',label:'Start'},{color:'var(--c-swapping)',label:'End'},{color:'var(--c-current)',label:'Visited'},{color:'var(--c-found)',label:'Path'},{color:'var(--ink)',label:'Wall'}]},
  dfs:{title:'Depth-First Search',tags:['Pathfinding','Unweighted','Non-Optimal'],desc:'Explores as far as possible along each branch before backtracking using a stack. Finds a path but not necessarily the shortest. Memory-efficient for deep graphs.',best:'O(V+E)',avg:'O(V+E)',worst:'O(V+E)',space:'O(V)',legend:[{color:'var(--c-sorted)',label:'Start'},{color:'var(--c-swapping)',label:'End'},{color:'var(--c-current)',label:'Visited'},{color:'var(--c-found)',label:'Path'},{color:'var(--ink)',label:'Wall'}]},
  dijkstra:{title:"Dijkstra's Algorithm",tags:['Pathfinding','Weighted','Optimal'],desc:'Finds the shortest weighted path using a priority queue. Greedily selects the unvisited node with the smallest distance. Handles weighted edges but not negative weights.',best:'O(V+E)',avg:'O((V+E)log V)',worst:'O((V+E)log V)',space:'O(V)',legend:[{color:'var(--c-sorted)',label:'Start'},{color:'var(--c-swapping)',label:'End'},{color:'var(--c-current)',label:'Visited'},{color:'var(--c-found)',label:'Path'},{color:'var(--c-heap)',label:'Weight'}]},
  astar:{title:'A* Search',tags:['Pathfinding','Heuristic','Optimal'],desc:'Combines Dijkstra with a heuristic (Manhattan distance). Uses f(n)=g(n)+h(n) to guide the search toward the goal. Optimal when the heuristic is admissible.',best:'O(V+E)',avg:'O((V+E)log V)',worst:'O((V+E)log V)',space:'O(V)',legend:[{color:'var(--c-sorted)',label:'Start'},{color:'var(--c-swapping)',label:'End'},{color:'var(--c-current)',label:'Visited'},{color:'var(--c-found)',label:'Path'},{color:'var(--c-heap)',label:'Weight'}]},
  gnome:{title:'Gnome Sort',tags:['Comparison','In-Place','Stable'],desc:'Works by moving forward through the array; when an inversion is found, it swaps and steps backward until order is restored, then moves forward again. Named after garden gnomes sorting flower pots.',best:'O(n)',avg:'O(n²)',worst:'O(n²)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-comparing)',label:'Comparing'},{color:'var(--c-swapping)',label:'Swapping'},{color:'var(--c-sorted)',label:'Sorted'}]},
  bucket:{title:'Bucket Sort',tags:['Non-Comparison','Stable','O(n+k) Space'],desc:'Distributes elements into a number of buckets, sorts each bucket individually (using insertion sort), then concatenates the results. Efficient when input is uniformly distributed.',best:'O(n+k)',avg:'O(n+k)',worst:'O(n²)',space:'O(n+k)',legend:[{color:'var(--c-default)',label:'Original'},{color:'var(--c-comparing)',label:'Distributing'},{color:'var(--c-bucket)',label:'Bucket'},{color:'var(--c-sorted)',label:'Sorted'}]},
  tim:{title:'Tim Sort',tags:['Hybrid','Stable','Adaptive'],desc:'A hybrid sorting algorithm combining insertion sort for small runs with merge sort for combining them. Used as the default sort in Python and Java. Adapts to partially sorted data.',best:'O(n)',avg:'O(n log n)',worst:'O(n log n)',space:'O(n)',legend:[{color:'var(--c-default)',label:'Unsorted'},{color:'var(--c-pivot)',label:'Key'},{color:'var(--c-comparing)',label:'Merging'},{color:'var(--c-left)',label:'Left Run'},{color:'var(--c-right)',label:'Right Run'},{color:'var(--c-sorted)',label:'Sorted'}]},
  pigeonhole:{title:'Pigeonhole Sort',tags:['Non-Comparison','Stable','O(n+range)'],desc:'Places each element into its corresponding "pigeonhole" based on value, then collects them in order. Efficient when the range of values is close to the number of elements.',best:'O(n+R)',avg:'O(n+R)',worst:'O(n+R)',space:'O(n+R)',legend:[{color:'var(--c-default)',label:'Original'},{color:'var(--c-comparing)',label:'Placing'},{color:'var(--c-bucket)',label:'Collecting'},{color:'var(--c-sorted)',label:'Sorted'}]},
  boyermoore:{title:'Boyer-Moore Majority Vote',tags:['Technique','O(n) Time','Voting'],desc:'Finds the majority element (appearing > n/2 times) in a single pass using a clever voting/cancellation strategy. Uses O(1) extra space.',best:'O(n)',avg:'O(n)',worst:'O(n)',space:'O(1)',legend:[{color:'var(--c-comparing)',label:'Checking'},{color:'var(--c-pivot)',label:'Candidate'},{color:'var(--c-found)',label:'Majority'},{color:'var(--c-elim)',label:'Cancelled'}]},
  mergeintervals:{title:'Merge Intervals',tags:['Technique','O(n log n)','Greedy'],desc:'Sorts intervals by start time, then merges overlapping intervals in a single scan. A classic greedy algorithm used in scheduling and range problems.',best:'O(n log n)',avg:'O(n log n)',worst:'O(n log n)',space:'O(n)',legend:[{color:'var(--c-default)',label:'Original'},{color:'var(--c-comparing)',label:'Comparing'},{color:'var(--c-swapping)',label:'Overlapping'},{color:'var(--c-bucket)',label:'New Interval'},{color:'var(--c-found)',label:'Merged'}]},
  reservoir:{title:'Reservoir Sampling',tags:['Technique','O(n) Time','Randomized'],desc:'Selects k items uniformly at random from a stream of unknown length. Each element has equal probability of being in the final sample. Used in streaming and big data.',best:'O(n)',avg:'O(n)',worst:'O(n)',space:'O(k)',legend:[{color:'var(--c-comparing)',label:'Stream'},{color:'var(--c-found)',label:'Reservoir'},{color:'var(--c-swapping)',label:'Replaced'},{color:'var(--c-elim)',label:'Skipped'}]},
  interpolation:{title:'Interpolation Search',tags:['Search','Probing','Sorted Required'],desc:'Estimates the position of the target using linear interpolation of values. Much faster than binary search for uniformly distributed data, approaching O(log log n).',best:'O(1)',avg:'O(log log n)',worst:'O(n)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Not Checked'},{color:'var(--c-left)',label:'Left'},{color:'var(--c-right)',label:'Right'},{color:'var(--c-mid)',label:'Probe (checking)'},{color:'var(--c-found)',label:'Found'},{color:'var(--c-elim)',label:'Eliminated'}]},
  exponential:{title:'Exponential Search',tags:['Search','Doubling','Sorted Required'],desc:'Finds the range by exponentially increasing the bound, then performs binary search within that range. Ideal for unbounded or very large sorted arrays.',best:'O(1)',avg:'O(log n)',worst:'O(log n)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Not Checked'},{color:'var(--c-current)',label:'Bound'},{color:'var(--c-left)',label:'Left'},{color:'var(--c-right)',label:'Right'},{color:'var(--c-mid)',label:'Mid'},{color:'var(--c-found)',label:'Found'},{color:'var(--c-elim)',label:'Eliminated'}]},
  ternary:{title:'Ternary Search',tags:['Search','Divide-by-3','Sorted Required'],desc:'Divides the search space into three equal parts using two midpoints. Eliminates one-third of the range each iteration. Useful for unimodal function optimization.',best:'O(1)',avg:'O(log₃ n)',worst:'O(log₃ n)',space:'O(1)',legend:[{color:'var(--c-default)',label:'Not Checked'},{color:'var(--c-left)',label:'Left'},{color:'var(--c-right)',label:'Right'},{color:'var(--c-mid)',label:'Mid Points'},{color:'var(--c-found)',label:'Found'},{color:'var(--c-elim)',label:'Eliminated'}]},
};

// ═══════════════════════════════════════════════
//  CONSTANTS & STATE
// ═══════════════════════════════════════════════
const SORT_ALGOS      = new Set(['bubble','selection','insertion','merge','quick','counting','heap','radix','shell','cocktail','comb','gnome','bucket','tim','pigeonhole']);
const TECHNIQUE_ALGOS = new Set(['twopointers','slidingwindow','kadane','prefixsum','frequencycounter','dutchflag','boyermoore','mergeintervals','reservoir']);
const SEARCH_ALGOS    = new Set(['linear','binary','jump','interpolation','exponential','ternary']);
const GRID_ALGOS      = new Set(['linear','binary','jump','interpolation','exponential','ternary']);
const PATHFIND_ALGOS  = new Set(['bfs','dfs','dijkstra','astar']);
const SPEEDS = {1:800,2:380,3:160,4:50,5:8};
const SPEED_LABELS = {1:'Very Slow',2:'Slow',3:'Medium',4:'Fast',5:'Instant'};

let algo='bubble', arr=[], steps=[], stepIdx=0, running=false, paused=false;
let narrateMode=false;

/* Pathfinding state */
const PF_ROWS=20, PF_COLS=35;
let pfGrid=[], pfAlgo='bfs', pfRunning=false, pfPaused=false;
let pfStart=[9,3], pfEnd=[9,31], pfTool='wall', pfDragging=null, pfMouseDown=false;

const $=id=>document.getElementById(id);
const statusDot=  $('statusDot'),   statusText= $('statusText'),  stepInfo=    $('stepInfo');
const sizeSlider= $('sizeSlider'),  sizeVal=    $('sizeVal'),     speedSlider= $('speedSlider');
const speedVal=   $('speedVal'),    runBtn=     $('runBtn'),       stepBtn=     $('stepBtn');
const stepBackBtn=$('stepBackBtn'), pauseBtn=   $('pauseBtn'),     resetBtn=    $('resetBtn');
const shuffleBtn= $('shuffleBtn'),  windowSlider=$('windowSlider'),windowSizeVal=$('windowSizeVal');

const rand    = (a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const randArr = n=>Array.from({length:n},()=>rand(10,99));
const sleep   = ms=>new Promise(r=>setTimeout(r,ms));

function updateSidebar(a) {
  const m=META[a];
  $('algoTitle').textContent=m.title;
  $('algoTags').innerHTML=m.tags.map(t=>`<span class="tag">${t}</span>`).join('');
  $('algoDesc').textContent=m.desc;
  $('cxGrid').innerHTML=`
    <div class="cx-cell"><div class="cx-label">Best</div><div class="cx-val">${m.best}</div></div>
    <div class="cx-cell"><div class="cx-label">Average</div><div class="cx-val">${m.avg}</div></div>
    <div class="cx-cell"><div class="cx-label">Worst</div><div class="cx-val">${m.worst}</div></div>
    <div class="cx-cell"><div class="cx-label">Space</div><div class="cx-val">${m.space}</div></div>`;
  $('legendList').innerHTML=m.legend.map(l=>`
    <div class="legend-row"><div class="legend-swatch" style="background:${l.color}"></div>${l.label}</div>`).join('');

  const isSearch=SEARCH_ALGOS.has(a), isTechnique=TECHNIQUE_ALGOS.has(a), isPathfind=PATHFIND_ALGOS.has(a);
  $('targetCtrl').style.display    = isSearch          ? 'block':'none';
  $('targetSumCtrl').style.display = a==='twopointers' ? 'block':'none';
  $('windowCtrl').style.display    = a==='slidingwindow'?'block':'none';
  $('sizeCtrl').style.display      = (isSearch||isTechnique||isPathfind)?'none':'block';
  $('customCtrl').style.display    = isPathfind?'none':'block';
  $('presetCtrl').style.display    = SORT_ALGOS.has(a) ? 'block':'none';
  if(SORT_ALGOS.has(a)){
    $('presetBest').innerHTML  =`Best <span class="preset-case">(${m.best})</span>`;
    $('presetAvg').innerHTML   =`Avg <span class="preset-case">(${m.avg})</span>`;
    $('presetWorst').innerHTML =`Worst <span class="preset-case">(${m.worst})</span>`;
    $('presetEqual').innerHTML =`Equal <span class="preset-case">(edge)</span>`;
  }
}

function setStatus(msg, state='idle') {
  statusText.textContent=msg;
  statusDot.className='status-dot'+(state==='running'?' running':state==='done'?' done':state==='error'?' error':'');
}

function updateStepInfo() {
  stepInfo.textContent=steps.length?`${stepIdx} / ${steps.length}`:'— / —';
}

function resetButtonStates() {
  running=false; paused=false;
  runBtn.disabled     =false;
  stepBtn.disabled    =false;
  stepBackBtn.disabled=(stepIdx<=0);
  pauseBtn.disabled   =true;
  pauseBtn.textContent='Pause';
}

// ═══════════════════════════════════════════════
//  RENDERING
// ═══════════════════════════════════════════════
function renderBars(a, hl={}) {
  const maxV=Math.max(...a,1);
  const canvasEl=$('vizCanvas');
  const H=Math.max(60,(canvasEl.clientHeight||320)-48);
  const W=Math.max(60,(canvasEl.clientWidth||700)-32);
  const n=a.length;
  const gap=n>50?1:n>30?2:3;
  const bw=Math.max(3,Math.floor((W-gap*(n-1))/n));

  canvasEl.innerHTML='';
  canvasEl.style.alignItems='flex-end';
  canvasEl.style.gap=gap+'px';

  a.forEach((v,i)=>{
    const bar=document.createElement('div');
    bar.className='bar';
    bar.style.width=bw+'px';
    bar.style.height=Math.max(4,Math.round((v/maxV)*H))+'px';

    // FIXED: leftptr/rightptr moved above comparing
    if      (hl.sorted    &&hl.sorted.includes(i))          bar.classList.add('st-sorted');
    else if (hl.found     &&hl.found.includes(i))           bar.classList.add('st-found');
    else if (hl.pivot     !==undefined&&hl.pivot===i)        bar.classList.add('st-pivot');
    else if (hl.heap      &&hl.heap.includes(i))            bar.classList.add('st-heap');
    else if (hl.bestWindow&&hl.bestWindow.includes(i))      bar.classList.add('st-best-window');
    else if (hl.window    &&hl.window.includes(i))          bar.classList.add('st-window');
    else if (hl.swapping  &&hl.swapping.includes(i))        bar.classList.add('st-swapping');
    else if (hl.leftptr   !==undefined&&hl.leftptr===i)     bar.classList.add('st-leftptr');
    else if (hl.rightptr  !==undefined&&hl.rightptr===i)    bar.classList.add('st-rightptr');
    else if (hl.comparing &&hl.comparing.includes(i))       bar.classList.add('st-comparing');
    else if (hl.current   !==undefined&&hl.current===i)     bar.classList.add('st-current');
    else if (hl.leftpart  &&hl.leftpart.includes(i))        bar.classList.add('st-leftpart');
    else if (hl.rightpart &&hl.rightpart.includes(i))       bar.classList.add('st-rightpart');
    else if (hl.left      &&hl.left.includes(i))            bar.classList.add('st-leftpart');
    else if (hl.right     &&hl.right.includes(i))           bar.classList.add('st-rightpart');
    else if (hl.bucket    &&hl.bucket.includes(i))          bar.classList.add('st-bucket');
    else if (hl.eliminated&&hl.eliminated.includes(i))      bar.classList.add('st-elim');
    else {
      bar.classList.add('st-default');
    }

    if(bw>=20&&n<=28){
      const lbl=document.createElement('div');
      lbl.className='bar-val'; lbl.textContent=v;
      bar.appendChild(lbl);
    }
    bar.dataset.tipText=`Val: ${v} | Idx: ${i}`;
    canvasEl.appendChild(bar);
  });

  // Shared tooltip (element created once, listeners attached once via delegation)
  let sharedTip=canvasEl.querySelector('.bar-tooltip');
  if(!sharedTip){
    sharedTip=document.createElement('div');
    sharedTip.className='bar-tooltip';
    canvasEl.appendChild(sharedTip);
    canvasEl.addEventListener('mouseover',e=>{
      const bar=e.target.closest('.bar');
      if(!bar||!bar.dataset.tipText)return;
      const tip=canvasEl.querySelector('.bar-tooltip');
      if(!tip) return;
      tip.textContent=bar.dataset.tipText;
      const cRect=canvasEl.getBoundingClientRect();
      const bRect=bar.getBoundingClientRect();
      let left=bRect.left-cRect.left+bRect.width/2;
      const tipW=tip.offsetWidth||80;
      left=Math.max(tipW/2+4,Math.min(left,cRect.width-tipW/2-4));
      let top=bRect.top-cRect.top-28;
      if(top<2) top=bRect.top-cRect.top+6;
      tip.style.left=left+'px';
      tip.style.top=top+'px';
      tip.style.opacity='1';
    });
    canvasEl.addEventListener('mouseout',e=>{
      const bar=e.target.closest('.bar');
      if(!bar) return;
      const tip=canvasEl.querySelector('.bar-tooltip');
      if(tip) tip.style.opacity='0';
    });
  }

  // Draw swap arc animation
  if(hl.swapping&&hl.swapping.length>=2){
    requestAnimationFrame(()=>{
      const bars=canvasEl.querySelectorAll('.bar');
      const idxA=hl.swapping[0], idxB=hl.swapping[1];
      const barA=bars[idxA], barB=bars[idxB];
      if(!barA||!barB) return;
      const rectC=canvasEl.getBoundingClientRect();
      const rA=barA.getBoundingClientRect(), rB=barB.getBoundingClientRect();
      const x1=rA.left+rA.width/2-rectC.left;
      const x2=rB.left+rB.width/2-rectC.left;
      const y1=rA.top-rectC.top;
      const y2=rB.top-rectC.top;
      const arcH=Math.min(40,Math.abs(x2-x1)*0.35);
      const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('class','swap-arc-svg');
      svg.setAttribute('width',canvasEl.clientWidth);
      svg.setAttribute('height',canvasEl.clientHeight);
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');
      const cy=Math.min(y1,y2)-arcH;
      path.setAttribute('d',`M${x1},${y1} Q${(x1+x2)/2},${cy} ${x2},${y2}`);
      path.setAttribute('class','swap-arc-path');
      const len=path.getTotalLength?.()??100;
      path.style.strokeDasharray=len;
      path.style.strokeDashoffset=len;
      svg.appendChild(path);
      canvasEl.appendChild(svg);
      requestAnimationFrame(()=>path.style.strokeDashoffset='0');
      setTimeout(()=>svg.remove(),500);
    });
  }

  /* Bar dragging — only when idle. Uses delegation on canvasEl. */
  if(!running&&!paused&&SORT_ALGOS.has(algo)){
    const bars=canvasEl.querySelectorAll('.bar');
    bars.forEach((bar,idx)=>{
      bar.draggable=true;
      bar.dataset.idx=idx;
    });
  }
}

function renderGrid(a, state={}) {
  const canvasEl=$('vizCanvas');
  canvasEl.innerHTML='';
  canvasEl.style.alignItems='center';
  canvasEl.style.gap='0';
  const grid=document.createElement('div');
  grid.className='bin-grid';

  a.forEach((v,i)=>{
    const cell=document.createElement('div');
    cell.className='bin-cell';
    cell.textContent=v;
    const idx=document.createElement('div');
    idx.className='cell-idx'; idx.textContent=i;
    cell.appendChild(idx);

    const elim=state.eliminated&&state.eliminated.includes(i);
    if      (state.found===i)   cell.classList.add('bc-found');
    else if (elim)              cell.classList.add('bc-elim');
    else if (state.current===i) cell.classList.add('bc-current');
    else if (state.mid===i)     cell.classList.add('bc-mid');
    else if (i===state.left)    cell.classList.add('bc-left');
    else if (i===state.right)   cell.classList.add('bc-right');

    const ptrs=[];
    if(i===state.left &&!elim&&state.mid!==i&&state.found!==i) ptrs.push({text:'L',  color:'var(--c-left)'});
    if(i===state.right&&!elim&&state.mid!==i&&state.found!==i) ptrs.push({text:'R',  color:'var(--c-right)'});
    if(i===state.mid  &&!elim&&state.found!==i)                ptrs.push({text:'MID',color:'var(--c-mid)'});
    if(i===state.current&&!elim&&state.found!==i)              ptrs.push({text:'→',  color:'var(--c-current)'});
    if(state.found===i)                                        ptrs.push({text:'FOUND',color:'var(--c-found)'});
    if(ptrs.length){
      const p=document.createElement('div');
      p.className='bin-pointer'; p.style.color=ptrs[0].color;
      p.textContent=ptrs.map(x=>x.text).join('/');
      cell.appendChild(p);
    }
    grid.appendChild(cell);
  });
  canvasEl.appendChild(grid);
}

/* Delegated drag listeners on vizCanvas — set up once */
(function initDragDelegation(){
  const vc=$('vizCanvas');
  if(!vc) return;
  vc.addEventListener('dragstart',e=>{
    const bar=e.target.closest('.bar[draggable="true"]');
    if(!bar) return;
    e.dataTransfer.setData('text/plain',bar.dataset.idx);
    bar.classList.add('bar-dragging');
  });
  vc.addEventListener('dragend',e=>{
    const bar=e.target.closest('.bar');
    if(bar) bar.classList.remove('bar-dragging');
  });
  vc.addEventListener('dragover',e=>{
    const bar=e.target.closest('.bar[draggable="true"]');
    if(!bar) return;
    e.preventDefault();
    bar.classList.add('bar-dragover');
  });
  vc.addEventListener('dragleave',e=>{
    const bar=e.target.closest('.bar');
    if(bar) bar.classList.remove('bar-dragover');
  });
  vc.addEventListener('drop',e=>{
    const bar=e.target.closest('.bar[draggable="true"]');
    if(!bar) return;
    e.preventDefault();
    bar.classList.remove('bar-dragover');
    const from=+e.dataTransfer.getData('text/plain');
    const to=+bar.dataset.idx;
    if(from!==to){
      const tmp=arr[from]; arr[from]=arr[to]; arr[to]=tmp;
      steps=[]; stepIdx=0;
      renderBars(arr,{});
      updateStepInfo();
    }
  });
})();

// ═══════════════════════════════════════════════
//  RECURSION TREE RENDERER
// ═══════════════════════════════════════════════
function renderRecursionTree(treeNodes, activeNodeId) {
  const panel=$('recTreePanel');
  const body=$('recTreeBody');
  const canvas=$('recTreeCanvas');
  if(!panel||!canvas||panel.classList.contains('hidden')) return;
  if(body.classList.contains('collapsed')) return;

  const ctx=canvas.getContext('2d');
  const dpr=window.devicePixelRatio||1;
  const nodes=treeNodes;
  if(!nodes||!nodes.length) return;

  /* Layout: assign x,y to each node */
  const NODE_W=52, NODE_H=24, LEVEL_H=44, GAP_X=8;
  const isDark=document.documentElement.getAttribute('data-theme')==='dark';

  /* Children lookup */
  const childMap=new Map();
  for(const n of nodes){
    if(n.parentId!==null){
      if(!childMap.has(n.parentId)) childMap.set(n.parentId,[]);
      childMap.get(n.parentId).push(n);
    }
  }

  /* Compute subtree widths + positions via post-order */
  const widths=new Map();
  function subtreeW(node){
    const ch=childMap.get(node.id)||[];
    if(ch.length===0){widths.set(node.id,NODE_W);return NODE_W;}
    let total=0;
    for(const c of ch) total+=subtreeW(c)+GAP_X;
    total-=GAP_X;
    const w=Math.max(NODE_W,total);
    widths.set(node.id,w);
    return w;
  }
  const root=nodes.find(n=>n.parentId===null);
  if(!root) return;
  subtreeW(root);

  function assignPos(node,x,y){
    const w=widths.get(node.id);
    node._x=x+w/2; node._y=y;
    const ch=childMap.get(node.id)||[];
    let cx=x;
    for(const c of ch){
      const cw=widths.get(c.id);
      assignPos(c,cx,y+LEVEL_H);
      cx+=cw+GAP_X;
    }
  }
  assignPos(root,0,12);

  const maxDepth=Math.max(...nodes.map(n=>n.depth));
  const totalW=widths.get(root.id);
  const totalH=(maxDepth+1)*LEVEL_H+24;
  const containerW=body.clientWidth||400;
  const scale=Math.min(1,containerW/(totalW+24));
  const drawW=Math.max(containerW,totalW+24);

  canvas.width=drawW*dpr;
  canvas.height=totalH*dpr;
  canvas.style.width=drawW+'px';
  canvas.style.height=totalH+'px';
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,drawW,totalH);

  if(scale<1){ctx.save();ctx.translate((containerW-totalW*scale)/2,0);ctx.scale(scale,scale);}
  else ctx.save();

  /* Colors by state */
  const stateColors={
    idle:     isDark?'#363a4a':'#c2c7d2',
    active:   isDark?'#6b8aff':'#4f6ef7',
    splitting:isDark?'#d4911a':'#e5a326',
    merging:  isDark?'#2563eb':'#3b82f6',
    done:     isDark?'#16a34a':'#22c55e'
  };
  const textCol=isDark?'#e6e8f0':'#111318';
  const edgeCol=isDark?'#2c3042':'#c2c7d2';
  const activeGlow=isDark?'rgba(107,138,255,.3)':'rgba(79,110,247,.25)';

  /* Draw edges */
  ctx.lineWidth=1.5;
  ctx.strokeStyle=edgeCol;
  for(const n of nodes){
    if(n.parentId!==null){
      const p=nodes.find(x=>x.id===n.parentId);
      if(p){
        ctx.beginPath();
        ctx.moveTo(p._x,p._y+NODE_H);
        ctx.lineTo(n._x,n._y);
        ctx.stroke();
      }
    }
  }

  /* Draw nodes */
  ctx.textAlign='center'; ctx.textBaseline='middle';
  for(const n of nodes){
    const x=n._x-NODE_W/2, y=n._y;
    const col=stateColors[n.state]||stateColors.idle;

    if(n.id===activeNodeId){
      ctx.fillStyle=activeGlow;
      roundRect(ctx,x-3,y-3,NODE_W+6,NODE_H+6,10);
      ctx.fill();
    }

    ctx.fillStyle=col;
    roundRect(ctx,x,y,NODE_W,NODE_H,6);
    ctx.fill();

    /* Label: show array values or range */
    let label=n.label||`${n.l}..${n.r}`;
    if(label.length>8) label=`${n.l}..${n.r}`;
    ctx.fillStyle='#fff';
    ctx.font='bold 9px JetBrains Mono,monospace';
    ctx.fillText(label,n._x,n._y+NODE_H/2);
  }

  ctx.restore();
}

function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}

/* Collapse toggle for recursion tree */
document.addEventListener('click',e=>{
  if(e.target.closest('#recTreeCollapse')){
    const body=$('recTreeBody');
    body.classList.toggle('collapsed');
    $('recTreeCollapse').textContent=body.classList.contains('collapsed')?'▸':'▾';
  }
});

/* Hide/show toggle for the algorithm description sidebar.
   Collapsing it hands its space back to the visualization & code panel;
   showing it again snaps the layout back to its default proportions. */
(function initSidebarToggle(){
  const sidebarToggle=$('sidebarToggle');
  const bodyGrid=document.querySelector('.body-grid');
  if(!sidebarToggle||!bodyGrid) return;

  function setCollapsed(collapsed){
    bodyGrid.classList.toggle('sidebar-collapsed',collapsed);
    sidebarToggle.setAttribute('aria-expanded',String(!collapsed));
    sidebarToggle.title=collapsed?'Show algorithm panel':'Hide algorithm panel';
    try{localStorage.setItem('algosight_sidebar_collapsed',collapsed?'1':'0');}catch(e){}
  }

  sidebarToggle.addEventListener('click',()=>{
    setCollapsed(!bodyGrid.classList.contains('sidebar-collapsed'));
  });

  try{
    if(localStorage.getItem('algosight_sidebar_collapsed')==='1') setCollapsed(true);
  }catch(e){}
})();

// ═══════════════════════════════════════════════
//  ALGORITHM GENERATORS
// ═══════════════════════════════════════════════
function* bubbleGen(a) {
  a=[...a]; const n=a.length; const s=[];
  for(let i=0;i<n-1;i++){
    let sw=false;
    for(let j=0;j<n-i-1;j++){
      yield {arr:[...a],hl:{comparing:[j,j+1],sorted:[...s]},msg:`Compare ${a[j]} ↔ ${a[j+1]}`};
      if(a[j]>a[j+1]){
        yield {arr:[...a],hl:{swapping:[j,j+1],sorted:[...s]},msg:`Swap ${a[j]} and ${a[j+1]}`};
        [a[j],a[j+1]]=[a[j+1],a[j]]; sw=true;
      }
    }
    s.unshift(n-1-i);
    yield {arr:[...a],hl:{sorted:[...s]},msg:`Pass ${i+1} done — ${a[n-1-i]} in final position`};
    if(!sw) break;
  }
  yield {arr:[...a],hl:{sorted:[...Array(a.length).keys()]},msg:'Sorted ✓'};
}

function* selectionGen(a) {
  a=[...a]; const n=a.length; const s=[];
  for(let i=0;i<n-1;i++){
    let mi=i;
    yield {arr:[...a],hl:{current:mi,sorted:[...s]},msg:`Looking for minimum in indices ${i}..${n-1}`};
    for(let j=i+1;j<n;j++){
      yield {arr:[...a],hl:{comparing:[j],current:mi,sorted:[...s]},msg:`Compare ${a[j]} with current min ${a[mi]}`};
      if(a[j]<a[mi]){mi=j; yield {arr:[...a],hl:{current:mi,sorted:[...s]},msg:`New min: ${a[mi]} at index ${mi}`};}
    }
    if(mi!==i){
      yield {arr:[...a],hl:{swapping:[i,mi],sorted:[...s]},msg:`Swap ${a[i]} ↔ ${a[mi]}`};
      [a[i],a[mi]]=[a[mi],a[i]];
    }
    s.push(i);
    yield {arr:[...a],hl:{sorted:[...s]},msg:`${a[i]} placed at index ${i}`};
  }
  s.push(n-1);
  yield {arr:[...a],hl:{sorted:[...s]},msg:'Sorted ✓'};
}

function* insertionGen(a) {
  a=[...a]; const n=a.length; const s=[0];
  yield {arr:[...a],hl:{sorted:[...s]},msg:'First element is already sorted'};
  for(let i=1;i<n;i++){
    const key=a[i];
    yield {arr:[...a],hl:{pivot:i,sorted:[...s]},msg:`Insert ${key} into sorted prefix`};
    let j=i-1;
    while(j>=0&&a[j]>key){
      yield {arr:[...a],hl:{comparing:[j,j+1],sorted:s.filter(x=>x<j)},msg:`${a[j]} > ${key}, shift right`};
      a[j+1]=a[j]; j--;
      yield {arr:[...a],hl:{pivot:j+1,sorted:s.filter(x=>x<=j)},msg:`Shifted — key position: ${j+1}`};
    }
    a[j+1]=key; s.push(i); s.sort((x,y)=>x-y);
    yield {arr:[...a],hl:{sorted:[...s]},msg:`${key} inserted at index ${j+1}`};
  }
  yield {arr:[...a],hl:{sorted:[...Array(a.length).keys()]},msg:'Sorted ✓'};
}

function* mergeGen(a) {
  a=[...a]; const out=[];
  const treeNodes=[]; let nid=0;
  function addNode(l,r,pid,d){const id=nid++;treeNodes.push({id,l,r,parentId:pid,depth:d,state:'idle',label:a.slice(l,r+1).join(',')});return id;}
  function setNS(id,st,lbl){const n=treeNodes.find(x=>x.id===id);if(n){n.state=st;if(lbl!==undefined)n.label=lbl;}}
  function cloneT(){return treeNodes.map(n=>({...n}));}
  const rootId=addNode(0,a.length-1,null,0);
  function ms(arr,l,r,nodeId,depth){
    if(l>=r){setNS(nodeId,'done');return;}
    setNS(nodeId,'splitting');
    const m=Math.floor((l+r)/2);
    const leftId=addNode(l,m,nodeId,depth+1);
    const rightId=addNode(m+1,r,nodeId,depth+1);
    out.push({arr:[...arr],hl:{leftpart:[...Array(m-l+1).keys()].map(i=>l+i),rightpart:[...Array(r-m).keys()].map(i=>m+1+i)},msg:`Split [${l}..${r}] → [${l}..${m}] + [${m+1}..${r}]`,tree:cloneT(),activeNode:nodeId});
    ms(arr,l,m,leftId,depth+1);
    ms(arr,m+1,r,rightId,depth+1);
    setNS(nodeId,'merging');
    const L=arr.slice(l,m+1),R=arr.slice(m+1,r+1);
    const li=[...Array(L.length).keys()].map(i=>l+i);
    const ri=[...Array(R.length).keys()].map(i=>m+1+i);
    out.push({arr:[...arr],hl:{leftpart:li,rightpart:ri},msg:`Merge [${L}] + [${R}]`,tree:cloneT(),activeNode:nodeId});
    let i=0,j=0,k=l;
    while(i<L.length&&j<R.length){
      out.push({arr:[...arr],hl:{comparing:[l+i,m+1+j],leftpart:li,rightpart:ri},msg:`Compare ${L[i]} ↔ ${R[j]}`,tree:cloneT(),activeNode:nodeId});
      if(L[i]<=R[j]) arr[k++]=L[i++]; else arr[k++]=R[j++];
    }
    while(i<L.length) arr[k++]=L[i++];
    while(j<R.length) arr[k++]=R[j++];
    const merged=[...Array(r-l+1).keys()].map(i=>l+i);
    setNS(nodeId,'done',arr.slice(l,r+1).join(','));
    out.push({arr:[...arr],hl:{sorted:merged},msg:`Merged → [${arr.slice(l,r+1)}]`,tree:cloneT(),activeNode:nodeId});
  }
  ms(a,0,a.length-1,rootId,0);
  yield* out;
  yield {arr:[...a],hl:{sorted:[...Array(a.length).keys()]},msg:'Sorted ✓',tree:cloneT(),activeNode:null};
}

function* quickGen(a) {
  a=[...a]; const out=[],gs=new Set();
  const treeNodes=[]; let nid=0;
  function addNode(l,r,pid,d){const id=nid++;treeNodes.push({id,l,r,parentId:pid,depth:d,state:'idle',label:a.slice(l,r+1).join(',')});return id;}
  function setNS(id,st,lbl){const n=treeNodes.find(x=>x.id===id);if(n){n.state=st;if(lbl!==undefined)n.label=lbl;}}
  function cloneT(){return treeNodes.map(n=>({...n}));}
  const rootId=addNode(0,a.length-1,null,0);
  function qs(arr,lo,hi,nodeId,depth){
    if(lo>=hi){if(lo>=0&&lo<arr.length) gs.add(lo); setNS(nodeId,'done',lo<=hi?arr.slice(lo,hi+1).join(','):''); return;}
    setNS(nodeId,'active');
    const pv=arr[hi];
    out.push({arr:[...arr],hl:{pivot:hi,sorted:[...gs]},msg:`Pivot: ${pv} at index ${hi}`,tree:cloneT(),activeNode:nodeId});
    let i=lo-1;
    for(let j=lo;j<hi;j++){
      out.push({arr:[...arr],hl:{comparing:[j,hi],pivot:hi,sorted:[...gs]},msg:`Compare ${arr[j]} with pivot ${pv}`,tree:cloneT(),activeNode:nodeId});
      if(arr[j]<=pv){
        i++;
        if(i!==j){
          out.push({arr:[...arr],hl:{swapping:[i,j],pivot:hi,sorted:[...gs]},msg:`Swap ${arr[i]} ↔ ${arr[j]}`,tree:cloneT(),activeNode:nodeId});
          [arr[i],arr[j]]=[arr[j],arr[i]];
        }
      }
    }
    [arr[i+1],arr[hi]]=[arr[hi],arr[i+1]]; gs.add(i+1);
    setNS(nodeId,'done',String(arr[i+1]));
    out.push({arr:[...arr],hl:{sorted:[...gs],pivot:i+1},msg:`Pivot ${arr[i+1]} in final position (index ${i+1})`,tree:cloneT(),activeNode:nodeId});
    const leftId=addNode(lo,i,nodeId,depth+1);
    const rightId=addNode(i+2,hi,nodeId,depth+1);
    qs(arr,lo,i,leftId,depth+1);
    qs(arr,i+2,hi,rightId,depth+1);
  }
  qs(a,0,a.length-1,rootId,0);
  yield* out;
  yield {arr:[...a],hl:{sorted:[...Array(a.length).keys()]},msg:'Sorted ✓',tree:cloneT(),activeNode:null};
}

// FIX 3: Use fill(1) not fill(min) for placeholder bars
function* countingGen(a) {
  a=[...a]; const n=a.length;
  const min=Math.min(...a),max=Math.max(...a),range=max-min+1;
  yield {arr:[...a],hl:{},msg:`Range: ${min} to ${max} (${range} values)`};
  const count=Array(range).fill(0);
  for(let i=0;i<n;i++){
    count[a[i]-min]++;
    yield {arr:[...a],hl:{bucket:[i]},msg:`Count ${a[i]}: now ${count[a[i]-min]} occurrences`};
  }
  yield {arr:[...a],hl:{},msg:'Building output array...'};
  const output=[];
  for(let i=0;i<range;i++){
    const val=i+min;
    for(let j=0;j<count[i];j++){
      output.push(val);
      // FIXED: Pad with 1 (minimum bar height) not 'min'
      const display=[...output,...Array(n-output.length).fill(1)];
      yield {arr:display,hl:{comparing:[output.length-1]},msg:`Place ${val} at position ${output.length-1}`};
    }
  }
  yield {arr:[...output],hl:{sorted:[...Array(n).keys()]},msg:'Sorted ✓'};
}

function* heapifyGen(a, n, i, sorted) {
  let largest=i;
  const l=2*i+1, r=2*i+2;
  if(l<n){
    yield {arr:[...a],hl:{comparing:[largest,l],heap:[i],sorted:[...sorted]},msg:`Compare ${a[largest]} ↔ ${a[l]}`};
    if(a[l]>a[largest]) largest=l;
  }
  if(r<n){
    yield {arr:[...a],hl:{comparing:[largest,r],heap:[i],sorted:[...sorted]},msg:`Compare ${a[largest]} ↔ ${a[r]}`};
    if(a[r]>a[largest]) largest=r;
  }
  if(largest!==i){
    yield {arr:[...a],hl:{swapping:[i,largest],sorted:[...sorted]},msg:`Swap ${a[i]} ↔ ${a[largest]}`};
    [a[i],a[largest]]=[a[largest],a[i]];
    yield* heapifyGen(a,n,largest,sorted);
  }
}

function* heapGen(a) {
  a=[...a]; const n=a.length;
  yield {arr:[...a],hl:{},msg:'Building max-heap...'};
  for(let i=Math.floor(n/2)-1;i>=0;i--) yield* heapifyGen(a,n,i,[]);
  yield {arr:[...a],hl:{heap:[...Array(n).keys()]},msg:'Max-heap built'};
  const sorted=[];
  for(let i=n-1;i>0;i--){
    yield {arr:[...a],hl:{swapping:[0,i],sorted:[...sorted]},msg:`Extract max: swap ${a[0]} ↔ ${a[i]}`};
    [a[0],a[i]]=[a[i],a[0]];
    sorted.unshift(i);
    yield* heapifyGen(a,i,0,sorted);
  }
  sorted.unshift(0);
  yield {arr:[...a],hl:{sorted:[...Array(n).keys()]},msg:'Sorted ✓'};
}

function* radixGen(a) {
  a=[...a]; const n=a.length;
  const max=Math.max(...a);
  const digits=max.toString().length;
  yield {arr:[...a],hl:{},msg:`Max value: ${max} → ${digits} digit pass(es)`};
  for(let d=0;d<digits;d++){
    const exp=Math.pow(10,d);
    const dName=d===0?'ones':d===1?'tens':d===2?'hundreds':`10^${d}`;
    const buckets=Array.from({length:10},()=>[]);
    for(let i=0;i<n;i++){
      const digit=Math.floor(a[i]/exp)%10;
      yield {arr:[...a],hl:{comparing:[i]},msg:`${a[i]} → ${dName} digit = ${digit} → bucket ${digit}`};
      buckets[digit].push(a[i]);
    }
    let idx=0;
    for(let b=0;b<10;b++){
      for(let j=0;j<buckets[b].length;j++){
        a[idx]=buckets[b][j];
        yield {arr:[...a],hl:{bucket:[idx]},msg:`Place ${buckets[b][j]} from bucket ${b}`};
        idx++;
      }
    }
    yield {arr:[...a],hl:{},msg:`Pass ${d+1} (${dName}) complete`};
  }
  yield {arr:[...a],hl:{sorted:[...Array(n).keys()]},msg:'Sorted ✓'};
}

function* shellGen(a) {
  a=[...a]; const n=a.length;
  let gap=Math.floor(n/2);
  while(gap>0){
    yield {arr:[...a],hl:{},msg:`Gap = ${gap}`};
    for(let i=gap;i<n;i++){
      const temp=a[i];
      yield {arr:[...a],hl:{pivot:i},msg:`Key: ${temp} at index ${i} (gap=${gap})`};
      let j=i;
      while(j>=gap&&a[j-gap]>temp){
        yield {arr:[...a],hl:{comparing:[j,j-gap],pivot:i},msg:`Compare ${a[j-gap]} > ${temp}: shift`};
        a[j]=a[j-gap];
        yield {arr:[...a],hl:{swapping:[j,j-gap]},msg:`Move ${a[j]} → index ${j}`};
        j-=gap;
      }
      a[j]=temp;
    }
    yield {arr:[...a],hl:{},msg:`Gap ${gap} pass complete`};
    gap=Math.floor(gap/2);
  }
  yield {arr:[...a],hl:{sorted:[...Array(n).keys()]},msg:'Sorted ✓'};
}

function* cocktailGen(a) {
  a=[...a]; const n=a.length;
  let start=0,end=n-1,swapped=true;
  const sorted=new Set();
  while(swapped){
    swapped=false;
    yield {arr:[...a],hl:{sorted:[...sorted]},msg:`Forward pass: index ${start} → ${end}`};
    for(let i=start;i<end;i++){
      yield {arr:[...a],hl:{comparing:[i,i+1],sorted:[...sorted]},msg:`Compare ${a[i]} ↔ ${a[i+1]}`};
      if(a[i]>a[i+1]){
        yield {arr:[...a],hl:{swapping:[i,i+1],sorted:[...sorted]},msg:`Swap ${a[i]} ↔ ${a[i+1]}`};
        [a[i],a[i+1]]=[a[i+1],a[i]];
        swapped=true;
      }
    }
    sorted.add(end); end--;
    if(!swapped) break;
    swapped=false;
    yield {arr:[...a],hl:{sorted:[...sorted]},msg:`Backward pass: index ${end} → ${start}`};
    for(let i=end;i>start;i--){
      yield {arr:[...a],hl:{comparing:[i,i-1],sorted:[...sorted]},msg:`Compare ${a[i-1]} ↔ ${a[i]}`};
      if(a[i-1]>a[i]){
        yield {arr:[...a],hl:{swapping:[i,i-1],sorted:[...sorted]},msg:`Swap ${a[i-1]} ↔ ${a[i]}`};
        [a[i-1],a[i]]=[a[i],a[i-1]];
        swapped=true;
      }
    }
    sorted.add(start); start++;
  }
  yield {arr:[...a],hl:{sorted:[...Array(n).keys()]},msg:'Sorted ✓'};
}

function* combGen(a) {
  a=[...a]; const n=a.length;
  let gap=n,shrink=1.3,done=false;
  while(!done){
    gap=Math.floor(gap/shrink);
    if(gap<=1){gap=1; done=true;}
    yield {arr:[...a],hl:{},msg:`Gap = ${gap}`};
    for(let i=0;i+gap<n;i++){
      yield {arr:[...a],hl:{comparing:[i,i+gap]},msg:`Compare ${a[i]} ↔ ${a[i+gap]}`};
      if(a[i]>a[i+gap]){
        yield {arr:[...a],hl:{swapping:[i,i+gap]},msg:`Swap ${a[i]} ↔ ${a[i+gap]}`};
        [a[i],a[i+gap]]=[a[i+gap],a[i]];
        done=false;
      }
    }
  }
  yield {arr:[...a],hl:{sorted:[...Array(n).keys()]},msg:'Sorted ✓'};
}

function* gnomeGen(a) {
  a=[...a]; const n=a.length;
  let i=1;
  yield {arr:[...a],hl:{},msg:'Gnome Sort: start at index 1'};
  while(i<n){
    yield {arr:[...a],hl:{comparing:[i,i-1]},msg:`Compare ${a[i]} ↔ ${a[i-1]}`};
    if(a[i]>=a[i-1]){
      yield {arr:[...a],hl:{sorted:[]},msg:`${a[i]} ≥ ${a[i-1]}, move forward`};
      i++;
    } else {
      yield {arr:[...a],hl:{swapping:[i,i-1]},msg:`Swap ${a[i]} ↔ ${a[i-1]}, step back`};
      [a[i],a[i-1]]=[a[i-1],a[i]];
      if(i>1) i--;
    }
  }
  yield {arr:[...a],hl:{sorted:[...Array(n).keys()]},msg:'Sorted ✓'};
}

function* bucketGen(a) {
  a=[...a]; const n=a.length;
  const mx=Math.max(...a);
  const bCount=Math.max(3,Math.ceil(Math.sqrt(n)));
  const buckets=Array.from({length:bCount},()=>[]);
  yield {arr:[...a],hl:{},msg:`Bucket Sort: ${bCount} buckets, max = ${mx}`};
  for(let i=0;i<n;i++){
    const bi=Math.min(Math.floor(a[i]*bCount/(mx+1)),bCount-1);
    buckets[bi].push(a[i]);
    yield {arr:[...a],hl:{comparing:[i]},msg:`Place ${a[i]} into bucket ${bi}`};
  }
  let idx=0;
  for(let b=0;b<bCount;b++){
    buckets[b].sort((x,y)=>x-y);
    for(let j=0;j<buckets[b].length;j++){
      a[idx]=buckets[b][j];
      yield {arr:[...a],hl:{bucket:[idx],sorted:[...Array(idx).keys()]},msg:`Bucket ${b}: place ${a[idx]} at index ${idx}`};
      idx++;
    }
  }
  yield {arr:[...a],hl:{sorted:[...Array(n).keys()]},msg:'Sorted ✓'};
}

function* timGen(a) {
  a=[...a]; const n=a.length;
  const RUN=Math.min(32,n);
  const sorted=new Set();
  yield {arr:[...a],hl:{},msg:`Tim Sort: run size = ${RUN}`};
  /* Insertion sort each run */
  for(let start=0;start<n;start+=RUN){
    const end=Math.min(start+RUN,n);
    for(let i=start+1;i<end;i++){
      const key=a[i]; let j=i-1;
      yield {arr:[...a],hl:{pivot:[i],comparing:[j]},msg:`Insert ${key} into run [${start}..${end-1}]`};
      while(j>=start&&a[j]>key){
        a[j+1]=a[j]; j--;
      }
      a[j+1]=key;
      yield {arr:[...a],hl:{sorted:[...Array(end).keys()].filter(x=>x>=start)},msg:`Placed ${key} at index ${j+1}`};
    }
  }
  /* Merge runs */
  for(let size=RUN;size<n;size*=2){
    for(let left=0;left<n;left+=2*size){
      const mid=Math.min(left+size,n);
      const right=Math.min(left+2*size,n);
      if(mid>=right) continue;
      const L=a.slice(left,mid),R=a.slice(mid,right);
      let i=0,j=0,k=left;
      yield {arr:[...a],hl:{leftpart:[...Array(mid-left).keys()].map(x=>x+left),rightpart:[...Array(right-mid).keys()].map(x=>x+mid)},msg:`Merge [${left}..${mid-1}] and [${mid}..${right-1}]`};
      while(i<L.length&&j<R.length){
        if(L[i]<=R[j]){a[k]=L[i];i++;}else{a[k]=R[j];j++;}
        yield {arr:[...a],hl:{comparing:[k]},msg:`Place ${a[k]} at index ${k}`};
        k++;
      }
      while(i<L.length){a[k]=L[i];i++;k++;}
      while(j<R.length){a[k]=R[j];j++;k++;}
    }
  }
  yield {arr:[...a],hl:{sorted:[...Array(n).keys()]},msg:'Sorted ✓'};
}

function* pigeonholeGen(a) {
  a=[...a]; const n=a.length;
  const mn=Math.min(...a),mx=Math.max(...a);
  const range=mx-mn+1;
  const holes=Array(range).fill(0);
  yield {arr:[...a],hl:{},msg:`Pigeonhole Sort: range ${mn}..${mx} (${range} holes)`};
  for(let i=0;i<n;i++){
    holes[a[i]-mn]++;
    yield {arr:[...a],hl:{comparing:[i]},msg:`Place ${a[i]} into hole ${a[i]-mn}`};
  }
  let idx=0;
  for(let i=0;i<range;i++){
    while(holes[i]-->0){
      a[idx]=i+mn;
      yield {arr:[...a],hl:{bucket:[idx],sorted:[...Array(idx).keys()]},msg:`Hole ${i}: place ${i+mn} at index ${idx}`};
      idx++;
    }
  }
  yield {arr:[...a],hl:{sorted:[...Array(n).keys()]},msg:'Sorted ✓'};
}

function* jumpGen(a,target) {
  const n=a.length;
  const step=Math.floor(Math.sqrt(n));
  const elim=[];
  yield {type:'grid',arr:[...a],state:{},msg:`Jump Search for ${target} | block size = ${step}`};
  let prev=0,curr=step;
  while(curr<n&&a[curr]<target){
    yield {type:'grid',arr:[...a],state:{current:curr,eliminated:[...elim]},msg:`Jump: index ${curr}, value ${a[curr]}`};
    for(let i=prev;i<=curr;i++) if(!elim.includes(i)) elim.push(i);
    yield {type:'grid',arr:[...a],state:{eliminated:[...elim]},msg:`${a[curr]} < ${target}, jump forward`};
    prev=curr+1;
    curr+=step;
  }
  if(curr>=n) curr=n-1;
  yield {type:'grid',arr:[...a],state:{eliminated:[...elim]},msg:`Linear scan: index ${prev} to ${curr}`};
  for(let i=prev;i<=curr;i++){
    yield {type:'grid',arr:[...a],state:{current:i,eliminated:[...elim]},msg:`Check index ${i}: value ${a[i]}`};
    if(a[i]===target){
      yield {type:'grid',arr:[...a],state:{found:i,eliminated:[...elim]},msg:`Found ${target} at index ${i} ✓`};
      return;
    }
    if(a[i]>target){
      elim.push(i);
      yield {type:'grid',arr:[...a],state:{eliminated:[...elim]},msg:`${a[i]} > ${target}, target not in array`};
      return;
    }
    elim.push(i);
  }
  yield {type:'grid',arr:[...a],state:{eliminated:[...elim]},msg:`${target} not found in array`};
}

function* twoPointersGen(a, target) {
  a=[...a].sort((x,y)=>x-y);
  const n=a.length;
  let L=0,R=n-1;
  const elim=[];
  yield {arr:[...a],hl:{leftptr:L,rightptr:R},msg:`Array sorted. Find pair summing to ${target} | L=0 (${a[0]}), R=${n-1} (${a[n-1]})`};
  while(L<R){
    const sum=a[L]+a[R];
    yield {arr:[...a],hl:{leftptr:L,rightptr:R,comparing:[L,R]},msg:`Check: ${a[L]} + ${a[R]} = ${sum}`};
    if(sum===target){
      yield {arr:[...a],hl:{found:[L,R],eliminated:[...elim]},msg:`Found pair! ${a[L]} + ${a[R]} = ${target} ✓`};
      return;
    } else if(sum<target){
      elim.push(L);
      yield {arr:[...a],hl:{leftptr:L,rightptr:R,eliminated:[...elim]},msg:`${sum} < ${target} → need larger sum, move L right`};
      L++;
    } else {
      elim.push(R);
      yield {arr:[...a],hl:{leftptr:L,rightptr:R,eliminated:[...elim]},msg:`${sum} > ${target} → need smaller sum, move R left`};
      R--;
    }
    if(L<R) yield {arr:[...a],hl:{leftptr:L,rightptr:R,eliminated:[...elim]},msg:`New pointers: L=${L} (${a[L]}), R=${R} (${a[R]})`};
  }
  yield {arr:[...a],hl:{eliminated:[...elim]},msg:`No pair found that sums to ${target}`};
}

function* slidingWindowGen(a,k) {
  const n=a.length;
  if(k>n){yield {arr:[...a],hl:{},msg:`Window size ${k} > array length ${n}`}; return;}
  let sum=0;
  for(let i=0;i<k;i++){
    sum+=a[i];
    yield {arr:[...a],hl:{window:[...Array(i+1).keys()]},msg:`Building initial window: add ${a[i]}, sum=${sum}`};
  }
  let maxSum=sum,maxStart=0;
  const initialWin=[...Array(k).keys()];
  yield {arr:[...a],hl:{bestWindow:initialWin,window:initialWin},msg:`Initial window [0..${k-1}] sum=${sum} (current max)`};
  for(let i=k;i<n;i++){
    const remove=a[i-k],add=a[i];
    sum=sum-remove+add;
    const window=[...Array(k).keys()].map(j=>i-k+1+j);
    const bestWin=[...Array(k).keys()].map(j=>maxStart+j);
    yield {arr:[...a],hl:{window,comparing:[i],bestWindow:bestWin},msg:`Slide: remove ${remove}, add ${add} → sum=${sum}`};
    if(sum>maxSum){
      maxSum=sum; maxStart=i-k+1;
      yield {arr:[...a],hl:{bestWindow:window},msg:`New max! Window [${maxStart}..${i}] sum=${maxSum}`};
    } else {
      yield {arr:[...a],hl:{window,bestWindow:bestWin},msg:`Current max still [${maxStart}..${maxStart+k-1}] sum=${maxSum}`};
    }
  }
  const finalBest=[...Array(k).keys()].map(j=>maxStart+j);
  yield {arr:[...a],hl:{bestWindow:finalBest},msg:`Maximum sum ${maxSum} in window [${maxStart}..${maxStart+k-1}] ✓`};
}

function* kadaneGen(a) {
  const n=a.length;
  let curSum=a[0], maxSum=a[0], curStart=0, curEnd=0, bestStart=0, bestEnd=0;
  yield {arr:[...a],hl:{bucket:[0],found:[0]},msg:`Start: curSum=${a[0]}, maxSum=${a[0]} at index 0`};
  for(let i=1;i<n;i++){
    yield {arr:[...a],hl:{comparing:[i],bucket:Array.from({length:curEnd-curStart+1},(_,j)=>curStart+j),found:Array.from({length:bestEnd-bestStart+1},(_,j)=>bestStart+j)},msg:`Scan index ${i}: value=${a[i]}, curSum=${curSum}`};
    if(curSum+a[i]>a[i]){
      curSum+=a[i]; curEnd=i;
      yield {arr:[...a],hl:{bucket:Array.from({length:curEnd-curStart+1},(_,j)=>curStart+j),found:Array.from({length:bestEnd-bestStart+1},(_,j)=>bestStart+j)},msg:`Extend: curSum=${curSum} (${curSum-a[i]}+${a[i]})`};
    } else {
      const old=curSum;
      curSum=a[i]; curStart=i; curEnd=i;
      yield {arr:[...a],hl:{bucket:[i],eliminated:[...Array(i).keys()].filter(x=>x<curStart),found:Array.from({length:bestEnd-bestStart+1},(_,j)=>bestStart+j)},msg:`Reset: ${old}+${a[i]}=${old+a[i]} < ${a[i]}, restart at index ${i}`};
    }
    if(curSum>maxSum){
      maxSum=curSum; bestStart=curStart; bestEnd=curEnd;
      yield {arr:[...a],hl:{found:Array.from({length:bestEnd-bestStart+1},(_,j)=>bestStart+j)},msg:`New max! maxSum=${maxSum} in [${bestStart}..${bestEnd}]`};
    }
  }
  yield {arr:[...a],hl:{found:Array.from({length:bestEnd-bestStart+1},(_,j)=>bestStart+j)},msg:`Maximum subarray sum = ${maxSum} in [${bestStart}..${bestEnd}] ✓`};
}

function* prefixSumGen(a) {
  const n=a.length;
  const prefix=[0];
  yield {arr:[...a],hl:{},msg:`Build prefix sum array from ${n} elements`};
  for(let i=0;i<n;i++){
    prefix.push(prefix[i]+a[i]);
    yield {arr:[...a],hl:{comparing:[i],bucket:Array.from({length:i+1},(_,j)=>j)},msg:`prefix[${i+1}] = prefix[${i}] + ${a[i]} = ${prefix[i+1]}`};
  }
  yield {arr:[...a],hl:{bucket:Array.from({length:n},(_,j)=>j)},msg:`Prefix array built: [${prefix.join(', ')}]`};
  const L=Math.floor(n*0.25), R=Math.min(n-1,Math.floor(n*0.75));
  yield {arr:[...a],hl:{leftptr:L,rightptr:R},msg:`Query: sum of range [${L}..${R}]`};
  const rangeSum=prefix[R+1]-prefix[L];
  const rangeIdxs=Array.from({length:R-L+1},(_,j)=>L+j);
  yield {arr:[...a],hl:{found:rangeIdxs,leftptr:L,rightptr:R},msg:`Sum[${L}..${R}] = prefix[${R+1}] − prefix[${L}] = ${prefix[R+1]} − ${prefix[L]} = ${rangeSum} ✓`};
}

function* frequencyCounterGen(a) {
  const n=a.length;
  const freq={};
  let modeVal=a[0], modeCount=0;
  yield {arr:[...a],hl:{},msg:`Count frequency of each element to find the mode`};
  for(let i=0;i<n;i++){
    freq[a[i]]=(freq[a[i]]||0)+1;
    const checked=Array.from({length:i},(_,j)=>j);
    yield {arr:[...a],hl:{comparing:[i],eliminated:checked},msg:`Count ${a[i]}: freq=${freq[a[i]]}`};
    if(freq[a[i]]>modeCount){
      modeCount=freq[a[i]]; modeVal=a[i];
      const modeIdxs=[];
      for(let j=0;j<=i;j++) if(a[j]===modeVal) modeIdxs.push(j);
      yield {arr:[...a],hl:{found:modeIdxs,eliminated:checked.filter(j=>!modeIdxs.includes(j))},msg:`New mode! ${modeVal} appears ${modeCount} time(s)`};
    }
  }
  const finalIdxs=[];
  for(let j=0;j<n;j++) if(a[j]===modeVal) finalIdxs.push(j);
  yield {arr:[...a],hl:{found:finalIdxs},msg:`Mode = ${modeVal} (appears ${modeCount} times) ✓`};
}

function* dutchFlagGen(a) {
  a=[...a];
  const n=a.length;
  const pivot=a[Math.floor(n/2)];
  let lo=0, mid=0, hi=n-1;
  yield {arr:[...a],hl:{},msg:`Dutch National Flag: partition around pivot=${pivot}`};
  while(mid<=hi){
    const lowIdxs=Array.from({length:lo},(_,j)=>j);
    const highIdxs=Array.from({length:n-hi-1},(_,j)=>hi+1+j);
    yield {arr:[...a],hl:{leftptr:lo,comparing:[mid],rightptr:hi,left:lowIdxs,right:highIdxs},msg:`Examine A[${mid}]=${a[mid]} | lo=${lo}, mid=${mid}, hi=${hi}`};
    if(a[mid]<pivot){
      [a[lo],a[mid]]=[a[mid],a[lo]];
      yield {arr:[...a],hl:{swapping:[lo,mid],left:Array.from({length:lo+1},(_,j)=>j),right:highIdxs},msg:`${a[mid]} < ${pivot}: swap A[${lo}]↔A[${mid}], advance lo & mid`};
      lo++; mid++;
    } else if(a[mid]===pivot){
      yield {arr:[...a],hl:{bucket:[mid],left:lowIdxs,right:highIdxs},msg:`${a[mid]} = ${pivot}: keep in middle, advance mid`};
      mid++;
    } else {
      [a[mid],a[hi]]=[a[hi],a[mid]];
      yield {arr:[...a],hl:{swapping:[mid,hi],left:lowIdxs,right:Array.from({length:n-hi},(_,j)=>hi+j)},msg:`${a[hi]} > ${pivot}: swap A[${mid}]↔A[${hi}], shrink hi`};
      hi--;
    }
  }
  const lowIdxs=Array.from({length:lo},(_,j)=>j);
  const midIdxs=Array.from({length:hi-lo+1},(_,j)=>lo+j);
  const highIdxs=Array.from({length:n-hi-1},(_,j)=>hi+1+j);
  yield {arr:[...a],hl:{left:lowIdxs,bucket:midIdxs,right:highIdxs},msg:`Partitioned! Low[0..${lo-1}] < ${pivot} = Mid[${lo}..${hi}] < High[${hi+1}..${n-1}] ✓`};
}

function* boyerMooreGen(a) {
  const n=a.length;
  let candidate=a[0], count=1;
  yield {arr:[...a],hl:{comparing:[0]},msg:`Boyer-Moore Majority Vote: candidate=${a[0]}, count=1`};
  for(let i=1;i<n;i++){
    const checked=Array.from({length:i},(_,j)=>j);
    yield {arr:[...a],hl:{comparing:[i],found:checked.filter(j=>a[j]===candidate)},msg:`Check ${a[i]}: candidate=${candidate}, count=${count}`};
    if(count===0){
      candidate=a[i]; count=1;
      yield {arr:[...a],hl:{pivot:[i]},msg:`Count hit 0 → new candidate=${a[i]}`};
    } else if(a[i]===candidate){
      count++;
      yield {arr:[...a],hl:{found:[i]},msg:`Match! count → ${count}`};
    } else {
      count--;
      yield {arr:[...a],hl:{eliminated:[i]},msg:`Mismatch, count → ${count}`};
    }
  }
  /* Verify candidate */
  let freq=0;
  const allMatchIdxs=[];
  for(let i=0;i<n;i++){if(a[i]===candidate){freq++; allMatchIdxs.push(i);}}
  if(freq>n/2){
    yield {arr:[...a],hl:{found:allMatchIdxs},msg:`Majority element = ${candidate} (appears ${freq}/${n} times) ✓`};
  } else {
    yield {arr:[...a],hl:{eliminated:[...Array(n).keys()]},msg:`No majority element found (${candidate} appears ${freq}/${n} times)`};
  }
}

function* mergeIntervalsGen(a) {
  /* Treat pairs of adjacent elements as intervals [a[i], a[i+1]] */
  const n=a.length;
  const pairs=[];
  for(let i=0;i+1<n;i+=2) pairs.push([a[i],a[i+1]].sort((x,y)=>x-y));
  if(n%2===1) pairs.push([a[n-1],a[n-1]]);
  /* Flatten pairs back to display array */
  const flat=pairs.flat();
  yield {arr:flat,hl:{},msg:`Merge Intervals: ${pairs.length} intervals → sort by start`};
  pairs.sort((x,y)=>x[0]-y[0]);
  const sorted=pairs.flat();
  yield {arr:sorted,hl:{sorted:[...Array(sorted.length).keys()]},msg:`Sorted intervals: ${pairs.map(p=>`[${p[0]},${p[1]}]`).join(' ')}`};
  const merged=[pairs[0]];
  let resultIdxs=[0,1];
  yield {arr:sorted,hl:{found:resultIdxs,comparing:[0,1]},msg:`Start with [${pairs[0][0]},${pairs[0][1]}]`};
  for(let i=1;i<pairs.length;i++){
    const hlIdx=[i*2,i*2+1];
    const last=merged[merged.length-1];
    yield {arr:sorted,hl:{comparing:hlIdx},msg:`Check [${pairs[i][0]},${pairs[i][1]}] vs [${last[0]},${last[1]}]`};
    if(pairs[i][0]<=last[1]){
      last[1]=Math.max(last[1],pairs[i][1]);
      yield {arr:sorted,hl:{swapping:hlIdx},msg:`Overlap! Merge → [${last[0]},${last[1]}]`};
    } else {
      merged.push(pairs[i]);
      yield {arr:sorted,hl:{bucket:hlIdx},msg:`No overlap, start new interval [${pairs[i][0]},${pairs[i][1]}]`};
    }
  }
  yield {arr:sorted,hl:{found:[...Array(sorted.length).keys()]},msg:`Merged: ${merged.map(p=>`[${p[0]},${p[1]}]`).join(' ')} ✓`};
}

function* reservoirGen(a) {
  const n=a.length;
  const k=Math.max(1,Math.min(3,Math.floor(n/3)));
  const reservoir=[...a.slice(0,k)];
  const rIdxs=[...Array(k).keys()];
  yield {arr:[...a],hl:{found:rIdxs},msg:`Reservoir Sampling: pick ${k} random items from stream of ${n}`};
  for(let i=k;i<n;i++){
    yield {arr:[...a],hl:{comparing:[i],found:rIdxs},msg:`Stream element ${a[i]} (index ${i})`};
    const j=Math.floor(Math.random()*(i+1));
    if(j<k){
      const oldVal=reservoir[j];
      reservoir[j]=a[i];
      rIdxs[j]=i;
      yield {arr:[...a],hl:{swapping:[i],found:rIdxs},msg:`Random j=${j} < k=${k} → replace reservoir[${j}]=${oldVal} with ${a[i]}`};
    } else {
      yield {arr:[...a],hl:{eliminated:[i],found:rIdxs},msg:`Random j=${j} ≥ k=${k} → skip ${a[i]}`};
    }
  }
  yield {arr:[...a],hl:{found:rIdxs},msg:`Reservoir: [${reservoir.join(', ')}] ✓`};
}

function* linearGen(a,target) {
  const elim=[];
  yield {type:'grid',arr:[...a],state:{},msg:`Linear search for target: ${target}`};
  for(let i=0;i<a.length;i++){
    yield {type:'grid',arr:[...a],state:{current:i,eliminated:[...elim]},msg:`Check index ${i}: value = ${a[i]}`};
    if(a[i]===target){
      yield {type:'grid',arr:[...a],state:{found:i,eliminated:[...elim]},msg:`Found ${target} at index ${i} ✓`};
      return;
    }
    elim.push(i);
    yield {type:'grid',arr:[...a],state:{eliminated:[...elim]},msg:`${a[i]} ≠ ${target}, continue...`};
  }
  yield {type:'grid',arr:[...a],state:{eliminated:[...elim]},msg:`${target} not found in array`};
}

function* binaryGen(a,target) {
  let L=0,R=a.length-1; const elim=new Set();
  yield {type:'grid',arr:[...a],state:{left:L,right:R},msg:`Binary search for target: ${target} (array is sorted)`};
  while(L<=R){
    const M=Math.floor((L+R)/2);
    yield {type:'grid',arr:[...a],state:{left:L,right:R,mid:M,eliminated:[...elim]},msg:`L=${L} R=${R} → Mid=${M}, checking ${a[M]}`};
    if(a[M]===target){
      yield {type:'grid',arr:[...a],state:{found:M,eliminated:[...elim]},msg:`Found ${target} at index ${M} ✓`};
      return;
    } else if(a[M]<target){
      for(let i=L;i<=M;i++) elim.add(i);
      yield {type:'grid',arr:[...a],state:{left:M+1,right:R,mid:M,eliminated:[...elim]},msg:`${a[M]} < ${target} → discard left half`};
      L=M+1;
    } else {
      for(let i=M;i<=R;i++) elim.add(i);
      yield {type:'grid',arr:[...a],state:{left:L,right:M-1,mid:M,eliminated:[...elim]},msg:`${a[M]} > ${target} → discard right half`};
      R=M-1;
    }
  }
  yield {type:'grid',arr:[...a],state:{eliminated:[...elim]},msg:`${target} not found in array`};
}

function* interpolationGen(a,target) {
  a=[...a].sort((x,y)=>x-y);
  let L=0,R=a.length-1; const elim=new Set();
  yield {type:'grid',arr:[...a],state:{left:L,right:R},msg:`Interpolation Search for ${target} (sorted array)`};
  while(L<=R&&target>=a[L]&&target<=a[R]){
    const pos=L+Math.floor(((target-a[L])*(R-L))/(a[R]-a[L]||1));
    yield {type:'grid',arr:[...a],state:{left:L,right:R,mid:pos,eliminated:[...elim]},msg:`Probe pos=${pos} (interpolated), value=${a[pos]}`};
    if(a[pos]===target){
      yield {type:'grid',arr:[...a],state:{found:pos,eliminated:[...elim]},msg:`Found ${target} at index ${pos} ✓`};
      return;
    } else if(a[pos]<target){
      for(let i=L;i<=pos;i++) elim.add(i);
      yield {type:'grid',arr:[...a],state:{left:pos+1,right:R,eliminated:[...elim]},msg:`${a[pos]} < ${target} → search right`};
      L=pos+1;
    } else {
      for(let i=pos;i<=R;i++) elim.add(i);
      yield {type:'grid',arr:[...a],state:{left:L,right:pos-1,eliminated:[...elim]},msg:`${a[pos]} > ${target} → search left`};
      R=pos-1;
    }
  }
  yield {type:'grid',arr:[...a],state:{eliminated:[...elim]},msg:`${target} not found in array`};
}

function* exponentialGen(a,target) {
  a=[...a].sort((x,y)=>x-y);
  const n=a.length; const elim=new Set();
  yield {type:'grid',arr:[...a],state:{current:0},msg:`Exponential Search for ${target} (sorted array)`};
  if(a[0]===target){
    yield {type:'grid',arr:[...a],state:{found:0},msg:`Found ${target} at index 0 ✓`};
    return;
  }
  let bound=1;
  while(bound<n&&a[bound]<target){
    yield {type:'grid',arr:[...a],state:{current:bound,eliminated:[...elim]},msg:`Bound ${bound}: ${a[bound]} < ${target}, double bound`};
    for(let i=Math.floor(bound/2);i<bound;i++) elim.add(i);
    bound*=2;
  }
  const L=Math.floor(bound/2), R=Math.min(bound,n-1);
  yield {type:'grid',arr:[...a],state:{left:L,right:R,eliminated:[...elim]},msg:`Binary search in [${L}..${R}]`};
  let lo=L,hi=R;
  while(lo<=hi){
    const M=Math.floor((lo+hi)/2);
    yield {type:'grid',arr:[...a],state:{left:lo,right:hi,mid:M,eliminated:[...elim]},msg:`Mid=${M}, checking ${a[M]}`};
    if(a[M]===target){
      yield {type:'grid',arr:[...a],state:{found:M,eliminated:[...elim]},msg:`Found ${target} at index ${M} ✓`};
      return;
    } else if(a[M]<target){
      for(let i=lo;i<=M;i++) elim.add(i);
      lo=M+1;
    } else {
      for(let i=M;i<=hi;i++) elim.add(i);
      hi=M-1;
    }
  }
  yield {type:'grid',arr:[...a],state:{eliminated:[...elim]},msg:`${target} not found in array`};
}

function* ternaryGen(a,target) {
  a=[...a].sort((x,y)=>x-y);
  let L=0,R=a.length-1; const elim=new Set();
  yield {type:'grid',arr:[...a],state:{left:L,right:R},msg:`Ternary Search for ${target} (sorted array)`};
  while(L<=R){
    const m1=L+Math.floor((R-L)/3);
    const m2=R-Math.floor((R-L)/3);
    yield {type:'grid',arr:[...a],state:{left:L,right:R,mid:m1,eliminated:[...elim]},msg:`m1=${m1}(${a[m1]}), m2=${m2}(${a[m2]})`};
    if(a[m1]===target){
      yield {type:'grid',arr:[...a],state:{found:m1,eliminated:[...elim]},msg:`Found ${target} at index ${m1} ✓`};
      return;
    }
    if(a[m2]===target){
      yield {type:'grid',arr:[...a],state:{found:m2,eliminated:[...elim]},msg:`Found ${target} at index ${m2} ✓`};
      return;
    }
    if(target<a[m1]){
      for(let i=m1;i<=R;i++) elim.add(i);
      R=m1-1;
      yield {type:'grid',arr:[...a],state:{left:L,right:R,eliminated:[...elim]},msg:`${target} < ${a[m1]} → search first third`};
    } else if(target>a[m2]){
      for(let i=L;i<=m2;i++) elim.add(i);
      L=m2+1;
      yield {type:'grid',arr:[...a],state:{left:L,right:R,eliminated:[...elim]},msg:`${target} > ${a[m2]} → search last third`};
    } else {
      for(let i=L;i<m1;i++) elim.add(i);
      for(let i=m2+1;i<=R;i++) elim.add(i);
      L=m1+1; R=m2-1;
      yield {type:'grid',arr:[...a],state:{left:L,right:R,eliminated:[...elim]},msg:`${a[m1]} < ${target} < ${a[m2]} → search middle third`};
    }
  }
  yield {type:'grid',arr:[...a],state:{eliminated:[...elim]},msg:`${target} not found in array`};
}

// ═══════════════════════════════════════════════
//  CORE ENGINE
// ═══════════════════════════════════════════════
function applyStep(s) {
  if(!s) return;
  if(s.type==='grid') renderGrid(s.arr, s.state||{});
  else                renderBars(s.arr, s.hl||{});
  if(s.tree) renderRecursionTree(s.tree, s.activeNode);
  playSoundForStep(s);
  setStatus(s.msg,'running');
  updateStepInfo();
  highlightCodeLine(getStepLineId(s));
  recalcStats();
  updateTimeline();
  updateNarration(s.msg);
}

const ALGO_GENS = {
  bubble:bubbleGen, selection:selectionGen, insertion:insertionGen,
  merge:mergeGen, quick:quickGen, counting:countingGen, heap:heapGen,
  radix:radixGen, shell:shellGen, cocktail:cocktailGen, comb:combGen,
  gnome:gnomeGen, bucket:bucketGen, tim:timGen, pigeonhole:pigeonholeGen,
  kadane:kadaneGen, prefixsum:prefixSumGen, frequencycounter:frequencyCounterGen,
  dutchflag:dutchFlagGen, boyermoore:boyerMooreGen, mergeintervals:mergeIntervalsGen,
  reservoir:reservoirGen
};

function buildSteps() {
  steps=[]; stepIdx=0;
  let gen;

  if(ALGO_GENS[algo]){
    gen=ALGO_GENS[algo](arr);
  } else if(algo==='twopointers'){
    const t=parseInt($('targetSumInput').value);
    if(isNaN(t)){setStatus('Enter a target sum first','error'); return false;}
    gen=twoPointersGen(arr,t);
  } else if(algo==='slidingwindow'){
    gen=slidingWindowGen(arr,parseInt(windowSlider.value));
  } else if(algo==='linear'||algo==='binary'||algo==='jump'||algo==='interpolation'||algo==='exponential'||algo==='ternary'){
    const t=parseInt($('targetInput').value);
    if(isNaN(t)){setStatus('Enter a search target first','error'); return false;}
    if(algo!=='linear') arr=[...arr].sort((a,b)=>a-b);
    const searchGens={linear:linearGen, binary:binaryGen, jump:jumpGen, interpolation:interpolationGen, exponential:exponentialGen, ternary:ternaryGen};
    gen=searchGens[algo](arr,t);
  }

  try {
    steps=[...gen];
  } catch(e) {
    setStatus('Error building steps','error');
    return false;
  }
  return true;
}

async function runAll() {
  running=true; paused=false;
  runBtn.disabled=true; stepBtn.disabled=true;
  stepBackBtn.disabled=true;
  pauseBtn.disabled=false; pauseBtn.textContent='Pause';

  while(stepIdx<steps.length){
    if(paused){await sleep(50); continue;}
    if(!running) break;
    applyStep(steps[stepIdx++]);
    await sleep(SPEEDS[speedSlider.value]||160);
  }

  stopTimer();
  if(running){
    statusDot.className='status-dot done';
    setStatus(steps[steps.length-1]?.msg||'Done ✓','done');
    const lastMsg=steps[steps.length-1]?.msg||'';
    if(lastMsg.includes('✓')) triggerSortedCelebration();
  }
  resetButtonStates();
}

// ═══════════════════════════════════════════════
//  STATE MANAGEMENT & INIT
// ═══════════════════════════════════════════════
function initArr() {
  if(SEARCH_ALGOS.has(algo)){
    arr=randArr(16);
    if(algo==='binary') arr.sort((a,b)=>a-b);
  } else if(TECHNIQUE_ALGOS.has(algo)){
    arr=randArr(12);
  } else {
    arr=randArr(+sizeSlider.value);
  }
}

function fullReset() {
  running=false; paused=false;
  steps=[]; stepIdx=0;
  initArr();
  if(GRID_ALGOS.has(algo)) renderGrid(arr,{});
  else renderBars(arr,{});
  setStatus('Press Run to begin');
  updateStepInfo();
  resetButtonStates();
  highlightCodeLine(null);
  recalcStats();
  updateTimeline();
  /* Clear recursion tree */
  const rtCanvas=$('recTreeCanvas');
  if(rtCanvas){const ctx=rtCanvas.getContext('2d');ctx.clearRect(0,0,rtCanvas.width,rtCanvas.height);}
}

const sortSelect=$('sortSelect'), techniqueSelect=$('techniqueSelect'),
      searchSelect=$('searchSelect'), pathfindSelect=$('pathfindSelect'),
      startBtn=$('startBtn'),
      welcomeScreen=$('welcomeScreen'), vizArea=$('vizArea'), pathfindArea=$('pathfindArea');

function hideWelcome(cb){
  // Already hidden — run callback immediately
  if(welcomeScreen.classList.contains('hidden')){
    if(cb) cb();
    return;
  }
  // Already leaving — just replace the callback
  if(welcomeScreen.classList.contains('w-leaving')){
    welcomeScreen._wCb=cb;
    return;
  }
  welcomeScreen._wCb=cb;
  // Reveal main content immediately, then fade out welcome
  if (cb) cb();
  // Now fade out welcome screen visually
  setTimeout(()=>{
    welcomeScreen.classList.add('w-leaving');
    welcomeScreen.addEventListener('transitionend',function onEnd(e){
      if(e.target!==welcomeScreen) return;
      welcomeScreen.removeEventListener('transitionend',onEnd);
      welcomeScreen.classList.add('hidden');
      welcomeScreen.classList.remove('w-leaving');
      welcomeScreen._wCb=null;
    });
  }, 0);
}
function showVizArea(){
  hideWelcome(()=>{
    vizArea.classList.remove('hidden');
    pathfindArea.classList.add('hidden');
    $('logoLink').style.cursor='pointer';
  });
}
function showPathfindArea(){
  hideWelcome(()=>{
    vizArea.classList.add('hidden');
    pathfindArea.classList.remove('hidden');
    $('logoLink').style.cursor='pointer';
  });
}
function showWelcome(){
  running=false; paused=false; pfRunning=false;
  welcomeScreen.classList.remove('hidden','w-leaving');
  vizArea.classList.add('hidden');
  pathfindArea.classList.add('hidden');
  $('logoLink').style.cursor='default';
  sortSelect.value=''; techniqueSelect.value=''; searchSelect.value=''; pathfindSelect.value='';
}

window.addEventListener('popstate',(e)=>{
  if(!e.state||e.state.page==='welcome') showWelcome();
  else if(e.state.page==='app') showVizArea();
});

startBtn.addEventListener('click',()=>{
  history.pushState({page:'app'},'','#app');
  sortSelect.value='bubble';
  hideWelcome(()=>{
    vizArea.classList.remove('hidden');
    pathfindArea.classList.add('hidden');
    $('logoLink').style.cursor='pointer';
    // Wait one frame so the layout has valid dimensions before drawing bars
    requestAnimationFrame(()=>handleAlgoChange('bubble'));
  });
});

function handleAlgoChange(selectedAlgo) {
  if(!selectedAlgo) return;
  if(running&&!paused) return;

  /* Show/hide recursion tree panel */
  const isRecursive = selectedAlgo==='merge'||selectedAlgo==='quick';
  $('recTreePanel').classList.toggle('hidden',!isRecursive);

  if(PATHFIND_ALGOS.has(selectedAlgo)){
    showPathfindArea();
    sortSelect.value=''; techniqueSelect.value=''; searchSelect.value='';
    pathfindSelect.value=selectedAlgo;
    pfAlgo=selectedAlgo;
    updateSidebar(selectedAlgo);
    buildCodePanel(selectedAlgo);
    pfClearPath();
    $('pfStatusText').textContent='Draw walls and press Run';
    $('pfStatusDot').className='status-dot';
    return;
  }

  showVizArea();
  sortSelect.value      = SORT_ALGOS.has(selectedAlgo)      ? selectedAlgo:'';
  techniqueSelect.value = TECHNIQUE_ALGOS.has(selectedAlgo) ? selectedAlgo:'';
  searchSelect.value    = SEARCH_ALGOS.has(selectedAlgo)    ? selectedAlgo:'';
  pathfindSelect.value  = '';
  algo=selectedAlgo;
  updateSidebar(algo);
  buildCodePanel(algo);
  fullReset();
}

sortSelect.addEventListener('change',      e=>{if(e.target.value) handleAlgoChange(e.target.value);});
techniqueSelect.addEventListener('change', e=>{if(e.target.value) handleAlgoChange(e.target.value);});
searchSelect.addEventListener('change',    e=>{if(e.target.value) handleAlgoChange(e.target.value);});
pathfindSelect.addEventListener('change',  e=>{if(e.target.value) handleAlgoChange(e.target.value);});

sizeSlider.addEventListener('input',()=>{sizeVal.textContent=sizeSlider.value; if(!running) fullReset();});
speedSlider.addEventListener('input',()=>{speedVal.textContent=SPEED_LABELS[speedSlider.value];});
windowSlider.addEventListener('input',()=>{windowSizeVal.textContent=windowSlider.value;});

$('applyCustom').addEventListener('click',()=>{
  const vals=$('customInput').value.split(',').map(s=>parseInt(s.trim())).filter(n=>!isNaN(n)&&n>0&&n<=999);
  if(vals.length<2){setStatus('Enter at least 2 numbers','error'); return;}
  if(vals.length>60){setStatus('Max 60 elements','error'); return;}
  arr=vals;
  if(SORT_ALGOS.has(algo)){sizeSlider.value=vals.length; sizeVal.textContent=vals.length;}
  steps=[]; stepIdx=0;
  if(GRID_ALGOS.has(algo)) renderGrid(arr,{});
  else renderBars(arr,{});
  setStatus('Custom array set — press Run');
  updateStepInfo();
});

runBtn.addEventListener('click',()=>{
  if(!buildSteps()) return;
  if(GRID_ALGOS.has(algo)) renderGrid(arr,{});
  else renderBars(arr,{});
  setStatus('Running…','running');
  runAll();
});

// FIX 5: updateStepInfo() called unconditionally at end
stepBtn.addEventListener('click',()=>{
  if(!steps.length||stepIdx>=steps.length){
    if(!buildSteps()) return;
    if(GRID_ALGOS.has(algo)) renderGrid(arr,{});
    else renderBars(arr,{});
  }
  if(stepIdx<steps.length) applyStep(steps[stepIdx++]);
  stepBackBtn.disabled=(stepIdx<=0);
  if(stepIdx>=steps.length){
    statusDot.className='status-dot done';
    stepBtn.disabled=true;
  }
  updateStepInfo(); // FIXED: always sync the counter
});

stepBackBtn.addEventListener('click',()=>{
  if(!steps.length||stepIdx<=0) return;
  stepIdx--;
  if(stepIdx===0){
    if(GRID_ALGOS.has(algo)) renderGrid(arr,{});
    else renderBars(arr,{});
    setStatus('Press Run to begin');
    statusDot.className='status-dot';
    stepBackBtn.disabled=true;
  } else {
    applyStep(steps[stepIdx-1]);
    stepBackBtn.disabled=false;
  }
  stepBtn.disabled=false;
  updateStepInfo();
});

pauseBtn.addEventListener('click',()=>{
  if(!running) return;
  paused=!paused;
  pauseBtn.textContent=paused?'Resume':'Pause';
  if(paused) setStatus('Paused','idle'); else setStatus('Running…','running');
});

resetBtn.addEventListener('click',()=>fullReset());
shuffleBtn.addEventListener('click',()=>{
  // Shuffle array in place, keep steps and state
  if (SORT_ALGOS.has(algo)) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    renderBars(arr, {});
    setStatus('Array shuffled');
    steps = [];
    stepIdx = 0;
    updateStepInfo();
  }
});
$('logoLink').addEventListener('click',()=>{if(vizArea&&!vizArea.classList.contains('hidden')) history.back();});

const ro=new ResizeObserver(()=>{
  if(!arr.length||vizArea.classList.contains('hidden')) return;
  const lastStep=steps[stepIdx-1];
  if(lastStep) applyStep(lastStep);
  else if(GRID_ALGOS.has(algo)) renderGrid(arr,{});
  else renderBars(arr,{});
});
ro.observe($('vizCanvas'));

function applyPreset(type) {
  if(running&&!paused) return;
  const n=+sizeSlider.value;
  if     (type==='best')  arr=Array.from({length:n},(_,i)=>Math.round(10+(i/(n-1))*89));
  else if(type==='worst') arr=Array.from({length:n},(_,i)=>Math.round(99-(i/(n-1))*89));
  else if(type==='avg')   arr=randArr(n);
  else if(type==='equal'){const v=rand(30,70); arr=Array(n).fill(v);}
  steps=[]; stepIdx=0;
  renderBars(arr,{});
  setStatus('Preset loaded — press Run');
  updateStepInfo();
}
$('presetBest') .addEventListener('click',()=>applyPreset('best'));
$('presetAvg')  .addEventListener('click',()=>applyPreset('avg'));
$('presetWorst').addEventListener('click',()=>applyPreset('worst'));
$('presetEqual').addEventListener('click',()=>applyPreset('equal'));

// FIX 6: Use .theme-toggle-label class instead of span:last-child
let isDark = true;
function applyTheme(dark) {
  isDark=dark;
  document.documentElement.setAttribute('data-theme',dark?'dark':'');
  const sunSvg='<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  const moonSvg='<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const label=dark?'Light':'Dark';
  const thBtn=$('themeToggle');
  if(thBtn){
    thBtn.querySelector('.theme-toggle-icon').innerHTML=dark?sunSvg:moonSvg;
    thBtn.querySelector('.theme-toggle-label').textContent=label;
  }
  // Redraw welcome dots on theme change
  if(typeof window.drawWDots==='function') window.drawWDots();
}
$('themeToggle').addEventListener('click',()=>applyTheme(!isDark));

const soundToggle=$('soundToggle');
let soundOn=false, audioCtx=null;

function getAudioCtx(){
  if(!audioCtx) audioCtx=new(window.AudioContext||window.webkitAudioContext)();
  return audioCtx;
}
function valToFreq(v,maxV){return 220+((v-10)/Math.max(maxV-10,1))*660;}
function playTone(freq,type='sine',durationMs=80,volume=0.12){
  if(!soundOn) return;
  try{
    const ctx=getAudioCtx(),osc=ctx.createOscillator(),gain=ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type=type;
    osc.frequency.setValueAtTime(freq,ctx.currentTime);
    gain.gain.setValueAtTime(volume,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+durationMs/1000);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime+durationMs/1000);
  }catch(e){}
}
function playSoundForStep(s){
  if(!soundOn||!s) return;
  const maxV=s.arr?Math.max(...s.arr,1):99;
  if(s.type==='grid'){
    const idx=s.state?.current??s.state?.mid??s.state?.found;
    if(idx!=null&&s.arr?.[idx]){
      playTone(valToFreq(s.arr[idx],maxV),s.state?.found!=null?'triangle':'sine',100,.1);
    }
  } else {
    const hl=s.hl||{};
    if     (hl.swapping?.length)  playTone(valToFreq(s.arr[hl.swapping[0]],maxV),'sawtooth',90,.08);
    else if(hl.comparing?.length) playTone(valToFreq(s.arr[hl.comparing[0]],maxV),'sine',60,.07);
    else if(hl.sorted?.length)    playTone(valToFreq(s.arr[hl.sorted[hl.sorted.length-1]],maxV),'triangle',120,.1);
  }
}
function updateSoundToggleUI() {
  const spkOn='<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
  const spkOff='<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
  soundToggle.classList.toggle('active', soundOn);
  soundToggle.querySelector('.sound-toggle-icon').innerHTML=soundOn?spkOn:spkOff;
  soundToggle.querySelector('.sound-toggle-label').textContent = soundOn ? 'On' : 'Off';
}
soundToggle.addEventListener('click', () => {
  soundOn = !soundOn;
  updateSoundToggleUI();
  if (soundOn) { try { getAudioCtx().resume(); } catch(e) {} playTone(440, 'sine', 150, .1); }
});

// ═══════════════════════════════════════════════
//  CODE SNIPPETS (Pseudo / Python / C++ / Java)
// ═══════════════════════════════════════════════
const k  = (s) => `<span class="kw">${s}</span>`;
const fn = (s) => `<span class="fn">${s}</span>`;
const cm = (s) => `<span class="cm">// ${s}</span>`;
const nm = (s) => `<span class="nm">${s}</span>`;

const CODE_SNIPPETS = {
  pseudo: {
    bubble: [
      [null,       `${k('procedure')} ${fn('bubbleSort')}(A)`],
      [null,       `  n ← length(A)`],
      [null,       `  ${k('for')} i ← 0 ${k('to')} n−2 ${k('do')}`],
      ['comparing',`    ${k('for')} j ← 0 ${k('to')} n−i−2 ${k('do')}`],
      ['comparing',`      ${k('if')} A[j] > A[j+1] ${k('then')}`],
      ['swapping', `        swap(A[j], A[j+1])`],
      [null,       `      ${k('end if')}`],
      [null,       `    ${k('end for')}`],
      ['sorted',   `    ${cm('largest element bubbled to end')}`],
      [null,       `  ${k('end for')}`],
      [null,       `${k('end procedure')}`],
    ],
    selection: [
      [null,       `${k('procedure')} ${fn('selectionSort')}(A)`],
      [null,       `  n ← length(A)`],
      [null,       `  ${k('for')} i ← 0 ${k('to')} n−2 ${k('do')}`],
      ['current',  `    minIdx ← i  ${cm('assume leftmost is min')}`],
      ['comparing',`    ${k('for')} j ← i+1 ${k('to')} n−1 ${k('do')}`],
      ['comparing',`      ${k('if')} A[j] < A[minIdx] ${k('then')}`],
      ['current',  `        minIdx ← j  ${cm('new minimum found')}`],
      [null,       `      ${k('end if')}`],
      [null,       `    ${k('end for')}`],
      ['swapping', `    swap(A[i], A[minIdx])`],
      ['sorted',   `    ${cm('A[0..i] is now sorted')}`],
      [null,       `  ${k('end for')}`],
      [null,       `${k('end procedure')}`],
    ],
    insertion: [
      [null,       `${k('procedure')} ${fn('insertionSort')}(A)`],
      [null,       `  n ← length(A)`],
      [null,       `  ${k('for')} i ← 1 ${k('to')} n−1 ${k('do')}`],
      ['pivot',    `    key ← A[i]  ${cm('element to insert')}`],
      [null,       `    j ← i − 1`],
      ['comparing',`    ${k('while')} j ≥ 0 ${k('and')} A[j] > key ${k('do')}`],
      ['comparing',`      A[j+1] ← A[j]  ${cm('shift right')}`],
      ['comparing',`      j ← j − 1`],
      [null,       `    ${k('end while')}`],
      ['sorted',   `    A[j+1] ← key  ${cm('place key in gap')}`],
      [null,       `  ${k('end for')}`],
      [null,       `${k('end procedure')}`],
    ],
    merge: [
      [null,       `${k('procedure')} ${fn('mergeSort')}(A, l, r)`],
      [null,       `  ${k('if')} l ≥ r ${k('then return')}`],
      [null,       `  mid ← ⌊(l + r) / 2⌋`],
      ['leftpart', `  ${fn('mergeSort')}(A, l, mid)    ${cm('sort left')}`],
      ['rightpart',`  ${fn('mergeSort')}(A, mid+1, r)  ${cm('sort right')}`],
      ['comparing',`  ${fn('merge')}(A, l, mid, r)     ${cm('combine')}`],
      [null,       ``],
      [null,       `${k('procedure')} ${fn('merge')}(A, l, mid, r)`],
      [null,       `  L ← A[l..mid],  R ← A[mid+1..r]`],
      ['comparing',`  ${k('while')} both halves have elements ${k('do')}`],
      ['comparing',`    pick smaller of L[i], R[j] → A[k]`],
      ['sorted',   `  copy remaining elements back`],
      [null,       `${k('end procedure')}`],
    ],
    quick: [
      [null,       `${k('procedure')} ${fn('quickSort')}(A, lo, hi)`],
      [null,       `  ${k('if')} lo ≥ hi ${k('then return')}`],
      ['pivot',    `  pivot ← A[hi]  ${cm('choose pivot')}`],
      [null,       `  i ← lo − 1`],
      ['comparing',`  ${k('for')} j ← lo ${k('to')} hi−1 ${k('do')}`],
      ['comparing',`    ${k('if')} A[j] ≤ pivot ${k('then')}`],
      ['swapping', `      i ← i+1;  swap(A[i], A[j])`],
      [null,       `    ${k('end if')}`],
      [null,       `  ${k('end for')}`],
      ['sorted',   `  swap(A[i+1], A[hi])  ${cm('pivot → final pos')}`],
      [null,       `  p ← i + 1`],
      [null,       `  ${fn('quickSort')}(A, lo, p−1)`],
      [null,       `  ${fn('quickSort')}(A, p+1, hi)`],
      [null,       `${k('end procedure')}`],
    ],
    counting: [
      [null,       `${k('procedure')} ${fn('countingSort')}(A)`],
      [null,       `  min ← ${fn('min')}(A),  max ← ${fn('max')}(A)`],
      [null,       `  count[0..max−min] ← 0`],
      ['bucket',   `  ${k('for each')} x ${k('in')} A ${k('do')}`],
      ['bucket',   `    count[x − min] ← count[x − min] + 1`],
      [null,       `  ${k('end for')}  ${cm('frequency table built')}`],
      [null,       `  k ← 0  ${cm('output index')}`],
      ['comparing',`  ${k('for')} i ← 0 ${k('to')} max−min ${k('do')}`],
      ['comparing',`    ${k('repeat')} count[i] ${k('times')}:`],
      ['comparing',`      A[k] ← i + min;  k ← k + 1`],
      [null,       `  ${k('end for')}`],
      ['sorted',   `  ${cm('A is now sorted')}`],
      [null,       `${k('end procedure')}`],
    ],
    heap: [
      [null,       `${k('procedure')} ${fn('heapSort')}(A)`],
      [null,       `  n ← length(A)`],
      ['heap',     `  ${k('for')} i ← ⌊n/2⌋−1 ${k('down to')} 0  ${cm('build max-heap')}`],
      ['heap',     `    ${fn('heapify')}(A, n, i)`],
      ['swapping', `  ${k('for')} i ← n−1 ${k('down to')} 1 ${k('do')}`],
      ['swapping', `    swap(A[${nm('0')}], A[i])  ${cm('extract max')}`],
      ['comparing',`    ${fn('heapify')}(A, i, ${nm('0')})  ${cm('restore heap')}`],
      [null,       `  ${k('end for')}`],
      [null,       `${k('end procedure')}`],
      [null,       ``],
      [null,       `${k('procedure')} ${fn('heapify')}(A, n, i)`],
      [null,       `  largest ← i,  l ← 2i+1,  r ← 2i+2`],
      ['comparing',`  ${k('if')} l<n ${k('and')} A[l]>A[largest]: largest←l`],
      ['comparing',`  ${k('if')} r<n ${k('and')} A[r]>A[largest]: largest←r`],
      ['swapping', `  ${k('if')} largest≠i: swap, recurse`],
      [null,       `${k('end procedure')}`],
    ],
    radix: [
      [null,       `${k('procedure')} ${fn('radixSort')}(A)`],
      [null,       `  d ← number of digits in max(A)`],
      [null,       `  ${k('for')} pass ← 0 ${k('to')} d−1 ${k('do')}`],
      ['comparing',`    ${k('for each')} element ${k('in')} A ${k('do')}`],
      ['comparing',`      digit ← (element / 10^pass) mod 10`],
      ['comparing',`      place in bucket[digit]`],
      [null,       `    ${k('end for')}`],
      ['bucket',   `    concatenate buckets → A`],
      [null,       `  ${k('end for')}`],
      ['sorted',   `  ${cm('A is now sorted')}`],
      [null,       `${k('end procedure')}`],
    ],
    twopointers: [
      [null,       `${k('procedure')} ${fn('twoPointers')}(A, target)`],
      [null,       `  ${fn('sort')}(A)`],
      [null,       `  L ← 0,  R ← length(A) − 1`],
      ['leftptr',  `  ${k('while')} L < R ${k('do')}`],
      ['comparing',`    sum ← A[L] + A[R]`],
      ['found',    `    ${k('if')} sum = target ${k('then')}`],
      ['found',    `      ${k('return')} (L, R)  ${cm('pair found!')}`],
      ['leftptr',  `    ${k('else if')} sum < target ${k('then')}`],
      ['leftptr',  `      L ← L + 1  ${cm('need larger sum')}`],
      ['rightptr', `    ${k('else')}`],
      ['rightptr', `      R ← R − 1  ${cm('need smaller sum')}`],
      [null,       `    ${k('end if')}`],
      [null,       `  ${k('end while')}`],
      [null,       `  ${k('return')} null  ${cm('no pair found')}`],
      [null,       `${k('end procedure')}`],
    ],
    slidingwindow: [
      [null,        `${k('procedure')} ${fn('slidingWindow')}(A, k)`],
      [null,        `  ${cm('build initial window')}`],
      ['window',    `  windowSum ← ${fn('sum')}(A[0..k−1])`],
      [null,        `  maxSum ← windowSum,  maxStart ← 0`],
      ['comparing', `  ${k('for')} i ← k ${k('to')} n−1 ${k('do')}`],
      ['comparing', `    ${cm('slide: add A[i], remove A[i−k]')}`],
      ['comparing', `    windowSum ← windowSum + A[i] − A[i−k]`],
      ['bestWindow',`    ${k('if')} windowSum > maxSum ${k('then')}`],
      ['bestWindow',`      maxSum ← windowSum`],
      ['bestWindow',`      maxStart ← i − k + 1`],
      [null,        `    ${k('end if')}`],
      [null,        `  ${k('end for')}`],
      [null,        `  ${k('return')} maxSum, maxStart`],
      [null,        `${k('end procedure')}`],
    ],
    kadane: [
      [null,        `${k('procedure')} ${fn('kadane')}(A)`],
      [null,        `  curSum ← A[0],  maxSum ← A[0]`],
      [null,        `  start ← 0,  end ← 0,  bestStart ← 0,  bestEnd ← 0`],
      ['comparing', `  ${k('for')} i ← 1 ${k('to')} n−1 ${k('do')}`],
      ['bucket',    `    ${k('if')} curSum + A[i] > A[i] ${k('then')}`],
      ['bucket',    `      curSum ← curSum + A[i],  end ← i`],
      ['eliminated',`    ${k('else')}`],
      ['eliminated',`      curSum ← A[i],  start ← i,  end ← i`],
      [null,        `    ${k('end if')}`],
      ['found',     `    ${k('if')} curSum > maxSum ${k('then')}`],
      ['found',     `      maxSum ← curSum`],
      ['found',     `      bestStart ← start,  bestEnd ← end`],
      [null,        `    ${k('end if')}`],
      [null,        `  ${k('end for')}`],
      [null,        `  ${k('return')} maxSum, bestStart, bestEnd`],
      [null,        `${k('end procedure')}`],
    ],
    prefixsum: [
      [null,        `${k('procedure')} ${fn('prefixSum')}(A)`],
      [null,        `  n ← length(A)`],
      [null,        `  prefix[0] ← 0`],
      ['bucket',    `  ${k('for')} i ← 0 ${k('to')} n−1 ${k('do')}`],
      ['bucket',    `    prefix[i+1] ← prefix[i] + A[i]`],
      [null,        `  ${k('end for')}  ${cm('prefix array built')}`],
      [null,        ``],
      [null,        `  ${cm('answer a range query [L..R]:')}`],
      ['comparing', `  rangeSum ← prefix[R+1] − prefix[L]`],
      ['found',     `  ${k('return')} rangeSum`],
      [null,        `${k('end procedure')}`],
    ],
    frequencycounter: [
      [null,        `${k('procedure')} ${fn('frequencyCounter')}(A)`],
      [null,        `  freq ← empty map`],
      [null,        `  modeVal ← A[0],  modeCount ← 0`],
      ['comparing', `  ${k('for each')} x ${k('in')} A ${k('do')}`],
      ['bucket',    `    freq[x] ← freq[x] + 1`],
      ['found',     `    ${k('if')} freq[x] > modeCount ${k('then')}`],
      ['found',     `      modeVal ← x,  modeCount ← freq[x]`],
      [null,        `    ${k('end if')}`],
      [null,        `  ${k('end for')}`],
      [null,        `  ${k('return')} modeVal, modeCount`],
      [null,        `${k('end procedure')}`],
    ],
    dutchflag: [
      [null,        `${k('procedure')} ${fn('dutchNationalFlag')}(A, pivot)`],
      [null,        `  lo ← 0,  mid ← 0,  hi ← n − 1`],
      ['comparing', `  ${k('while')} mid ≤ hi ${k('do')}`],
      ['left',      `    ${k('if')} A[mid] < pivot ${k('then')}`],
      ['swapping',  `      swap(A[lo], A[mid])`],
      ['left',      `      lo ← lo + 1,  mid ← mid + 1`],
      ['bucket',    `    ${k('else if')} A[mid] = pivot ${k('then')}`],
      ['bucket',    `      mid ← mid + 1`],
      ['right',     `    ${k('else')}`],
      ['swapping',  `      swap(A[mid], A[hi])`],
      ['right',     `      hi ← hi − 1`],
      [null,        `    ${k('end if')}`],
      [null,        `  ${k('end while')}`],
      [null,        `${k('end procedure')}`],
    ],
    linear: [
      [null,        `${k('procedure')} ${fn('linearSearch')}(A, target)`],
      [null,        `  n ← length(A)`],
      ['current',   `  ${k('for')} i ← 0 ${k('to')} n−1 ${k('do')}`],
      ['current',   `    ${k('if')} A[i] = target ${k('then')}`],
      ['found',     `      ${k('return')} i  ${cm('found at index i')}`],
      [null,        `    ${k('end if')}`],
      ['eliminated',`    ${cm('A[i] ≠ target, continue')}`],
      [null,        `  ${k('end for')}`],
      [null,        `  ${k('return')} −1  ${cm('not found')}`],
      [null,        `${k('end procedure')}`],
    ],
    binary: [
      [null,        `${k('procedure')} ${fn('binarySearch')}(A, target)`],
      [null,        `  ${cm('A must be sorted')}`],
      [null,        `  L ← 0,  R ← length(A) − 1`],
      ['mid',       `  ${k('while')} L ≤ R ${k('do')}`],
      ['mid',       `    mid ← ⌊(L + R) / 2⌋`],
      ['found',     `    ${k('if')} A[mid] = target ${k('then')}`],
      ['found',     `      ${k('return')} mid  ${cm('found!')}`],
      ['left',      `    ${k('else if')} A[mid] < target ${k('then')}`],
      ['left',      `      L ← mid + 1  ${cm('discard left half')}`],
      ['right',     `    ${k('else')}`],
      ['right',     `      R ← mid − 1  ${cm('discard right half')}`],
      [null,        `    ${k('end if')}`],
      [null,        `  ${k('end while')}`],
      [null,        `  ${k('return')} −1  ${cm('not found')}`],
      [null,        `${k('end procedure')}`],
    ],
    shell: [
      [null,       `${k('procedure')} ${fn('shellSort')}(A)`],
      [null,       `  n ← length(A)`],
      [null,       `  gap ← ⌊n / 2⌋`],
      [null,       `  ${k('while')} gap > 0 ${k('do')}`],
      ['pivot',    `    ${k('for')} i ← gap ${k('to')} n−1 ${k('do')}`],
      ['pivot',    `      temp ← A[i]  ${cm('key element')}`],
      [null,       `      j ← i`],
      ['comparing',`      ${k('while')} j ≥ gap ${k('and')} A[j−gap] > temp ${k('do')}`],
      ['swapping', `        A[j] ← A[j−gap]  ${cm('shift element')}`],
      ['comparing',`        j ← j − gap`],
      [null,       `      ${k('end while')}`],
      ['sorted',   `      A[j] ← temp  ${cm('insert key')}`],
      [null,       `    ${k('end for')}`],
      [null,       `    gap ← ⌊gap / 2⌋`],
      [null,       `  ${k('end while')}`],
      [null,       `${k('end procedure')}`],
    ],
    cocktail: [
      [null,       `${k('procedure')} ${fn('cocktailSort')}(A)`],
      [null,       `  start ← 0,  end ← length(A) − 1`],
      [null,       `  swapped ← ${k('true')}`],
      [null,       `  ${k('while')} swapped ${k('do')}`],
      ['comparing',`    swapped ← ${k('false')}`],
      ['comparing',`    ${k('for')} i ← start ${k('to')} end−1 ${k('do')}`],
      ['comparing',`      ${k('if')} A[i] > A[i+1] ${k('then')}`],
      ['swapping', `        swap(A[i], A[i+1]);  swapped ← ${k('true')}`],
      ['sorted',   `    end ← end − 1  ${cm('largest in place')}`],
      ['comparing',`    ${k('for')} i ← end ${k('down to')} start+1 ${k('do')}`],
      ['comparing',`      ${k('if')} A[i−1] > A[i] ${k('then')}`],
      ['swapping', `        swap(A[i−1], A[i]);  swapped ← ${k('true')}`],
      ['sorted',   `    start ← start + 1  ${cm('smallest in place')}`],
      [null,       `  ${k('end while')}`],
      [null,       `${k('end procedure')}`],
    ],
    comb: [
      [null,       `${k('procedure')} ${fn('combSort')}(A)`],
      [null,       `  n ← length(A)`],
      [null,       `  gap ← n,  shrink ← 1.3`],
      [null,       `  sorted ← ${k('false')}`],
      [null,       `  ${k('while not')} sorted ${k('do')}`],
      [null,       `    gap ← ⌊gap / shrink⌋`],
      [null,       `    ${k('if')} gap ≤ 1 ${k('then')} gap ← 1; sorted ← ${k('true')}`],
      ['comparing',`    ${k('for')} i ← 0 ${k('to')} n−gap−1 ${k('do')}`],
      ['comparing',`      ${k('if')} A[i] > A[i+gap] ${k('then')}`],
      ['swapping', `        swap(A[i], A[i+gap])`],
      [null,       `        sorted ← ${k('false')}`],
      [null,       `      ${k('end if')}`],
      [null,       `    ${k('end for')}`],
      [null,       `  ${k('end while')}`],
      [null,       `${k('end procedure')}`],
    ],
    jump: [
      [null,        `${k('procedure')} ${fn('jumpSearch')}(A, target)`],
      [null,        `  ${cm('A must be sorted')}`],
      [null,        `  n ← length(A),  step ← ⌊√n⌋`],
      [null,        `  prev ← 0`],
      ['current',   `  ${k('while')} A[min(step,n)−1] < target ${k('do')}`],
      ['eliminated',`    prev ← step  ${cm('skip this block')}`],
      ['current',   `    step ← step + ⌊√n⌋`],
      [null,        `    ${k('if')} prev ≥ n ${k('then return')} −1`],
      [null,        `  ${k('end while')}`],
      ['current',   `  ${k('for')} i ← prev ${k('to')} min(step,n)−1 ${k('do')}`],
      ['current',   `    ${k('if')} A[i] = target ${k('then')}`],
      ['found',     `      ${k('return')} i  ${cm('found!')}`],
      [null,        `  ${k('end for')}`],
      [null,        `  ${k('return')} −1  ${cm('not found')}`],
      [null,        `${k('end procedure')}`],
    ],
    bfs: [
      [null,        `${k('procedure')} ${fn('BFS')}(grid, start, end)`],
      [null,        `  queue ← [start]`],
      [null,        `  visited[start] ← ${k('true')}`],
      [null,        `  ${k('while')} queue not empty ${k('do')}`],
      ['current',   `    node ← queue.${fn('dequeue')}()`],
      ['found',     `    ${k('if')} node = end ${k('then return')} path`],
      ['comparing', `    ${k('for each')} neighbor of node ${k('do')}`],
      ['comparing', `      ${k('if not')} visited[neighbor] ${k('and not')} wall ${k('then')}`],
      [null,        `        visited[neighbor] ← ${k('true')}`],
      [null,        `        prev[neighbor] ← node`],
      [null,        `        queue.${fn('enqueue')}(neighbor)`],
      [null,        `      ${k('end if')}`],
      [null,        `    ${k('end for')}`],
      [null,        `  ${k('end while')}`],
      [null,        `${k('end procedure')}`],
    ],
    dfs: [
      [null,        `${k('procedure')} ${fn('DFS')}(grid, start, end)`],
      [null,        `  stack ← [start]`],
      [null,        `  visited[start] ← ${k('true')}`],
      [null,        `  ${k('while')} stack not empty ${k('do')}`],
      ['current',   `    node ← stack.${fn('pop')}()`],
      ['found',     `    ${k('if')} node = end ${k('then return')} path`],
      ['comparing', `    ${k('for each')} neighbor of node ${k('do')}`],
      ['comparing', `      ${k('if not')} visited[neighbor] ${k('and not')} wall ${k('then')}`],
      [null,        `        visited[neighbor] ← ${k('true')}`],
      [null,        `        prev[neighbor] ← node`],
      [null,        `        stack.${fn('push')}(neighbor)`],
      [null,        `      ${k('end if')}`],
      [null,        `    ${k('end for')}`],
      [null,        `  ${k('end while')}`],
      [null,        `${k('end procedure')}`],
    ],
    dijkstra: [
      [null,        `${k('procedure')} ${fn('Dijkstra')}(grid, start, end)`],
      [null,        `  dist[v] ← ∞ ${k('for all')} v`],
      [null,        `  dist[start] ← 0`],
      [null,        `  pq ← priority queue with (0, start)`],
      [null,        `  ${k('while')} pq not empty ${k('do')}`],
      ['current',   `    (d, node) ← pq.${fn('extractMin')}()`],
      [null,        `    ${k('if')} visited[node] ${k('then continue')}`],
      [null,        `    visited[node] ← ${k('true')}`],
      ['found',     `    ${k('if')} node = end ${k('then return')} path`],
      ['comparing', `    ${k('for each')} neighbor of node ${k('do')}`],
      ['comparing', `      newDist ← d + weight(neighbor)`],
      [null,        `      ${k('if')} newDist < dist[neighbor] ${k('then')}`],
      [null,        `        dist[neighbor] ← newDist`],
      [null,        `        prev[neighbor] ← node`],
      [null,        `        pq.${fn('insert')}(newDist, neighbor)`],
      [null,        `      ${k('end if')}`],
      [null,        `    ${k('end for')}`],
      [null,        `  ${k('end while')}`],
      [null,        `${k('end procedure')}`],
    ],
    astar: [
      [null,        `${k('procedure')} ${fn('AStar')}(grid, start, end)`],
      [null,        `  g[v] ← ∞ ${k('for all')} v`],
      [null,        `  g[start] ← 0,  h ← manhattan distance`],
      [null,        `  pq ← priority queue with (h(start), start)`],
      [null,        `  ${k('while')} pq not empty ${k('do')}`],
      ['current',   `    (f, node) ← pq.${fn('extractMin')}()`],
      [null,        `    ${k('if')} visited[node] ${k('then continue')}`],
      [null,        `    visited[node] ← ${k('true')}`],
      ['found',     `    ${k('if')} node = end ${k('then return')} path`],
      ['comparing', `    ${k('for each')} neighbor of node ${k('do')}`],
      ['comparing', `      ng ← g[node] + weight(neighbor)`],
      [null,        `      ${k('if')} ng < g[neighbor] ${k('then')}`],
      [null,        `        g[neighbor] ← ng`],
      [null,        `        prev[neighbor] ← node`],
      [null,        `        pq.${fn('insert')}(ng + h(neighbor), neighbor)`],
      [null,        `      ${k('end if')}`],
      [null,        `    ${k('end for')}`],
      [null,        `  ${k('end while')}`],
      [null,        `${k('end procedure')}`],
    ],
    gnome: [
      [null,        `${k('procedure')} ${fn('gnomeSort')}(A)`],
      [null,        `  i ← 1`],
      [null,        `  ${k('while')} i < length(A) ${k('do')}`],
      ['comparing', `    ${k('if')} A[i] ≥ A[i−1] ${k('then')}`],
      [null,        `      i ← i + 1  ${cm('step forward')}`],
      ['swapping',  `    ${k('else')}`],
      ['swapping',  `      swap(A[i], A[i−1])`],
      [null,        `      ${k('if')} i > 1 ${k('then')} i ← i − 1`],
      [null,        `    ${k('end if')}`],
      [null,        `  ${k('end while')}`],
      [null,        `${k('end procedure')}`],
    ],
    bucket: [
      [null,        `${k('procedure')} ${fn('bucketSort')}(A)`],
      [null,        `  n ← length(A),  k ← ⌈√n⌉`],
      [null,        `  create k empty buckets`],
      ['comparing', `  ${k('for each')} x ${k('in')} A ${k('do')}`],
      ['comparing', `    bi ← ⌊x × k / (max+1)⌋`],
      [null,        `    insert x into bucket[bi]`],
      [null,        `  ${k('end for')}`],
      ['bucket',    `  ${k('for each')} bucket ${k('do')}`],
      ['bucket',    `    sort bucket (insertion sort)`],
      ['sorted',    `  concatenate all buckets`],
      [null,        `${k('end procedure')}`],
    ],
    tim: [
      [null,        `${k('procedure')} ${fn('timSort')}(A)`],
      [null,        `  RUN ← 32`],
      ['pivot',     `  ${k('for')} start ← 0 ${k('to')} n−1 ${k('step')} RUN ${k('do')}`],
      ['pivot',     `    insertionSort(A, start, min(start+RUN, n))`],
      ['comparing', `  ${k('for')} size ← RUN; size < n; size ← size×2 ${k('do')}`],
      ['comparing', `    ${k('for')} left ← 0 ${k('to')} n−1 ${k('step')} 2×size ${k('do')}`],
      ['comparing', `      mid ← left + size`],
      ['comparing', `      right ← min(left + 2×size, n)`],
      ['sorted',    `      merge(A, left, mid, right)`],
      [null,        `    ${k('end for')}`],
      [null,        `  ${k('end for')}`],
      [null,        `${k('end procedure')}`],
    ],
    pigeonhole: [
      [null,        `${k('procedure')} ${fn('pigeonholeSort')}(A)`],
      [null,        `  mn ← min(A),  mx ← max(A)`],
      [null,        `  range ← mx − mn + 1`],
      [null,        `  holes ← array of range zeros`],
      ['comparing', `  ${k('for each')} x ${k('in')} A ${k('do')}`],
      ['comparing', `    holes[x − mn] ← holes[x − mn] + 1`],
      [null,        `  ${k('end for')}`],
      ['bucket',    `  idx ← 0`],
      ['bucket',    `  ${k('for')} i ← 0 ${k('to')} range−1 ${k('do')}`],
      ['bucket',    `    ${k('while')} holes[i] > 0 ${k('do')}`],
      ['sorted',    `      A[idx] ← i + mn;  idx ← idx+1`],
      [null,        `      holes[i] ← holes[i] − 1`],
      [null,        `    ${k('end while')}`],
      [null,        `  ${k('end for')}`],
      [null,        `${k('end procedure')}`],
    ],
    boyermoore: [
      [null,        `${k('procedure')} ${fn('majorityVote')}(A)`],
      [null,        `  candidate ← A[0],  count ← 1`],
      ['comparing', `  ${k('for')} i ← 1 ${k('to')} n−1 ${k('do')}`],
      [null,        `    ${k('if')} count = 0 ${k('then')}`],
      ['pivot',     `      candidate ← A[i];  count ← 1`],
      ['found',     `    ${k('else if')} A[i] = candidate ${k('then')}`],
      ['found',     `      count ← count + 1`],
      ['eliminated',`    ${k('else')}`],
      ['eliminated',`      count ← count − 1`],
      [null,        `    ${k('end if')}`],
      [null,        `  ${k('end for')}`],
      ['found',     `  verify candidate appears > n/2 times`],
      [null,        `${k('end procedure')}`],
    ],
    mergeintervals: [
      [null,        `${k('procedure')} ${fn('mergeIntervals')}(intervals)`],
      [null,        `  sort intervals by start time`],
      [null,        `  merged ← [intervals[0]]`],
      ['comparing', `  ${k('for each')} interval ${k('in')} intervals[1..] ${k('do')}`],
      ['comparing', `    ${k('if')} interval.start ≤ merged.last.end ${k('then')}`],
      ['swapping',  `      merged.last.end ← max(merged.last.end, interval.end)`],
      ['bucket',    `    ${k('else')}`],
      ['bucket',    `      merged.append(interval)`],
      [null,        `    ${k('end if')}`],
      [null,        `  ${k('end for')}`],
      ['found',     `  ${k('return')} merged`],
      [null,        `${k('end procedure')}`],
    ],
    reservoir: [
      [null,        `${k('procedure')} ${fn('reservoirSample')}(stream, k)`],
      [null,        `  reservoir ← stream[0..k−1]`],
      ['comparing', `  ${k('for')} i ← k ${k('to')} n−1 ${k('do')}`],
      ['comparing', `    j ← random(0, i)`],
      ['swapping',  `    ${k('if')} j < k ${k('then')}`],
      ['swapping',  `      reservoir[j] ← stream[i]`],
      ['eliminated',`    ${k('else')}`],
      ['eliminated',`      ${cm('skip this element')}`],
      [null,        `    ${k('end if')}`],
      [null,        `  ${k('end for')}`],
      ['found',     `  ${k('return')} reservoir`],
      [null,        `${k('end procedure')}`],
    ],
    interpolation: [
      [null,        `${k('procedure')} ${fn('interpolationSearch')}(A, target)`],
      [null,        `  L ← 0,  R ← n−1`],
      [null,        `  ${k('while')} L ≤ R ${k('and')} target ∈ [A[L]..A[R]] ${k('do')}`],
      ['mid',       `    pos ← L + ⌊(target−A[L])×(R−L)/(A[R]−A[L])⌋`],
      ['found',     `    ${k('if')} A[pos] = target ${k('then return')} pos`],
      ['left',      `    ${k('else if')} A[pos] < target ${k('then')} L ← pos+1`],
      ['right',     `    ${k('else')} R ← pos−1`],
      [null,        `  ${k('end while')}`],
      [null,        `  ${k('return')} −1  ${cm('not found')}`],
      [null,        `${k('end procedure')}`],
    ],
    exponential: [
      [null,        `${k('procedure')} ${fn('exponentialSearch')}(A, target)`],
      [null,        `  ${k('if')} A[0] = target ${k('then return')} 0`],
      ['current',   `  bound ← 1`],
      ['current',   `  ${k('while')} bound < n ${k('and')} A[bound] < target ${k('do')}`],
      ['eliminated',`    bound ← bound × 2`],
      [null,        `  ${k('end while')}`],
      ['mid',       `  L ← ⌊bound/2⌋,  R ← min(bound, n−1)`],
      ['mid',       `  ${k('return')} binarySearch(A, L, R, target)`],
      [null,        `${k('end procedure')}`],
    ],
    ternary: [
      [null,        `${k('procedure')} ${fn('ternarySearch')}(A, target)`],
      [null,        `  L ← 0,  R ← n−1`],
      [null,        `  ${k('while')} L ≤ R ${k('do')}`],
      ['mid',       `    m1 ← L + ⌊(R−L)/3⌋`],
      ['mid',       `    m2 ← R − ⌊(R−L)/3⌋`],
      ['found',     `    ${k('if')} A[m1] = target ${k('then return')} m1`],
      ['found',     `    ${k('if')} A[m2] = target ${k('then return')} m2`],
      ['left',      `    ${k('if')} target < A[m1] ${k('then')} R ← m1−1`],
      ['right',     `    ${k('else if')} target > A[m2] ${k('then')} L ← m2+1`],
      [null,        `    ${k('else')} L ← m1+1; R ← m2−1`],
      [null,        `  ${k('end while')}`],
      [null,        `  ${k('return')} −1  ${cm('not found')}`],
      [null,        `${k('end procedure')}`],
    ],
  },
  python: { bubble:[[null,`${k('def')} ${fn('bubble_sort')}(arr):`],[null,`    n = len(arr)`],[null,`    ${k('for')} i ${k('in')} range(n - ${nm('1')}):`],['comparing',`        ${k('for')} j ${k('in')} range(n - i - ${nm('1')}):`],['comparing',`            ${k('if')} arr[j] > arr[j + ${nm('1')}]:`],['swapping',`                arr[j], arr[j+${nm('1')}] = arr[j+${nm('1')}], arr[j]`],['sorted',`    ${cm('pass i bubbles largest to end')}`],[null,`    ${k('return')} arr`]],selection:[[null,`${k('def')} ${fn('selection_sort')}(arr):`],[null,`    n = len(arr)`],[null,`    ${k('for')} i ${k('in')} range(n):`],['current',`        min_idx = i`],['comparing',`        ${k('for')} j ${k('in')} range(i + ${nm('1')}, n):`],['comparing',`            ${k('if')} arr[j] < arr[min_idx]:`],['current',`                min_idx = j`],['swapping',`        arr[i], arr[min_idx] = arr[min_idx], arr[i]`],['sorted',`    ${cm('arr[0..i] is sorted')}`],[null,`    ${k('return')} arr`]],insertion:[[null,`${k('def')} ${fn('insertion_sort')}(arr):`],[null,`    ${k('for')} i ${k('in')} range(${nm('1')}, len(arr)):`],['pivot',`        key = arr[i]`],[null,`        j = i - ${nm('1')}`],['comparing',`        ${k('while')} j >= ${nm('0')} ${k('and')} arr[j] > key:`],['comparing',`            arr[j + ${nm('1')}] = arr[j]`],['comparing',`            j -= ${nm('1')}`],['sorted',`        arr[j + ${nm('1')}] = key`],[null,`    ${k('return')} arr`]],merge:[[null,`${k('def')} ${fn('merge_sort')}(arr):`],[null,`    ${k('if')} len(arr) <= ${nm('1')}: ${k('return')} arr`],[null,`    mid = len(arr) // ${nm('2')}`],['leftpart',`    left  = ${fn('merge_sort')}(arr[:mid])`],['rightpart',`    right = ${fn('merge_sort')}(arr[mid:])`],['comparing',`    ${k('return')} ${fn('merge')}(left, right)`],[null,``],[null,`${k('def')} ${fn('merge')}(left, right):`],[null,`    result, i, j = [], ${nm('0')}, ${nm('0')}`],['comparing',`    ${k('while')} i < len(left) ${k('and')} j < len(right):`],['comparing',`        ${k('if')} left[i] <= right[j]: result.append(left[i]); i += ${nm('1')}`],['comparing',`        ${k('else')}:                   result.append(right[j]); j += ${nm('1')}`],['sorted',`    ${k('return')} result + left[i:] + right[j:]`]],quick:[[null,`${k('def')} ${fn('quick_sort')}(arr, lo, hi):`],[null,`    ${k('if')} lo >= hi: ${k('return')}`],['pivot',`    pivot = arr[hi]  ${cm('choose last as pivot')}`],[null,`    i = lo - ${nm('1')}`],['comparing',`    ${k('for')} j ${k('in')} range(lo, hi):`],['comparing',`        ${k('if')} arr[j] <= pivot:`],['swapping',`            i += ${nm('1')}; arr[i], arr[j] = arr[j], arr[i]`],['sorted',`    arr[i+${nm('1')}], arr[hi] = arr[hi], arr[i+${nm('1')}]`],[null,`    p = i + ${nm('1')}`],[null,`    ${fn('quick_sort')}(arr, lo, p - ${nm('1')})`],[null,`    ${fn('quick_sort')}(arr, p + ${nm('1')}, hi)`]],counting:[[null,`${k('def')} ${fn('counting_sort')}(arr):`],[null,`    mn, mx = min(arr), max(arr)`],[null,`    count = [${nm('0')}] * (mx - mn + ${nm('1')})`],['bucket',`    ${k('for')} x ${k('in')} arr:`],['bucket',`        count[x - mn] += ${nm('1')}`],[null,`    output, k = [], ${nm('0')}`],['comparing',`    ${k('for')} i, c ${k('in')} enumerate(count):`],['comparing',`        output.extend([i + mn] * c)`],['sorted',`    ${k('return')} output  ${cm('sorted array')}`]],heap:[[null,`${k('def')} ${fn('heap_sort')}(arr):`],[null,`    n = len(arr)`],['heap',`    ${k('for')} i ${k('in')} range(n//${nm('2')}-${nm('1')}, -${nm('1')}, -${nm('1')}):`],['heap',`        ${fn('heapify')}(arr, n, i)`],['swapping',`    ${k('for')} i ${k('in')} range(n-${nm('1')}, ${nm('0')}, -${nm('1')}):`],['swapping',`        arr[${nm('0')}], arr[i] = arr[i], arr[${nm('0')}]`],['comparing',`        ${fn('heapify')}(arr, i, ${nm('0')})`],[null,``],[null,`${k('def')} ${fn('heapify')}(arr, n, i):`],[null,`    largest, l, r = i, ${nm('2')}*i+${nm('1')}, ${nm('2')}*i+${nm('2')}`],['comparing',`    ${k('if')} l<n ${k('and')} arr[l]>arr[largest]: largest=l`],['comparing',`    ${k('if')} r<n ${k('and')} arr[r]>arr[largest]: largest=r`],['swapping',`    ${k('if')} largest != i:`],['swapping',`        arr[i],arr[largest] = arr[largest],arr[i]`],['comparing',`        ${fn('heapify')}(arr, n, largest)`]],radix:[[null,`${k('def')} ${fn('radix_sort')}(arr):`],[null,`    max_val = max(arr)`],[null,`    exp = ${nm('1')}`],[null,`    ${k('while')} max_val // exp > ${nm('0')}:`],[null,`        buckets = [[] ${k('for')} _ ${k('in')} range(${nm('10')})]`],['comparing',`        ${k('for')} x ${k('in')} arr:`],['comparing',`            buckets[(x // exp) % ${nm('10')}].append(x)`],['bucket',`        arr = [x ${k('for')} b ${k('in')} buckets ${k('for')} x ${k('in')} b]`],[null,`        exp *= ${nm('10')}`],['sorted',`    ${k('return')} arr  ${cm('sorted')}`]],twopointers:[[null,`${k('def')} ${fn('two_pointers')}(arr, target):`],[null,`    arr.sort()`],[null,`    L, R = ${nm('0')}, len(arr) - ${nm('1')}`],['leftptr',`    ${k('while')} L < R:`],['comparing',`        s = arr[L] + arr[R]`],['found',`        ${k('if')} s == target:`],['found',`            ${k('return')} (L, R)  ${cm('pair found')}`],['leftptr',`        ${k('elif')} s < target:`],['leftptr',`            L += ${nm('1')}  ${cm('need larger sum')}`],['rightptr',`        ${k('else')}:`],['rightptr',`            R -= ${nm('1')}  ${cm('need smaller sum')}`],[null,`    ${k('return')} ${k('None')}  ${cm('no pair found')}`]],slidingwindow:[[null,`${k('def')} ${fn('sliding_window')}(arr, k):`],['window',`    win_sum = sum(arr[:k])`],[null,`    max_sum, max_start = win_sum, ${nm('0')}`],['comparing',`    ${k('for')} i ${k('in')} range(k, len(arr)):`],['comparing',`        win_sum += arr[i] - arr[i - k]`],['bestWindow',`        ${k('if')} win_sum > max_sum:`],['bestWindow',`            max_sum  = win_sum`],['bestWindow',`            max_start = i - k + ${nm('1')}`],[null,`    ${k('return')} max_sum, max_start`]],kadane:[[null,`${k('def')} ${fn('kadane')}(arr):`],[null,`    cur = max_sum = arr[${nm('0')}]`],[null,`    start = end = best_s = best_e = ${nm('0')}`],['comparing',`    ${k('for')} i ${k('in')} range(${nm('1')}, len(arr)):`],['bucket',`        ${k('if')} cur + arr[i] > arr[i]:`],['bucket',`            cur += arr[i]; end = i`],['eliminated',`        ${k('else')}:`],['eliminated',`            cur = arr[i]; start = end = i`],['found',`        ${k('if')} cur > max_sum:`],['found',`            max_sum = cur`],['found',`            best_s, best_e = start, end`],[null,`    ${k('return')} max_sum, best_s, best_e`]],prefixsum:[[null,`${k('def')} ${fn('prefix_sum')}(arr):`],[null,`    n = len(arr)`],[null,`    prefix = [${nm('0')}] * (n + ${nm('1')})`],['bucket',`    ${k('for')} i ${k('in')} range(n):`],['bucket',`        prefix[i+${nm('1')}] = prefix[i] + arr[i]`],[null,`    ${cm('query range [L..R]:')}`],['comparing',`    range_sum = prefix[R+${nm('1')}] - prefix[L]`],['found',`    ${k('return')} range_sum`]],frequencycounter:[[null,`${k('def')} ${fn('frequency_counter')}(arr):`],[null,`    freq = {}`],[null,`    mode_val, mode_count = arr[${nm('0')}], ${nm('0')}`],['comparing',`    ${k('for')} x ${k('in')} arr:`],['bucket',`        freq[x] = freq.get(x, ${nm('0')}) + ${nm('1')}`],['found',`        ${k('if')} freq[x] > mode_count:`],['found',`            mode_val, mode_count = x, freq[x]`],[null,`    ${k('return')} mode_val, mode_count`]],dutchflag:[[null,`${k('def')} ${fn('dutch_flag')}(arr, pivot):`],[null,`    lo = mid = ${nm('0')}`],[null,`    hi = len(arr) - ${nm('1')}`],['comparing',`    ${k('while')} mid <= hi:`],['left',`        ${k('if')} arr[mid] < pivot:`],['swapping',`            arr[lo], arr[mid] = arr[mid], arr[lo]`],['left',`            lo += ${nm('1')}; mid += ${nm('1')}`],['bucket',`        ${k('elif')} arr[mid] == pivot:`],['bucket',`            mid += ${nm('1')}`],['right',`        ${k('else')}:`],['swapping',`            arr[mid], arr[hi] = arr[hi], arr[mid]`],['right',`            hi -= ${nm('1')}`],[null,`    ${k('return')} arr`]],linear:[[null,`${k('def')} ${fn('linear_search')}(arr, target):`],['current',`    ${k('for')} i, val ${k('in')} enumerate(arr):`],['current',`        ${k('if')} val == target:`],['found',`            ${k('return')} i  ${cm('found')}`],['eliminated',`    ${cm('not a match, keep going')}`],[null,`    ${k('return')} -${nm('1')}  ${cm('not found')}`]],binary:[[null,`${k('def')} ${fn('binary_search')}(arr, target):`],[null,`    L, R = ${nm('0')}, len(arr) - ${nm('1')}`],['mid',`    ${k('while')} L <= R:`],['mid',`        mid = (L + R) // ${nm('2')}`],['found',`        ${k('if')} arr[mid] == target:`],['found',`            ${k('return')} mid  ${cm('found!')}`],['left',`        ${k('elif')} arr[mid] < target:`],['left',`            L = mid + ${nm('1')}  ${cm('discard left')}`],['right',`        ${k('else')}:`],['right',`            R = mid - ${nm('1')}  ${cm('discard right')}`],[null,`    ${k('return')} -${nm('1')}  ${cm('not found')}`]],shell:[[null,`${k('def')} ${fn('shell_sort')}(arr):`],[null,`    n = len(arr)`],[null,`    gap = n // ${nm('2')}`],[null,`    ${k('while')} gap > ${nm('0')}:`],['pivot',`        ${k('for')} i ${k('in')} range(gap, n):`],['pivot',`            temp = arr[i]`],[null,`            j = i`],['comparing',`            ${k('while')} j >= gap ${k('and')} arr[j - gap] > temp:`],['swapping',`                arr[j] = arr[j - gap]`],['comparing',`                j -= gap`],['sorted',`            arr[j] = temp`],[null,`        gap //= ${nm('2')}`],[null,`    ${k('return')} arr`]],cocktail:[[null,`${k('def')} ${fn('cocktail_sort')}(arr):`],[null,`    start, end = ${nm('0')}, len(arr) - ${nm('1')}`],[null,`    swapped = ${k('True')}`],[null,`    ${k('while')} swapped:`],['comparing',`        swapped = ${k('False')}`],['comparing',`        ${k('for')} i ${k('in')} range(start, end):`],['comparing',`            ${k('if')} arr[i] > arr[i + ${nm('1')}]:`],['swapping',`                arr[i], arr[i+${nm('1')}] = arr[i+${nm('1')}], arr[i]`],['comparing',`                swapped = ${k('True')}`],['sorted',`        end -= ${nm('1')}`],['comparing',`        ${k('for')} i ${k('in')} range(end, start, -${nm('1')}):`],['comparing',`            ${k('if')} arr[i - ${nm('1')}] > arr[i]:`],['swapping',`                arr[i-${nm('1')}], arr[i] = arr[i], arr[i-${nm('1')}]`],['comparing',`                swapped = ${k('True')}`],['sorted',`        start += ${nm('1')}`],[null,`    ${k('return')} arr`]],comb:[[null,`${k('def')} ${fn('comb_sort')}(arr):`],[null,`    n = len(arr)`],[null,`    gap = n`],[null,`    shrink = ${nm('1.3')}`],[null,`    sorted_flag = ${k('False')}`],[null,`    ${k('while not')} sorted_flag:`],[null,`        gap = max(${nm('1')}, int(gap / shrink))`],[null,`        ${k('if')} gap == ${nm('1')}: sorted_flag = ${k('True')}`],['comparing',`        ${k('for')} i ${k('in')} range(n - gap):`],['comparing',`            ${k('if')} arr[i] > arr[i + gap]:`],['swapping',`                arr[i], arr[i+gap] = arr[i+gap], arr[i]`],[null,`                sorted_flag = ${k('False')}`],[null,`    ${k('return')} arr`]],jump:[[null,`${k('def')} ${fn('jump_search')}(arr, target):`],[null,`    n = len(arr)`],[null,`    step = int(n ** ${nm('0.5')})`],[null,`    prev = ${nm('0')}`],['current',`    ${k('while')} arr[min(step, n) - ${nm('1')}] < target:`],['eliminated',`        prev = step`],['current',`        step += int(n ** ${nm('0.5')})`],[null,`        ${k('if')} prev >= n: ${k('return')} -${nm('1')}`],['current',`    ${k('for')} i ${k('in')} range(prev, min(step, n)):`],['current',`        ${k('if')} arr[i] == target:`],['found',`            ${k('return')} i  ${cm('found!')}`],[null,`    ${k('return')} -${nm('1')}  ${cm('not found')}`]],bfs:[[null,`${k('from')} collections ${k('import')} deque`],[null,`${k('def')} ${fn('bfs')}(grid, start, end):`],[null,`    q = deque([start])`],[null,`    visited = {start}`],['current',`    ${k('while')} q:`],['current',`        node = q.popleft()`],['found',`        ${k('if')} node == end: ${k('return')} path`],['comparing',`        ${k('for')} nb ${k('in')} neighbors(node):`],['comparing',`            ${k('if')} nb ${k('not in')} visited ${k('and not')} wall:`],[null,`                visited.add(nb)`],[null,`                prev[nb] = node`],[null,`                q.append(nb)`],[null,`    ${k('return')} ${k('None')}`]],dfs:[[null,`${k('def')} ${fn('dfs')}(grid, start, end):`],[null,`    stack = [start]`],[null,`    visited = {start}`],['current',`    ${k('while')} stack:`],['current',`        node = stack.pop()`],['found',`        ${k('if')} node == end: ${k('return')} path`],['comparing',`        ${k('for')} nb ${k('in')} neighbors(node):`],['comparing',`            ${k('if')} nb ${k('not in')} visited ${k('and not')} wall:`],[null,`                visited.add(nb)`],[null,`                prev[nb] = node`],[null,`                stack.append(nb)`],[null,`    ${k('return')} ${k('None')}`]],dijkstra:[[null,`${k('import')} heapq`],[null,`${k('def')} ${fn('dijkstra')}(grid, start, end):`],[null,`    dist = {start: ${nm('0')}}`],[null,`    pq = [(${nm('0')}, start)]`],['current',`    ${k('while')} pq:`],['current',`        d, node = heapq.heappop(pq)`],[null,`        ${k('if')} node ${k('in')} visited: ${k('continue')}`],[null,`        visited.add(node)`],['found',`        ${k('if')} node == end: ${k('return')} path`],['comparing',`        ${k('for')} nb ${k('in')} neighbors(node):`],['comparing',`            nd = d + weight(nb)`],[null,`            ${k('if')} nd < dist.get(nb, inf):`],[null,`                dist[nb] = nd`],[null,`                prev[nb] = node`],[null,`                heapq.heappush(pq, (nd, nb))`],[null,`    ${k('return')} ${k('None')}`]],astar:[[null,`${k('import')} heapq`],[null,`${k('def')} ${fn('astar')}(grid, start, end):`],[null,`    g = {start: ${nm('0')}}`],[null,`    h = ${k('lambda')} n: abs(n[${nm('0')}]-end[${nm('0')}])+abs(n[${nm('1')}]-end[${nm('1')}])`],[null,`    pq = [(h(start), start)]`],['current',`    ${k('while')} pq:`],['current',`        f, node = heapq.heappop(pq)`],[null,`        ${k('if')} node ${k('in')} visited: ${k('continue')}`],[null,`        visited.add(node)`],['found',`        ${k('if')} node == end: ${k('return')} path`],['comparing',`        ${k('for')} nb ${k('in')} neighbors(node):`],['comparing',`            ng = g[node] + weight(nb)`],[null,`            ${k('if')} ng < g.get(nb, inf):`],[null,`                g[nb] = ng`],[null,`                prev[nb] = node`],[null,`                heapq.heappush(pq, (ng+h(nb), nb))`],[null,`    ${k('return')} ${k('None')}`]],gnome:[[null,`${k('def')} ${fn('gnome_sort')}(arr):`],[null,`    i = ${nm('0')}`],[null,`    n = len(arr)`],['comparing',`    ${k('while')} i < n:`],['comparing',`        ${k('if')} i == ${nm('0')} ${k('or')} arr[i] >= arr[i-${nm('1')}]:`],[null,`            i += ${nm('1')}  ${cm('move forward')}`],['swapping',`        ${k('else')}:`],['swapping',`            arr[i], arr[i-${nm('1')}] = arr[i-${nm('1')}], arr[i]`],[null,`            i -= ${nm('1')}  ${cm('step back')}`],['sorted',`    ${k('return')} arr`]],bucket:[[null,`${k('def')} ${fn('bucket_sort')}(arr):`],[null,`    n = len(arr)`],[null,`    mn, mx = min(arr), max(arr)`],['bucket',`    buckets = [[] ${k('for')} _ ${k('in')} range(n)]`],['bucket',`    ${k('for')} x ${k('in')} arr:`],['bucket',`        idx = (x-mn)*(n-${nm('1')})//(mx-mn)`],['bucket',`        buckets[idx].append(x)`],['comparing',`    ${k('for')} b ${k('in')} buckets:`],['comparing',`        b.sort()  ${cm('sort each bucket')}`],['sorted',`    ${k('return')} [x ${k('for')} b ${k('in')} buckets ${k('for')} x ${k('in')} b]`]],tim:[[null,`${k('def')} ${fn('tim_sort')}(arr):`],[null,`    RUN = ${nm('32')}`],[null,`    n = len(arr)`],['pivot',`    ${k('for')} i ${k('in')} range(${nm('0')}, n, RUN):`],['pivot',`        ${fn('insertion_sort')}(arr, i, min(i+RUN-${nm('1')}, n-${nm('1')}))`],[null,`    size = RUN`],['comparing',`    ${k('while')} size < n:`],['leftpart',`        ${k('for')} start ${k('in')} range(${nm('0')}, n, ${nm('2')}*size):`],['leftpart',`            mid = min(start+size-${nm('1')}, n-${nm('1')})`],['rightpart',`            end = min(start+${nm('2')}*size-${nm('1')}, n-${nm('1')})`],['comparing',`            ${fn('merge')}(arr, start, mid, end)`],['sorted',`        size *= ${nm('2')}`],[null,`    ${k('return')} arr`]],pigeonhole:[[null,`${k('def')} ${fn('pigeonhole_sort')}(arr):`],[null,`    mn, mx = min(arr), max(arr)`],[null,`    size = mx - mn + ${nm('1')}`],['bucket',`    holes = [${nm('0')}] * size`],['bucket',`    ${k('for')} x ${k('in')} arr:`],['bucket',`        holes[x - mn] += ${nm('1')}`],[null,`    idx = ${nm('0')}`],['comparing',`    ${k('for')} i ${k('in')} range(size):`],['comparing',`        ${k('while')} holes[i] > ${nm('0')}:`],['sorted',`            arr[idx] = i + mn`],['sorted',`            holes[i] -= ${nm('1')}; idx += ${nm('1')}`],[null,`    ${k('return')} arr`]],boyermoore:[[null,`${k('def')} ${fn('boyer_moore')}(arr):`],[null,`    candidate, count = arr[${nm('0')}], ${nm('0')}`],['comparing',`    ${k('for')} x ${k('in')} arr:`],['comparing',`        ${k('if')} count == ${nm('0')}:`],['leftptr',`            candidate = x`],['comparing',`        count += ${nm('1')} ${k('if')} x == candidate ${k('else')} -${nm('1')}`],[null,`    ${cm('verify')}`],['comparing',`    ${k('if')} arr.count(candidate) > len(arr)//${nm('2')}:`],['found',`        ${k('return')} candidate`],['eliminated',`    ${k('return')} ${k('None')}`]],mergeintervals:[[null,`${k('def')} ${fn('merge_intervals')}(intervals):`],[null,`    intervals.sort(key=${k('lambda')} x: x[${nm('0')}])`],['leftptr',`    merged = [intervals[${nm('0')}]]`],['comparing',`    ${k('for')} curr ${k('in')} intervals[${nm('1')}:]:`],['comparing',`        ${k('if')} curr[${nm('0')}] <= merged[-${nm('1')}][${nm('1')}]:`],['found',`            merged[-${nm('1')}][${nm('1')}] = max(merged[-${nm('1')}][${nm('1')}], curr[${nm('1')}])`],['rightptr',`        ${k('else')}:`],['rightptr',`            merged.append(curr)`],['sorted',`    ${k('return')} merged`]],reservoir:[[null,`${k('import')} random`],[null,`${k('def')} ${fn('reservoir_sample')}(stream, k):`],['bucket',`    reservoir = stream[:k]`],['comparing',`    ${k('for')} i ${k('in')} range(k, len(stream)):`],['comparing',`        j = random.randint(${nm('0')}, i)`],['swapping',`        ${k('if')} j < k:`],['swapping',`            reservoir[j] = stream[i]`],['found',`    ${k('return')} reservoir`]],interpolation:[[null,`${k('def')} ${fn('interpolation_search')}(arr, target):`],[null,`    lo, hi = ${nm('0')}, len(arr) - ${nm('1')}`],['mid',`    ${k('while')} lo <= hi ${k('and')} arr[lo] <= target <= arr[hi]:`],['mid',`        ${k('if')} arr[lo] == arr[hi]:`],['found',`            ${k('if')} arr[lo] == target: ${k('return')} lo`],[null,`            ${k('break')}`],['mid',`        pos = lo+(target-arr[lo])*(hi-lo)//(arr[hi]-arr[lo])`],['found',`        ${k('if')} arr[pos] == target: ${k('return')} pos`],['left',`        ${k('elif')} arr[pos] < target: lo = pos+${nm('1')}`],['right',`        ${k('else')}: hi = pos-${nm('1')}`],[null,`    ${k('return')} -${nm('1')}`]],exponential:[[null,`${k('def')} ${fn('exponential_search')}(arr, target):`],['found',`    ${k('if')} arr[${nm('0')}] == target: ${k('return')} ${nm('0')}`],[null,`    n, i = len(arr), ${nm('1')}`],['current',`    ${k('while')} i < n ${k('and')} arr[i] <= target:`],['current',`        i *= ${nm('2')}`],[null,`    lo, hi = i//${nm('2')}, min(i, n-${nm('1')})`],['mid',`    ${k('while')} lo <= hi:`],['mid',`        mid = (lo+hi)//${nm('2')}`],['found',`        ${k('if')} arr[mid] == target: ${k('return')} mid`],['left',`        ${k('elif')} arr[mid] < target: lo = mid+${nm('1')}`],['right',`        ${k('else')}: hi = mid-${nm('1')}`],[null,`    ${k('return')} -${nm('1')}`]],ternary:[[null,`${k('def')} ${fn('ternary_search')}(arr, target):`],[null,`    lo, hi = ${nm('0')}, len(arr) - ${nm('1')}`],[null,`    ${k('while')} lo <= hi:`],['mid',`        m1 = lo + (hi-lo)//${nm('3')}`],['mid',`        m2 = hi - (hi-lo)//${nm('3')}`],['found',`        ${k('if')} arr[m1] == target: ${k('return')} m1`],['found',`        ${k('if')} arr[m2] == target: ${k('return')} m2`],['left',`        ${k('if')} target < arr[m1]: hi = m1-${nm('1')}`],['right',`        ${k('elif')} target > arr[m2]: lo = m2+${nm('1')}`],[null,`        ${k('else')}: lo = m1+${nm('1')}; hi = m2-${nm('1')}`],[null,`    ${k('return')} -${nm('1')}`]]},
  cpp: {
    bubble: [
      [null,       `${k('void')} ${fn('bubbleSort')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('for')} (${k('int')} i = ${nm('0')}; i < n-${nm('1')}; i++) {`],
      ['comparing',`        ${k('for')} (${k('int')} j = ${nm('0')}; j < n-i-${nm('1')}; j++) {`],
      ['comparing',`            ${k('if')} (arr[j] > arr[j+${nm('1')}]) {`],
      ['swapping', `                swap(arr[j], arr[j+${nm('1')}]);`],
      [null,       `            }`],
      [null,       `        }`],
      ['sorted',   `        ${cm('arr[n-i-1] is in final position')}`],
      [null,       `    }`],
      [null,       `}`],
    ],
    selection: [
      [null,       `${k('void')} ${fn('selectionSort')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('for')} (${k('int')} i = ${nm('0')}; i < n-${nm('1')}; i++) {`],
      ['current',  `        ${k('int')} minIdx = i;`],
      ['comparing',`        ${k('for')} (${k('int')} j = i+${nm('1')}; j < n; j++)`],
      ['comparing',`            ${k('if')} (arr[j] < arr[minIdx]) minIdx = j;`],
      ['current',  `        ${cm('minIdx holds position of minimum')}`],
      ['swapping', `        swap(arr[i], arr[minIdx]);`],
      ['sorted',   `        ${cm('arr[0..i] is sorted')}`],
      [null,       `    }`],
      [null,       `}`],
    ],
    insertion: [
      [null,       `${k('void')} ${fn('insertionSort')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('for')} (${k('int')} i = ${nm('1')}; i < n; i++) {`],
      ['pivot',    `        ${k('int')} key = arr[i];`],
      [null,       `        ${k('int')} j = i - ${nm('1')};`],
      ['comparing',`        ${k('while')} (j >= ${nm('0')} && arr[j] > key) {`],
      ['comparing',`            arr[j+${nm('1')}] = arr[j];`],
      ['comparing',`            j--;`],
      [null,       `        }`],
      ['sorted',   `        arr[j+${nm('1')}] = key;`],
      [null,       `    }`],
      [null,       `}`],
    ],
    merge: [
      [null,       `${k('void')} ${fn('merge')}(${k('int')} A[], ${k('int')} l, ${k('int')} m, ${k('int')} r) {`],
      [null,       `    vector<${k('int')}> L(A+l, A+m+${nm('1')}), R(A+m+${nm('1')}, A+r+${nm('1')});`],
      [null,       `    ${k('int')} i=${nm('0')}, j=${nm('0')}, k=l;`],
      ['comparing',`    ${k('while')} (i<L.size() && j<R.size())`],
      ['comparing',`        A[k++] = (L[i]<=R[j]) ? L[i++] : R[j++];`],
      ['sorted',   `    ${k('while')} (i<L.size()) A[k++]=L[i++];`],
      ['sorted',   `    ${k('while')} (j<R.size()) A[k++]=R[j++];`],
      [null,       `}`],
      [null,       ``],
      [null,       `${k('void')} ${fn('mergeSort')}(${k('int')} A[], ${k('int')} l, ${k('int')} r) {`],
      [null,       `    ${k('if')} (l >= r) ${k('return')};`],
      [null,       `    ${k('int')} m = (l + r) / ${nm('2')};`],
      ['leftpart', `    ${fn('mergeSort')}(A, l, m);`],
      ['rightpart',`    ${fn('mergeSort')}(A, m+${nm('1')}, r);`],
      ['comparing',`    ${fn('merge')}(A, l, m, r);`],
      [null,       `}`],
    ],
    quick: [
      [null,       `${k('int')} ${fn('partition')}(${k('int')} A[], ${k('int')} lo, ${k('int')} hi) {`],
      ['pivot',    `    ${k('int')} pivot = A[hi];`],
      [null,       `    ${k('int')} i = lo - ${nm('1')};`],
      ['comparing',`    ${k('for')} (${k('int')} j = lo; j < hi; j++) {`],
      ['comparing',`        ${k('if')} (A[j] <= pivot)`],
      ['swapping', `            swap(A[++i], A[j]);`],
      [null,       `    }`],
      ['sorted',   `    swap(A[i+${nm('1')}], A[hi]); ${k('return')} i+${nm('1')};`],
      [null,       `}`],
      [null,       `${k('void')} ${fn('quickSort')}(${k('int')} A[], ${k('int')} lo, ${k('int')} hi) {`],
      [null,       `    ${k('if')} (lo >= hi) ${k('return')};`],
      [null,       `    ${k('int')} p = ${fn('partition')}(A, lo, hi);`],
      [null,       `    ${fn('quickSort')}(A, lo, p-${nm('1')}); ${fn('quickSort')}(A, p+${nm('1')}, hi);`],
      [null,       `}`],
    ],
    counting: [
      [null,       `${k('void')} ${fn('countingSort')}(${k('int')} A[], ${k('int')} n) {`],
      [null,       `    ${k('int')} mn=*min_element(A,A+n), mx=*max_element(A,A+n);`],
      [null,       `    vector<${k('int')}> count(mx-mn+${nm('1')}, ${nm('0')});`],
      ['bucket',   `    ${k('for')} (${k('int')} i=${nm('0')}; i<n; i++)`],
      ['bucket',   `        count[A[i]-mn]++;`],
      [null,       `    ${k('int')} k = ${nm('0')};`],
      ['comparing',`    ${k('for')} (${k('int')} i=${nm('0')}; i<count.size(); i++)`],
      ['comparing',`        ${k('while')} (count[i]--) A[k++] = i + mn;`],
      ['sorted',   `    ${cm('A is now sorted')}`],
      [null,       `}`],
    ],
    heap: [
      [null,       `${k('void')} ${fn('heapify')}(${k('int')} arr[], ${k('int')} n, ${k('int')} i) {`],
      [null,       `    ${k('int')} largest=i, l=${nm('2')}*i+${nm('1')}, r=${nm('2')}*i+${nm('2')};`],
      ['comparing',`    ${k('if')} (l<n && arr[l]>arr[largest]) largest=l;`],
      ['comparing',`    ${k('if')} (r<n && arr[r]>arr[largest]) largest=r;`],
      ['swapping', `    ${k('if')} (largest!=i) { swap(arr[i],arr[largest]);`],
      ['comparing',`        ${fn('heapify')}(arr, n, largest); }`],
      [null,       `}`],
      [null,       ``],
      [null,       `${k('void')} ${fn('heapSort')}(${k('int')} arr[], ${k('int')} n) {`],
      ['heap',     `    ${k('for')} (${k('int')} i=n/${nm('2')}-${nm('1')}; i>=${nm('0')}; i--)`],
      ['heap',     `        ${fn('heapify')}(arr, n, i);`],
      ['swapping', `    ${k('for')} (${k('int')} i=n-${nm('1')}; i>${nm('0')}; i--) {`],
      ['swapping', `        swap(arr[${nm('0')}], arr[i]);`],
      ['comparing',`        ${fn('heapify')}(arr, i, ${nm('0')}); }`],
      [null,       `}`],
    ],
    radix: [
      [null,       `${k('void')} ${fn('radixSort')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('int')} mx = *max_element(arr, arr+n);`],
      [null,       `    ${k('for')} (${k('int')} exp=${nm('1')}; mx/exp>${nm('0')}; exp*=${nm('10')}) {`],
      [null,       `        vector<vector<${k('int')}>> buckets(${nm('10')});`],
      ['comparing',`        ${k('for')} (${k('int')} i=${nm('0')}; i<n; i++)`],
      ['comparing',`            buckets[(arr[i]/exp)%${nm('10')}].push_back(arr[i]);`],
      [null,       `        ${k('int')} k=${nm('0')};`],
      ['bucket',   `        ${k('for')} (${k('auto')}& b : buckets)`],
      ['bucket',   `            ${k('for')} (${k('int')} x : b) arr[k++]=x;`],
      [null,       `    }`],
      ['sorted',   `    ${cm('arr is now sorted')}`],
      [null,       `}`],
    ],
    twopointers: [
      [null,       `${k('pair')}<${k('int')},${k('int')}> ${fn('twoPointers')}(${k('int')} A[], ${k('int')} n, ${k('int')} target) {`],
      [null,       `    sort(A, A+n);`],
      [null,       `    ${k('int')} L=${nm('0')}, R=n-${nm('1')};`],
      ['leftptr',  `    ${k('while')} (L < R) {`],
      ['comparing',`        ${k('int')} s = A[L] + A[R];`],
      ['found',    `        ${k('if')} (s == target) ${k('return')} {L, R};`],
      ['leftptr',  `        ${k('if')} (s < target)  L++;  ${cm('need larger')}`],
      ['rightptr', `        ${k('else')}              R--;  ${cm('need smaller')}`],
      [null,       `    }`],
      [null,       `    ${k('return')} {-${nm('1')}, -${nm('1')}};  ${cm('not found')}`],
      [null,       `}`],
    ],
    slidingwindow: [
      [null,        `${k('pair')}<${k('int')},${k('int')}> ${fn('slidingWindow')}(${k('int')} A[], ${k('int')} n, ${k('int')} k) {`],
      ['window',    `    ${k('int')} winSum=${nm('0')}; ${k('for')}(${k('int')} i=${nm('0')};i<k;i++) winSum+=A[i];`],
      [null,        `    ${k('int')} maxSum=winSum, maxStart=${nm('0')};`],
      ['comparing', `    ${k('for')} (${k('int')} i=k; i<n; i++) {`],
      ['comparing', `        winSum += A[i] - A[i-k];`],
      ['bestWindow',`        ${k('if')} (winSum > maxSum) {`],
      ['bestWindow',`            maxSum=winSum; maxStart=i-k+${nm('1')};`],
      [null,        `        }`],
      [null,        `    }`],
      [null,        `    ${k('return')} {maxSum, maxStart};`],
      [null,        `}`],
    ],
    kadane: [
      [null,        `${k('tuple')}<${k('int')},${k('int')},${k('int')}> ${fn('kadane')}(${k('int')} A[], ${k('int')} n) {`],
      [null,        `    ${k('int')} cur=A[${nm('0')}], mx=A[${nm('0')}];`],
      [null,        `    ${k('int')} s=${nm('0')},e=${nm('0')},bs=${nm('0')},be=${nm('0')};`],
      ['comparing', `    ${k('for')}(${k('int')} i=${nm('1')};i<n;i++){`],
      ['bucket',    `        ${k('if')}(cur+A[i]>A[i]){cur+=A[i];e=i;}`],
      ['eliminated',`        ${k('else')}{cur=A[i];s=e=i;}`],
      ['found',     `        ${k('if')}(cur>mx){mx=cur;bs=s;be=e;}`],
      [null,        `    }`],
      [null,        `    ${k('return')} {mx,bs,be};`],
      [null,        `}`],
    ],
    prefixsum: [
      [null,        `${k('int')} ${fn('rangeSum')}(${k('int')} A[], ${k('int')} n, ${k('int')} L, ${k('int')} R) {`],
      [null,        `    ${k('int')} prefix[n+${nm('1')}]; prefix[${nm('0')}]=${nm('0')};`],
      ['bucket',    `    ${k('for')}(${k('int')} i=${nm('0')};i<n;i++)`],
      ['bucket',    `        prefix[i+${nm('1')}]=prefix[i]+A[i];`],
      ['comparing', `    ${k('return')} prefix[R+${nm('1')}]-prefix[L];`],
      [null,        `}`],
    ],
    frequencycounter: [
      [null,        `${k('pair')}<${k('int')},${k('int')}> ${fn('freqCounter')}(${k('int')} A[], ${k('int')} n) {`],
      [null,        `    unordered_map<${k('int')},${k('int')}> freq;`],
      [null,        `    ${k('int')} modeV=A[${nm('0')}], modeC=${nm('0')};`],
      ['comparing', `    ${k('for')}(${k('int')} i=${nm('0')};i<n;i++){`],
      ['bucket',    `        freq[A[i]]++;`],
      ['found',     `        ${k('if')}(freq[A[i]]>modeC){modeV=A[i];modeC=freq[A[i]];}`],
      [null,        `    }`],
      [null,        `    ${k('return')} {modeV,modeC};`],
      [null,        `}`],
    ],
    dutchflag: [
      [null,        `${k('void')} ${fn('dutchFlag')}(${k('int')} A[], ${k('int')} n, ${k('int')} pivot) {`],
      [null,        `    ${k('int')} lo=${nm('0')},mid=${nm('0')},hi=n-${nm('1')};`],
      ['comparing', `    ${k('while')}(mid<=hi){`],
      ['left',      `        ${k('if')}(A[mid]<pivot)`],
      ['swapping',  `            swap(A[lo++],A[mid++]);`],
      ['bucket',    `        ${k('else if')}(A[mid]==pivot) mid++;`],
      ['right',     `        ${k('else')}`],
      ['swapping',  `            swap(A[mid],A[hi--]);`],
      [null,        `    }`],
      [null,        `}`],
    ],
    linear: [
      ['current',   `    ${k('for')} (${k('int')} i=${nm('0')}; i<n; i++) {`],
      ['current',   `        ${k('if')} (arr[i] == target)`],
      ['found',     `            ${k('return')} i;  ${cm('found at index i')}`],
      ['eliminated',`        ${cm('arr[i] != target, continue')}`],
      [null,        `    }`],
      [null,        `    ${k('return')} -${nm('1')};  ${cm('not found')}`],
      [null,        `}`],
    ],
    binary: [
      [null,        `${k('int')} ${fn('binarySearch')}(${k('int')} arr[], ${k('int')} n, ${k('int')} target) {`],
      [null,        `    ${k('int')} L=${nm('0')}, R=n-${nm('1')};`],
      ['mid',       `    ${k('while')} (L <= R) {`],
      ['mid',       `        ${k('int')} mid = (L + R) / ${nm('2')};`],
      ['found',     `        ${k('if')} (arr[mid] == target) ${k('return')} mid;`],
      ['left',      `        ${k('if')} (arr[mid] < target)  L = mid + ${nm('1')};`],
      ['right',     `        ${k('else')}                    R = mid - ${nm('1')};`],
      [null,        `    }`],
      [null,        `    ${k('return')} -${nm('1')};  ${cm('not found')}`],
      [null,        `}`],
    ],
    shell: [
      [null,       `${k('void')} ${fn('shellSort')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('for')} (${k('int')} gap=n/${nm('2')}; gap>${nm('0')}; gap/=${nm('2')}) {`],
      ['pivot',    `        ${k('for')} (${k('int')} i=gap; i<n; i++) {`],
      ['pivot',    `            ${k('int')} temp = arr[i];`],
      [null,       `            ${k('int')} j = i;`],
      ['comparing',`            ${k('while')} (j>=gap && arr[j-gap]>temp) {`],
      ['swapping', `                arr[j] = arr[j-gap];`],
      ['comparing',`                j -= gap;`],
      [null,       `            }`],
      ['sorted',   `            arr[j] = temp;`],
      [null,       `        }`],
      [null,       `    }`],
      [null,       `}`],
    ],
    cocktail: [
      [null,       `${k('void')} ${fn('cocktailSort')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('int')} start=${nm('0')}, end=n-${nm('1')};`],
      [null,       `    ${k('bool')} swapped = ${k('true')};`],
      [null,       `    ${k('while')} (swapped) {`],
      ['comparing',`        swapped = ${k('false')};`],
      ['comparing',`        ${k('for')} (${k('int')} i=start; i<end; i++)`],
      ['comparing',`            ${k('if')} (arr[i]>arr[i+${nm('1')}]) {`],
      ['swapping', `                swap(arr[i],arr[i+${nm('1')}]); swapped=${k('true')}; }`],
      ['sorted',   `        end--;`],
      ['comparing',`        ${k('for')} (${k('int')} i=end; i>start; i--)`],
      ['comparing',`            ${k('if')} (arr[i-${nm('1')}]>arr[i]) {`],
      ['swapping', `                swap(arr[i-${nm('1')}],arr[i]); swapped=${k('true')}; }`],
      ['sorted',   `        start++;`],
      [null,       `    }`],
      [null,       `}`],
    ],
    comb: [
      [null,       `${k('void')} ${fn('combSort')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('int')} gap = n;`],
      [null,       `    ${k('double')} shrink = ${nm('1.3')};`],
      [null,       `    ${k('bool')} sorted = ${k('false')};`],
      [null,       `    ${k('while')} (!sorted) {`],
      [null,       `        gap = max(${nm('1')}, (${k('int')})(gap/shrink));`],
      [null,       `        ${k('if')} (gap==${nm('1')}) sorted=${k('true')};`],
      ['comparing',`        ${k('for')} (${k('int')} i=${nm('0')}; i+gap<n; i++) {`],
      ['comparing',`            ${k('if')} (arr[i]>arr[i+gap]) {`],
      ['swapping', `                swap(arr[i], arr[i+gap]);`],
      [null,       `                sorted = ${k('false')};`],
      [null,       `            }`],
      [null,       `        }`],
      [null,       `    }`],
      [null,       `}`],
    ],
    jump: [
      [null,        `${k('int')} ${fn('jumpSearch')}(${k('int')} arr[], ${k('int')} n, ${k('int')} target) {`],
      [null,        `    ${k('int')} step = sqrt(n);`],
      [null,        `    ${k('int')} prev = ${nm('0')};`],
      ['current',   `    ${k('while')} (arr[min(step,n)-${nm('1')}] < target) {`],
      ['eliminated',`        prev = step;`],
      ['current',   `        step += sqrt(n);`],
      [null,        `        ${k('if')} (prev >= n) ${k('return')} -${nm('1')};`],
      [null,        `    }`],
      ['current',   `    ${k('for')} (${k('int')} i=prev; i<min(step,n); i++) {`],
      ['found',     `        ${k('if')} (arr[i]==target) ${k('return')} i;`],
      [null,        `    }`],
      [null,        `    ${k('return')} -${nm('1')};  ${cm('not found')}`],
      [null,        `}`],
    ],
    bfs: [
      [null,        `${k('void')} ${fn('bfs')}(${k('int')} grid[][COLS], pair start, pair end) {`],
      [null,        `    queue<pair> q;`],
      [null,        `    q.push(start);`],
      [null,        `    visited[start] = ${k('true')};`],
      ['current',   `    ${k('while')} (!q.empty()) {`],
      ['current',   `        auto node = q.front(); q.pop();`],
      ['found',     `        ${k('if')} (node == end) ${k('return')};  ${cm('found')}`],
      ['comparing', `        ${k('for')} (auto& nb : neighbors(node)) {`],
      ['comparing', `            ${k('if')} (!visited[nb] && !wall[nb]) {`],
      [null,        `                visited[nb] = ${k('true')};`],
      [null,        `                prev[nb] = node;`],
      [null,        `                q.push(nb);`],
      [null,        `    }}}`],
      [null,        `}`],
    ],
    dfs: [
      [null,        `${k('void')} ${fn('dfs')}(${k('int')} grid[][COLS], pair start, pair end) {`],
      [null,        `    stack<pair> s;`],
      [null,        `    s.push(start);`],
      [null,        `    visited[start] = ${k('true')};`],
      ['current',   `    ${k('while')} (!s.empty()) {`],
      ['current',   `        auto node = s.top(); s.pop();`],
      ['found',     `        ${k('if')} (node == end) ${k('return')};  ${cm('found')}`],
      ['comparing', `        ${k('for')} (auto& nb : neighbors(node)) {`],
      ['comparing', `            ${k('if')} (!visited[nb] && !wall[nb]) {`],
      [null,        `                visited[nb] = ${k('true')};`],
      [null,        `                prev[nb] = node;`],
      [null,        `                s.push(nb);`],
      [null,        `    }}}`],
      [null,        `}`],
    ],
    dijkstra: [
      [null,        `${k('void')} ${fn('dijkstra')}(${k('int')} grid[][COLS], pair s, pair e) {`],
      [null,        `    priority_queue<pair<${k('int')},pair>, vector<...>, greater<...>> pq;`],
      [null,        `    dist[s] = ${nm('0')}; pq.push({${nm('0')}, s});`],
      ['current',   `    ${k('while')} (!pq.empty()) {`],
      ['current',   `        auto [d, node] = pq.top(); pq.pop();`],
      [null,        `        ${k('if')} (visited[node]) ${k('continue')};`],
      [null,        `        visited[node] = ${k('true')};`],
      ['found',     `        ${k('if')} (node == e) ${k('return')};`],
      ['comparing', `        ${k('for')} (auto& nb : neighbors(node)) {`],
      ['comparing', `            ${k('int')} nd = d + weight(nb);`],
      [null,        `            ${k('if')} (nd < dist[nb]) {`],
      [null,        `                dist[nb] = nd; prev[nb] = node;`],
      [null,        `                pq.push({nd, nb});`],
      [null,        `    }}}`],
      [null,        `}`],
    ],
    astar: [
      [null,        `${k('void')} ${fn('astar')}(${k('int')} grid[][COLS], pair s, pair e) {`],
      [null,        `    ${k('auto')} h = [&](pair n){ ${k('return')} abs(n.r-e.r)+abs(n.c-e.c); };`],
      [null,        `    g[s] = ${nm('0')}; pq.push({h(s), s});`],
      ['current',   `    ${k('while')} (!pq.empty()) {`],
      ['current',   `        auto [f, node] = pq.top(); pq.pop();`],
      [null,        `        ${k('if')} (visited[node]) ${k('continue')};`],
      [null,        `        visited[node] = ${k('true')};`],
      ['found',     `        ${k('if')} (node == e) ${k('return')};`],
      ['comparing', `        ${k('for')} (auto& nb : neighbors(node)) {`],
      ['comparing', `            ${k('int')} ng = g[node] + weight(nb);`],
      [null,        `            ${k('if')} (ng < g[nb]) {`],
      [null,        `                g[nb] = ng; prev[nb] = node;`],
      [null,        `                pq.push({ng+h(nb), nb});`],
      [null,        `    }}}`],
      [null,        `}`],
    ],
    gnome: [
      [null,       `${k('void')} ${fn('gnomeSort')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('int')} i = ${nm('0')};`],
      ['comparing',`    ${k('while')} (i < n) {`],
      ['comparing',`        ${k('if')} (i == ${nm('0')} || arr[i] >= arr[i-${nm('1')}])`],
      [null,       `            i++;  ${cm('move forward')}`],
      ['swapping', `        ${k('else')} {`],
      ['swapping', `            swap(arr[i], arr[i-${nm('1')}]);`],
      [null,       `            i--;  ${cm('step back')}`],
      [null,       `        }`],
      ['sorted',   `    }`],
      [null,       `}`],
    ],
    bucket: [
      [null,       `${k('void')} ${fn('bucketSort')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('int')} mn = *min_element(arr, arr+n);`],
      [null,       `    ${k('int')} mx = *max_element(arr, arr+n);`],
      ['bucket',   `    vector<vector<${k('int')}>> bkt(n);`],
      ['bucket',   `    ${k('for')} (${k('int')} i=${nm('0')};i<n;i++) {`],
      ['bucket',   `        ${k('int')} idx=(arr[i]-mn)*(n-${nm('1')})/(mx-mn);`],
      ['bucket',   `        bkt[idx].push_back(arr[i]); }`],
      ['comparing',`    ${k('for')} (${k('auto')}& b : bkt) sort(b.begin(),b.end());`],
      ['sorted',   `    ${k('int')} k=${nm('0')};`],
      ['sorted',   `    ${k('for')} (${k('auto')}& b:bkt) ${k('for')}(${k('int')} x:b) arr[k++]=x;`],
      [null,       `}`],
    ],
    tim: [
      [null,       `${k('const int')} RUN = ${nm('32')};`],
      [null,       `${k('void')} ${fn('timSort')}(${k('int')} arr[], ${k('int')} n) {`],
      ['pivot',    `    ${k('for')} (${k('int')} i=${nm('0')};i<n;i+=RUN)`],
      ['pivot',    `        ${fn('insertionSort')}(arr,i,min(i+RUN-${nm('1')},n-${nm('1')}));`],
      ['comparing',`    ${k('for')} (${k('int')} sz=RUN;sz<n;sz*=${nm('2')}) {`],
      ['leftpart', `        ${k('for')} (${k('int')} l=${nm('0')};l<n;l+=${nm('2')}*sz) {`],
      ['leftpart', `            ${k('int')} mid=min(l+sz-${nm('1')},n-${nm('1')});`],
      ['rightpart',`            ${k('int')} r=min(l+${nm('2')}*sz-${nm('1')},n-${nm('1')});`],
      ['comparing',`            ${fn('merge')}(arr,l,mid,r);`],
      ['sorted',   `        }`],
      [null,       `    }`],
      [null,       `}`],
    ],
    pigeonhole: [
      [null,       `${k('void')} ${fn('pigeonholeSort')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('int')} mn=*min_element(arr,arr+n);`],
      [null,       `    ${k('int')} mx=*max_element(arr,arr+n);`],
      [null,       `    ${k('int')} range=mx-mn+${nm('1')};`],
      ['bucket',   `    vector<${k('int')}> holes(range, ${nm('0')});`],
      ['bucket',   `    ${k('for')} (${k('int')} i=${nm('0')};i<n;i++) holes[arr[i]-mn]++;`],
      [null,       `    ${k('int')} idx=${nm('0')};`],
      ['comparing',`    ${k('for')} (${k('int')} i=${nm('0')};i<range;i++)`],
      ['comparing',`        ${k('while')} (holes[i]-- > ${nm('0')})`],
      ['sorted',   `            arr[idx++] = i + mn;`],
      [null,       `}`],
    ],
    boyermoore: [
      [null,       `${k('int')} ${fn('majorityVote')}(${k('int')} arr[], ${k('int')} n) {`],
      [null,       `    ${k('int')} cand=arr[${nm('0')}], cnt=${nm('0')};`],
      ['comparing',`    ${k('for')} (${k('int')} i=${nm('0')};i<n;i++) {`],
      ['comparing',`        ${k('if')} (cnt==${nm('0')}) cand=arr[i];`],
      ['leftptr',  `        cnt += (arr[i]==cand) ? ${nm('1')} : -${nm('1')};`],
      [null,       `    }`],
      ['comparing',`    ${k('int')} c=${nm('0')};`],
      ['comparing',`    ${k('for')} (${k('int')} i=${nm('0')};i<n;i++) ${k('if')}(arr[i]==cand)c++;`],
      ['found',    `    ${k('if')} (c > n/${nm('2')}) ${k('return')} cand;`],
      ['eliminated',`    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
    mergeintervals: [
      [null,       `vector<pair<${k('int')},${k('int')}>> ${fn('mergeIntervals')}(`],
      [null,       `        vector<pair<${k('int')},${k('int')}>>& iv) {`],
      [null,       `    sort(iv.begin(),iv.end());`],
      ['leftptr',  `    vector<pair<${k('int')},${k('int')}>> res={iv[${nm('0')}]};`],
      ['comparing',`    ${k('for')} (${k('int')} i=${nm('1')};i<iv.size();i++) {`],
      ['comparing',`        ${k('if')} (iv[i].first<=res.back().second)`],
      ['found',    `            res.back().second=max(res.back().second,iv[i].second);`],
      ['rightptr', `        ${k('else')} res.push_back(iv[i]);`],
      [null,       `    }`],
      ['sorted',   `    ${k('return')} res;`],
      [null,       `}`],
    ],
    reservoir: [
      [null,       `${k('void')} ${fn('reservoirSample')}(${k('int')} stream[], ${k('int')} n, ${k('int')} k) {`],
      ['bucket',   `    ${k('int')} res[k];`],
      ['bucket',   `    ${k('for')} (${k('int')} i=${nm('0')};i<k;i++) res[i]=stream[i];`],
      ['comparing',`    ${k('for')} (${k('int')} i=k;i<n;i++) {`],
      ['comparing',`        ${k('int')} j = rand() % (i+${nm('1')});`],
      ['swapping', `        ${k('if')} (j < k) res[j] = stream[i];`],
      [null,       `    }`],
      ['found',    `    ${cm('res contains k random samples')}`],
      [null,       `}`],
    ],
    interpolation: [
      [null,       `${k('int')} ${fn('interpolationSearch')}(${k('int')} arr[], ${k('int')} n, ${k('int')} t) {`],
      [null,       `    ${k('int')} lo=${nm('0')}, hi=n-${nm('1')};`],
      ['mid',      `    ${k('while')} (lo<=hi && arr[lo]<=t && t<=arr[hi]) {`],
      ['mid',      `        ${k('if')} (arr[lo]==arr[hi])`],
      ['found',    `            ${k('return')} (arr[lo]==t)?lo:-${nm('1')};`],
      ['mid',      `        ${k('int')} pos=lo+(${k('long long')})(t-arr[lo])*(hi-lo)/(arr[hi]-arr[lo]);`],
      ['found',    `        ${k('if')} (arr[pos]==t) ${k('return')} pos;`],
      ['left',     `        ${k('else if')} (arr[pos]<t) lo=pos+${nm('1')};`],
      ['right',    `        ${k('else')} hi=pos-${nm('1')};`],
      [null,       `    }`],
      [null,       `    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
    exponential: [
      [null,       `${k('int')} ${fn('exponentialSearch')}(${k('int')} arr[], ${k('int')} n, ${k('int')} t) {`],
      ['found',    `    ${k('if')} (arr[${nm('0')}]==t) ${k('return')} ${nm('0')};`],
      [null,       `    ${k('int')} i=${nm('1')};`],
      ['current',  `    ${k('while')} (i<n && arr[i]<=t) i*=${nm('2')};`],
      [null,       `    ${k('int')} lo=i/${nm('2')}, hi=min(i,n-${nm('1')});`],
      ['mid',      `    ${k('while')} (lo<=hi) {`],
      ['mid',      `        ${k('int')} mid=(lo+hi)/${nm('2')};`],
      ['found',    `        ${k('if')} (arr[mid]==t) ${k('return')} mid;`],
      ['left',     `        ${k('else if')} (arr[mid]<t) lo=mid+${nm('1')};`],
      ['right',    `        ${k('else')} hi=mid-${nm('1')};`],
      [null,       `    }`],
      [null,       `    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
    ternary: [
      [null,       `${k('int')} ${fn('ternarySearch')}(${k('int')} arr[], ${k('int')} n, ${k('int')} t) {`],
      [null,       `    ${k('int')} lo=${nm('0')}, hi=n-${nm('1')};`],
      [null,       `    ${k('while')} (lo<=hi) {`],
      ['mid',      `        ${k('int')} m1=lo+(hi-lo)/${nm('3')};`],
      ['mid',      `        ${k('int')} m2=hi-(hi-lo)/${nm('3')};`],
      ['found',    `        ${k('if')} (arr[m1]==t) ${k('return')} m1;`],
      ['found',    `        ${k('if')} (arr[m2]==t) ${k('return')} m2;`],
      ['left',     `        ${k('if')} (t<arr[m1]) hi=m1-${nm('1')};`],
      ['right',    `        ${k('else if')} (t>arr[m2]) lo=m2+${nm('1')};`],
      [null,       `        ${k('else')} { lo=m1+${nm('1')}; hi=m2-${nm('1')}; }`],
      [null,       `    }`],
      [null,       `    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
  },
  java: {
    bubble: [
      [null,       `${k('static void')} ${fn('bubbleSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} n = arr.length;`],
      [null,       `    ${k('for')} (${k('int')} i = ${nm('0')}; i < n-${nm('1')}; i++) {`],
      ['comparing',`        ${k('for')} (${k('int')} j = ${nm('0')}; j < n-i-${nm('1')}; j++) {`],
      ['comparing',`            ${k('if')} (arr[j] > arr[j+${nm('1')}]) {`],
      ['swapping', `                ${k('int')} tmp=arr[j]; arr[j]=arr[j+${nm('1')}]; arr[j+${nm('1')}]=tmp;`],
      [null,       `            }`],
      [null,       `        }`],
      ['sorted',   `        ${cm('arr[n-i-1] is in final position')}`],
      [null,       `    }`],
      [null,       `}`],
    ],
    selection: [
      [null,       `${k('static void')} ${fn('selectionSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} n = arr.length;`],
      [null,       `    ${k('for')} (${k('int')} i = ${nm('0')}; i < n-${nm('1')}; i++) {`],
      ['current',  `        ${k('int')} minIdx = i;`],
      ['comparing',`        ${k('for')} (${k('int')} j = i+${nm('1')}; j < n; j++)`],
      ['comparing',`            ${k('if')} (arr[j] < arr[minIdx]) minIdx = j;`],
      ['swapping', `        ${k('int')} tmp=arr[i]; arr[i]=arr[minIdx]; arr[minIdx]=tmp;`],
      ['sorted',   `        ${cm('arr[0..i] is sorted')}`],
      [null,       `    }`],
      [null,       `}`],
    ],
    insertion: [
      [null,       `${k('static void')} ${fn('insertionSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('for')} (${k('int')} i = ${nm('1')}; i < arr.length; i++) {`],
      ['pivot',    `        ${k('int')} key = arr[i];`],
      [null,       `        ${k('int')} j = i - ${nm('1')};`],
      ['comparing',`        ${k('while')} (j >= ${nm('0')} && arr[j] > key) {`],
      ['comparing',`            arr[j+${nm('1')}] = arr[j];`],
      ['comparing',`            j--;`],
      [null,       `        }`],
      ['sorted',   `        arr[j+${nm('1')}] = key;`],
      [null,       `    }`],
      [null,       `}`],
    ],
    merge: [
      [null,       `${k('static void')} ${fn('mergeSort')}(${k('int')}[] A, ${k('int')} l, ${k('int')} r) {`],
      [null,       `    ${k('if')} (l >= r) ${k('return')};`],
      [null,       `    ${k('int')} m = (l + r) / ${nm('2')};`],
      ['leftpart', `    ${fn('mergeSort')}(A, l, m);`],
      ['rightpart',`    ${fn('mergeSort')}(A, m+${nm('1')}, r);`],
      ['comparing',`    ${fn('merge')}(A, l, m, r);`],
      [null,       `}`],
      [null,       ``],
      [null,       `${k('static void')} ${fn('merge')}(${k('int')}[] A, ${k('int')} l, ${k('int')} m, ${k('int')} r) {`],
      [null,       `    ${k('int')}[] L = Arrays.copyOfRange(A,l,m+${nm('1')});`],
      [null,       `    ${k('int')}[] R = Arrays.copyOfRange(A,m+${nm('1')},r+${nm('1')});`],
      ['comparing',`    ${k('int')} i=${nm('0')}, j=${nm('0')}, k=l;`],
      ['comparing',`    ${k('while')} (i<L.length && j<R.length)`],
      ['comparing',`        A[k++] = (L[i]<=R[j]) ? L[i++] : R[j++];`],
      ['sorted',   `    ${k('while')} (i<L.length) A[k++]=L[i++];`],
      ['sorted',   `    ${k('while')} (j<R.length) A[k++]=R[j++];`],
      [null,       `}`],
    ],
    quick: [
      [null,       `${k('static int')} ${fn('partition')}(${k('int')}[] A, ${k('int')} lo, ${k('int')} hi) {`],
      ['pivot',    `    ${k('int')} pivot = A[hi], i = lo - ${nm('1')};`],
      ['comparing',`    ${k('for')} (${k('int')} j = lo; j < hi; j++) {`],
      ['comparing',`        ${k('if')} (A[j] <= pivot) {`],
      ['swapping', `            i++; ${k('int')} tmp=A[i]; A[i]=A[j]; A[j]=tmp;`],
      [null,       `        }`],
      [null,       `    }`],
      ['sorted',   `    ${k('int')} tmp=A[i+${nm('1')}]; A[i+${nm('1')}]=A[hi]; A[hi]=tmp;`],
      [null,       `    ${k('return')} i + ${nm('1')};`],
      [null,       `}`],
      [null,       `${k('static void')} ${fn('quickSort')}(${k('int')}[] A, ${k('int')} lo, ${k('int')} hi) {`],
      [null,       `    ${k('if')} (lo >= hi) ${k('return')};`],
      [null,       `    ${k('int')} p = ${fn('partition')}(A, lo, hi);`],
      [null,       `    ${fn('quickSort')}(A, lo, p-${nm('1')}); ${fn('quickSort')}(A, p+${nm('1')}, hi);`],
      [null,       `}`],
    ],
    counting: [
      [null,       `${k('static void')} ${fn('countingSort')}(${k('int')}[] A) {`],
      [null,       `    ${k('int')} mn=A[${nm('0')}], mx=A[${nm('0')}];`],
      [null,       `    ${k('for')} (${k('int')} x : A) { mn=Math.min(mn,x); mx=Math.max(mx,x); }`],
      ['bucket',   `    ${k('int')}[] count = ${k('new int')}[mx-mn+${nm('1')}];`],
      ['bucket',   `    ${k('for')} (${k('int')} x : A) count[x-mn]++;`],
      [null,       `    ${k('int')} k = ${nm('0')};`],
      ['comparing',`    ${k('for')} (${k('int')} i=${nm('0')}; i<count.length; i++)`],
      ['comparing',`        ${k('while')} (count[i]-- > ${nm('0')}) A[k++] = i + mn;`],
      ['sorted',   `    ${cm('A is now sorted')}`],
      [null,       `}`],
    ],
    heap: [
      [null,       `${k('static void')} ${fn('heapify')}(${k('int')}[] arr, ${k('int')} n, ${k('int')} i) {`],
      [null,       `    ${k('int')} largest=i, l=${nm('2')}*i+${nm('1')}, r=${nm('2')}*i+${nm('2')};`],
      ['comparing',`    ${k('if')} (l<n && arr[l]>arr[largest]) largest=l;`],
      ['comparing',`    ${k('if')} (r<n && arr[r]>arr[largest]) largest=r;`],
      ['swapping', `    ${k('if')} (largest!=i) { ${k('int')} t=arr[i]; arr[i]=arr[largest]; arr[largest]=t;`],
      ['comparing',`        ${fn('heapify')}(arr, n, largest); }`],
      [null,       `}`],
      [null,       ``],
      [null,       `${k('static void')} ${fn('heapSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} n = arr.length;`],
      ['heap',     `    ${k('for')} (${k('int')} i=n/${nm('2')}-${nm('1')}; i>=${nm('0')}; i--)`],
      ['heap',     `        ${fn('heapify')}(arr, n, i);`],
      ['swapping', `    ${k('for')} (${k('int')} i=n-${nm('1')}; i>${nm('0')}; i--) {`],
      ['swapping', `        ${k('int')} t=arr[${nm('0')}]; arr[${nm('0')}]=arr[i]; arr[i]=t;`],
      ['comparing',`        ${fn('heapify')}(arr, i, ${nm('0')}); }`],
      [null,       `}`],
    ],
    radix: [
      [null,       `${k('static void')} ${fn('radixSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} mx = Arrays.stream(arr).max().getAsInt();`],
      [null,       `    ${k('for')} (${k('int')} exp=${nm('1')}; mx/exp>${nm('0')}; exp*=${nm('10')}) {`],
      [null,       `        List<List<${k('Integer')}>> bkt = ${k('new')} ArrayList<>();`],
      [null,       `        ${k('for')} (${k('int')} i=${nm('0')}; i<${nm('10')}; i++) bkt.add(${k('new')} ArrayList<>());`],
      ['comparing',`        ${k('for')} (${k('int')} x : arr) bkt.get((x/exp)%${nm('10')}).add(x);`],
      [null,       `        ${k('int')} k=${nm('0')};`],
      ['bucket',   `        ${k('for')} (List<${k('Integer')}> b : bkt)`],
      ['bucket',   `            ${k('for')} (${k('int')} x : b) arr[k++]=x;`],
      [null,       `    }`],
      ['sorted',   `    ${cm('arr is now sorted')}`],
      [null,       `}`],
    ],
    twopointers: [
      [null,       `${k('static int')}[] ${fn('twoPointers')}(${k('int')}[] A, ${k('int')} target) {`],
      [null,       `    Arrays.sort(A);`],
      [null,       `    ${k('int')} L = ${nm('0')}, R = A.length - ${nm('1')};`],
      ['leftptr',  `    ${k('while')} (L < R) {`],
      ['comparing',`        ${k('int')} s = A[L] + A[R];`],
      ['found',    `        ${k('if')} (s == target) ${k('return new int')}[]{L, R};`],
      ['leftptr',  `        ${k('if')} (s < target)  L++;  ${cm('need larger')}`],
      ['rightptr', `        ${k('else')}              R--;  ${cm('need smaller')}`],
      [null,       `    }`],
      [null,       `    ${k('return new int')}[]{-${nm('1')}, -${nm('1')}};`],
      [null,       `}`],
    ],
    slidingwindow: [
      [null,        `${k('static int')}[] ${fn('slidingWindow')}(${k('int')}[] A, ${k('int')} k) {`],
      ['window',    `    ${k('int')} winSum = ${nm('0')};`],
      ['window',    `    ${k('for')} (${k('int')} i=${nm('0')}; i<k; i++) winSum += A[i];`],
      [null,        `    ${k('int')} maxSum=winSum, maxStart=${nm('0')};`],
      ['comparing', `    ${k('for')} (${k('int')} i=k; i<A.length; i++) {`],
      ['comparing', `        winSum += A[i] - A[i-k];`],
      ['bestWindow',`        ${k('if')} (winSum > maxSum) {`],
      ['bestWindow',`            maxSum=winSum; maxStart=i-k+${nm('1')};`],
      [null,        `        }`],
      [null,        `    }`],
      [null,        `    ${k('return new int')}[]{maxSum, maxStart};`],
      [null,        `}`],
    ],
    kadane: [
      [null,        `${k('static int')}[] ${fn('kadane')}(${k('int')}[] A) {`],
      [null,        `    ${k('int')} cur=A[${nm('0')}], mx=A[${nm('0')}];`],
      [null,        `    ${k('int')} s=${nm('0')},e=${nm('0')},bs=${nm('0')},be=${nm('0')};`],
      ['comparing', `    ${k('for')}(${k('int')} i=${nm('1')};i<A.length;i++){`],
      ['bucket',    `        ${k('if')}(cur+A[i]>A[i]){cur+=A[i];e=i;}`],
      ['eliminated',`        ${k('else')}{cur=A[i];s=e=i;}`],
      ['found',     `        ${k('if')}(cur>mx){mx=cur;bs=s;be=e;}`],
      [null,        `    }`],
      [null,        `    ${k('return new int')}[]{mx,bs,be};`],
      [null,        `}`],
    ],
    prefixsum: [
      [null,        `${k('static int')} ${fn('rangeSum')}(${k('int')}[] A, ${k('int')} L, ${k('int')} R) {`],
      [null,        `    ${k('int')}[] pre = ${k('new int')}[A.length+${nm('1')}];`],
      ['bucket',    `    ${k('for')}(${k('int')} i=${nm('0')};i<A.length;i++)`],
      ['bucket',    `        pre[i+${nm('1')}]=pre[i]+A[i];`],
      ['comparing', `    ${k('return')} pre[R+${nm('1')}]-pre[L];`],
      [null,        `}`],
    ],
    frequencycounter: [
      [null,        `${k('static int')}[] ${fn('freqCounter')}(${k('int')}[] A) {`],
      [null,        `    HashMap<Integer,Integer> freq = ${k('new')} HashMap<>();`],
      [null,        `    ${k('int')} modeV=A[${nm('0')}], modeC=${nm('0')};`],
      ['comparing', `    ${k('for')}(${k('int')} x : A){`],
      ['bucket',    `        freq.merge(x,${nm('1')},Integer::sum);`],
      ['found',     `        ${k('if')}(freq.get(x)>modeC){modeV=x;modeC=freq.get(x);}`],
      [null,        `    }`],
      [null,        `    ${k('return new int')}[]{modeV,modeC};`],
      [null,        `}`],
    ],
    dutchflag: [
      [null,        `${k('static void')} ${fn('dutchFlag')}(${k('int')}[] A, ${k('int')} pivot) {`],
      [null,        `    ${k('int')} lo=${nm('0')},mid=${nm('0')},hi=A.length-${nm('1')};`],
      ['comparing', `    ${k('while')}(mid<=hi){`],
      ['left',      `        ${k('if')}(A[mid]<pivot){`],
      ['swapping',  `            ${k('int')} t=A[lo];A[lo]=A[mid];A[mid]=t;lo++;mid++;`],
      ['bucket',    `        }${k('else if')}(A[mid]==pivot) mid++;`],
      ['right',     `        ${k('else')}{`],
      ['swapping',  `            ${k('int')} t=A[mid];A[mid]=A[hi];A[hi]=t;hi--;`],
      [null,        `        }`],
      [null,        `    }`],
      [null,        `}`],
    ],
    linear: [
      [null,        `${k('static int')} ${fn('linearSearch')}(${k('int')}[] arr, ${k('int')} target) {`],
      ['current',   `    ${k('for')} (${k('int')} i=${nm('0')}; i<arr.length; i++) {`],
      ['current',   `        ${k('if')} (arr[i] == target)`],
      ['found',     `            ${k('return')} i;  ${cm('found at index i')}`],
      ['eliminated',`        ${cm('arr[i] != target, continue')}`],
      [null,        `    }`],
      [null,        `    ${k('return')} -${nm('1')};  ${cm('not found')}`],
      [null,        `}`],
    ],
    binary: [
      [null,        `${k('static int')} ${fn('binarySearch')}(${k('int')}[] arr, ${k('int')} target) {`],
      [null,        `    ${k('int')} L=${nm('0')}, R=arr.length-${nm('1')};`],
      ['mid',       `    ${k('while')} (L <= R) {`],
      ['mid',       `        ${k('int')} mid = (L + R) / ${nm('2')};`],
      ['found',     `        ${k('if')} (arr[mid] == target) ${k('return')} mid;`],
      ['left',      `        ${k('if')} (arr[mid] < target)  L = mid + ${nm('1')};`],
      ['right',     `        ${k('else')}                    R = mid - ${nm('1')};`],
      [null,        `    }`],
      [null,        `    ${k('return')} -${nm('1')};  ${cm('not found')}`],
      [null,        `}`],
    ],
    shell: [
      [null,       `${k('static void')} ${fn('shellSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} n = arr.length;`],
      [null,       `    ${k('for')} (${k('int')} gap=n/${nm('2')}; gap>${nm('0')}; gap/=${nm('2')}) {`],
      ['pivot',    `        ${k('for')} (${k('int')} i=gap; i<n; i++) {`],
      ['pivot',    `            ${k('int')} temp = arr[i];`],
      [null,       `            ${k('int')} j = i;`],
      ['comparing',`            ${k('while')} (j>=gap && arr[j-gap]>temp) {`],
      ['swapping', `                arr[j] = arr[j-gap]; j -= gap;`],
      [null,       `            }`],
      ['sorted',   `            arr[j] = temp;`],
      [null,       `        }`],
      [null,       `    }`],
      [null,       `}`],
    ],
    cocktail: [
      [null,       `${k('static void')} ${fn('cocktailSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} start=${nm('0')}, end=arr.length-${nm('1')};`],
      [null,       `    ${k('boolean')} swapped = ${k('true')};`],
      [null,       `    ${k('while')} (swapped) {`],
      ['comparing',`        swapped = ${k('false')};`],
      ['comparing',`        ${k('for')} (${k('int')} i=start; i<end; i++)`],
      ['comparing',`            ${k('if')} (arr[i]>arr[i+${nm('1')}]) {`],
      ['swapping', `                ${k('int')} t=arr[i]; arr[i]=arr[i+${nm('1')}]; arr[i+${nm('1')}]=t; swapped=${k('true')}; }`],
      ['sorted',   `        end--;`],
      ['comparing',`        ${k('for')} (${k('int')} i=end; i>start; i--)`],
      ['comparing',`            ${k('if')} (arr[i-${nm('1')}]>arr[i]) {`],
      ['swapping', `                ${k('int')} t=arr[i]; arr[i]=arr[i-${nm('1')}]; arr[i-${nm('1')}]=t; swapped=${k('true')}; }`],
      ['sorted',   `        start++;`],
      [null,       `    }`],
      [null,       `}`],
    ],
    comb: [
      [null,       `${k('static void')} ${fn('combSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} n = arr.length, gap = n;`],
      [null,       `    ${k('double')} shrink = ${nm('1.3')};`],
      [null,       `    ${k('boolean')} sorted = ${k('false')};`],
      [null,       `    ${k('while')} (!sorted) {`],
      [null,       `        gap = Math.max(${nm('1')}, (${k('int')})(gap/shrink));`],
      [null,       `        ${k('if')} (gap==${nm('1')}) sorted=${k('true')};`],
      ['comparing',`        ${k('for')} (${k('int')} i=${nm('0')}; i+gap<n; i++) {`],
      ['comparing',`            ${k('if')} (arr[i]>arr[i+gap]) {`],
      ['swapping', `                ${k('int')} t=arr[i]; arr[i]=arr[i+gap]; arr[i+gap]=t;`],
      [null,       `                sorted = ${k('false')};`],
      [null,       `            }`],
      [null,       `        }`],
      [null,       `    }`],
      [null,       `}`],
    ],
    jump: [
      [null,        `${k('static int')} ${fn('jumpSearch')}(${k('int')}[] arr, ${k('int')} target) {`],
      [null,        `    ${k('int')} n = arr.length;`],
      [null,        `    ${k('int')} step = (${k('int')})Math.sqrt(n);`],
      [null,        `    ${k('int')} prev = ${nm('0')};`],
      ['current',   `    ${k('while')} (arr[Math.min(step,n)-${nm('1')}] < target) {`],
      ['eliminated',`        prev = step;`],
      ['current',   `        step += (${k('int')})Math.sqrt(n);`],
      [null,        `        ${k('if')} (prev >= n) ${k('return')} -${nm('1')};`],
      [null,        `    }`],
      ['current',   `    ${k('for')} (${k('int')} i=prev; i<Math.min(step,n); i++) {`],
      ['found',     `        ${k('if')} (arr[i]==target) ${k('return')} i;`],
      [null,        `    }`],
      [null,        `    ${k('return')} -${nm('1')};  ${cm('not found')}`],
      [null,        `}`],
    ],
    bfs: [
      [null,        `${k('void')} ${fn('bfs')}(${k('int')}[][] grid, ${k('int')}[] start, ${k('int')}[] end) {`],
      [null,        `    Queue<${k('int')}[]> q = ${k('new')} LinkedList<>();`],
      [null,        `    q.add(start);`],
      [null,        `    visited[start[${nm('0')}]][start[${nm('1')}]] = ${k('true')};`],
      ['current',   `    ${k('while')} (!q.isEmpty()) {`],
      ['current',   `        ${k('int')}[] node = q.poll();`],
      ['found',     `        ${k('if')} (Arrays.equals(node, end)) ${k('return')};`],
      ['comparing', `        ${k('for')} (${k('int')}[] nb : neighbors(node)) {`],
      ['comparing', `            ${k('if')} (!visited[nb[${nm('0')}]][nb[${nm('1')}]] && !wall) {`],
      [null,        `                visited[nb[${nm('0')}]][nb[${nm('1')}]] = ${k('true')};`],
      [null,        `                prev[nb[${nm('0')}]][nb[${nm('1')}]] = node;`],
      [null,        `                q.add(nb);`],
      [null,        `    }}}`],
      [null,        `}`],
    ],
    dfs: [
      [null,        `${k('void')} ${fn('dfs')}(${k('int')}[][] grid, ${k('int')}[] start, ${k('int')}[] end) {`],
      [null,        `    Stack<${k('int')}[]> s = ${k('new')} Stack<>();`],
      [null,        `    s.push(start);`],
      [null,        `    visited[start[${nm('0')}]][start[${nm('1')}]] = ${k('true')};`],
      ['current',   `    ${k('while')} (!s.isEmpty()) {`],
      ['current',   `        ${k('int')}[] node = s.pop();`],
      ['found',     `        ${k('if')} (Arrays.equals(node, end)) ${k('return')};`],
      ['comparing', `        ${k('for')} (${k('int')}[] nb : neighbors(node)) {`],
      ['comparing', `            ${k('if')} (!visited[nb[${nm('0')}]][nb[${nm('1')}]] && !wall) {`],
      [null,        `                visited[nb[${nm('0')}]][nb[${nm('1')}]] = ${k('true')};`],
      [null,        `                prev[nb[${nm('0')}]][nb[${nm('1')}]] = node;`],
      [null,        `                s.push(nb);`],
      [null,        `    }}}`],
      [null,        `}`],
    ],
    dijkstra: [
      [null,        `${k('void')} ${fn('dijkstra')}(${k('int')}[][] grid, ${k('int')}[] s, ${k('int')}[] e) {`],
      [null,        `    PriorityQueue<${k('int')}[]> pq = ${k('new')} PriorityQueue<>((a,b)->a[${nm('0')}]-b[${nm('0')}]);`],
      [null,        `    dist[s[${nm('0')}]][s[${nm('1')}]] = ${nm('0')}; pq.add(${k('new int')}{${nm('0')},s[${nm('0')}],s[${nm('1')}]});`],
      ['current',   `    ${k('while')} (!pq.isEmpty()) {`],
      ['current',   `        ${k('int')}[] cur = pq.poll();`],
      [null,        `        ${k('if')} (visited[cur[${nm('1')}]][cur[${nm('2')}]]) ${k('continue')};`],
      [null,        `        visited[cur[${nm('1')}]][cur[${nm('2')}]] = ${k('true')};`],
      ['found',     `        ${k('if')} (cur[${nm('1')}]==e[${nm('0')}] && cur[${nm('2')}]==e[${nm('1')}]) ${k('return')};`],
      ['comparing', `        ${k('for')} (${k('int')}[] nb : neighbors(cur)) {`],
      ['comparing', `            ${k('int')} nd = cur[${nm('0')}] + weight(nb);`],
      [null,        `            ${k('if')} (nd < dist[nb[${nm('0')}]][nb[${nm('1')}]]) {`],
      [null,        `                dist[nb[${nm('0')}]][nb[${nm('1')}]] = nd;`],
      [null,        `                pq.add(${k('new int')}{nd,nb[${nm('0')}],nb[${nm('1')}]});`],
      [null,        `    }}}`],
      [null,        `}`],
    ],
    astar: [
      [null,        `${k('void')} ${fn('astar')}(${k('int')}[][] grid, ${k('int')}[] s, ${k('int')}[] e) {`],
      [null,        `    ${k('int')} h(${k('int')}[] n) { ${k('return')} Math.abs(n[${nm('0')}]-e[${nm('0')}])+Math.abs(n[${nm('1')}]-e[${nm('1')}]); }`],
      [null,        `    g[s[${nm('0')}]][s[${nm('1')}]] = ${nm('0')}; pq.add(${k('new int')}{h(s),s[${nm('0')}],s[${nm('1')}]});`],
      ['current',   `    ${k('while')} (!pq.isEmpty()) {`],
      ['current',   `        ${k('int')}[] cur = pq.poll();`],
      [null,        `        ${k('if')} (visited[cur[${nm('1')}]][cur[${nm('2')}]]) ${k('continue')};`],
      [null,        `        visited[cur[${nm('1')}]][cur[${nm('2')}]] = ${k('true')};`],
      ['found',     `        ${k('if')} (cur[${nm('1')}]==e[${nm('0')}] && cur[${nm('2')}]==e[${nm('1')}]) ${k('return')};`],
      ['comparing', `        ${k('for')} (${k('int')}[] nb : neighbors(cur)) {`],
      ['comparing', `            ${k('int')} ng = g[cur[${nm('1')}]][cur[${nm('2')}]] + weight(nb);`],
      [null,        `            ${k('if')} (ng < g[nb[${nm('0')}]][nb[${nm('1')}]]) {`],
      [null,        `                g[nb[${nm('0')}]][nb[${nm('1')}]] = ng;`],
      [null,        `                pq.add(${k('new int')}{ng+h(nb),nb[${nm('0')}],nb[${nm('1')}]});`],
      [null,        `    }}}`],
      [null,        `}`],
    ],
    gnome: [
      [null,       `${k('static void')} ${fn('gnomeSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} i = ${nm('0')}, n = arr.length;`],
      ['comparing',`    ${k('while')} (i < n) {`],
      ['comparing',`        ${k('if')} (i == ${nm('0')} || arr[i] >= arr[i-${nm('1')}])`],
      [null,       `            i++;`],
      ['swapping', `        ${k('else')} {`],
      ['swapping', `            ${k('int')} t=arr[i]; arr[i]=arr[i-${nm('1')}]; arr[i-${nm('1')}]=t;`],
      [null,       `            i--;`],
      [null,       `        }`],
      ['sorted',   `    }`],
      [null,       `}`],
    ],
    bucket: [
      [null,       `${k('static void')} ${fn('bucketSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} n=arr.length, mn=arr[${nm('0')}], mx=arr[${nm('0')}];`],
      [null,       `    ${k('for')}(${k('int')} x:arr){mn=Math.min(mn,x);mx=Math.max(mx,x);}`],
      ['bucket',   `    List<List<Integer>> bkt=${k('new')} ArrayList<>();`],
      ['bucket',   `    ${k('for')}(${k('int')} i=${nm('0')};i<n;i++) bkt.add(${k('new')} ArrayList<>());`],
      ['bucket',   `    ${k('for')}(${k('int')} x:arr){${k('int')} idx=(x-mn)*(n-${nm('1')})/(mx-mn);bkt.get(idx).add(x);}`],
      ['comparing',`    ${k('for')}(List<Integer> b:bkt) Collections.sort(b);`],
      ['sorted',   `    ${k('int')} k=${nm('0')};`],
      ['sorted',   `    ${k('for')}(List<Integer> b:bkt)${k('for')}(${k('int')} x:b) arr[k++]=x;`],
      [null,       `}`],
    ],
    tim: [
      [null,       `${k('static final int')} RUN = ${nm('32')};`],
      [null,       `${k('static void')} ${fn('timSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} n = arr.length;`],
      ['pivot',    `    ${k('for')}(${k('int')} i=${nm('0')};i<n;i+=RUN)`],
      ['pivot',    `        ${fn('insertionSort')}(arr,i,Math.min(i+RUN-${nm('1')},n-${nm('1')}));`],
      ['comparing',`    ${k('for')}(${k('int')} sz=RUN;sz<n;sz*=${nm('2')}){`],
      ['leftpart', `        ${k('for')}(${k('int')} l=${nm('0')};l<n;l+=${nm('2')}*sz){`],
      ['leftpart', `            ${k('int')} mid=Math.min(l+sz-${nm('1')},n-${nm('1')});`],
      ['rightpart',`            ${k('int')} r=Math.min(l+${nm('2')}*sz-${nm('1')},n-${nm('1')});`],
      ['comparing',`            ${fn('merge')}(arr,l,mid,r);`],
      ['sorted',   `    }}`],
      [null,       `}`],
    ],
    pigeonhole: [
      [null,       `${k('static void')} ${fn('pigeonholeSort')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} mn=arr[${nm('0')}], mx=arr[${nm('0')}];`],
      [null,       `    ${k('for')}(${k('int')} x:arr){mn=Math.min(mn,x);mx=Math.max(mx,x);}`],
      [null,       `    ${k('int')} range=mx-mn+${nm('1')};`],
      ['bucket',   `    ${k('int')}[] holes=${k('new int')}[range];`],
      ['bucket',   `    ${k('for')}(${k('int')} x:arr) holes[x-mn]++;`],
      [null,       `    ${k('int')} idx=${nm('0')};`],
      ['comparing',`    ${k('for')}(${k('int')} i=${nm('0')};i<range;i++)`],
      ['comparing',`        ${k('while')}(holes[i]-->0)`],
      ['sorted',   `            arr[idx++]=i+mn;`],
      [null,       `}`],
    ],
    boyermoore: [
      [null,       `${k('static int')} ${fn('majorityVote')}(${k('int')}[] arr) {`],
      [null,       `    ${k('int')} cand=arr[${nm('0')}], cnt=${nm('0')};`],
      ['comparing',`    ${k('for')}(${k('int')} x:arr){`],
      ['comparing',`        ${k('if')}(cnt==${nm('0')}) cand=x;`],
      ['leftptr',  `        cnt+=(x==cand)?${nm('1')}:-${nm('1')};`],
      [null,       `    }`],
      ['comparing',`    ${k('int')} c=${nm('0')};`],
      ['comparing',`    ${k('for')}(${k('int')} x:arr) ${k('if')}(x==cand) c++;`],
      ['found',    `    ${k('if')}(c>arr.length/${nm('2')}) ${k('return')} cand;`],
      ['eliminated',`    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
    mergeintervals: [
      [null,       `${k('int')}[][] ${fn('mergeIntervals')}(${k('int')}[][] iv) {`],
      [null,       `    Arrays.sort(iv,(a,b)->a[${nm('0')}]-b[${nm('0')}]);`],
      ['leftptr',  `    List<${k('int')}[]> res=${k('new')} ArrayList<>();`],
      ['leftptr',  `    res.add(iv[${nm('0')}]);`],
      ['comparing',`    ${k('for')}(${k('int')} i=${nm('1')};i<iv.length;i++){`],
      ['comparing',`        ${k('if')}(iv[i][${nm('0')}]<=res.get(res.size()-${nm('1')})[${nm('1')}])`],
      ['found',    `            res.get(res.size()-${nm('1')})[${nm('1')}]=Math.max(res.get(res.size()-${nm('1')})[${nm('1')}],iv[i][${nm('1')}]);`],
      ['rightptr', `        ${k('else')} res.add(iv[i]);`],
      [null,       `    }`],
      ['sorted',   `    ${k('return')} res.toArray(${k('new int')}[${nm('0')}][]);`],
      [null,       `}`],
    ],
    reservoir: [
      [null,       `${k('static int')}[] ${fn('reservoirSample')}(${k('int')}[] stream, ${k('int')} k) {`],
      ['bucket',   `    ${k('int')}[] res=${k('new int')}[k];`],
      ['bucket',   `    ${k('for')}(${k('int')} i=${nm('0')};i<k;i++) res[i]=stream[i];`],
      ['comparing',`    Random rnd = ${k('new')} Random();`],
      ['comparing',`    ${k('for')}(${k('int')} i=k;i<stream.length;i++){`],
      ['comparing',`        ${k('int')} j=rnd.nextInt(i+${nm('1')});`],
      ['swapping', `        ${k('if')}(j<k) res[j]=stream[i];`],
      [null,       `    }`],
      ['found',    `    ${k('return')} res;`],
      [null,       `}`],
    ],
    interpolation: [
      [null,       `${k('static int')} ${fn('interpolationSearch')}(${k('int')}[] a, ${k('int')} t) {`],
      [null,       `    ${k('int')} lo=${nm('0')}, hi=a.length-${nm('1')};`],
      ['mid',      `    ${k('while')}(lo<=hi && a[lo]<=t && t<=a[hi]){`],
      ['mid',      `        ${k('if')}(a[lo]==a[hi])`],
      ['found',    `            ${k('return')} (a[lo]==t)?lo:-${nm('1')};`],
      ['mid',      `        ${k('int')} pos=lo+(${k('int')})((${k('long')})(t-a[lo])*(hi-lo)/(a[hi]-a[lo]));`],
      ['found',    `        ${k('if')}(a[pos]==t) ${k('return')} pos;`],
      ['left',     `        ${k('else if')}(a[pos]<t) lo=pos+${nm('1')};`],
      ['right',    `        ${k('else')} hi=pos-${nm('1')};`],
      [null,       `    }`],
      [null,       `    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
    exponential: [
      [null,       `${k('static int')} ${fn('exponentialSearch')}(${k('int')}[] a, ${k('int')} t) {`],
      ['found',    `    ${k('if')}(a[${nm('0')}]==t) ${k('return')} ${nm('0')};`],
      [null,       `    ${k('int')} i=${nm('1')};`],
      ['current',  `    ${k('while')}(i<a.length && a[i]<=t) i*=${nm('2')};`],
      [null,       `    ${k('int')} lo=i/${nm('2')}, hi=Math.min(i,a.length-${nm('1')});`],
      ['mid',      `    ${k('while')}(lo<=hi){`],
      ['mid',      `        ${k('int')} mid=(lo+hi)/${nm('2')};`],
      ['found',    `        ${k('if')}(a[mid]==t) ${k('return')} mid;`],
      ['left',     `        ${k('else if')}(a[mid]<t) lo=mid+${nm('1')};`],
      ['right',    `        ${k('else')} hi=mid-${nm('1')};`],
      [null,       `    }`],
      [null,       `    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
    ternary: [
      [null,       `${k('static int')} ${fn('ternarySearch')}(${k('int')}[] a, ${k('int')} t) {`],
      [null,       `    ${k('int')} lo=${nm('0')}, hi=a.length-${nm('1')};`],
      [null,       `    ${k('while')}(lo<=hi){`],
      ['mid',      `        ${k('int')} m1=lo+(hi-lo)/${nm('3')};`],
      ['mid',      `        ${k('int')} m2=hi-(hi-lo)/${nm('3')};`],
      ['found',    `        ${k('if')}(a[m1]==t) ${k('return')} m1;`],
      ['found',    `        ${k('if')}(a[m2]==t) ${k('return')} m2;`],
      ['left',     `        ${k('if')}(t<a[m1]) hi=m1-${nm('1')};`],
      ['right',    `        ${k('else if')}(t>a[m2]) lo=m2+${nm('1')};`],
      [null,       `        ${k('else')}{lo=m1+${nm('1')};hi=m2-${nm('1')};}`],
      [null,       `    }`],
      [null,       `    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
  },
  js: {
    bubble: [
      [null,       `${k('function')} ${fn('bubbleSort')}(arr) {`],
      [null,       `    ${k('const')} n = arr.length;`],
      [null,       `    ${k('for')} (${k('let')} i = ${nm('0')}; i < n - ${nm('1')}; i++) {`],
      ['comparing',`        ${k('for')} (${k('let')} j = ${nm('0')}; j < n - i - ${nm('1')}; j++) {`],
      ['comparing',`            ${k('if')} (arr[j] > arr[j + ${nm('1')}]) {`],
      ['swapping', `                [arr[j], arr[j+${nm('1')}]] = [arr[j+${nm('1')}], arr[j]];`],
      [null,       `            }`],
      [null,       `        }`],
      ['sorted',   `        ${cm('arr[n-i-1] is in final position')}`],
      [null,       `    }`],
      [null,       `    ${k('return')} arr;`],
      [null,       `}`],
    ],
    selection: [
      [null,       `${k('function')} ${fn('selectionSort')}(arr) {`],
      [null,       `    ${k('const')} n = arr.length;`],
      [null,       `    ${k('for')} (${k('let')} i = ${nm('0')}; i < n - ${nm('1')}; i++) {`],
      ['current',  `        ${k('let')} minIdx = i;`],
      ['comparing',`        ${k('for')} (${k('let')} j = i + ${nm('1')}; j < n; j++)`],
      ['comparing',`            ${k('if')} (arr[j] < arr[minIdx]) minIdx = j;`],
      ['swapping', `        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];`],
      ['sorted',   `        ${cm('arr[0..i] is sorted')}`],
      [null,       `    }`],
      [null,       `    ${k('return')} arr;`],
      [null,       `}`],
    ],
    insertion: [
      [null,       `${k('function')} ${fn('insertionSort')}(arr) {`],
      [null,       `    ${k('for')} (${k('let')} i = ${nm('1')}; i < arr.length; i++) {`],
      ['pivot',    `        ${k('const')} key = arr[i];`],
      [null,       `        ${k('let')} j = i - ${nm('1')};`],
      ['comparing',`        ${k('while')} (j >= ${nm('0')} && arr[j] > key) {`],
      ['comparing',`            arr[j + ${nm('1')}] = arr[j];`],
      ['comparing',`            j--;`],
      [null,       `        }`],
      ['sorted',   `        arr[j + ${nm('1')}] = key;`],
      [null,       `    }`],
      [null,       `    ${k('return')} arr;`],
      [null,       `}`],
    ],
    merge: [
      [null,       `${k('function')} ${fn('mergeSort')}(arr) {`],
      [null,       `    ${k('if')} (arr.length <= ${nm('1')}) ${k('return')} arr;`],
      [null,       `    ${k('const')} mid = Math.floor(arr.length / ${nm('2')});`],
      ['leftpart', `    ${k('const')} left  = ${fn('mergeSort')}(arr.slice(${nm('0')}, mid));`],
      ['rightpart',`    ${k('const')} right = ${fn('mergeSort')}(arr.slice(mid));`],
      ['comparing',`    ${k('return')} ${fn('merge')}(left, right);`],
      [null,       `}`],
      [null,       ``],
      [null,       `${k('function')} ${fn('merge')}(left, right) {`],
      [null,       `    ${k('const')} res = []; ${k('let')} i = ${nm('0')}, j = ${nm('0')};`],
      ['comparing',`    ${k('while')} (i < left.length && j < right.length)`],
      ['comparing',`        res.push(left[i] <= right[j] ? left[i++] : right[j++]);`],
      ['sorted',   `    ${k('return')} [...res, ...left.slice(i), ...right.slice(j)];`],
      [null,       `}`],
    ],
    quick: [
      [null,       `${k('function')} ${fn('quickSort')}(arr, lo = ${nm('0')}, hi = arr.length - ${nm('1')}) {`],
      [null,       `    ${k('if')} (lo >= hi) ${k('return')} arr;`],
      ['pivot',    `    ${k('const')} pivot = arr[hi];`],
      [null,       `    ${k('let')} i = lo - ${nm('1')};`],
      ['comparing',`    ${k('for')} (${k('let')} j = lo; j < hi; j++) {`],
      ['comparing',`        ${k('if')} (arr[j] <= pivot)`],
      ['swapping', `            [arr[++i], arr[j]] = [arr[j], arr[i+${nm('1')}]];`],
      [null,       `    }`],
      ['sorted',   `    [arr[i+${nm('1')}], arr[hi]] = [arr[hi], arr[i+${nm('1')}]];`],
      [null,       `    ${fn('quickSort')}(arr, lo, i);`],
      [null,       `    ${fn('quickSort')}(arr, i + ${nm('2')}, hi);`],
      [null,       `    ${k('return')} arr;`],
      [null,       `}`],
    ],
    counting: [
      [null,       `${k('function')} ${fn('countingSort')}(arr) {`],
      [null,       `    ${k('const')} mn = Math.min(...arr), mx = Math.max(...arr);`],
      [null,       `    ${k('const')} count = ${k('new')} Array(mx - mn + ${nm('1')}).fill(${nm('0')});`],
      ['bucket',   `    ${k('for')} (${k('const')} x ${k('of')} arr)`],
      ['bucket',   `        count[x - mn]++;`],
      [null,       `    ${k('let')} k = ${nm('0')};`],
      ['comparing',`    ${k('for')} (${k('let')} i = ${nm('0')}; i < count.length; i++)`],
      ['comparing',`        ${k('while')} (count[i]-- > ${nm('0')}) arr[k++] = i + mn;`],
      ['sorted',   `    ${cm('arr is now sorted')}`],
      [null,       `    ${k('return')} arr;`],
      [null,       `}`],
    ],
    heap: [
      [null,       `${k('function')} ${fn('heapify')}(arr, n, i) {`],
      [null,       `    ${k('let')} largest = i, l = ${nm('2')}*i+${nm('1')}, r = ${nm('2')}*i+${nm('2')};`],
      ['comparing',`    ${k('if')} (l < n && arr[l] > arr[largest]) largest = l;`],
      ['comparing',`    ${k('if')} (r < n && arr[r] > arr[largest]) largest = r;`],
      ['swapping', `    ${k('if')} (largest !== i) {`],
      ['swapping', `        [arr[i], arr[largest]] = [arr[largest], arr[i]];`],
      ['comparing',`        ${fn('heapify')}(arr, n, largest);`],
      [null,       `    }`],
      [null,       `}`],
      [null,       ``],
      [null,       `${k('function')} ${fn('heapSort')}(arr) {`],
      [null,       `    ${k('const')} n = arr.length;`],
      ['heap',     `    ${k('for')} (${k('let')} i = Math.floor(n/${nm('2')})-${nm('1')}; i >= ${nm('0')}; i--)`],
      ['heap',     `        ${fn('heapify')}(arr, n, i);`],
      ['swapping', `    ${k('for')} (${k('let')} i = n-${nm('1')}; i > ${nm('0')}; i--) {`],
      ['swapping', `        [arr[${nm('0')}], arr[i]] = [arr[i], arr[${nm('0')}]];`],
      ['comparing',`        ${fn('heapify')}(arr, i, ${nm('0')});`],
      [null,       `    }`],
      [null,       `    ${k('return')} arr;`],
      [null,       `}`],
    ],
    radix: [
      [null,       `${k('function')} ${fn('radixSort')}(arr) {`],
      [null,       `    ${k('const')} mx = Math.max(...arr);`],
      [null,       `    ${k('for')} (${k('let')} exp = ${nm('1')}; Math.floor(mx/exp) > ${nm('0')}; exp *= ${nm('10')}) {`],
      [null,       `        ${k('const')} buckets = Array.from({length:${nm('10')}}, () => []);`],
      ['comparing',`        ${k('for')} (${k('const')} x ${k('of')} arr)`],
      ['comparing',`            buckets[Math.floor(x / exp) % ${nm('10')}].push(x);`],
      [null,       `        ${k('let')} k = ${nm('0')};`],
      ['bucket',   `        ${k('for')} (${k('const')} b ${k('of')} buckets)`],
      ['bucket',   `            ${k('for')} (${k('const')} x ${k('of')} b) arr[k++] = x;`],
      [null,       `    }`],
      ['sorted',   `    ${cm('arr is now sorted')}`],
      [null,       `    ${k('return')} arr;`],
      [null,       `}`],
    ],
    twopointers: [
      [null,       `${k('function')} ${fn('twoPointers')}(arr, target) {`],
      [null,       `    arr.sort((a, b) => a - b);`],
      [null,       `    ${k('let')} L = ${nm('0')}, R = arr.length - ${nm('1')};`],
      ['leftptr',  `    ${k('while')} (L < R) {`],
      ['comparing',`        ${k('const')} s = arr[L] + arr[R];`],
      ['found',    `        ${k('if')} (s === target) ${k('return')} [L, R];`],
      ['leftptr',  `        ${k('if')} (s < target) L++;  ${cm('need larger')}`],
      ['rightptr', `        ${k('else')}             R--;  ${cm('need smaller')}`],
      [null,       `    }`],
      [null,       `    ${k('return')} ${k('null')};  ${cm('not found')}`],
      [null,       `}`],
    ],
    slidingwindow: [
      [null,        `${k('function')} ${fn('slidingWindow')}(arr, k) {`],
      ['window',    `    ${k('let')} winSum = arr.slice(${nm('0')}, k).reduce((a, b) => a + b, ${nm('0')});`],
      [null,        `    ${k('let')} maxSum = winSum, maxStart = ${nm('0')};`],
      ['comparing', `    ${k('for')} (${k('let')} i = k; i < arr.length; i++) {`],
      ['comparing', `        winSum += arr[i] - arr[i - k];`],
      ['bestWindow',`        ${k('if')} (winSum > maxSum) {`],
      ['bestWindow',`            maxSum = winSum;`],
      ['bestWindow',`            maxStart = i - k + ${nm('1')};`],
      [null,        `        }`],
      [null,        `    }`],
      [null,        `    ${k('return')} { maxSum, maxStart };`],
      [null,        `}`],
    ],
    kadane: [
      [null,        `${k('function')} ${fn('kadane')}(arr) {`],
      [null,        `    ${k('let')} cur = arr[${nm('0')}], mx = arr[${nm('0')}];`],
      [null,        `    ${k('let')} s = ${nm('0')}, e = ${nm('0')}, bs = ${nm('0')}, be = ${nm('0')};`],
      ['comparing', `    ${k('for')} (${k('let')} i = ${nm('1')}; i < arr.length; i++) {`],
      ['bucket',    `        ${k('if')} (cur + arr[i] > arr[i]) { cur += arr[i]; e = i; }`],
      ['eliminated',`        ${k('else')} { cur = arr[i]; s = e = i; }`],
      ['found',     `        ${k('if')} (cur > mx) { mx = cur; bs = s; be = e; }`],
      [null,        `    }`],
      [null,        `    ${k('return')} { mx, bs, be };`],
      [null,        `}`],
    ],
    prefixsum: [
      [null,        `${k('function')} ${fn('prefixSum')}(arr) {`],
      [null,        `    ${k('const')} prefix = [${nm('0')}];`],
      ['bucket',    `    ${k('for')} (${k('let')} i = ${nm('0')}; i < arr.length; i++)`],
      ['bucket',    `        prefix[i + ${nm('1')}] = prefix[i] + arr[i];`],
      [null,        `    ${cm('query range [L..R]:')}`],
      ['comparing', `    ${k('const')} rangeSum = (L, R) => prefix[R+${nm('1')}] - prefix[L];`],
      ['found',     `    ${k('return')} rangeSum;`],
      [null,        `}`],
    ],
    frequencycounter: [
      [null,        `${k('function')} ${fn('frequencyCounter')}(arr) {`],
      [null,        `    ${k('const')} freq = ${k('new')} Map();`],
      [null,        `    ${k('let')} modeVal = arr[${nm('0')}], modeCount = ${nm('0')};`],
      ['comparing', `    ${k('for')} (${k('const')} x ${k('of')} arr) {`],
      ['bucket',    `        freq.set(x, (freq.get(x) || ${nm('0')}) + ${nm('1')});`],
      ['found',     `        ${k('if')} (freq.get(x) > modeCount) {`],
      ['found',     `            modeVal = x; modeCount = freq.get(x);`],
      [null,        `        }`],
      [null,        `    }`],
      [null,        `    ${k('return')} { modeVal, modeCount };`],
      [null,        `}`],
    ],
    dutchflag: [
      [null,        `${k('function')} ${fn('dutchFlag')}(arr, pivot) {`],
      [null,        `    ${k('let')} lo = ${nm('0')}, mid = ${nm('0')}, hi = arr.length - ${nm('1')};`],
      ['comparing', `    ${k('while')} (mid <= hi) {`],
      ['left',      `        ${k('if')} (arr[mid] < pivot) {`],
      ['swapping',  `            [arr[lo], arr[mid]] = [arr[mid], arr[lo]];`],
      ['left',      `            lo++; mid++;`],
      ['bucket',    `        } ${k('else if')} (arr[mid] === pivot) {`],
      ['bucket',    `            mid++;`],
      ['right',     `        } ${k('else')} {`],
      ['swapping',  `            [arr[mid], arr[hi]] = [arr[hi], arr[mid]];`],
      ['right',     `            hi--;`],
      [null,        `        }`],
      [null,        `    }`],
      [null,        `    ${k('return')} arr;`],
      [null,        `}`],
    ],
    linear: [
      [null,        `${k('function')} ${fn('linearSearch')}(arr, target) {`],
      ['current',   `    ${k('for')} (${k('let')} i = ${nm('0')}; i < arr.length; i++) {`],
      ['current',   `        ${k('if')} (arr[i] === target)`],
      ['found',     `            ${k('return')} i;  ${cm('found at index i')}`],
      ['eliminated',`        ${cm('arr[i] !== target, continue')}`],
      [null,        `    }`],
      [null,        `    ${k('return')} -${nm('1')};  ${cm('not found')}`],
      [null,        `}`],
    ],
    binary: [
      [null,        `${k('function')} ${fn('binarySearch')}(arr, target) {`],
      [null,        `    ${k('let')} L = ${nm('0')}, R = arr.length - ${nm('1')};`],
      ['mid',       `    ${k('while')} (L <= R) {`],
      ['mid',       `        ${k('const')} mid = Math.floor((L + R) / ${nm('2')});`],
      ['found',     `        ${k('if')} (arr[mid] === target) ${k('return')} mid;`],
      ['left',      `        ${k('if')} (arr[mid] < target) L = mid + ${nm('1')};`],
      ['right',     `        ${k('else')}                   R = mid - ${nm('1')};`],
      [null,        `    }`],
      [null,        `    ${k('return')} -${nm('1')};  ${cm('not found')}`],
      [null,        `}`],
    ],
    shell: [
      [null,       `${k('function')} ${fn('shellSort')}(arr) {`],
      [null,       `    ${k('const')} n = arr.length;`],
      [null,       `    ${k('for')} (${k('let')} gap = Math.floor(n/${nm('2')}); gap > ${nm('0')}; gap = Math.floor(gap/${nm('2')})) {`],
      ['pivot',    `        ${k('for')} (${k('let')} i = gap; i < n; i++) {`],
      ['pivot',    `            ${k('const')} temp = arr[i];`],
      [null,       `            ${k('let')} j = i;`],
      ['comparing',`            ${k('while')} (j >= gap && arr[j - gap] > temp) {`],
      ['swapping', `                arr[j] = arr[j - gap];`],
      ['comparing',`                j -= gap;`],
      [null,       `            }`],
      ['sorted',   `            arr[j] = temp;`],
      [null,       `        }`],
      [null,       `    }`],
      [null,       `    ${k('return')} arr;`],
      [null,       `}`],
    ],
    cocktail: [
      [null,       `${k('function')} ${fn('cocktailSort')}(arr) {`],
      [null,       `    ${k('let')} start = ${nm('0')}, end = arr.length - ${nm('1')};`],
      [null,       `    ${k('let')} swapped = ${k('true')};`],
      [null,       `    ${k('while')} (swapped) {`],
      ['comparing',`        swapped = ${k('false')};`],
      ['comparing',`        ${k('for')} (${k('let')} i = start; i < end; i++)`],
      ['comparing',`            ${k('if')} (arr[i] > arr[i+${nm('1')}]) {`],
      ['swapping', `                [arr[i], arr[i+${nm('1')}]] = [arr[i+${nm('1')}], arr[i]]; swapped = ${k('true')}; }`],
      ['sorted',   `        end--;`],
      ['comparing',`        ${k('for')} (${k('let')} i = end; i > start; i--)`],
      ['comparing',`            ${k('if')} (arr[i-${nm('1')}] > arr[i]) {`],
      ['swapping', `                [arr[i-${nm('1')}], arr[i]] = [arr[i], arr[i-${nm('1')}]]; swapped = ${k('true')}; }`],
      ['sorted',   `        start++;`],
      [null,       `    }`],
      [null,       `    ${k('return')} arr;`],
      [null,       `}`],
    ],
    comb: [
      [null,       `${k('function')} ${fn('combSort')}(arr) {`],
      [null,       `    ${k('const')} n = arr.length;`],
      [null,       `    ${k('let')} gap = n, shrink = ${nm('1.3')}, sorted = ${k('false')};`],
      [null,       `    ${k('while')} (!sorted) {`],
      [null,       `        gap = Math.max(${nm('1')}, Math.floor(gap / shrink));`],
      [null,       `        ${k('if')} (gap === ${nm('1')}) sorted = ${k('true')};`],
      ['comparing',`        ${k('for')} (${k('let')} i = ${nm('0')}; i + gap < n; i++) {`],
      ['comparing',`            ${k('if')} (arr[i] > arr[i + gap]) {`],
      ['swapping', `                [arr[i], arr[i+gap]] = [arr[i+gap], arr[i]];`],
      [null,       `                sorted = ${k('false')};`],
      [null,       `            }`],
      [null,       `        }`],
      [null,       `    }`],
      [null,       `    ${k('return')} arr;`],
      [null,       `}`],
    ],
    jump: [
      [null,        `${k('function')} ${fn('jumpSearch')}(arr, target) {`],
      [null,        `    ${k('const')} n = arr.length;`],
      [null,        `    ${k('let')} step = Math.floor(Math.sqrt(n));`],
      [null,        `    ${k('let')} prev = ${nm('0')};`],
      ['current',   `    ${k('while')} (arr[Math.min(step, n) - ${nm('1')}] < target) {`],
      ['eliminated',`        prev = step;`],
      ['current',   `        step += Math.floor(Math.sqrt(n));`],
      [null,        `        ${k('if')} (prev >= n) ${k('return')} -${nm('1')};`],
      [null,        `    }`],
      ['current',   `    ${k('for')} (${k('let')} i = prev; i < Math.min(step, n); i++) {`],
      ['found',     `        ${k('if')} (arr[i] === target) ${k('return')} i;`],
      [null,        `    }`],
      [null,        `    ${k('return')} -${nm('1')};  ${cm('not found')}`],
      [null,        `}`],
    ],
    bfs: [
      [null,        `${k('function')} ${fn('bfs')}(grid, start, end) {`],
      [null,        `    ${k('const')} queue = [start];`],
      [null,        `    ${k('const')} visited = ${k('new')} Set([key(start)]);`],
      ['current',   `    ${k('while')} (queue.length) {`],
      ['current',   `        ${k('const')} node = queue.shift();`],
      ['found',     `        ${k('if')} (eq(node, end)) ${k('return')} path;`],
      ['comparing', `        ${k('for')} (${k('const')} nb ${k('of')} neighbors(node)) {`],
      ['comparing', `            ${k('if')} (!visited.has(key(nb)) && !isWall(nb)) {`],
      [null,        `                visited.add(key(nb));`],
      [null,        `                prev.set(key(nb), node);`],
      [null,        `                queue.push(nb);`],
      [null,        `            }`],
      [null,        `        }`],
      [null,        `    }`],
      [null,        `}`],
    ],
    dfs: [
      [null,        `${k('function')} ${fn('dfs')}(grid, start, end) {`],
      [null,        `    ${k('const')} stack = [start];`],
      [null,        `    ${k('const')} visited = ${k('new')} Set([key(start)]);`],
      ['current',   `    ${k('while')} (stack.length) {`],
      ['current',   `        ${k('const')} node = stack.pop();`],
      ['found',     `        ${k('if')} (eq(node, end)) ${k('return')} path;`],
      ['comparing', `        ${k('for')} (${k('const')} nb ${k('of')} neighbors(node)) {`],
      ['comparing', `            ${k('if')} (!visited.has(key(nb)) && !isWall(nb)) {`],
      [null,        `                visited.add(key(nb));`],
      [null,        `                prev.set(key(nb), node);`],
      [null,        `                stack.push(nb);`],
      [null,        `            }`],
      [null,        `        }`],
      [null,        `    }`],
      [null,        `}`],
    ],
    dijkstra: [
      [null,        `${k('function')} ${fn('dijkstra')}(grid, start, end) {`],
      [null,        `    ${k('const')} dist = ${k('new')} Map([[key(start), ${nm('0')}]]);`],
      [null,        `    ${k('const')} pq = [[${nm('0')}, start]];  ${cm('min-heap')}`],
      [null,        `    ${k('const')} visited = ${k('new')} Set();`],
      ['current',   `    ${k('while')} (pq.length) {`],
      ['current',   `        ${k('const')} [d, node] = pq.shift();  ${cm('extract min')}`],
      [null,        `        ${k('if')} (visited.has(key(node))) ${k('continue')};`],
      [null,        `        visited.add(key(node));`],
      ['found',     `        ${k('if')} (eq(node, end)) ${k('return')} path;`],
      ['comparing', `        ${k('for')} (${k('const')} nb ${k('of')} neighbors(node)) {`],
      ['comparing', `            ${k('const')} nd = d + weight(nb);`],
      [null,        `            ${k('if')} (nd < (dist.get(key(nb)) ?? Infinity)) {`],
      [null,        `                dist.set(key(nb), nd);`],
      [null,        `                prev.set(key(nb), node);`],
      [null,        `                pq.push([nd, nb]);`],
      [null,        `                pq.sort((a, b) => a[${nm('0')}] - b[${nm('0')}]);`],
      [null,        `            }`],
      [null,        `        }`],
      [null,        `    }`],
      [null,        `}`],
    ],
    astar: [
      [null,        `${k('function')} ${fn('astar')}(grid, start, end) {`],
      [null,        `    ${k('const')} h = (n) => Math.abs(n.r-end.r) + Math.abs(n.c-end.c);`],
      [null,        `    ${k('const')} g = ${k('new')} Map([[key(start), ${nm('0')}]]);`],
      [null,        `    ${k('const')} pq = [[h(start), start]];`],
      [null,        `    ${k('const')} visited = ${k('new')} Set();`],
      ['current',   `    ${k('while')} (pq.length) {`],
      ['current',   `        ${k('const')} [f, node] = pq.shift();`],
      [null,        `        ${k('if')} (visited.has(key(node))) ${k('continue')};`],
      [null,        `        visited.add(key(node));`],
      ['found',     `        ${k('if')} (eq(node, end)) ${k('return')} path;`],
      ['comparing', `        ${k('for')} (${k('const')} nb ${k('of')} neighbors(node)) {`],
      ['comparing', `            ${k('const')} ng = g.get(key(node)) + weight(nb);`],
      [null,        `            ${k('if')} (ng < (g.get(key(nb)) ?? Infinity)) {`],
      [null,        `                g.set(key(nb), ng);`],
      [null,        `                prev.set(key(nb), node);`],
      [null,        `                pq.push([ng + h(nb), nb]);`],
      [null,        `                pq.sort((a, b) => a[${nm('0')}] - b[${nm('0')}]);`],
      [null,        `            }`],
      [null,        `        }`],
      [null,        `    }`],
      [null,        `}`],
    ],
    gnome: [
      [null,       `${k('function')} ${fn('gnomeSort')}(arr) {`],
      [null,       `    ${k('let')} i = ${nm('0')};`],
      ['comparing',`    ${k('while')} (i < arr.length) {`],
      ['comparing',`        ${k('if')} (i === ${nm('0')} || arr[i] >= arr[i - ${nm('1')}])`],
      [null,       `            i++;`],
      ['swapping', `        ${k('else')} {`],
      ['swapping', `            [arr[i], arr[i-${nm('1')}]] = [arr[i-${nm('1')}], arr[i]];`],
      [null,       `            i--;`],
      [null,       `        }`],
      ['sorted',   `    }`],
      [null,       `}`],
    ],
    bucket: [
      [null,       `${k('function')} ${fn('bucketSort')}(arr) {`],
      [null,       `    ${k('const')} n = arr.length;`],
      [null,       `    ${k('const')} mn = Math.min(...arr), mx = Math.max(...arr);`],
      ['bucket',   `    ${k('const')} bkt = Array.from({length: n}, () => []);`],
      ['bucket',   `    ${k('for')} (${k('const')} x ${k('of')} arr) {`],
      ['bucket',   `        ${k('const')} idx = Math.floor((x - mn) * (n - ${nm('1')}) / (mx - mn));`],
      ['bucket',   `        bkt[idx].push(x); }`],
      ['comparing',`    bkt.forEach(b => b.sort((a, b) => a - b));`],
      ['sorted',   `    ${k('let')} k = ${nm('0')};`],
      ['sorted',   `    bkt.forEach(b => b.forEach(x => { arr[k++] = x; }));`],
      [null,       `}`],
    ],
    tim: [
      [null,       `${k('const')} RUN = ${nm('32')};`],
      [null,       `${k('function')} ${fn('timSort')}(arr) {`],
      [null,       `    ${k('const')} n = arr.length;`],
      ['pivot',    `    ${k('for')} (${k('let')} i = ${nm('0')}; i < n; i += RUN)`],
      ['pivot',    `        ${fn('insertionSort')}(arr, i, Math.min(i + RUN - ${nm('1')}, n - ${nm('1')}));`],
      ['comparing',`    ${k('for')} (${k('let')} sz = RUN; sz < n; sz *= ${nm('2')}) {`],
      ['leftpart', `        ${k('for')} (${k('let')} l = ${nm('0')}; l < n; l += ${nm('2')} * sz) {`],
      ['leftpart', `            ${k('const')} mid = Math.min(l + sz - ${nm('1')}, n - ${nm('1')});`],
      ['rightpart',`            ${k('const')} r = Math.min(l + ${nm('2')} * sz - ${nm('1')}, n - ${nm('1')});`],
      ['comparing',`            ${fn('merge')}(arr, l, mid, r);`],
      ['sorted',   `    }}`],
      [null,       `}`],
    ],
    pigeonhole: [
      [null,       `${k('function')} ${fn('pigeonholeSort')}(arr) {`],
      [null,       `    ${k('const')} mn = Math.min(...arr), mx = Math.max(...arr);`],
      [null,       `    ${k('const')} range = mx - mn + ${nm('1')};`],
      ['bucket',   `    ${k('const')} holes = ${k('new')} Array(range).fill(${nm('0')});`],
      ['bucket',   `    ${k('for')} (${k('const')} x ${k('of')} arr) holes[x - mn]++;`],
      [null,       `    ${k('let')} idx = ${nm('0')};`],
      ['comparing',`    ${k('for')} (${k('let')} i = ${nm('0')}; i < range; i++)`],
      ['comparing',`        ${k('while')} (holes[i]-- > ${nm('0')})`],
      ['sorted',   `            arr[idx++] = i + mn;`],
      [null,       `}`],
    ],
    boyermoore: [
      [null,       `${k('function')} ${fn('majorityVote')}(arr) {`],
      [null,       `    ${k('let')} cand = arr[${nm('0')}], cnt = ${nm('0')};`],
      ['comparing',`    ${k('for')} (${k('const')} x ${k('of')} arr) {`],
      ['comparing',`        ${k('if')} (cnt === ${nm('0')}) cand = x;`],
      ['leftptr',  `        cnt += (x === cand) ? ${nm('1')} : -${nm('1')};`],
      [null,       `    }`],
      ['comparing',`    ${k('let')} c = ${nm('0')};`],
      ['comparing',`    ${k('for')} (${k('const')} x ${k('of')} arr) ${k('if')} (x === cand) c++;`],
      ['found',    `    ${k('if')} (c > arr.length / ${nm('2')}) ${k('return')} cand;`],
      ['eliminated',`    ${k('return')} ${k('null')};`],
      [null,       `}`],
    ],
    mergeintervals: [
      [null,       `${k('function')} ${fn('mergeIntervals')}(iv) {`],
      [null,       `    iv.sort((a, b) => a[${nm('0')}] - b[${nm('0')}]);`],
      ['leftptr',  `    ${k('const')} res = [iv[${nm('0')}]];`],
      ['comparing',`    ${k('for')} (${k('let')} i = ${nm('1')}; i < iv.length; i++) {`],
      ['comparing',`        ${k('if')} (iv[i][${nm('0')}] <= res[res.length-${nm('1')}][${nm('1')}])`],
      ['found',    `            res[res.length-${nm('1')}][${nm('1')}] = Math.max(res[res.length-${nm('1')}][${nm('1')}], iv[i][${nm('1')}]);`],
      ['rightptr', `        ${k('else')} res.push(iv[i]);`],
      [null,       `    }`],
      ['sorted',   `    ${k('return')} res;`],
      [null,       `}`],
    ],
    reservoir: [
      [null,       `${k('function')} ${fn('reservoirSample')}(stream, k) {`],
      ['bucket',   `    ${k('const')} res = stream.slice(${nm('0')}, k);`],
      ['comparing',`    ${k('for')} (${k('let')} i = k; i < stream.length; i++) {`],
      ['comparing',`        ${k('const')} j = Math.floor(Math.random() * (i + ${nm('1')}));`],
      ['swapping', `        ${k('if')} (j < k) res[j] = stream[i];`],
      [null,       `    }`],
      ['found',    `    ${k('return')} res;`],
      [null,       `}`],
    ],
    interpolation: [
      [null,       `${k('function')} ${fn('interpolationSearch')}(arr, t) {`],
      [null,       `    ${k('let')} lo = ${nm('0')}, hi = arr.length - ${nm('1')};`],
      ['mid',      `    ${k('while')} (lo <= hi && arr[lo] <= t && t <= arr[hi]) {`],
      ['mid',      `        ${k('if')} (arr[lo] === arr[hi])`],
      ['found',    `            ${k('return')} arr[lo] === t ? lo : -${nm('1')};`],
      ['mid',      `        ${k('const')} pos = lo + Math.floor((t-arr[lo])*(hi-lo)/(arr[hi]-arr[lo]));`],
      ['found',    `        ${k('if')} (arr[pos] === t) ${k('return')} pos;`],
      ['left',     `        ${k('else if')} (arr[pos] < t) lo = pos + ${nm('1')};`],
      ['right',    `        ${k('else')} hi = pos - ${nm('1')};`],
      [null,       `    }`],
      [null,       `    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
    exponential: [
      [null,       `${k('function')} ${fn('exponentialSearch')}(arr, t) {`],
      ['found',    `    ${k('if')} (arr[${nm('0')}] === t) ${k('return')} ${nm('0')};`],
      [null,       `    ${k('let')} i = ${nm('1')};`],
      ['current',  `    ${k('while')} (i < arr.length && arr[i] <= t) i *= ${nm('2')};`],
      [null,       `    ${k('let')} lo = Math.floor(i / ${nm('2')}), hi = Math.min(i, arr.length - ${nm('1')});`],
      ['mid',      `    ${k('while')} (lo <= hi) {`],
      ['mid',      `        ${k('const')} mid = Math.floor((lo + hi) / ${nm('2')});`],
      ['found',    `        ${k('if')} (arr[mid] === t) ${k('return')} mid;`],
      ['left',     `        ${k('else if')} (arr[mid] < t) lo = mid + ${nm('1')};`],
      ['right',    `        ${k('else')} hi = mid - ${nm('1')};`],
      [null,       `    }`],
      [null,       `    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
    ternary: [
      [null,       `${k('function')} ${fn('ternarySearch')}(arr, t) {`],
      [null,       `    ${k('let')} lo = ${nm('0')}, hi = arr.length - ${nm('1')};`],
      [null,       `    ${k('while')} (lo <= hi) {`],
      ['mid',      `        ${k('const')} m1 = lo + Math.floor((hi - lo) / ${nm('3')});`],
      ['mid',      `        ${k('const')} m2 = hi - Math.floor((hi - lo) / ${nm('3')});`],
      ['found',    `        ${k('if')} (arr[m1] === t) ${k('return')} m1;`],
      ['found',    `        ${k('if')} (arr[m2] === t) ${k('return')} m2;`],
      ['left',     `        ${k('if')} (t < arr[m1]) hi = m1 - ${nm('1')};`],
      ['right',    `        ${k('else if')} (t > arr[m2]) lo = m2 + ${nm('1')};`],
      [null,       `        ${k('else')} { lo = m1 + ${nm('1')}; hi = m2 - ${nm('1')}; }`],
      [null,       `    }`],
      [null,       `    ${k('return')} -${nm('1')};`],
      [null,       `}`],
    ],
  }
};

let currentLang = 'pseudo';

function buildCodePanel(a) {
  const lines = CODE_SNIPPETS[currentLang]?.[a];
  if (!lines) return;
  $('codePanelTitle').textContent = currentLang === 'pseudo' ? 'Pseudocode' : 'Code';
  const body = $('codeBody');
  body.innerHTML = '';
  lines.forEach(([id, text], i) => {
    const row = document.createElement('div');
    row.className = 'code-line';
    row.dataset.lineId = id || '';
    const lno = document.createElement('span');
    lno.className = 'code-lno';
    lno.textContent = i + 1;
    const txt = document.createElement('span');
    txt.className = 'code-text';
    txt.innerHTML = text;
    row.appendChild(lno);
    row.appendChild(txt);
    body.appendChild(row);
  });
}

document.querySelectorAll('.lang-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLang = btn.dataset.lang;
    buildCodePanel(algo);
    highlightCodeLine(null);
  });
});

function getStepLineId(step) {
  if (!step) return null;
  if (step.type === 'grid') {
    const st = step.state || {};
    if (st.found     !== undefined && st.found !== null) return 'found';
    if (st.mid       !== undefined && st.mid   !== null) return 'mid';
    if (st.current   !== undefined)                      return 'current';
    if (st.eliminated && st.eliminated.length)           return 'eliminated';
    if (st.left      !== undefined)                      return 'left';
    if (st.right     !== undefined)                      return 'right';
    return null;
  }
  const hl = step.hl || {};
  if (hl.found      && hl.found.length)      return 'found';
  if (hl.sorted     && hl.sorted.length)     return 'sorted';
  if (hl.swapping   && hl.swapping.length)   return 'swapping';
  if (hl.pivot      !== undefined)           return 'pivot';
  if (hl.bestWindow && hl.bestWindow.length) return 'bestWindow';
  if (hl.comparing  && hl.comparing.length)  return 'comparing';
  if (hl.current    !== undefined)           return 'current';
  if (hl.leftptr    !== undefined)           return 'leftptr';
  if (hl.rightptr   !== undefined)           return 'rightptr';
  if (hl.leftpart   && hl.leftpart.length)   return 'leftpart';
  if (hl.rightpart  && hl.rightpart.length)  return 'rightpart';
  if (hl.bucket     && hl.bucket.length)     return 'bucket';
  if (hl.window     && hl.window.length)     return 'window';
  if (hl.eliminated && hl.eliminated.length) return 'eliminated';
  return null;
}

function highlightCodeLine(lineId) {
  const rows = $('codeBody').querySelectorAll('.code-line');
  let hit = false;
  rows.forEach(row => {
    const match = lineId && row.dataset.lineId === lineId && !hit;
    row.classList.toggle('hl-active', match);
    if (match) {
      hit = true;
      row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  });
}

updateSidebar('bubble');
buildCodePanel('bubble');
speedVal.textContent     =SPEED_LABELS[speedSlider.value];
sizeVal.textContent      =sizeSlider.value;
windowSizeVal.textContent=windowSlider.value;

// ═══════════════════════════════════════════════
//  PERFORMANCE STATS
// ═══════════════════════════════════════════════
function animateCounter(el, target) {
  if(!el) return;
  const start=parseInt(el.textContent)||0;
  if(start===target){return;}
  const diff=target-start;
  const duration=120;
  const startTime=performance.now();
  function tick(now){
    const elapsed=now-startTime;
    const progress=Math.min(elapsed/duration,1);
    el.textContent=Math.round(start+diff*progress);
    if(progress<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function recalcStats() {
  let comps=0, swaps=0;
  for(let i=0;i<stepIdx;i++){
    const s=steps[i];
    if(!s) continue;
    const hl=s.hl||{}, st=s.state||{};
    if(hl.comparing?.length||st.current!==undefined||st.mid!==undefined) comps++;
    if(hl.swapping?.length) swaps++;
  }
  animateCounter($('statComparisons'), comps);
  animateCounter($('statSwaps'), swaps);
  animateCounter($('statSteps'), stepIdx);
}

// ═══════════════════════════════════════════════
//  TIMELINE SCRUBBER
// ═══════════════════════════════════════════════
function updateTimeline() {
  const slider=$('timelineSlider');
  if(!slider) return;
  slider.max=steps.length;
  slider.value=stepIdx;
  const tc=$('timelineCurrent'), tt=$('timelineTotal');
  if(tc) tc.textContent=stepIdx;
  if(tt) tt.textContent=steps.length;
}

$('timelineSlider').addEventListener('input', function() {
  const target=parseInt(this.value);
  if(target===stepIdx) return;
  stepIdx=target;
  if(stepIdx===0){
    if(GRID_ALGOS.has(algo)) renderGrid(arr,{});
    else renderBars(arr,{});
    setStatus('Press Run to begin');
    statusDot.className='status-dot';
    highlightCodeLine(null);
  } else {
    applyStep(steps[stepIdx-1]);
  }
  stepBackBtn.disabled=(stepIdx<=0);
  stepBtn.disabled=(stepIdx>=steps.length);
});

// ═══════════════════════════════════════════════
//  NARRATION MODE (Enhanced Learn)
// ═══════════════════════════════════════════════

/* Educational explanations keyed by algorithm; each is an array of {pattern, why} */
const LEARN_TIPS = {
  bubble: [
    {p:/^Compare/, w:'Bubble sort compares adjacent pairs. If the left is larger, they swap — this "bubbles" big values to the right.'},
    {p:/^Swap/, w:'Since the left element is larger, we swap them so the bigger value moves one position closer to its sorted spot.'},
    {p:/^Pass \d+ done/, w:'After each pass, the largest unsorted element reaches its final position. The sorted region grows from the right.'},
    {p:/Sorted/, w:'No more swaps needed — the array is fully sorted. Best case O(n) if already sorted, otherwise O(n²).'},
  ],
  selection: [
    {p:/Looking for minimum/, w:'Selection sort scans the unsorted region to find the smallest element, then places it at the front.'},
    {p:/^Compare/, w:'We check each element against the current minimum to see if there\'s a smaller one.'},
    {p:/New min/, w:'Found a smaller element — this becomes our new candidate for the minimum.'},
    {p:/^Swap/, w:'We swap the minimum into its correct position at the start of the unsorted region.'},
    {p:/placed at/, w:'This element is now in its final position. The sorted prefix grows by one.'},
    {p:/Sorted/, w:'All elements are in place. Selection sort always does O(n²) comparisons regardless of input.'},
  ],
  insertion: [
    {p:/First element/, w:'A single element is trivially sorted — it forms our initial sorted prefix.'},
    {p:/Insert .+ into sorted/, w:'We take the next unsorted element and find its correct position within the sorted prefix.'},
    {p:/shift right/, w:'Elements larger than the key shift right to make room — this is like inserting a card into a hand of sorted cards.'},
    {p:/inserted at/, w:'The key slides into the gap. The sorted prefix now contains one more element.'},
    {p:/Sorted/, w:'Every element has been inserted. Insertion sort is O(n) on nearly-sorted data — great for small or almost-sorted arrays.'},
  ],
  merge: [
    {p:/^Merge \[/, w:'Merge sort splits the array recursively until subarrays have one element, then merges them back in order.'},
    {p:/^Compare/, w:'During merge, we compare the fronts of two sorted halves and pick the smaller one — this keeps the result sorted.'},
    {p:/^Merged/, w:'Both halves are now combined into a single sorted subarray. Each merge is O(n) for the level.'},
    {p:/Sorted/, w:'All subarrays merged. Merge sort guarantees O(n log n) in all cases but requires O(n) extra space.'},
  ],
  quick: [
    {p:/^Pivot:/, w:'Quick sort picks a pivot element. Everything smaller goes left, larger goes right — this is the partition step.'},
    {p:/^Compare .+ with pivot/, w:'Each element is compared once to the pivot to decide which side of the partition it belongs to.'},
    {p:/^Swap/, w:'Moving this element to the correct side of the pivot boundary.'},
    {p:/in final position/, w:'The pivot is now in its globally correct position — it will never move again.'},
    {p:/Sorted/, w:'All pivots in place. Average O(n log n), but O(n²) worst case if pivots are badly chosen.'},
  ],
  counting: [
    {p:/^Range:/, w:'Counting sort works by tallying how many of each value exist. It needs to know the range of values first.'},
    {p:/^Count/, w:'Each element increments its counter. This replaces comparisons with direct indexing — not comparison-based.'},
    {p:/Building output/, w:'Now we reconstruct the sorted array by reading counts from lowest to highest value.'},
    {p:/^Place/, w:'Values are placed in order based on their counts. Stable: equal elements keep their original order.'},
    {p:/Sorted/, w:'Done in O(n+k) time where k is the range. Extremely fast when k is small relative to n.'},
  ],
  heap: [
    {p:/Building max-heap/, w:'We turn the array into a max-heap — a complete binary tree where each parent is larger than its children.'},
    {p:/Max-heap built/, w:'The largest element is now at the root (index 0). We\'ll repeatedly extract it.'},
    {p:/Extract max/, w:'Swap the root (max) to the end, shrink the heap, and re-heapify to restore the heap property.'},
    {p:/^Compare/, w:'Heapify checks if a parent is smaller than its children and swaps with the larger child if needed.'},
    {p:/^Swap/, w:'The parent was smaller than a child — swapping restores the heap property at this subtree.'},
    {p:/Sorted/, w:'All elements extracted in order. Heap sort is always O(n log n) with O(1) extra space.'},
  ],
  radix: [
    {p:/^Max value/, w:'Radix sort processes digits from least significant to most significant. The max value tells us how many passes we need.'},
    {p:/digit =/, w:'Each element is placed into a bucket (0-9) based on its current digit. No comparisons — purely digit-based distribution.'},
    {p:/^Place .+ from bucket/, w:'Elements are collected back from buckets in order (0→9), preserving stability from previous passes.'},
    {p:/Pass \d+.*complete/, w:'One digit fully processed. After all digit passes, the array is sorted. Time: O(n·d) where d = number of digits.'},
    {p:/Sorted/, w:'All digit passes complete. Radix sort is not comparison-based — it can beat O(n log n) for integers.'},
  ],
  shell: [
    {p:/Gap/, w:'Shell sort starts with a large gap and shrinks it. Elements far apart are compared first, moving them closer to final positions quickly.'},
    {p:/^Compare/, w:'Like insertion sort but with a gap — comparing elements that are gap positions apart.'},
    {p:/^Swap/, w:'The element was out of order relative to its gap partner. Swapping brings it closer to its final position.'},
    {p:/shift/, w:'Shifting elements by the gap distance. As the gap shrinks to 1, this becomes standard insertion sort on a nearly-sorted array.'},
    {p:/Sorted/, w:'With gap = 1, the final pass is an insertion sort that finishes quickly because earlier passes pre-sorted the data.'},
  ],
  cocktail: [
    {p:/^Compare/, w:'Cocktail shaker sort is like bubble sort but scans in both directions — left-to-right then right-to-left each pass.'},
    {p:/^Swap/, w:'Adjacent elements are out of order, so we swap them. Bidirectional scanning helps small values ("turtles") reach the left faster.'},
    {p:/done/, w:'Each pass locks one element at each end. This bidirectional approach can be faster than regular bubble sort on some inputs.'},
    {p:/Sorted/, w:'Cocktail sort finishes. Still O(n²) worst case, but handles "turtle" elements better than standard bubble sort.'},
  ],
  comb: [
    {p:/Gap/, w:'Comb sort uses a shrinking gap (divided by 1.3 each pass) to eliminate "turtles" — small values near the end that slow bubble sort.'},
    {p:/^Compare/, w:'Elements separated by the current gap are compared. Large gaps quickly move far-apart elements closer to their positions.'},
    {p:/^Swap/, w:'Out of order at this gap distance — swapping. As the gap shrinks, the array becomes increasingly sorted.'},
    {p:/Sorted/, w:'With gap = 1 and no swaps, the array is sorted. Average case is much better than bubble sort: roughly O(n²/2^p).'},
  ],
  twopointers: [
    {p:/Left.*Right|Initialize/, w:'Two pointers start at opposite ends of the sorted array. We converge them inward to find a pair summing to the target.'},
    {p:/[Ss]um.*<|too small/, w:'Sum is too small → move the left pointer right to increase the sum. Sorted order guarantees this helps.'},
    {p:/[Ss]um.*>|too large/, w:'Sum is too large → move the right pointer left to decrease the sum.'},
    {p:/[Ff]ound/, w:'The two values sum to the target. Two pointers finds this in O(n) time — much faster than checking all pairs O(n²).'},
    {p:/[Nn]o pair/, w:'Pointers crossed without finding a pair — no valid pair exists. We confirmed this in a single pass.'},
  ],
  slidingwindow: [
    {p:/[Ww]indow|initial/, w:'The sliding window maintains a fixed-size subarray. Instead of recalculating sums from scratch, we add/subtract at the edges.'},
    {p:/[Ss]lide|[Aa]dd|[Rr]emove/, w:'Sliding: remove the leftmost element and add the next rightmost. Each update is O(1) instead of O(k).'},
    {p:/[Bb]est|[Mm]ax/, w:'This window has the maximum sum seen so far. We track it as we slide through the entire array.'},
    {p:/[Dd]one|complete/, w:'Scanned every window of size k in O(n) time. Without sliding window, this would be O(n·k).'},
  ],
  kadane: [
    {p:/[Ss]can|[Cc]heck/, w:'Kadane\'s tracks the best subarray ending at each position. If adding the current element makes the sum negative, we restart.'},
    {p:/[Rr]eset|[Ss]tart new/, w:'Current sum dropped below the current element alone — starting a new subarray from here is better.'},
    {p:/[Uu]pdate.*best|[Nn]ew best/, w:'This subarray\'s sum exceeds our previous best. Update the record.'},
    {p:/[Dd]one|[Mm]aximum/, w:'Maximum subarray found in O(n) time with O(1) space — dynamic programming at its simplest.'},
  ],
  prefixsum: [
    {p:/[Bb]uild|[Cc]umulative/, w:'Each prefix[i] stores the sum of all elements from index 0 to i. Building takes one pass: O(n).'},
    {p:/[Qq]uery|[Rr]ange/, w:'Range sum = prefix[right] - prefix[left-1]. This is O(1) per query after the O(n) build step.'},
    {p:/[Dd]one|[Cc]omplete/, w:'Prefix sum enables instant range queries. It\'s a fundamental technique for competitive programming and databases.'},
  ],
  frequencycounter: [
    {p:/[Ss]can|[Cc]ount/, w:'We iterate through the array once, using a hash map to count how many times each value appears.'},
    {p:/[Mm]ode|[Mm]ost frequent/, w:'The element with the highest count is the mode. Hash map lookups are O(1) on average.'},
    {p:/[Dd]one|[Cc]omplete/, w:'Found the mode in O(n) time using O(n) space. Frequency counting is the basis of many algorithmic techniques.'},
  ],
  dutchflag: [
    {p:/[Ee]xamin|[Cc]heck/, w:'Three pointers (low, mid, high) partition the array into <pivot, =pivot, and >pivot regions in one pass.'},
    {p:/^Swap.*low|less than/, w:'This element is less than the pivot — swap it to the low region and advance both low and mid pointers.'},
    {p:/^Swap.*high|greater than/, w:'This element is greater than the pivot — swap it to the high region and decrement high (don\'t advance mid — the swapped-in value needs checking).'},
    {p:/[Ee]qual|mid/, w:'Element equals the pivot — it\'s already in the right region. Just advance mid.'},
    {p:/[Dd]one|[Pp]artitioned/, w:'Partitioned in O(n) time with O(1) space. This 3-way partition is key to handling duplicates in quick sort.'},
  ],
  linear: [
    {p:/[Cc]heck/, w:'Linear search checks each element one by one from the start. Simple but O(n) — no way to skip elements without sorted order.'},
    {p:/[Ff]ound/, w:'Target found. Best case O(1) if it\'s the first element. On average we check half the array.'},
    {p:/[Nn]ot found/, w:'Checked every element without finding the target. Worst case: O(n) comparisons.'},
  ],
  binary: [
    {p:/[Mm]id|[Cc]heck/, w:'Binary search halves the search space each step by comparing with the midpoint. Requires a sorted array.'},
    {p:/[Ll]eft|[Rr]ight|[Dd]iscard|[Ee]liminate/, w:'Half the remaining elements are eliminated. This logarithmic elimination gives O(log n) time.'},
    {p:/[Ff]ound/, w:'Target found in O(log n) steps. For 1 million elements, that\'s only about 20 comparisons.'},
  ],
  jump: [
    {p:/[Jj]ump/, w:'Jump search leaps ahead by √n steps to find the block containing the target, then linear scans that block.'},
    {p:/[Ll]inear|[Ss]can/, w:'Now scanning within the identified block. Total work is O(√n) — a middle ground between linear and binary search.'},
    {p:/[Ff]ound/, w:'Target found. Jump search works on sorted arrays and is useful when backward iteration is costly.'},
  ],
  bfs: [
    {p:/[Vv]isit|[Ee]xplor/, w:'BFS uses a queue (FIFO) to explore nodes level by level — all neighbors at distance d before any at d+1.'},
    {p:/[Pp]ath|[Ff]ound/, w:'BFS guarantees the shortest path in an unweighted graph because it explores in order of distance from the start.'},
    {p:/[Nn]o path/, w:'All reachable nodes explored without finding the end — no path exists through the current wall configuration.'},
  ],
  dfs: [
    {p:/[Vv]isit|[Ee]xplor/, w:'DFS uses a stack (LIFO) to go as deep as possible along each branch before backtracking.'},
    {p:/[Bb]acktrack/, w:'Hit a dead end — DFS backtracks to the most recent unexplored branch and continues.'},
    {p:/[Pp]ath|[Ff]ound/, w:'Path found, but DFS doesn\'t guarantee the shortest path — it finds a path, not necessarily the optimal one.'},
    {p:/[Nn]o path/, w:'All reachable nodes explored via DFS. No path exists to the end node.'},
  ],
  dijkstra: [
    {p:/[Vv]isit|[Ee]xplor/, w:'Dijkstra greedily picks the unvisited node with the smallest distance. A priority queue makes this efficient.'},
    {p:/[Uu]pdate|[Rr]elax/, w:'Found a shorter path to this neighbor — update its distance (edge relaxation). This is the core of Dijkstra\'s optimality.'},
    {p:/[Pp]ath|[Ff]ound/, w:'Shortest weighted path found. Dijkstra is optimal for non-negative edge weights. Time: O((V+E) log V) with a min-heap.'},
    {p:/[Nn]o path/, w:'No path exists. Dijkstra explored all reachable nodes without reaching the end.'},
  ],
  astar: [
    {p:/[Vv]isit|[Ee]xplor/, w:'A* picks the node with the lowest f = g + h, where g is the cost so far and h is the heuristic (Manhattan distance to goal).'},
    {p:/[Uu]pdate|[Rr]elax/, w:'Found a better path to this neighbor — update its g-cost and recalculate f. The heuristic guides us toward the goal.'},
    {p:/[Pp]ath|[Ff]ound/, w:'Optimal path found. A* is faster than Dijkstra because the heuristic prunes nodes that lead away from the goal.'},
    {p:/[Nn]o path/, w:'No path exists. A* proved no route to the goal despite heuristic guidance.'},
  ],
};

/* fallback explanation based on generic step patterns */
const GENERIC_TIPS = [
  {p:/^Compare/, w:'Comparing two values to determine their relative order.'},
  {p:/^Swap/, w:'Exchanging two elements to move them closer to their correct positions.'},
  {p:/^Place|^Put/, w:'Placing an element into its determined position.'},
  {p:/Sorted ✓|Done ✓/, w:'Algorithm complete — all elements are now in their correct positions.'},
  {p:/[Nn]o path/, w:'No valid path could be found between start and end.'},
  {p:/[Pp]ath found/, w:'A valid path has been discovered from start to end.'},
];

let _narrateRAF=0, _narrateRAF2=0, _preLearnSpeed=null;
function toggleNarrate(){
  narrateMode=!narrateMode;
  const bar=$('narrationBar'), btn=$('learnBtn');
  if(narrateMode){
    bar.classList.remove('hidden');
    btn.classList.add('learn-active');
    // Auto-slow to Very Slow
    _preLearnSpeed=speedSlider.value;
    speedSlider.value='1';
    speedVal.textContent=SPEED_LABELS['1'];
    const cur=steps[stepIdx-1];
    if(cur){
      updateNarration(cur.msg);
    } else {
      $('narrationText').textContent='Press Run or Step to begin learning.';
      $('narrationWhy').textContent=META[algo]?META[algo].desc:'Select an algorithm to see step-by-step explanations.';
    }
  } else {
    bar.classList.add('hidden');
    btn.classList.remove('learn-active');
    cancelAnimationFrame(_narrateRAF);
    cancelAnimationFrame(_narrateRAF2);
    // Restore previous speed
    if(_preLearnSpeed){
      speedSlider.value=_preLearnSpeed;
      speedVal.textContent=SPEED_LABELS[_preLearnSpeed]||'Medium';
      _preLearnSpeed=null;
    }
  }
}

function getLearnTip(msg){
  if(!msg) return '';
  const tips=LEARN_TIPS[algo];
  if(tips){
    for(const t of tips){ if(t.p.test(msg)) return t.w; }
  }
  for(const t of GENERIC_TIPS){ if(t.p.test(msg)) return t.w; }
  return '';
}

function updateNarration(msg){
  if(!narrateMode) return;
  const el=$('narrationText'), whyEl=$('narrationWhy');
  if(!msg){el.textContent=''; whyEl.textContent=''; return;}
  cancelAnimationFrame(_narrateRAF);
  cancelAnimationFrame(_narrateRAF2);
  // Instantly show the main message and explanation
  el.textContent = msg;
  const tip = getLearnTip(msg);
  whyEl.textContent = tip || '';
}
$('learnBtn').addEventListener('click', toggleNarrate);

// ═══════════════════════════════════════════════
//  KEYBOARD SHORTCUTS
// ═══════════════════════════════════════════════
document.addEventListener('keydown', function(e) {
  if(e.target.tagName==='INPUT'||e.target.tagName==='SELECT'||e.target.tagName==='TEXTAREA') return;
  // If welcome screen is visible, hide it and show main area on any shortcut key
  if(welcomeScreen && !welcomeScreen.classList.contains('hidden')) {
    // Only respond to relevant shortcut keys
    const shortcutKeys = ['Space','ArrowRight','ArrowLeft','KeyR','KeyS','KeyF','KeyL','Digit1','Digit2','Digit3','Digit4','Digit5'];
    if(shortcutKeys.includes(e.code)) {
      // Show main area and initialize if needed
      history.pushState({page:'app'},'','#app');
      sortSelect.value='bubble';
      hideWelcome(()=>{
        vizArea.classList.remove('hidden');
        pathfindArea.classList.add('hidden');
        $('logoLink').style.cursor='pointer';
        requestAnimationFrame(()=>handleAlgoChange('bubble'));
      });
      // For forward/backward step, trigger the step action immediately after hiding welcome
      if(e.code === 'ArrowRight') {
        setTimeout(()=>stepBtn.click(), 0);
      } else if(e.code === 'ArrowLeft') {
        setTimeout(()=>stepBackBtn.click(), 0);
      }
    } else {
      return;
    }
  }
  switch(e.code){
    case 'Space':
      e.preventDefault();
      if(running&&!paused) pauseBtn.click();
      else if(running&&paused) pauseBtn.click();
      else if(!running&&stepIdx<steps.length&&steps.length>0) {paused=false; runAll();}
      else runBtn.click();
      break;
    case 'ArrowRight':
      e.preventDefault();
      if(!running) stepBtn.click();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      if(!running) stepBackBtn.click();
      break;
    case 'KeyR':
      if(!e.ctrlKey&&!e.metaKey){e.preventDefault(); resetBtn.click();}
      break;
    case 'KeyS':
      if(!e.ctrlKey&&!e.metaKey){e.preventDefault(); shuffleBtn.click();}
      break;
    case 'KeyF':
      if(!e.ctrlKey&&!e.metaKey){e.preventDefault(); toggleFullscreen();}
      break;
    case 'KeyL':
      if(!e.ctrlKey&&!e.metaKey){e.preventDefault(); toggleNarrate();}
      break;
    case 'Digit1': case 'Digit2': case 'Digit3': case 'Digit4': case 'Digit5': {
      const spd=e.code.charAt(5);
      if(SPEEDS[spd]){
        speedSlider.value=spd;
        speedVal.textContent=SPEED_LABELS[spd];
        showSpeedToast(SPEED_LABELS[spd]);
      }
      break;
    }
  }
});

// ═══════════════════════════════════════════════
//  FULLSCREEN MODE
// ═══════════════════════════════════════════════
function toggleFullscreen() {
  const el=$('vizCanvas');
  if(!document.fullscreenElement){
    el.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}
$('fullscreenBtn').addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', function() {
  const canvas = $('vizCanvas');
  if (!document.fullscreenElement) {
    // Exited fullscreen - ensure no stuck styles
    if (!canvas.classList.contains('custom-sized')) {
      canvas.style.height = '';
    }
    canvas.style.width = '';
  }

  // Re-render after a short delay so the canvas has its final dimensions
  setTimeout(function() {
    if(!arr.length||vizArea.classList.contains('hidden')) return;
    const lastStep=steps[stepIdx-1];
    if(lastStep) applyStep(lastStep);
    else if(GRID_ALGOS.has(algo)) renderGrid(arr,{});
    else renderBars(arr,{});
  }, 150);
});

// ═══════════════════════════════════════════════
//  ELAPSED TIMER (removed)
// ═══════════════════════════════════════════════
function startTimer(){}
function stopTimer(){}
function resetTimer(){}

// ═══════════════════════════════════════════════
//  CONFETTI ANIMATION
// ═══════════════════════════════════════════════
function launchConfetti(){
  const canvas=$('confettiCanvas');
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  canvas.style.display='block';
  const particles=[];
  const colors=['#ff6b6b','#feca57','#48dbfb','#ff9ff3','#54a0ff','#5f27cd','#01a3a4','#f368e0'];
  for(let i=0;i<120;i++){
    particles.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height*0.5-canvas.height*0.2,
      w:Math.random()*8+4,
      h:Math.random()*6+2,
      color:colors[Math.floor(Math.random()*colors.length)],
      vx:(Math.random()-0.5)*4,
      vy:Math.random()*3+2,
      rot:Math.random()*360,
      rv:(Math.random()-0.5)*12,
      alpha:1
    });
  }
  let frame=0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let alive=false;
    particles.forEach(p=>{
      if(p.alpha<=0) return;
      alive=true;
      p.x+=p.vx; p.y+=p.vy; p.vy+=0.1;
      p.rot+=p.rv;
      if(frame>60) p.alpha-=0.015;
      ctx.save();
      ctx.translate(p.x,p.y);
      ctx.rotate(p.rot*Math.PI/180);
      ctx.globalAlpha=Math.max(0,p.alpha);
      ctx.fillStyle=p.color;
      ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
      ctx.restore();
    });
    frame++;
    if(alive&&frame<200) requestAnimationFrame(draw);
    else {ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none';}
  }
  requestAnimationFrame(draw);
}

// ═══════════════════════════════════════════════
//  SORTED GLOW + CONFETTI TRIGGER
// ═══════════════════════════════════════════════
function triggerSortedCelebration(){
  launchConfetti();
  const vc=$('vizCanvas');
  if(vc){
    vc.classList.add('sorted-glow');
    setTimeout(()=>vc.classList.remove('sorted-glow'),1600);
  }
}

// ═══════════════════════════════════════════════
//  SHARE / EXPORT URL
// ═══════════════════════════════════════════════
$('shareBtn').addEventListener('click',()=>{
  const params=new URLSearchParams();
  params.set('algo',algo);
  params.set('size',sizeSlider.value);
  params.set('speed',speedSlider.value);
  if(arr.length<=60) params.set('arr',arr.join(','));
  if(SEARCH_ALGOS.has(algo)){
    const t=$('targetInput').value;
    if(t) params.set('target',t);
  }
  if(algo==='twopointers'){
    const t=$('targetSumInput').value;
    if(t) params.set('targetSum',t);
  }
  if(algo==='slidingwindow') params.set('window',windowSlider.value);
  const shareUrl=window.location.origin+window.location.pathname+'?'+params.toString();
  navigator.clipboard.writeText(shareUrl).then(()=>{
    showShareToast('URL copied to clipboard!');
  }).catch(()=>{
    showShareToast('Could not copy URL');
  });
});

function showShareToast(msg){
  let toast=document.querySelector('.share-toast');
  if(!toast){
    toast=document.createElement('div');
    toast.className='share-toast';
    document.body.appendChild(toast);
  }
  toast.textContent=msg;
  toast.classList.add('visible');
  setTimeout(()=>toast.classList.remove('visible'),2200);
}

function showSpeedToast(label){
  let toast=document.querySelector('.speed-toast');
  if(!toast){
    toast=document.createElement('div');
    toast.className='speed-toast';
    document.body.appendChild(toast);
  }
  toast.textContent=label;
  toast.classList.remove('visible');
  void toast.offsetWidth;
  toast.classList.add('visible');
  setTimeout(()=>toast.classList.remove('visible'),1200);
}

// ═══════════════════════════════════════════════
//  GIF ENCODER (self-contained GIF89a with LZW)
// ═══════════════════════════════════════════════
class GIFEncoder{
  constructor(w,h){this.width=w;this.height=h;this.frames=[];this.palette=[];}
  _cidx(r,g,b){
    for(let i=0;i<this.palette.length;i++){const c=this.palette[i];if(c[0]===r&&c[1]===g&&c[2]===b)return i;}
    if(this.palette.length<256){this.palette.push([r,g,b]);return this.palette.length-1;}
    let best=0,bestD=Infinity;
    for(let i=0;i<256;i++){const c=this.palette[i];const d=(c[0]-r)**2+(c[1]-g)**2+(c[2]-b)**2;if(d<bestD){bestD=d;best=i;}}
    return best;
  }
  addFrame(imageData,delay){
    const px=imageData.data,len=this.width*this.height,idx=new Uint8Array(len);
    for(let i=0;i<len;i++){const o=i*4;idx[i]=this._cidx(px[o],px[o+1],px[o+2]);}
    this.frames.push({idx,delay:delay||10});
  }
  render(){
    const o=[];
    const palSz=Math.max(4,1<<Math.ceil(Math.log2(Math.max(2,this.palette.length))));
    while(this.palette.length<palSz) this.palette.push([0,0,0]);
    const cBits=Math.ceil(Math.log2(palSz));
    /* Header */
    _wS(o,'GIF89a');
    _wL(o,this.width);_wL(o,this.height);
    o.push(0x80|((cBits-1)<<4)|(cBits-1),0,0);
    /* GCT */
    for(let i=0;i<palSz;i++) o.push(this.palette[i][0],this.palette[i][1],this.palette[i][2]);
    /* Netscape ext */
    o.push(0x21,0xFF,11);_wS(o,'NETSCAPE2.0');o.push(3,1);_wL(o,0);o.push(0);
    /* Frames */
    for(const f of this.frames){
      o.push(0x21,0xF9,4,0x04);_wL(o,f.delay);o.push(0,0);
      o.push(0x2C);_wL(o,0);_wL(o,0);_wL(o,this.width);_wL(o,this.height);o.push(0);
      this._lzw(o,f.idx,cBits);
    }
    o.push(0x3B);
    return new Uint8Array(o);
  }
  _lzw(out,idx,minCS){
    const MIN=Math.max(2,minCS);
    out.push(MIN);
    const CLEAR=1<<MIN,EOI=CLEAR+1;
    let codeSize=MIN+1,nextCode=EOI+1;
    const dict=new Map();
    function clearD(){dict.clear();for(let i=0;i<CLEAR;i++)dict.set(String(i),i);nextCode=EOI+1;codeSize=MIN+1;}
    let bitBuf=0,bitCnt=0;const blocks=[];let cur=[];
    function emit(code){
      bitBuf|=(code<<bitCnt);bitCnt+=codeSize;
      while(bitCnt>=8){cur.push(bitBuf&0xFF);bitBuf>>=8;bitCnt-=8;if(cur.length===255){blocks.push(cur);cur=[];}}
    }
    clearD();emit(CLEAR);
    if(idx.length){
      let s=String(idx[0]);
      for(let i=1;i<idx.length;i++){
        const n=idx[i],c=s+','+n;
        if(dict.has(c)){s=c;}
        else{emit(dict.get(s));if(nextCode<4096){dict.set(c,nextCode++);if(nextCode>(1<<codeSize)&&codeSize<12)codeSize++;}else{emit(CLEAR);clearD();}s=String(n);}
      }
      emit(dict.get(s));
    }
    emit(EOI);
    if(bitCnt>0)cur.push(bitBuf&0xFF);
    if(cur.length)blocks.push(cur);
    for(const b of blocks){out.push(b.length);for(const x of b)out.push(x);}
    out.push(0);
  }
}
function _wS(o,s){for(let i=0;i<s.length;i++)o.push(s.charCodeAt(i));}
function _wL(o,v){o.push(v&0xFF,(v>>8)&0xFF);}

// ═══════════════════════════════════════════════
//  EXPORT GIF
// ═══════════════════════════════════════════════
function renderBarsToCanvas(ctx,W,H,arr,hl){
  const isDk=document.documentElement.getAttribute('data-theme')==='dark';
  ctx.fillStyle=isDk?'#08090e':'#f5f6f8';
  ctx.fillRect(0,0,W,H);
  const maxV=Math.max(...arr,1);
  const pad=12;
  const aW=W-pad*2, aH=H-pad*2;
  const n=arr.length;
  const gap=n>50?1:n>30?2:3;
  const bw=Math.max(2,Math.floor((aW-gap*(n-1))/n));
  const colorMap={
    sorted:'#16a34a',found:'#16a34a',pivot:'#9333ea',heap:'#d97706',
    swapping:'#dc2626',comparing:isDk?'#d4911a':'#f5a623',current:'#0ea5e9',
    leftpart:isDk?'#2563eb':'#3b82f6',rightpart:isDk?'#ea580c':'#f97316',
    bucket:isDk?'#0d9488':'#14b8a6',eliminated:isDk?'#262a36':'#d5d8e0',
    window:'#0d9488',bestWindow:'#16a34a',leftptr:isDk?'#2563eb':'#3b82f6',rightptr:isDk?'#ea580c':'#f97316'
  };
  function barColor(i){
    if(hl.sorted&&hl.sorted.includes(i))return colorMap.sorted;
    if(hl.found&&hl.found.includes(i))return colorMap.found;
    if(hl.pivot!==undefined&&hl.pivot===i)return colorMap.pivot;
    if(hl.heap&&hl.heap.includes(i))return colorMap.heap;
    if(hl.bestWindow&&hl.bestWindow.includes(i))return colorMap.bestWindow;
    if(hl.window&&hl.window.includes(i))return colorMap.window;
    if(hl.swapping&&hl.swapping.includes(i))return colorMap.swapping;
    if(hl.leftptr!==undefined&&hl.leftptr===i)return colorMap.leftptr;
    if(hl.rightptr!==undefined&&hl.rightptr===i)return colorMap.rightptr;
    if(hl.comparing&&hl.comparing.includes(i))return colorMap.comparing;
    if(hl.current!==undefined&&hl.current===i)return colorMap.current;
    if(hl.leftpart&&hl.leftpart.includes(i))return colorMap.leftpart;
    if(hl.rightpart&&hl.rightpart.includes(i))return colorMap.rightpart;
    if((hl.left&&hl.left.includes(i))||(hl.leftpart&&hl.leftpart.includes(i)))return colorMap.leftpart;
    if((hl.right&&hl.right.includes(i))||(hl.rightpart&&hl.rightpart.includes(i)))return colorMap.rightpart;
    if(hl.bucket&&hl.bucket.includes(i))return colorMap.bucket;
    if(hl.eliminated&&hl.eliminated.includes(i))return colorMap.eliminated;
    return isDk?'#363a4a':'#a8adc0';
  }
  for(let i=0;i<n;i++){
    const barH=Math.max(2,Math.round((arr[i]/maxV)*aH));
    const x=pad+i*(bw+gap);
    const y=pad+aH-barH;
    ctx.fillStyle=barColor(i);
    ctx.fillRect(x,y,bw,barH);
  }
}

function renderGridToCanvas(ctx,W,H,arr,state){
  const isDk=document.documentElement.getAttribute('data-theme')==='dark';
  ctx.fillStyle=isDk?'#08090e':'#f5f6f8';
  ctx.fillRect(0,0,W,H);
  const n=arr.length;
  const cellW=Math.min(40,Math.floor((W-24)/n));
  const cellH=Math.min(40,cellW);
  const startX=(W-n*cellW)/2;
  const startY=(H-cellH)/2;
  const colorMap={
    found:isDk?'#16a34a':'#22c55e', current:isDk?'#0ea5e9':'#38bdf8',
    mid:isDk?'#9333ea':'#a855f7', left:isDk?'#2563eb':'#3b82f6',
    right:isDk?'#ea580c':'#f97316', eliminated:isDk?'#262a36':'#d5d8e0'
  };
  ctx.font='bold 11px JetBrains Mono,monospace';
  ctx.textAlign='center';ctx.textBaseline='middle';
  for(let i=0;i<n;i++){
    const x=startX+i*cellW, y=startY;
    const elim=state.eliminated&&state.eliminated.includes(i);
    let bg=isDk?'#151720':'#ffffff',fg=isDk?'#e6e8f0':'#111318';
    if(state.found===i){bg=colorMap.found;fg='#fff';}
    else if(elim){bg=colorMap.eliminated;fg=isDk?'#565c72':'#6b7086';}
    else if(state.current===i){bg=colorMap.current;fg='#fff';}
    else if(state.mid===i){bg=colorMap.mid;fg='#fff';}
    else if(i===state.left){bg=colorMap.left;fg='#fff';}
    else if(i===state.right){bg=colorMap.right;fg='#fff';}
    ctx.fillStyle=bg;
    ctx.fillRect(x+1,y+1,cellW-2,cellH-2);
    ctx.fillStyle=fg;
    ctx.fillText(String(arr[i]),x+cellW/2,y+cellH/2);
  }
}

async function exportGIF(){
  if(PATHFIND_ALGOS.has(algo)){showShareToast('GIF export not available for pathfinding');return;}
  /* Build steps if not yet run */
  const hadSteps=steps.length>0;
  if(!hadSteps){
    const savedArr=[...arr];
    if(!buildSteps()){return;}
    if(!hadSteps) arr=savedArr;
  }
  if(!steps.length){showShareToast('No steps to export');return;}

  $('exportOverlay').classList.remove('hidden');
  $('exportProgressBar').style.width='0%';
  $('exportStatus').textContent='Rendering frames…';
  await new Promise(r=>setTimeout(r,50));

  try {
    const W=480, H=270;
    const offCanvas=document.createElement('canvas');
    offCanvas.width=W; offCanvas.height=H;
    const ctx=offCanvas.getContext('2d');

    const enc=new GIFEncoder(W,H);
    const total=steps.length;
    const maxFrames=250;
    const skip=total>maxFrames?Math.ceil(total/maxFrames):1;
    const delay=Math.max(4,Math.round(12*skip));

    for(let i=0;i<total;i+=skip){
      const s=steps[i];
      if(s.type==='grid') renderGridToCanvas(ctx,W,H,s.arr,s.state||{});
      else                renderBarsToCanvas(ctx,W,H,s.arr,s.hl||{});
      enc.addFrame(ctx.getImageData(0,0,W,H),delay);
      if(i%8===0){
        $('exportProgressBar').style.width=Math.round(i/total*80)+'%';
        await new Promise(r=>setTimeout(r,0));
      }
    }
    /* Last frame with longer hold */
    const last=steps[total-1];
    if(last.type==='grid') renderGridToCanvas(ctx,W,H,last.arr,last.state||{});
    else                   renderBarsToCanvas(ctx,W,H,last.arr,last.hl||{});
    enc.addFrame(ctx.getImageData(0,0,W,H),200);

    $('exportProgressBar').style.width='85%';
    $('exportStatus').textContent='Encoding GIF…';
    await new Promise(r=>setTimeout(r,0));

    const gif=enc.render();
    $('exportProgressBar').style.width='100%';
    $('exportStatus').textContent='Done!';
    await new Promise(r=>setTimeout(r,300));

    const blob=new Blob([gif],{type:'image/gif'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download=`algosight-${algo}.gif`;
    document.body.appendChild(a);a.click();a.remove();
    URL.revokeObjectURL(url);
  } catch(e) {
    showShareToast('GIF export failed');
  }
  $('exportOverlay').classList.add('hidden');
}

$('exportGifBtn').addEventListener('click',exportGIF);

// Load state from URL params on page load
(function loadFromURL(){
  const p=new URLSearchParams(window.location.search);
  if(!p.has('algo')) return;
  const a=p.get('algo');
  if(!META[a]) return;
  showVizArea();
  handleAlgoChange(a);
  if(p.has('size')){
    const s=Math.max(5,Math.min(60,parseInt(p.get('size'))||10));
    sizeSlider.value=s; sizeVal.textContent=s;
  }
  if(p.has('speed')){
    const sp=String(Math.max(1,Math.min(5,parseInt(p.get('speed'))||3)));
    speedSlider.value=sp; speedVal.textContent=SPEED_LABELS[sp]||'Medium';
  }
  if(p.has('arr')){
    const vals=p.get('arr').split(',').map(Number).filter(n=>!isNaN(n)&&n>0&&n<=999);
    if(vals.length>=2&&vals.length<=60){arr=vals; renderBars(arr,{});}
  }
  if(p.has('target')){
    const t=parseInt(p.get('target'));
    if(!isNaN(t)&&t>=-9999&&t<=9999) $('targetInput').value=t;
  }
  if(p.has('targetSum')){
    const t=parseInt(p.get('targetSum'));
    if(!isNaN(t)&&t>=-9999&&t<=9999) $('targetSumInput').value=t;
  }
  if(p.has('window')){
    const w=Math.max(2,Math.min(8,parseInt(p.get('window'))||3));
    windowSlider.value=w; windowSizeVal.textContent=w;
  }
})();

// ═══════════════════════════════════════════════
//  RACE MODE
// ═══════════════════════════════════════════════
const RACE_GENS={bubble:bubbleGen,selection:selectionGen,insertion:insertionGen,
  merge:mergeGen,quick:quickGen,counting:countingGen,heap:heapGen,radix:radixGen,
  shell:shellGen,cocktail:cocktailGen,comb:combGen};
const RACE_SEARCH_GENS={linear:linearGen,binary:binaryGen,jump:jumpGen};

let raceCat='sort';
function raceSetCat(cat){
  raceCat=cat;
  $('raceCatSort').classList.toggle('active',cat==='sort');
  $('raceCatSearch').classList.toggle('active',cat==='search');
  $('raceCatPathfind').classList.toggle('active',cat==='pathfind');
  $('raceSortConfig').classList.toggle('hidden',cat!=='sort');
  $('raceSearchConfig').classList.toggle('hidden',cat!=='search');
  $('racePathfindConfig').classList.toggle('hidden',cat!=='pathfind');
  $('raceCatToggle').classList.remove('search-active','pathfind-active');
  if(cat==='search')$('raceCatToggle').classList.add('search-active');
  if(cat==='pathfind')$('raceCatToggle').classList.add('pathfind-active');
}
$('raceCatSort').addEventListener('click',()=>raceSetCat('sort'));
$('raceCatSearch').addEventListener('click',()=>raceSetCat('search'));
$('raceCatPathfind').addEventListener('click',()=>raceSetCat('pathfind'));

$('raceBtn').addEventListener('click',()=>{
  $('raceModal').classList.remove('hidden');
  $('raceArenas').classList.add('hidden');
  $('raceResult').classList.add('hidden');
  $('raceGo').disabled=false;
  $('raceProgressA').style.width='0%';
  $('raceProgressB').style.width='0%';
  $('raceStatusA').textContent='Ready';
  $('raceStatusB').textContent='Ready';
  $('raceStatusA').className='race-lane-status';
  $('raceStatusB').className='race-lane-status';
});
$('raceClose').addEventListener('click',()=>{
  raceRunning=false;
  $('raceModal').classList.add('hidden');
});

let raceRunning=false;

function renderRaceBars(canvas,a,hl){
  const maxV=Math.max(...a,1);
  const H=Math.max(40,(canvas.clientHeight||200)-48);
  const W=Math.max(40,(canvas.clientWidth||300)-32);
  const n=a.length;
  const gap=n>45?1:n>30?2:3;
  const bw=Math.max(3,Math.floor((W-gap*(n-1))/n));
  canvas.innerHTML='';
  canvas.style.alignItems='flex-end';
  canvas.style.gap=gap+'px';
  a.forEach((v,i)=>{
    const bar=document.createElement('div');
    bar.className='bar';
    bar.style.width=bw+'px';
    bar.style.height=Math.max(2,Math.round((v/maxV)*H))+'px';
    if(hl.sorted&&hl.sorted.includes(i))         bar.classList.add('st-sorted');
    else if(hl.swapping&&hl.swapping.includes(i)) bar.classList.add('st-swapping');
    else if(hl.comparing&&hl.comparing.includes(i))bar.classList.add('st-comparing');
    else if(hl.bucket&&hl.bucket.includes(i))     bar.classList.add('st-bucket');
    else                                          bar.classList.add('st-default');
    canvas.appendChild(bar);
  });
}

function renderRaceGrid(canvas,a,state){
  canvas.innerHTML='';
  canvas.style.alignItems='center';
  canvas.style.gap='0';
  const grid=document.createElement('div');
  grid.className='bin-grid';
  a.forEach((v,i)=>{
    const cell=document.createElement('div');
    cell.className='bin-cell';
    cell.textContent=v;
    const idx=document.createElement('div');
    idx.className='cell-idx'; idx.textContent=i;
    cell.appendChild(idx);
    const elim=state.eliminated&&state.eliminated.includes(i);
    if(state.found===i)        cell.classList.add('bc-found');
    else if(elim)              cell.classList.add('bc-elim');
    else if(state.current===i) cell.classList.add('bc-current');
    else if(state.mid===i)     cell.classList.add('bc-mid');
    else if(i===state.left)    cell.classList.add('bc-left');
    else if(i===state.right)   cell.classList.add('bc-right');
    grid.appendChild(cell);
  });
  canvas.appendChild(grid);
}

/* ── Standalone pathfinding on arbitrary grids for race mode ── */
function racePfNeighbors(r,c,rows,cols){
  const out=[];
  if(r>0)out.push([r-1,c]); if(r<rows-1)out.push([r+1,c]);
  if(c>0)out.push([r,c-1]); if(c<cols-1)out.push([r,c+1]);
  return out;
}
function racePfTrace(prev,start,end){
  const path=[];
  let cur=[end[0],end[1]];
  if(!prev[cur[0]][cur[1]]&&!(cur[0]===start[0]&&cur[1]===start[1])) return [];
  while(cur){path.unshift(cur);if(cur[0]===start[0]&&cur[1]===start[1]) break;cur=prev[cur[0]][cur[1]];}
  return path;
}
function racePfRun(algoKey,grid,rows,cols,start,end){
  const visited=Array.from({length:rows},()=>Array(cols).fill(false));
  const prev=Array.from({length:rows},()=>Array(cols).fill(null));
  const order=[];
  if(algoKey==='bfs'||algoKey==='dfs'){
    const coll=algoKey==='bfs'?[]:[];
    const push=algoKey==='bfs'?(v)=>coll.push(v):(v)=>coll.push(v);
    const take=algoKey==='bfs'?()=>coll.shift():()=>coll.pop();
    push([start[0],start[1]]);visited[start[0]][start[1]]=true;
    while(coll.length){const[r,c]=take();order.push([r,c]);if(r===end[0]&&c===end[1])break;for(const[nr,nc]of racePfNeighbors(r,c,rows,cols)){if(!visited[nr][nc]&&!grid[nr][nc]){visited[nr][nc]=true;prev[nr][nc]=[r,c];push([nr,nc]);}}}
  } else {
    const dist=Array.from({length:rows},()=>Array(cols).fill(Infinity));
    const g=dist.map(r=>[...r]);
    const h=algoKey==='astar'?(r,c)=>Math.abs(r-end[0])+Math.abs(c-end[1]):()=>0;
    g[start[0]][start[1]]=0;
    const pq=[[h(start[0],start[1]),start[0],start[1]]];
    while(pq.length){pq.sort((a,b)=>a[0]-b[0]);const[,r,c]=pq.shift();if(visited[r][c])continue;visited[r][c]=true;order.push([r,c]);if(r===end[0]&&c===end[1])break;for(const[nr,nc]of racePfNeighbors(r,c,rows,cols)){if(!visited[nr][nc]&&!grid[nr][nc]){const ng=g[r][c]+1;if(ng<g[nr][nc]){g[nr][nc]=ng;prev[nr][nc]=[r,c];pq.push([ng+h(nr,nc),nr,nc]);}}}}
  }
  return {order,path:racePfTrace(prev,start,end)};
}
function racePfGenMaze(rows,cols,start,end){
  /* boolean grid: true=wall */
  const g=Array.from({length:rows},()=>Array(cols).fill(false));
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){if(r%2===0||c%2===0) g[r][c]=true;}
  g[start[0]][start[1]]=false; g[end[0]][end[1]]=false;
  const vis=Array.from({length:rows},()=>Array(cols).fill(false));
  const stk=[[1,1]];vis[1][1]=true;g[1][1]=false;
  const dirs=[[0,2],[2,0],[0,-2],[-2,0]];
  while(stk.length){const[cr,cc]=stk[stk.length-1];const nb=[];for(const[dr,dc]of dirs){const nr=cr+dr,nc=cc+dc;if(nr>0&&nr<rows-1&&nc>0&&nc<cols-1&&!vis[nr][nc])nb.push([nr,nc,cr+dr/2,cc+dc/2]);}if(!nb.length){stk.pop();continue;}const[nr,nc,wr,wc]=nb[Math.floor(Math.random()*nb.length)];vis[nr][nc]=true;g[nr][nc]=false;g[wr][wc]=false;stk.push([nr,nc]);}
  g[start[0]][start[1]]=false;g[end[0]][end[1]]=false;
  return g;
}
function renderRacePfGrid(canvas,grid,rows,cols,start,end,visitedSet,pathSet){
  canvas.innerHTML='';
  canvas.style.alignItems='stretch';canvas.style.gap='0';canvas.style.justifyContent='stretch';
  const wrap=document.createElement('div');
  wrap.className='race-pf-grid';
  wrap.style.gridTemplateColumns=`repeat(${cols},1fr)`;
  wrap.style.gridTemplateRows=`repeat(${rows},1fr)`;
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
    const cell=document.createElement('div');cell.className='race-pf-cell';
    if(r===start[0]&&c===start[1]) cell.classList.add('rpf-start');
    else if(r===end[0]&&c===end[1]) cell.classList.add('rpf-end');
    else if(pathSet&&pathSet.has(r+','+c)) cell.classList.add('rpf-path');
    else if(visitedSet&&visitedSet.has(r+','+c)) cell.classList.add('rpf-visited');
    else if(grid[r][c]) cell.classList.add('rpf-wall');
    wrap.appendChild(cell);
  }
  canvas.appendChild(wrap);
}

$('raceGo').addEventListener('click',async()=>{
  let algoA, algoB, stepsA, stepsB, isSearch=false, isPathfind=false;

  if(raceCat==='search'){
    algoA=$('raceSearchA').value; algoB=$('raceSearchB').value;
    if(!RACE_SEARCH_GENS[algoA]||!RACE_SEARCH_GENS[algoB]) return;
    isSearch=true;
    const raceArr=randArr(16).sort((a,b)=>a-b);
    const target=raceArr[Math.floor(Math.random()*raceArr.length)];
    stepsA=[...RACE_SEARCH_GENS[algoA]([...raceArr],target)];
    stepsB=[...RACE_SEARCH_GENS[algoB]([...raceArr],target)];
  } else if(raceCat==='pathfind'){
    algoA=$('racePfA').value; algoB=$('racePfB').value;
    isPathfind=true;
  } else {
    algoA=$('raceAlgoA').value; algoB=$('raceAlgoB').value;
    if(!RACE_GENS[algoA]||!RACE_GENS[algoB]) return;
    const raceArr=randArr(+sizeSlider.value);
    stepsA=[...RACE_GENS[algoA]([...raceArr])];
    stepsB=[...RACE_GENS[algoB]([...raceArr])];
  }

  $('raceGo').disabled=true;
  $('raceArenas').classList.remove('hidden');
  $('raceResult').classList.add('hidden');
  $('raceLabelA').textContent=META[algoA].title;
  $('raceLabelB').textContent=META[algoB].title;
  $('raceStatusA').textContent='Racing';
  $('raceStatusB').textContent='Racing';
  $('raceStatusA').className='race-lane-status';
  $('raceStatusB').className='race-lane-status';
  $('raceProgressA').style.width='0%';
  $('raceProgressB').style.width='0%';

  if(isPathfind){
    /* pathfinding race: run both on same maze, animate visited side by side */
    const R=15,C=25,st=[7,1],en=[7,23];
    const maze=racePfGenMaze(R,C,st,en);
    const resA=racePfRun(algoA,maze,R,C,st,en);
    const resB=racePfRun(algoB,maze,R,C,st,en);
    const totalA=resA.order.length, totalB=resB.order.length;
    const totalMax=Math.max(totalA,totalB);
    const visA=new Set(), visB=new Set();
    const pathA=new Set(resA.path.map(p=>p[0]+','+p[1]));
    const pathB=new Set(resB.path.map(p=>p[0]+','+p[1]));
    let idxA=0,idxB=0;
    raceRunning=true;
    const speed=SPEEDS[speedSlider.value]||160;
    let finishedA=false,finishedB=false;

    while(raceRunning&&(idxA<totalA||idxB<totalB)){
      if(idxA<totalA){
        const[r,c]=resA.order[idxA++];visA.add(r+','+c);
        renderRacePfGrid($('raceCanvasA'),maze,R,C,st,en,visA,idxA>=totalA?pathA:null);
        $('raceStatA').textContent=idxA+' / '+totalA;
        $('raceProgressA').style.width=Math.round((idxA/totalA)*100)+'%';
        if(idxA>=totalA&&!finishedA){finishedA=true;$('raceStatusA').textContent='Done';$('raceStatusA').classList.add('done-a');}
      }
      if(idxB<totalB){
        const[r,c]=resB.order[idxB++];visB.add(r+','+c);
        renderRacePfGrid($('raceCanvasB'),maze,R,C,st,en,visB,idxB>=totalB?pathB:null);
        $('raceStatB').textContent=idxB+' / '+totalB;
        $('raceProgressB').style.width=Math.round((idxB/totalB)*100)+'%';
        if(idxB>=totalB&&!finishedB){finishedB=true;$('raceStatusB').textContent='Done';$('raceStatusB').classList.add('done-b');}
      }
      await sleep(Math.max(4,speed/8));
    }

    if(raceRunning){
      const resEl=$('raceResult');
      resEl.classList.remove('hidden');
      const trophy='<span class="race-result-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></span>';
      const diff=totalA-totalB;
      const pA=resA.path.length,pB=resB.path.length;
      if(diff<0){
        resEl.innerHTML=`${trophy}<span><strong>${META[algoA].title}</strong> wins! &nbsp;${totalA} vs ${totalB} cells explored &nbsp;· Path: ${pA} vs ${pB}</span>`;
        $('raceStatusA').textContent='Winner';$('raceStatusA').className='race-lane-status winner';
      } else if(diff>0){
        resEl.innerHTML=`${trophy}<span><strong>${META[algoB].title}</strong> wins! &nbsp;${totalB} vs ${totalA} cells explored &nbsp;· Path: ${pB} vs ${pA}</span>`;
        $('raceStatusB').textContent='Winner';$('raceStatusB').className='race-lane-status winner';
      } else {
        resEl.innerHTML=`${trophy}<span>Tie! Both explored <strong>${totalA}</strong> cells &nbsp;· Path: ${pA} vs ${pB}</span>`;
      }
    }
    raceRunning=false;
    $('raceGo').disabled=false;
    return;
  }

  const totalMax=Math.max(stepsA.length,stepsB.length);
  let idxA=0, idxB=0;
  raceRunning=true;
  const speed=SPEEDS[speedSlider.value]||160;
  let finishedA=false, finishedB=false;

  while(raceRunning&&(idxA<stepsA.length||idxB<stepsB.length)){
    if(idxA<stepsA.length){
      const s=stepsA[idxA++];
      if(isSearch) renderRaceGrid($('raceCanvasA'),s.arr,s.state||{});
      else         renderRaceBars($('raceCanvasA'),s.arr,s.hl||{});
      $('raceStatA').textContent=idxA+' / '+stepsA.length;
      $('raceProgressA').style.width=Math.round((idxA/stepsA.length)*100)+'%';
      if(idxA>=stepsA.length&&!finishedA){
        finishedA=true;
        $('raceStatusA').textContent='Done';
        $('raceStatusA').classList.add('done-a');
      }
    }
    if(idxB<stepsB.length){
      const s=stepsB[idxB++];
      if(isSearch) renderRaceGrid($('raceCanvasB'),s.arr,s.state||{});
      else         renderRaceBars($('raceCanvasB'),s.arr,s.hl||{});
      $('raceStatB').textContent=idxB+' / '+stepsB.length;
      $('raceProgressB').style.width=Math.round((idxB/stepsB.length)*100)+'%';
      if(idxB>=stepsB.length&&!finishedB){
        finishedB=true;
        $('raceStatusB').textContent='Done';
        $('raceStatusB').classList.add('done-b');
      }
    }
    await sleep(Math.max(4,speed/2));
  }

  if(raceRunning){
    const resEl=$('raceResult');
    resEl.classList.remove('hidden');
    const trophy='<span class="race-result-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></span>';
    const diff=stepsA.length-stepsB.length;
    if(diff<0){
      resEl.innerHTML=`${trophy}<span><strong>${META[algoA].title}</strong> wins! &nbsp;${stepsA.length} vs ${stepsB.length} steps &nbsp;(${Math.abs(diff)} fewer)</span>`;
      $('raceStatusA').textContent='Winner';
      $('raceStatusA').className='race-lane-status winner';
    } else if(diff>0){
      resEl.innerHTML=`${trophy}<span><strong>${META[algoB].title}</strong> wins! &nbsp;${stepsB.length} vs ${stepsA.length} steps &nbsp;(${Math.abs(diff)} fewer)</span>`;
      $('raceStatusB').textContent='Winner';
      $('raceStatusB').className='race-lane-status winner';
    } else {
      resEl.innerHTML=`${trophy}<span>It's a tie! Both finished in <strong>${stepsA.length}</strong> steps</span>`;
    }
  }
  raceRunning=false;
  $('raceGo').disabled=false;
});

// ═══════════════════════════════════════════════
//  PATHFINDING ENGINE
// ═══════════════════════════════════════════════

function pfBuildGrid(){
  const grid=$('pfGrid');
  grid.innerHTML='';
  grid.style.gridTemplateColumns=`repeat(${PF_COLS},26px)`;
  pfGrid=[];
  for(let r=0;r<PF_ROWS;r++){
    const row=[];
    for(let c=0;c<PF_COLS;c++){
      const cell=document.createElement('div');
      cell.className='pf-cell';
      cell.dataset.r=r; cell.dataset.c=c;
      if(r===pfStart[0]&&c===pfStart[1]) cell.classList.add('pf-start');
      if(r===pfEnd[0]&&c===pfEnd[1]) cell.classList.add('pf-end');
      grid.appendChild(cell);
      row.push({r,c,wall:false,weight:1,el:cell});
    }
    pfGrid.push(row);
  }
}

/* mouse events for drawing (attached once) */
{
  const grid=$('pfGrid');
  grid.addEventListener('mousedown',pfOnMouseDown);
  grid.addEventListener('mousemove',pfOnMouseMove);
  window.addEventListener('mouseup',()=>{pfMouseDown=false;pfDragging=null;});
  grid.addEventListener('touchstart',pfOnTouchStart,{passive:false});
  grid.addEventListener('touchmove',pfOnTouchMove,{passive:false});
  grid.addEventListener('touchend',()=>{pfMouseDown=false;pfDragging=null;});
}

function pfCellFromEvent(e){
  const t=e.target.closest('.pf-cell');
  if(!t) return null;
  return {r:+t.dataset.r,c:+t.dataset.c,el:t};
}

function pfOnMouseDown(e){
  e.preventDefault();
  const c=pfCellFromEvent(e);
  if(!c||pfRunning) return;
  pfMouseDown=true;
  if(c.el.classList.contains('pf-start')){pfDragging='start';return;}
  if(c.el.classList.contains('pf-end')){pfDragging='end';return;}
  pfPaint(c);
}

function pfOnMouseMove(e){
  if(!pfMouseDown||pfRunning) return;
  const c=pfCellFromEvent(e);
  if(!c) return;
  if(pfDragging==='start'||pfDragging==='end'){pfMoveNode(c);return;}
  pfPaint(c);
}

function pfOnTouchStart(e){
  e.preventDefault();
  const touch=e.touches[0];
  const el=document.elementFromPoint(touch.clientX,touch.clientY);
  if(!el||!el.classList.contains('pf-cell')) return;
  pfMouseDown=true;
  const c={r:+el.dataset.r,c:+el.dataset.c,el};
  if(el.classList.contains('pf-start')){pfDragging='start';return;}
  if(el.classList.contains('pf-end')){pfDragging='end';return;}
  pfPaint(c);
}

function pfOnTouchMove(e){
  e.preventDefault();
  if(!pfMouseDown||pfRunning) return;
  const touch=e.touches[0];
  const el=document.elementFromPoint(touch.clientX,touch.clientY);
  if(!el||!el.classList.contains('pf-cell')) return;
  const c={r:+el.dataset.r,c:+el.dataset.c,el};
  if(pfDragging==='start'||pfDragging==='end'){pfMoveNode(c);return;}
  pfPaint(c);
}

function pfPaint(c){
  const node=pfGrid[c.r][c.c];
  if(c.r===pfStart[0]&&c.c===pfStart[1]) return;
  if(c.r===pfEnd[0]&&c.c===pfEnd[1]) return;
  if(pfTool==='wall'){
    node.wall=true; node.weight=1;
    c.el.className='pf-cell pf-wall';
  } else if(pfTool==='erase'){
    node.wall=false; node.weight=1;
    c.el.className='pf-cell';
  } else if(pfTool==='weight'){
    node.wall=false; node.weight=5;
    c.el.className='pf-cell pf-weight';
  }
}

function pfMoveNode(c){
  if(c.r===pfStart[0]&&c.c===pfStart[1]&&pfDragging==='end') return;
  if(c.r===pfEnd[0]&&c.c===pfEnd[1]&&pfDragging==='start') return;
  if(pfGrid[c.r][c.c].wall) return;
  if(pfDragging==='start'){
    pfGrid[pfStart[0]][pfStart[1]].el.classList.remove('pf-start');
    pfStart=[c.r,c.c];
    c.el.classList.add('pf-start');
  } else {
    pfGrid[pfEnd[0]][pfEnd[1]].el.classList.remove('pf-end');
    pfEnd=[c.r,c.c];
    c.el.classList.add('pf-end');
  }
}

/* tool switching */
$('pfToolWall').addEventListener('click',()=>pfSetTool('wall'));
$('pfToolErase').addEventListener('click',()=>pfSetTool('erase'));
$('pfToolWeight').addEventListener('click',()=>pfSetTool('weight'));

function pfSetTool(t){
  pfTool=t;
  document.querySelectorAll('.pf-tool').forEach(b=>b.classList.remove('active'));
  if(t==='wall') $('pfToolWall').classList.add('active');
  else if(t==='erase') $('pfToolErase').classList.add('active');
  else $('pfToolWeight').classList.add('active');
}

/* clear functions */
function pfClearPath(){
  for(let r=0;r<PF_ROWS;r++)
    for(let c=0;c<PF_COLS;c++){
      const el=pfGrid[r]?.[c]?.el;
      if(el) el.classList.remove('pf-visited','pf-path','pf-current');
    }
  $('pfStepInfo').textContent='— / —';
}

function pfClearWallsFn(){
  for(let r=0;r<PF_ROWS;r++)
    for(let c=0;c<PF_COLS;c++){
      pfGrid[r][c].wall=false;
      pfGrid[r][c].weight=1;
      pfGrid[r][c].el.className='pf-cell';
    }
  pfGrid[pfStart[0]][pfStart[1]].el.classList.add('pf-start');
  pfGrid[pfEnd[0]][pfEnd[1]].el.classList.add('pf-end');
}

function pfFullReset(){
  pfRunning=false;pfPaused=false;
  pfStart=[9,3];pfEnd=[9,31];
  pfBuildGrid();
  $('pfRunBtn').disabled=false;
  $('pfPauseBtn').disabled=true;
  $('pfPauseBtn').textContent='Pause';
  $('pfStatusText').textContent='Draw walls and press Run';
  $('pfStatusDot').className='status-dot';
  $('pfStepInfo').textContent='— / —';
}

$('pfClearWalls').addEventListener('click',()=>{if(!pfRunning){pfClearWallsFn();pfClearPath();}});
$('pfClearPath').addEventListener('click',()=>{if(!pfRunning) pfClearPath();});
$('pfResetBtn').addEventListener('click',pfFullReset);

/* maze generation (recursive division) */
$('pfMaze').addEventListener('click',()=>{
  if(pfRunning) return;
  pfClearWallsFn();pfClearPath();
  /* fill all walls then carve */
  for(let r=0;r<PF_ROWS;r++)
    for(let c=0;c<PF_COLS;c++){
      if((r===pfStart[0]&&c===pfStart[1])||(r===pfEnd[0]&&c===pfEnd[1])) continue;
      if(r%2===0||c%2===0){
        pfGrid[r][c].wall=true;
        pfGrid[r][c].el.classList.add('pf-wall');
      }
    }
  /* carve passages via randomized DFS on odd cells */
  const visited=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(false));
  const stack=[[1,1]]; visited[1][1]=true;
  pfGrid[1][1].wall=false;pfGrid[1][1].el.classList.remove('pf-wall');
  const dirs=[[0,2],[2,0],[0,-2],[-2,0]];
  while(stack.length){
    const [cr,cc]=stack[stack.length-1];
    const neighbors=[];
    for(const [dr,dc] of dirs){
      const nr=cr+dr,nc=cc+dc;
      if(nr>0&&nr<PF_ROWS-1&&nc>0&&nc<PF_COLS-1&&!visited[nr][nc]) neighbors.push([nr,nc,cr+dr/2,cc+dc/2]);
    }
    if(!neighbors.length){stack.pop();continue;}
    const [nr,nc,wr,wc]=neighbors[Math.floor(Math.random()*neighbors.length)];
    visited[nr][nc]=true;
    pfGrid[nr][nc].wall=false;pfGrid[nr][nc].el.classList.remove('pf-wall');
    pfGrid[wr][wc].wall=false;pfGrid[wr][wc].el.classList.remove('pf-wall');
    stack.push([nr,nc]);
  }
  /* ensure start and end are clear */
  pfGrid[pfStart[0]][pfStart[1]].wall=false;
  pfGrid[pfStart[0]][pfStart[1]].el.className='pf-cell pf-start';
  pfGrid[pfEnd[0]][pfEnd[1]].wall=false;
  pfGrid[pfEnd[0]][pfEnd[1]].el.className='pf-cell pf-end';
});

/* pathfinding algorithms — return array of {visited:[r,c], path:[[r,c],...]} steps */
function pfNeighbors(r,c){
  const out=[];
  if(r>0)out.push([r-1,c]);
  if(r<PF_ROWS-1)out.push([r+1,c]);
  if(c>0)out.push([r,c-1]);
  if(c<PF_COLS-1)out.push([r,c+1]);
  return out;
}

function pfBFS(){
  const visited=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(false));
  const prev=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(null));
  const order=[];
  const q=[[pfStart[0],pfStart[1]]];
  visited[pfStart[0]][pfStart[1]]=true;
  while(q.length){
    const [r,c]=q.shift();
    order.push([r,c]);
    if(r===pfEnd[0]&&c===pfEnd[1]) break;
    for(const [nr,nc] of pfNeighbors(r,c)){
      if(!visited[nr][nc]&&!pfGrid[nr][nc].wall){
        visited[nr][nc]=true;
        prev[nr][nc]=[r,c];
        q.push([nr,nc]);
      }
    }
  }
  return {order,path:pfTracePath(prev)};
}

function pfDFS(){
  const visited=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(false));
  const prev=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(null));
  const order=[];
  const stack=[[pfStart[0],pfStart[1]]];
  visited[pfStart[0]][pfStart[1]]=true;
  while(stack.length){
    const [r,c]=stack.pop();
    order.push([r,c]);
    if(r===pfEnd[0]&&c===pfEnd[1]) break;
    for(const [nr,nc] of pfNeighbors(r,c)){
      if(!visited[nr][nc]&&!pfGrid[nr][nc].wall){
        visited[nr][nc]=true;
        prev[nr][nc]=[r,c];
        stack.push([nr,nc]);
      }
    }
  }
  return {order,path:pfTracePath(prev)};
}

function pfDijkstra(){
  const dist=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(Infinity));
  const prev=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(null));
  const visited=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(false));
  const order=[];
  dist[pfStart[0]][pfStart[1]]=0;
  /* simple priority queue using sorted array (fine for small grids) */
  const pq=[[0,pfStart[0],pfStart[1]]];
  while(pq.length){
    pq.sort((a,b)=>a[0]-b[0]);
    const [d,r,c]=pq.shift();
    if(visited[r][c]) continue;
    visited[r][c]=true;
    order.push([r,c]);
    if(r===pfEnd[0]&&c===pfEnd[1]) break;
    for(const [nr,nc] of pfNeighbors(r,c)){
      if(!visited[nr][nc]&&!pfGrid[nr][nc].wall){
        const nd=d+pfGrid[nr][nc].weight;
        if(nd<dist[nr][nc]){
          dist[nr][nc]=nd;
          prev[nr][nc]=[r,c];
          pq.push([nd,nr,nc]);
        }
      }
    }
  }
  return {order,path:pfTracePath(prev)};
}

function pfAStar(){
  const h=(r,c)=>Math.abs(r-pfEnd[0])+Math.abs(c-pfEnd[1]);
  const g=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(Infinity));
  const prev=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(null));
  const visited=Array.from({length:PF_ROWS},()=>Array(PF_COLS).fill(false));
  const order=[];
  g[pfStart[0]][pfStart[1]]=0;
  const pq=[[h(pfStart[0],pfStart[1]),pfStart[0],pfStart[1]]];
  while(pq.length){
    pq.sort((a,b)=>a[0]-b[0]);
    const [,r,c]=pq.shift();
    if(visited[r][c]) continue;
    visited[r][c]=true;
    order.push([r,c]);
    if(r===pfEnd[0]&&c===pfEnd[1]) break;
    for(const [nr,nc] of pfNeighbors(r,c)){
      if(!visited[nr][nc]&&!pfGrid[nr][nc].wall){
        const ng=g[r][c]+pfGrid[nr][nc].weight;
        if(ng<g[nr][nc]){
          g[nr][nc]=ng;
          prev[nr][nc]=[r,c];
          pq.push([ng+h(nr,nc),nr,nc]);
        }
      }
    }
  }
  return {order,path:pfTracePath(prev)};
}

function pfTracePath(prev){
  const path=[];
  let cur=[pfEnd[0],pfEnd[1]];
  if(!prev[cur[0]][cur[1]]&&!(cur[0]===pfStart[0]&&cur[1]===pfStart[1])) return [];
  while(cur){
    path.unshift(cur);
    if(cur[0]===pfStart[0]&&cur[1]===pfStart[1]) break;
    cur=prev[cur[0]][cur[1]];
  }
  return path;
}

/* run pathfinding */
async function pfRun(){
  if(pfRunning) return;
  pfClearPath();
  pfRunning=true;pfPaused=false;
  $('pfRunBtn').disabled=true;
  $('pfPauseBtn').disabled=false;
  $('pfPauseBtn').textContent='Pause';
  $('pfStatusText').textContent='Searching…';
  $('pfStatusDot').className='status-dot running';

  const algos={bfs:pfBFS,dfs:pfDFS,dijkstra:pfDijkstra,astar:pfAStar};
  const {order,path}=algos[pfAlgo]();
  const total=order.length+path.length;

  /* animate visited cells */
  for(let i=0;i<order.length;i++){
    if(!pfRunning){$('pfStatusText').textContent='Stopped';$('pfStatusDot').className='status-dot';return;}
    while(pfPaused){await sleep(50);if(!pfRunning) return;}
    const [r,c]=order[i];
    if(!(r===pfStart[0]&&c===pfStart[1])&&!(r===pfEnd[0]&&c===pfEnd[1]))
      pfGrid[r][c].el.classList.add('pf-visited');
    $('pfStepInfo').textContent=`${i+1} / ${total}`;
    playTone(220+((r*PF_COLS+c)/(PF_ROWS*PF_COLS))*660,'sine',50,.06);
    await sleep(SPEEDS[speedSlider.value]/8);
  }

  /* animate path */
  if(path.length){
    $('pfStatusText').textContent='Drawing path…';
    for(let i=0;i<path.length;i++){
      if(!pfRunning) return;
      while(pfPaused){await sleep(50);if(!pfRunning) return;}
      const [r,c]=path[i];
      if(!(r===pfStart[0]&&c===pfStart[1])&&!(r===pfEnd[0]&&c===pfEnd[1]))
        pfGrid[r][c].el.classList.add('pf-path');
      $('pfStepInfo').textContent=`${order.length+i+1} / ${total}`;
      playTone(300+(i/Math.max(path.length-1,1))*580,'triangle',90,.1);
      await sleep(SPEEDS[speedSlider.value]/4);
    }
    $('pfStatusText').textContent=`Done — path length: ${path.length}`;
  } else {
    $('pfStatusText').textContent='No path found!';
  }
  $('pfStatusDot').className='status-dot done';
  pfRunning=false;
  $('pfRunBtn').disabled=false;
  $('pfPauseBtn').disabled=true;
}

$('pfRunBtn').addEventListener('click',pfRun);
$('pfPauseBtn').addEventListener('click',()=>{
  if(!pfRunning) return;
  pfPaused=!pfPaused;
  $('pfPauseBtn').textContent=pfPaused?'Resume':'Pause';
  $('pfStatusText').textContent=pfPaused?'Paused':'Searching…';
  $('pfStatusDot').className=pfPaused?'status-dot':'status-dot running';
});

/* keyboard shortcuts for pathfinding tools */
document.addEventListener('keydown',e=>{
  if(!pathfindArea||pathfindArea.classList.contains('hidden')) return;
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA') return;
  if(e.key.toLowerCase()==='w') pfSetTool('wall');
  if(e.key.toLowerCase()==='e') pfSetTool('erase');
  if(e.key.toLowerCase()==='g') pfSetTool('weight');
});

// ═══════════════════════════════════════════════
//  WELCOME PAGE INTERACTIVITY
// ═══════════════════════════════════════════════
(function initWelcome(){
  const ws=$('welcomeScreen');
  if(!ws) return;

  const canvas=$('wCanvas');
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  let cW=0,cH=0,mouseX=-9999,mouseY=-9999;
  const MOUSE_RADIUS=200,CONNECT_DIST=150,NODE_COUNT=70;
  const nodes=[],particles=[];
  let smoothMX=-9999,smoothMY=-9999;  // lerped mouse position

  function resize(){
    const dpr=window.devicePixelRatio||1;
    const rect=canvas.getBoundingClientRect();
    cW=rect.width;cH=rect.height;
    canvas.width=cW*dpr;canvas.height=cH*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  // Create nodes
  function initNodes(){
    nodes.length=0;
    for(let i=0;i<NODE_COUNT;i++){
      const angle=Math.random()*Math.PI*2;
      const speed=.15+Math.random()*.25;
      nodes.push({
        x:Math.random()*cW, y:Math.random()*cH,
        vx:Math.cos(angle)*speed, vy:Math.sin(angle)*speed,
        r:1.5+Math.random()*2, baseR:1.5+Math.random()*2
      });
    }
  }

  // Particle trail
  let lastMX=0,lastMY=0;
  function spawnParticles(x,y){
    const dx=x-lastMX,dy=y-lastMY;
    if(dx*dx+dy*dy<36) return;
    lastMX=x;lastMY=y;
    for(let i=0;i<2;i++){
      particles.push({
        x:x+(Math.random()-.5)*8, y:y+(Math.random()-.5)*8,
        vx:(Math.random()-.5)*1, vy:(Math.random()-.5)*1,
        life:1, decay:.012+Math.random()*.008,
        r:2+Math.random()*2.5
      });
    }
  }

  function getColors(){
    const s=getComputedStyle(document.documentElement);
    return{
      node:s.getPropertyValue('--ink3').trim(),
      accent:s.getPropertyValue('--accent').trim(),
      line:s.getPropertyValue('--border').trim()
    };
  }

  function animate(){
    if(ws.classList.contains('hidden')){requestAnimationFrame(animate);return;}
    const col=getColors();

    // Smooth mouse lerp (makes everything feel fluid)
    const lerpF=.08;
    if(mouseX>-999){
      smoothMX+=(mouseX-smoothMX)*lerpF;
      smoothMY+=(mouseY-smoothMY)*lerpF;
    } else { smoothMX=-9999;smoothMY=-9999; }

    // Soft fade trail instead of hard clear
    ctx.globalCompositeOperation='destination-out';
    ctx.fillStyle='rgba(0,0,0,.28)';
    ctx.fillRect(0,0,cW,cH);
    ctx.globalCompositeOperation='source-over';

    // Update & draw nodes
    for(let i=0;i<nodes.length;i++){
      const n=nodes[i];
      const dx=smoothMX-n.x,dy=smoothMY-n.y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<MOUSE_RADIUS&&dist>1){
        const force=((MOUSE_RADIUS-dist)/MOUSE_RADIUS)*.018;
        n.vx+=dx/dist*force;
        n.vy+=dy/dist*force;
      }
      // Gentle drift
      n.x+=n.vx;n.y+=n.vy;
      // Smooth damping
      n.vx*=.993;n.vy*=.993;
      // Soft bounce
      if(n.x<0){n.x=0;n.vx=Math.abs(n.vx)*.5;}
      if(n.x>cW){n.x=cW;n.vx=-Math.abs(n.vx)*.5;}
      if(n.y<0){n.y=0;n.vy=Math.abs(n.vy)*.5;}
      if(n.y>cH){n.y=cH;n.vy=-Math.abs(n.vy)*.5;}
      // Smooth size pulse
      const targetR=dist<MOUSE_RADIUS?n.baseR+((MOUSE_RADIUS-dist)/MOUSE_RADIUS)*3.5:n.baseR;
      n.r+=(targetR-n.r)*.1;
    }

    // Draw connections
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<CONNECT_DIST){
          const alpha=(1-dist/CONNECT_DIST)*.2;
          const midX=(nodes[i].x+nodes[j].x)/2,midY=(nodes[i].y+nodes[j].y)/2;
          const mDist=Math.sqrt((midX-smoothMX)**2+(midY-smoothMY)**2);
          const nearT=Math.max(0,1-mDist/MOUSE_RADIUS);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x,nodes[i].y);
          ctx.lineTo(nodes[j].x,nodes[j].y);
          ctx.strokeStyle=nearT>.01?col.accent:col.line;
          ctx.globalAlpha=alpha*(1+nearT*2);
          ctx.lineWidth=.5+nearT*.9;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for(const n of nodes){
      const dx=n.x-smoothMX,dy=n.y-smoothMY;
      const dist=Math.sqrt(dx*dx+dy*dy);
      const nearT=Math.max(0,1-dist/MOUSE_RADIUS);
      // Outer glow (soft halo)
      if(nearT>.05){
        ctx.beginPath();
        ctx.arc(n.x,n.y,n.r+5,0,Math.PI*2);
        ctx.fillStyle=col.accent;
        ctx.globalAlpha=nearT*.12;
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fillStyle=nearT>.01?col.accent:col.node;
      ctx.globalAlpha=.25+nearT*.65;
      ctx.fill();
    }

    // Update & draw particles
    for(let i=particles.length-1;i>=0;i--){
      const p=particles[i];
      p.vx*=.97;p.vy*=.97;
      p.x+=p.vx;p.y+=p.vy;
      p.life-=p.decay;
      if(p.life<=0){particles.splice(i,1);continue;}
      const s=p.life*p.life; // ease-out curve
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r*s,0,Math.PI*2);
      ctx.fillStyle=col.accent;
      ctx.globalAlpha=s*.5;
      ctx.fill();
    }

    ctx.globalAlpha=1;
    requestAnimationFrame(animate);
  }

  canvas.addEventListener('mousemove',(e)=>{
    const rect=canvas.getBoundingClientRect();
    mouseX=e.clientX-rect.left;mouseY=e.clientY-rect.top;
    spawnParticles(mouseX,mouseY);
  });
  canvas.addEventListener('mouseleave',()=>{mouseX=-9999;mouseY=-9999;});
  window.addEventListener('resize',()=>{resize();initNodes();});

  resize();initNodes();animate();

  // Redraw on theme change
  window.drawWDots=function(){};
})();

// ═══════════════════════════════════════════════
//  GUIDED TUTORIAL
// ═══════════════════════════════════════════════
(function initTutorial(){
  const STEPS=[
    {sel:'.algo-nav',title:'Algorithm Navigator',body:'Pick any algorithm from these dropdowns — <strong>Sorting</strong>, <strong>Techniques</strong>, <strong>Searching</strong>, or <strong>Pathfinding</strong>. The visualizer instantly adapts to the chosen algorithm.',pos:'bottom'},
    {sel:'#algoTitle',title:'Algorithm Info',body:'This sidebar shows the <strong>name</strong>, <strong>tags</strong>, and a short <strong>description</strong> of the active algorithm so you always know what you\'re watching.',pos:'right'},
    {sel:'#cxGrid',title:'Complexity at a Glance',body:'See <strong>Best / Average / Worst</strong> time complexities and <strong>Space</strong> complexity. Great for comparing how algorithms scale.',pos:'right'},
    {sel:'#vizCanvas',title:'The Visualization Canvas',body:'This is where the magic happens. Bars represent array elements — their height = value. Colors change as the algorithm compares, swaps, and sorts them.',pos:'top'},
    {sel:'.action-bar',title:'Playback Controls',body:'<strong>Run</strong> = auto-play all steps. <strong>Step →</strong> / <strong>← Back</strong> = manual mode. <strong>Pause</strong> while running. Keyboard: <kbd>Space</kbd> <kbd>→</kbd> <kbd>←</kbd>',pos:'top'},
    {sel:'#speedSlider',title:'Speed Control',body:'Drag to change animation speed from <strong>Very Slow</strong> to <strong>Instant</strong>. Or press <kbd>1</kbd>–<kbd>5</kbd> on your keyboard for quick access.',pos:'right'},
    {sel:'#learnBtn',title:'Learn Mode',body:'Toggle <strong>Learn</strong> to enable narration — each step gets a plain-English explanation of <em>what</em> is happening and <em>why</em>. Perfect for beginners.',pos:'right'},
    {sel:'#codePanel',title:'Code Panel',body:'See the algorithm\'s code in <strong>5 languages</strong>: Pseudo, Python, C++, Java, and JS. The active line highlights as the algorithm runs.',pos:'top'},
    {sel:'#raceBtn',title:'Race Mode',body:'Pit two algorithms head-to-head on the same data! Great for understanding why <strong>Merge Sort</strong> beats <strong>Bubble Sort</strong> at scale.',pos:'bottom'},
    {sel:'#exportGifBtn',title:'Export as GIF',body:'Record the entire visualization and download it as an animated <strong>GIF</strong>. Perfect for sharing in presentations or study notes.',pos:'top'},
  ];

  const overlay=$('tutOverlay');
  const tooltip=$('tutTooltip');
  const titleEl=$('tutTitle');
  const bodyEl=$('tutBody');
  const stepNum=$('tutStepNum');
  const dotsEl=$('tutDots');
  let ring=null;
  let cur=0;

  function buildDots(){
    dotsEl.innerHTML=STEPS.map((_,i)=>`<div class="tut-dot${i===0?' active':''}"></div>`).join('');
  }
  function updateDots(){
    dotsEl.querySelectorAll('.tut-dot').forEach((d,i)=>d.classList.toggle('active',i===cur));
  }

  let isFirstStep=true;
  let goToTimer=null;

  function posTooltip(rect,pos){
    const pad=16;
    tooltip.setAttribute('data-pos',pos);
    const tw=tooltip.offsetWidth, th=tooltip.offsetHeight;
    let top,left;
    if(pos==='bottom'){top=rect.bottom+pad;left=rect.left+rect.width/2-tw/2;}
    else if(pos==='top'){top=rect.top-th-pad;left=rect.left+rect.width/2-tw/2;}
    else if(pos==='right'){top=rect.top+rect.height/2-th/2;left=rect.right+pad;}
    else{top=rect.top+rect.height/2-th/2;left=rect.left-tw-pad;}
    const mx=16, my=16;
    left=Math.max(mx,Math.min(left,window.innerWidth-tw-mx));
    top=Math.max(my,Math.min(top,window.innerHeight-th-my));
    tooltip.style.top=Math.round(top)+'px';
    tooltip.style.left=Math.round(left)+'px';
    /* Arrow points at target center */
    if(pos==='bottom'||pos==='top'){
      const arrowX=Math.max(16,Math.min(rect.left+rect.width/2-Math.round(left),tw-16));
      tooltip.style.setProperty('--arrow-x',arrowX+'px');
    } else {
      const arrowY=Math.max(16,Math.min(rect.top+rect.height/2-Math.round(top),th-16));
      tooltip.style.setProperty('--arrow-y',arrowY+'px');
    }
  }

  function spotlightClip(rect){
    const pad=8, r=10;
    const x=rect.left-pad, y=rect.top-pad, w=rect.width+pad*2, h=rect.height+pad*2;
    $('tutBackdrop').style.clipPath=
      `polygon(0% 0%,0% 100%,100% 100%,100% 0%,0% 0%,`+
      `${x}px ${y+r}px,${x+r}px ${y}px,${x+w-r}px ${y}px,${x+w}px ${y+r}px,`+
      `${x+w}px ${y+h-r}px,${x+w-r}px ${y+h}px,${x+r}px ${y+h}px,${x}px ${y+h-r}px,${x}px ${y+r}px,0% 0%)`;
  }

  function showRing(rect){
    if(!ring){ring=document.createElement('div');ring.className='tut-ring tut-ring-pulse';document.body.appendChild(ring);}
    const pad=8;
    ring.style.opacity='1';
    ring.style.top=Math.round(rect.top-pad)+'px';
    ring.style.left=Math.round(rect.left-pad)+'px';
    ring.style.width=Math.round(rect.width+pad*2)+'px';
    ring.style.height=Math.round(rect.height+pad*2)+'px';
    ring.style.display='block';
  }

  function applyStep(rect,step){
    stepNum.textContent=`${cur+1} / ${STEPS.length}`;
    titleEl.textContent=step.title;
    bodyEl.innerHTML=step.body;
    spotlightClip(rect);
    showRing(rect);
    posTooltip(rect,step.pos);
    updateDots();
    $('tutBack').style.display=cur===0?'none':'inline-block';
    $('tutNext').textContent=cur===STEPS.length-1?'Finish':'Next';
  }

  function goTo(idx){
    if(goToTimer){clearTimeout(goToTimer);goToTimer=null;}
    cur=idx;
    const step=STEPS[cur];
    const el=document.querySelector(step.sel);
    if(!el){skip();return;}
    el.scrollIntoView({behavior:'smooth',block:'nearest'});

    if(isFirstStep){
      /* First step: simple fade in */
      isFirstStep=false;
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        const rect=el.getBoundingClientRect();
        applyStep(rect,step);
        tooltip.classList.remove('tut-moving');
        tooltip.classList.add('tut-visible');
      }));
    } else {
      /* Subsequent steps: fade out → reposition → fade in */
      tooltip.classList.add('tut-moving');
      tooltip.classList.remove('tut-visible');
      goToTimer=setTimeout(()=>{
        requestAnimationFrame(()=>requestAnimationFrame(()=>{
          const rect=el.getBoundingClientRect();
          applyStep(rect,step);
          tooltip.classList.remove('tut-moving');
          tooltip.classList.add('tut-visible');
        }));
      },200);
    }
  }

  function open(){
    /* Ensure we're on the main viz area so elements exist */
    if(!vizArea||vizArea.classList.contains('hidden')){
      showVizArea();
      sortSelect.value='bubble';
      handleAlgoChange('bubble');
      history.pushState({page:'app'},'','#app');
    }
    isFirstStep=true;
    tooltip.classList.remove('tut-visible','tut-moving');
    overlay.classList.remove('hidden');
    buildDots();
    goTo(0);
  }

  function close(){
    tooltip.classList.remove('tut-visible');
    tooltip.classList.add('tut-moving');
    if(ring) ring.style.opacity='0';
    setTimeout(()=>{
      overlay.classList.add('hidden');
      if(ring) ring.style.display='none';
      tooltip.classList.remove('tut-moving');
    },250);
    try{localStorage.setItem('algosight_tut_seen','1');}catch(e){}
  }
  function skip(){close();}

  $('tutNext').addEventListener('click',()=>{
    if(cur<STEPS.length-1) goTo(cur+1); else close();
  });
  $('tutBack').addEventListener('click',()=>{
    if(cur>0) goTo(cur-1);
  });
  $('tutSkip').addEventListener('click',skip);
  $('tutBackdrop').addEventListener('click',skip);
  $('tutorialBtn').addEventListener('click',open);

  /* Reposition on resize — instant, no fade */
  let resizeRAF=null;
  window.addEventListener('resize',()=>{
    if(overlay.classList.contains('hidden')) return;
    if(resizeRAF) cancelAnimationFrame(resizeRAF);
    resizeRAF=requestAnimationFrame(()=>{
      const step=STEPS[cur];
      const el=document.querySelector(step.sel);
      if(!el) return;
      const rect=el.getBoundingClientRect();
      spotlightClip(rect);
      showRing(rect);
      posTooltip(rect,step.pos);
    });
  });

  document.addEventListener('keydown',e=>{
    if(overlay.classList.contains('hidden')) return;
    if(e.key==='Escape') skip();
    if(e.key==='ArrowRight'||e.key==='Enter'){e.preventDefault();e.stopPropagation();if(cur<STEPS.length-1)goTo(cur+1);else close();}
    if(e.key==='ArrowLeft'){e.preventDefault();e.stopPropagation();if(cur>0)goTo(cur-1);}
  },true);

  /* Auto-show on first visit after Get Started */
  const origStart=startBtn.onclick;
  startBtn.addEventListener('click',()=>{
    try{if(!localStorage.getItem('algosight_tut_seen')){setTimeout(open,600);}}catch(e){}
  });
})();

// ═══════════════════════════════════════════════
//  VERTICAL RESIZER
// ═══════════════════════════════════════════════
function initVerticalResizer() {
  const resizer = $('vResizer');
  const vizCanvas = $('vizCanvas');
  const codePanel = $('codePanel');
  
  if (!resizer || !vizCanvas || !codePanel) return;

  let isResizing = false;
  let startY, startVizHeight, startCodeHeight;

  resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    startY = e.clientY;
    startVizHeight = vizCanvas.offsetHeight;
    startCodeHeight = codePanel.offsetHeight;

    document.documentElement.style.cursor = 'ns-resize';
    vizCanvas.classList.add('resizing');
    codePanel.classList.add('resizing');
    
    // Create a temporary overlay to capture mouse move smoothly
    let overlay = document.createElement('div');
    overlay.id = 'resizeOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.cursor = 'ns-resize';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);

    const onMouseMove = (e) => {
      if (!isResizing) return;
      const deltaY = e.clientY - startY;
      
      const newVizHeight = Math.max(80, startVizHeight + deltaY);
      const newCodeHeight = Math.max(60, startCodeHeight - deltaY);
      
      vizCanvas.style.height = `${newVizHeight}px`;
      codePanel.style.height = `${newCodeHeight}px`;
    };

    const onMouseUp = () => {
      isResizing = false;
      document.documentElement.style.cursor = '';
      vizCanvas.classList.remove('resizing');
      codePanel.classList.remove('resizing');
      
      // Permanently add custom-sized to override max-heights
      vizCanvas.classList.add('custom-sized');
      codePanel.classList.add('custom-sized');

      if (overlay) overlay.remove();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (arr.length > 0) {
        if (GRID_ALGOS.has(algo)) renderGrid(arr, {});
        else renderBars(arr, {});
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    e.preventDefault();
  });
}


// ═══════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════
applyTheme(isDark);
pfBuildGrid();
fullReset();
initVerticalResizer();
history.replaceState({page:'welcome'},'','');
