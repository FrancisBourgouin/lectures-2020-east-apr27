## Building an ERD 

### Example of ERD box

+------------+                          +------------+  
| order      |                          | ITEMS       |
+------------+                          +------------+
|  id serial |                          |      name varchar     |
date created DATE   |                      price  integer  |            |
date shipped  DATE |                          |  id        |
date fulfilled DATE  |                          | type varchar           |
|   content         |                          |            |
|            |                          |            |
+------------+                          +------------+

### Description of your relationship
orders have at least one item or more yay!

### ERD describing the relationship
