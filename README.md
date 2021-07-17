**Prerequisites**
----
NodeJS

Postgresql Server

**How to run**
----
`git clone https://github.com/vapranav/Dyte-Backend-Task.git`

`cd Dyte-Backend-Task`

`npm install`

Change database config at `/config/database.js` (DB Name, Username, Password)

`node app.js` (This will create the table and you're ready to test the API)

**(Optional)**

If you prefer to seed the DB with 10 rows run 

`npx sequelize-cli db:seed:all` (Make sure db credentials are right on both `/config/database.js` and `/config/config.json`)

**API Documentation**
----

**1. Create Webhook**
----
  Creates a new webhook and returns its ID by calling the **webhook.register** action.

* **METHOD and URL**

   `POST` http://localhost:3000/webhooks/register

* **Data Params**

  targetUrl=[string]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
"id": 15,
"targetUrl": "www.example/v1/post/1",
"updatedAt": "2021-07-16",
"createdAt": "2021-07-16"
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `"Could not add"`
    
**2. List Webhooks**
----
  Returns list of webhooks by calling the **webhook.list** action.

* **METHOD and URL**

   `GET` http://localhost:3000/webhooks/list

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
[
{
"id": 14,
"targetUrl": "IT WORKS!",
"createdAt": "2021-07-16",
"updatedAt": "2021-07-16"
},
{
"id": 13,
"targetUrl": "IT WORKS!",
"createdAt": "2021-07-16",
"updatedAt": "2021-07-16"
},
{
"id": 15,
"targetUrl": "TESTING",
"createdAt": "2021-07-16",
"updatedAt": "2021-07-16"
}
]
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `"Error Occured"`
    
**3. Update Webhook**
----
  Updates targetUrl of specified webhook and returns status code by calling the **webhook.update** action.

* **METHOD and URL**

   `PUT` http://localhost:3000/webhooks/update

* **Data Params**

  id=[number]

* **Success Response:**

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `"Could not update"`

**4. Delete Webhook**
----
  Deletes specified webhook and returns status code by calling the **webhook.delete** action.

* **METHOD and URL**

   `DELETE` http://localhost:3000/webhooks/delete

* **Data Params**

  id=[number]

* **Success Response:**

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `"Could not delete"`
    
**5. Trigger Webhook**
----
  Sends POST request to all targetUrls in DB in parallel and returns JSON response by calling the **webhook.trigger** action. (For example purpose I'm calling an API I created `POST` https://floating-fjord-11517.herokuapp.com/:num1/:num2)

* **METHOD and URL**

   `GET` http://localhost:3000/webhooks/ip

* **Data Params**

  ip=[string]

* **Success Response:**

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `"Could not delete"`
