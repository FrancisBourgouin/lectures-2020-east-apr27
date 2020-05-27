## Building an ERD 

Manufacturer: id, name, industry, location, product, number_of_factories,

Client: id, name, location, orders(?), supplier_id

*exclusive agreement 1-1 


### Example of ERD box

+-----------------------
| Client                +------------+
| TITLE HERE |
+------------+
| P          |
|            |
|            |
|            |
|            |
|            |
+------------+
+------------+----------
| PK: id     |
| name: varchar(255)           |
| industry: varchar(255)
|location: varchar(255)           |
| product: varchar(255) 
|number_of_factories: INTEGER        |
|            |
|            |
+------------+


+------------+
| TITLE HERE |
+------------+
| PK: id      |
| name: varchar(255)  |
| location: varchar(255)           |
| orders: integer           |
| supplier_id: REFERENCES client_id ON DELETE CASCADE            |
|            |
+------------+



### Description of your relationship


### ERD describing the relationship
