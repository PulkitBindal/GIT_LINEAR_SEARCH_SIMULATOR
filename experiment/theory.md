#### Theory

In computer science, a linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.In a linear search, each element of an array is retrieved one by one in a logical order and checked whether it is desired element or not. A search will be unsuccessful if all the elements are accessed, and the desired element is not found. In the worst case, the number of an average case we may have to scan half of the size of the array (n/2).

Therefore linear search can be defined as the technique which traverses the array sequentially to locate the given item. A linear search runs in at worst linear time and makes at most n comparisons, where n is the length of the list. If each element is equally likely to be searched, then linear search has an average case of 
(n+1)/2 comparisons, but the average case can be affected if the search probabilities for each element vary. Linear search is rarely practical because other search algorithms and schemes, such as the binary search algorithm and hash tables, allow significantly faster searching for all but short lists.
Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.<br>

The sequential search, also known as the linear search, are the most basic search algorithms and are often the first search method learned in introductory computer science courses. The basic strategy is straightforward. Every element in the data set is examined in the order presented until the value being searched for is found. If the value being searched for doesn't exist, a flag value is returned (such as -1 for an array or NULL for a linked list). Sequential search is at best O(1), at worst O(n), and on average O(n). If the data being searched are not sorted, then it is a relatively efficient search. However, if the data being searched are sorted, we can do much better.


#### Algorithm
A linear search sequentially checks each element of the list until it finds an element that matches the target value. If the algorithm reaches the end of the list, the search terminates unsuccessfully.

Basic Algorithm<br>
Given a list L of n elements with values or records L0 .... Ln−1, and target value T, the following subroutine uses linear search to find the index of the target T in L.[3]
Set i to 0.
If Li = T, the search terminates successfully; return i.
Increase i by 1.
If i < n, go to step 2. Otherwise, the search terminates unsuccessfully.

<img src="flowchart/flowchart1.jpg" alt="SS"><br>
<img src="flowchart/flowchart1.jpg" alt="SS"><br>
<img src="flowchart/flowchart1.jpg" alt="SS"><br>
<img src="flowchart/flowchart1.jpg" alt="SS"><br>
<img src="flowchart/flowchart1.jpg" alt="SS"><br>



#### Analysis
For a list with n items, the best case is when the value is equal to the first element of the list, in which case only one comparison is needed. The worst case is when the value is not in the list (or occurs only once at the end of the list), in which case n comparisons are needed.

If the value being sought occurs k times in the list, and all orderings of the list are equally likely, the expected number of comparisons is

--> n           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;; if k=0<br>
--> (n+1/k+1)    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;; if 1<=k<=n <br>

(for example, for n = 2 this is 1, corresponding to a single if-then-else construct).

Either way, asymptotically the worst-case cost and the expected cost of linear search are both O(n).

#### Non-uniform probabilities
The performance of linear search improves if the desired value is more likely to be near the beginning of the list than to its end. Therefore, if some values are much more likely to be searched than others, it is desirable to place them at the beginning of the list.
In particular, when the list items are arranged in order of decreasing probability, and these probabilities are geometrically distributed, the cost of linear search is only O(1).
