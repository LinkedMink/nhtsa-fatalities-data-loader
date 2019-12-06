# NHTSA Fatalities Data Loader
## Project
This program loads the traffic fatality data from the NHTSA into a MongoDB database.
It uses JSON export files from the Google BiqQuery dataset. The data is publicly
available.

[BiqQuery Database](https://console.cloud.google.com/marketplace/details/nhtsa-data/nhtsa-traffic-fatalities?filter=solution-type:dataset&filter=category:public-safety&id=412c019d-62ba-4ee9-af00-04183e9ddb84)

## Getting Started
### Install Prerequisites 
The application was tested with these major versions:
* MongoDB 3.6
* Node.js 12

Install the npm packages.

```sh
cd ./nhtsa-fatalities-data-loader
npm install -g cross-env
npm install
```

### Export Tables
Find the database from the BigQuery public datasets:

> bigquery-public-data:nhtsa_traffic_fatalities

For each table, export the table as JSON (and probably GZIP compress):

> Select Table -> EXPORT -> Export to GCS
> Export format: JSON (Newline delimited)
> File Name: [Table Name].json (accident_2015.json)

When you've downloaded all the files, create a `data` directory in the root of
the project.

```sh
cd ./nhtsa-fatalities-data-loader
mkdir ./data
cp /path/to/json/* ./data
```

### Database
Create the user service database and a user that can access it.

```javascript
use necroAutomobiliaDB
db.createUser(
  {
    user: "necroAutomobilia",
    pwd: "[Strong Pass]",
    roles: [
      { role: "readWrite", db: "necroAutomobiliaDB" }
    ]
  }
)
```

### Config
Create a `.env` in the root of the project directory. Add an environmental variable
with your MongoDB connection string. Alternatively you can specify the connection string
on the command line. See .env.sample

```sh
MONGO_DB_CONNECTION_STRING=mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database.collection][?options]]
```

### Run
Start will both build and run the application.

```sh
npm start
```
