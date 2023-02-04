
# User API (CRUD)


This API is responsable for CRUD operations based on user domain data (name, address, phone number, etc).  

It uses some basic clean architecture principles for define responsabilities. 

The flow for requests are: route -> controller -> service -> repository.

It also contains a dockerfile in order to build an application container image.