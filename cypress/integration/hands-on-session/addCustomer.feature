Scenario Add customer
Given You access Home Page 
And You click on Bank Manager Login
When You Add a customer
Then You enter customer details and add customer
Scenario Verify customer is added
Given You access Home Page
And You click on BanK Manager
When You select Customers tab
Then You search for customer name
And You confirm customer has bee added