#### Theory

In computer science, a linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.In a linear search, each element of an array is retrieved one by one in a logical order and checked whether it is desired element or not. A search will be unsuccessful if all the elements are accessed, and the desired element is not found. In the worst case, the number of an average case we may have to scan half of the size of the array (n/2). Therefore linear search can be defined as the technique which traverses the array sequentially to locate the given item. A linear search runs in at worst linear time and makes at most n comparisons, where n is the length of the list.<br>

The sequential search, also known as the linear search, are the most basic search algorithms and are often the first search method learned in introductory computer science courses. The basic strategy is straightforward. Every element in the data set is examined in the order presented until the value being searched for is found. If the value being searched for doesn't exist, a flag value is returned (such as -1 for an array or NULL for a linked list). Sequential search is at best O(1), at worst O(n), and on average O(n). If the data being searched are not sorted, then it is a relatively efficient search. However, if the data being searched are sorted, we can do much better.


#### Algorithm
A linear search sequentially checks each element of the list until it finds an element that matches the target value. If the algorithm reaches the end of the list, the search terminates unsuccessfully.

Basic Algorithm<br>
Linear Search ( Array A, Value x) <br>
Step 1: Set i to 1 <br>
Step 2: if i > n then go to step 7<br>
Step 3: if A[i] = x then go to step 6<br>
Step 4: Set i to i + 1<br>
Step 5: Go to Step 2<br>
Step 6: Print Element x Found at index i and go to step 8<br>
Step 7: Print element not found<br>
Step 8: Exit




#### Analysis
procedure linear_search (list, value) <br>

   for each item in the list<br>
     &nbsp; &nbsp; if match item == value<br>
         &nbsp;&nbsp; &nbsp;return the item's location<br>
      &nbsp; &nbsp; end if<br>
   end for<br>


#### Non-uniform probabilities
The performance of linear search improves if the desired value is more likely to be near the beginning of the list than to its end. Therefore, if some values are much more likely to be searched than others, it is desirable to place them at the beginning of the list.
In particular, when the list items are arranged in order of decreasing probability, and these probabilities are geometrically distributed, the cost of linear search is only O(1).
