# BMW_Tasks
The GitHub repository has 2 branches: Task1 and Task2. Each contains the corresponding Task’s source codes. 

Task 2 - Report:
This report is a detailed overview of the microservice backend architecture and the corresponding technologies used. The diagrams drawn on draw.io are committed and pushed to the GitHub repository submitted with this report. 
1.	Database Technology: We can use a combination of relational and non-relational databases to store the data. 

For the supplier information and demand orders, we could use a relational database like MySQL or PostgreSQL to store the data in a structured and organized manner. Relational databases work well for data that has a fixed schema and where the relationships between data points are well-defined.

On the other hand, the stock information data set is more volatile, and the data points may not have a well-defined relationship with each other. Additionally, we may want to store historical stock information to analyze trends over time. In this case, a NoSQL database like MongoDB or Cassandra may be a better fit. NoSQL databases are optimized for unstructured data, and can handle large volumes of data with high velocity and variety.

2.	Backend framework: A backend framework is needed to build the microservices.  We can use a popular framework such as .Net with C#, Node.js with Express, Spring Boot with Java, or Flask with Python.

3.	Microservices: We can create multiple microservices to handle the different functions needed for this system. The microservices can be designed using a RESTful architecture with JSON as the data format. The microservices can be deployed using containerization technologies like Docker, Kubernetes, or AWS ECS.

-	Supplier microservice: This microservice will handle all CRUD operations related to the supplier information dataset. It will have endpoints for adding a new supplier, updating existing supplier information, and retrieving supplier information.

-	Demand microservice: This microservice will handle all CRUD operations related to the demand orders dataset. It will have endpoints for adding a new demand order, updating existing demand orders, and retrieving demand orders. Additionally, it will have an endpoint for sending an email to the supplier one month ahead of the demand date for a specific material needed in a plant.

-	Stock microservice: This microservice will handle all CRUD operations related to the stock information dataset. It will have endpoints for adding stock information, updating existing stock information, and retrieving stock information. Additionally, it will have an endpoint for notifying the plant two weeks ahead if it will be running out of stock on a given date for a specific material.

-	Notification microservice: This microservice will be responsible for sending notifications to the relevant parties based on the data in the system. It will have access to the demand and stock datasets and will be responsible for sending notifications to the plant and supplier microservices. Additionally, a message broker such as RabbitMQ or Apache Kafka would be a good choice for the notification microservice. The message broker would allow the microservice to receive messages from other services and trigger the notification process based on the received messages. It also enables microservice to communicate asynchronously with other services, ensuring that the notification process does not impact the performance of other services. Message brokers are specifically important for the notification microservice because it needs to receive messages from other microservices and send messages to the appropriate destination.

A suggestion may be to also use a load balancer (such as NGINX or Amazon Elastic Load Balancer) to distribute traffic between our microservices, ensuring that our application is highly available and scalable.

4.	Message Broker: We can use a message broker like Apache Kafka or RabbitMQ to enable communication between the microservices asynchronously. This will help in decoupling the different microservices and making the system more resilient.

5.	Email Service: We can use an email service like AWS SES or SendGrid to send emails to the suppliers one month ahead of the demand date for a specific material needed in a plant.


6.	Testing: Implement a comprehensive testing strategy that includes unit, integration, and end-to-end tests. This will help in identifying and resolving issues early in the development process and improving system quality.

7.	Security: Ensure that appropriate security measures are implemented throughout the system. This includes secure communication between microservices, data encryption at rest and in transit, authentication and authorization, and input validation to prevent injection attacks.

8.	Monitoring: Set up monitoring and logging for the microservices and infrastructure components. This will help in identifying and resolving issues quickly and improving system reliability.

9.	Continuous Integration: To implement CI in your architecture, we can use a CI/CD tool like Jenkins. This tool can be configured to monitor source code repository, automatically build and test the code when changes are pushed, and deploy the code to a testing environment for further testing.

Best Practices:
•	Use a containerization technology like Docker to package and deploy the microservices.

•	Use an orchestration tool like Kubernetes or AWS ECS to manage the containers.

•	Use an API Gateway to enforce security, rate limiting, and routing policies.

•	Use a service registry to enable the microservices to discover each other.

•	Use a message broker to enable asynchronous communication between the microservices.

•	Use a centralized logging and monitoring system to track the health of the microservices.

•	Use automated testing and continuous integration and deployment to ensure the quality of the code and deployments.

•	Use secure protocols and encryption to protect data in transit and at rest.

•	Implement data validation and input sanitization to prevent injection attacks and ensure data integrity.

•	Implement authentication and access controls to restrict access to sensitive data and functionality.

•	Implement logging and monitoring to track application behavior and detect errors and anomalies.

•	Implement backup and recovery strategies to ensure data availability and prevent data loss in case of failures.
