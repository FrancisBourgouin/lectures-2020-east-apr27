## Building an ERD 

### Example of ERD box

+-----------------------+             +------------+ 
|  Province               |             |    City    |
+-------------+             +------------+
|id SERIAL PRIMARY KEY            |             |            |
|            |             |            |
|            |             |            |
|            |             |            |
|            |             |            |
|            |             |            |
+------------+ 

            +------------+

province 
- id SERIAL PRIMARY KEY
- size VARCHAR(255)
- capital_city VARCHAR(255)
- official_lang VARCHAR(255)
- province_flag img(?) (url?)

city
- id SERIAL PRIMARY KEY
- size VARCHAR(255)
- area_code INTEGER
- province_id INTEGER REFERENCE REFERENCES province(id) ON DELETE CASCADE


### Description of your relationship


### ERD describing the relationship
