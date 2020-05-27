## Building an ERD 

### Example of ERD box

+------------+                +-----------------+  
| Classroom  |                |   Student       |
+------------+                +-----------------+
| (PK)id     |                | (PK)id          |
| subject    |                | name            |
| teacher    |                | birthday        |
| location   |                | program         |
| start_date |                | (FK)classroom_id|
| end_date   |                | batch           |
|            |                | address         |
+------------+                +-----------------+



+------------+            +------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship
ONE to Many relationship
The classroom has many relationships with the students

### ERD describing the relationship
