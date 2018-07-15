# ESP Gallery Website Assignment - Part A Questionnaire
## 1. Who is your client?
ESP Gallery - contact Lou Steer

## 2. What is your client’s need (i.e. challenge) that you will be addressing in your Project?
Our client, ESP Gallery, needs a user friendly, aesthetically inviting online art platform allowing users to display, sell or buy artwork and for enthusiasts to view art. Our client wants to receive a commission on all art sales processed by the site. Also, a hireable, main gallery section (i.e. the homepage), is needed for artists who want more exposure for their art. It is important that the site promotes the same sense of community, for which ESP Gallery is known. The site admin must be able to alter key aspects of the site.

## 3. Describe the client’s current setup and data.
There is no current website or data. The gallery sells no art at the moment. It only has an online presence through Facebook and Instagram.  

## 4. Describe the project will you be conducting and how your App will address the client’s needs.

The ESP Gallery App uses MongoDB, Express, React, Node, Bootstrap, Sendgrid, Stripe, Cloudinary, Atlas, and Passport technologies.
The app will fulfill the client needs, as described in question 2 by:

	* Providing a beautiful, well designed site that promotes community through the thoughtful use of html, css, bootstrap, images, and appropriate text and fonts.

	* Providing registration/login so that art buyers, sellers and site admin can use the site. We will use Passport to manage this functionality.

	* Providing pages that allow art listings to be created and provides fields for entering and editing key information about the art.
  
	* Allowing the buying and selling of art through online payments managed by Stripe Connect. Stripe Connect will also be used to allow ESP Gallery to take it's 30% required commission on all sales. The gallery would like more payment options, so we will implement Paypal if there is enough time to address this need.

	* Allowing artists to have their art displayed in the Gallery by providing the Gallery admin the ability to upload the artist's work to the gallery when requested.

	* Setting up a special Admin Account with the ability to: create, edit and delete all user-generated content and to create, edit and delete key website content, and to view sales records.

	* Displaying a disclaimer agreement for artists to show that they understand shipping responsibilities.

	* Providing no automatic audio play, so people can use the site without drawing the attention of others.


## 5. Identify and describe the software (including databases) to be used in your App.

1. front end:

	* React.js
  
  Provides stateful components for interactive UI

2. back end:

	* Node.js
  
  Event driven server environment
  
  
	* MongoDB
  
  Database that uses a document-oriented data model. Stores JSON-like document models that map to objects in the application code
  
	* Mongoose
  
  Database modeling for MongoDB
  
	* Express.js
  
  Node.js application framework to help organize the application into an MVC architecture on the server side.


## 6. Identify and describe the network setup you will use in your development.
Network will be: 

## 7. Identify and describe the infrastructure (i.e. hardware) that your App will run on.

The client does not have the capacity to run her own server so the app will run on third party providers. The setup will be as follows:
 
Our database, MongoDB will be hosted by mLab which is a cloud database hosting service located in San Francisco, California.

The App will be deployed on Heroku. Heroku is a cloud platform service located in San Francisco, California.

Amazon Simple Storage Service (AWS S3) will be used to store the App's images.  It is a cloud computing web service offered by Amazon Web Services and provides fast, reliable and scalable object storage. 
The AWS we are using is located in West Virginia however, there are locations globally and we are currently looking into whether we should use one closer to Sydney.  

## 8. Describe the architecture of your App.

We have decided on a model, view, controller, layered architecture pattern. The app uses MongoDB, above which, is our backend layer containing our models, business logic and data types. We have utilised Mongoose and Express for this. Our controllers transform and manipulate the data between this model layer and the front-end view layer, which is built with React JS and uses HTML/CSS, Javascript, and bootstrap.  
This architecture allows compartmentalisation of the app's different functions, aiding the building process so that changes in one layer or function aren't affected by other layers.

## 9. Explain the different high-level components (abstractions) in your App.
We have three models: Users, Artworks and Gallery. 

The “User" model represents art buyers, sellers, and site admin. All these users are able to sign in to accounts. Site admin have extra permissions which allow the management of data on the site. Users are able to create art listings, which enable them to sell artwork, and other users are able to buy this artwork. Users that wish to be known as artists, are able to populate their profile with information about themselves and their art. 

"Artworks", discussed above, is another model that represents art that is/was for sale, or art shown on the gallery page. It has data such as images, description, id, and a boolean depending on if it's in the gallery.    
The “Gallery” is the landing page and lets artists pay to show their art on this page. They will also be able to display their personal artist profile or other info.  

Buying/selling is another abstraction that is not a model and is a boolean value on the artwork model.   

## 10. Detail any third party services that your App will use.
Third party services will be: Stripe and perhaps Paypal; time permitting.

## 11. Identify the database to be used in your app and provide a justification for your choice.
The database we will be using is MongoDB. It stores data in JSON-like documents which can have different fields, allowing the database structure to change over time. As a distributable database, it provides horizontal scaling, high availability and geographic distribution. Additionally, its ability to handle ad hoc queries, indexing, and real-time aggregation, allow for easy access to the database throughout the structure of the app. Mysql or a no sql data store, are other options, however they don't have all the features that easily support our client's goal of having two-sided marketplace functionality.  Ebay's choice of MongoDB for some of the aforementioned reasons, informed our decision making process. This rationale is part of the reason that Ebay uses MongoDB.

## 12. Discuss the database relations to be implemented.
The models that we will be using in our database are users, artwork, and gallery.  The gallery, which is a singleton resource, has two foreign keys, one that relates to the artwork's primary key, and one that relates to the user primary key so that the artwork and artist shown in the gallery can be identified.  The artwork, has a foreign key, which relates to the user primary key, which allows artworks to be associated to it's user(a.k.a. artist/seller).

## 13. Provide your database schema design.

We used Dbdesigner to design our database schema as follows:

![erd](https://raw.githubusercontent.com/casscass/esp_gallery/development/README-images/ERD_C4.png)

## 14. Provide User stories for your App.
### User
* As a user, I want to be able to easily buy artwork in an easy efficient manner, so that I can have a wonderful consumer experience.
* As a user, I want to be able to search for an artist to find art that I am looking for.
* As a user, I want the ability to access a list past orders so that I can find relevant information.
* As a user, I want to be able to search for different styles of art so I can buy everything that I want.
* As a user, I want to be able to see more detailed information on prospective art to help inform my decision making.
* As a user, I want to be able to update my personal information to make sure its current.
* As a user, I want to view and receive new information about upcoming exhibits so that I know what's happening in the art scene.

### Artist or seller
* As an artist or seller, I want to be able to easily sign up and create a profile so that I can upload pictures of my art.
* As an artist, I want to be able to sell my artwork to increase my profits so that I can continue creating art.
* As an artist, I want to be able to exhibit my art so that I can showcase my work and increase my exposure.
* As an artist, I want to be able to provide a description of my artwork so that I can engage more people with my art.
* As an artist, I would like a historical section so that people can still view my art after an exhibition has finished.
* As an artist, I want to be able to update information on my art so that I can change the price / description / photos etc.
* As an artist, I want to be able to easily find information on exhibiting my work.
* As an artist, I want the application process for exhibiting art to be efficient and easy to use.
* As an artist, I want to see what dates are available in the Virtual Gallery so I can book a time for my own exhibition.
* As an artist, I want to know what my obligations are for selling my work on the website.
* As an artist, who has sold art through the website, I want to know what happens if art is damaged in transit. Who is responsible and can I keep the sale money.

### Admin
* As admin, I want the ability to manage content to maintain site quality. This includes the ability to delete inappropriate content.
* As admin, I want the ability to post art images to the site's gallery, so that I can create exhibits for my paying customers.
* As admin, I want to be able to receive commission from transactions so that I can continue to provide a service.
* As admin, I want to be able to display information about ESP Gallery, to provide some background on the company, and to promote a sense of community.

## 15. Provide Wireframes for your App.
* Flow Chart

![flowchart](https://raw.githubusercontent.com/casscass/esp_gallery/development/README-images/preliminaryFlowChart.jpg)


* Wifeframes 
Wireframes were made with Figma and can be viewed online here:(https://www.figma.com/file/PU0NB9pOHF1cRj3zrTYRrLpC/ESP-gallery-wireframes
)

![mockup](https://github.com/casscass/artcloud/blob/master/app/assets/images/Wireframs.png)

## 16. Describe the way Tasks are being allocated and tracked in your project.

#### Trello
Tasks initially were broadly distributed with two people on the front-end and two on the backend. Trello was then implemented to keep all tasks organised and the project progressing. Team members created a Trello board and put all tasks in the "to do" section. After that team members could take ownership of a task by putting their name to it, move it to doing, and then put it in completed when they are done.  

The Trello board can be viewed [here](https://trello.com/b/NZm11i1D/c4-assignment) or here:

![trello](https://github.com/casscass/esp_gallery/blob/development/README-images/trello1.png)

Additionally, a Trello powerup called TeamGantt is being used to monitor progress as pictured below:
![gantt](https://github.com/casscass/artcloud/blob/master/app/assets/images/gantt.png)


## 17. Discuss how Agile methodology is being implemented in your App.

Agile methodology was used to complete our project as follows:

A)  Sprints were as implemented as follows:
June 25 - July 2 Team building, planning and research.
July 2-July 11 Part A questionnaire and rough draft of Markdown for part B.
July 11- July 21 Development phase.
July 21 - July 24 Project review and delivery to client, Finalise docs and code, presentation planning.

B) Collaboration with the customer
We managed client satisfaction ensuring that the product met their needs 
by keeping them updated on progress whilst seeking input on the website throughout our sprints.  

C) Commitment to the delivery of working software as frequently as possible. 

D)  Commitment to team morale
Motivation is key in Agile. Being mindful of a positive team environment and being supportive will ensure teammates can be trusted to get their jobs done.

E)  Implementing a communication plan that utilizes face-to-face communication to best transfer information within our team.

F) Every day we have a team meeting so we could find out how to increase team effectiveness and to ensure we are constantly moving in the right direction. 

G) We self-organize by using the Trello board and team meetings to direct our focus

## 18. Provide an overview and description of your Source control process.
We will be using a Git Feature Branch Workflow. Each individual decides on a feature to work on, creates a feature branch on their local machine and commits their changes to this branch as they progress. Once the feature is completed, the individual rebases their code from the main branch, resolves any conflicts, and then submits a merge request to the main branch. Once the feature is reviewed it is either approved and merged into the main branch, or rejected and marked for revision. 

## 19. Provide an overview and description of your Testing process.
Our tests will be implemented with Jest, a unit testing framework. We will also be employing the Enzyme testing utility to streamline the testing process. Tests will be created for individual components to assess functionality of each component in the app.

## 20. Discuss and analyze requirements related to information system security.
The maintenance of sensitive information is imperative when handling user data. The following safeguard requirements, as per the risk assessment, are to be fulfilled in the construction of the website.

### Risk Assessment 
* User authentication
* Data management
* File uploads
* Protection against data loss (when parts of the database can no longer be retrieved).
* Transaction security (payments /commission)

### Data Management & Anonymization
#### Data Minimization
To reduce the risk of exposure in the event of a breach, unnecessary information won’t be collected. For example, date of birth isn’t directly required to support business processes, therefore its acquisition isn’t needed. 

#### Data Encryption
* Data encryption to encode sensitive information so that it can only be accessed by authorized individuals.
	* An encryption key is used to make the information illegible and a decryption key is used to decipher the information.
	* Encryption is necessary when handling transactions to ensure customer information security.

#### Input Validation & Sanitization
* Only allow users to input data of the expected type by checking that inputs meet criteria and ensuring that it is valid.
	* For instance, email address inputs should be filtered to only allow characters that are allowed in email addresses.

### SQL Injections
SQL injection attacks are when a web form field or URL parameter is used to manipulate or gain access to your database. This can be prevented by using parameterized queries which are used to stop attackers from adding queries to be added to SQL statements that are executed.

### User Authentication - Password Protection
Restrict access to sensitive personal information by requiring strong passwords is essential.  Some requirements and methods for password protection are:
* Enforced password requirements such as character minimum, uppercase and number integration to protect password security.

#### Plain text passwords
Plain text passwords only use letters. This means hackers can easily gain access to the system due to their simplicity. Often these types of passwords are used across other logins as well which makes it easy for hackers to access any accounts a user belongs to.

#### One-way Hash
Servers don’t store plain text passwords to authenticate users with a one-way hash. A hashing algorithm is applied to increase security. This is a better security solution than just a plain text password but hackers have 
been known to find ways around this method.
* Storage of passwords as encrypted values (preferably through a hashing algorithm).
	* In the event of a hacking, hashed passwords could limit damage as it isn’t possible to decrypt them.

#### Password Salting
A random ’salt’ string can be added for each user to provide an extra level of protection. This could happen during the creation of an account, significantly increasing encryption. This vastly increases the time needed for hackers to gain access to the system as passwords will have to be found for each user although it is still possible.

### File Uploads
File uploads are an integral part of the functionality of the website as we need images of artwork to be displayed on the virtual gallery and the gallery shop. This is a major risk when it comes to website security. Files could contain scripts that could open up the website to hacking if executed on the server.
Our choice for file storage will need to take these requirements into account:
* Uploaded files must be treated with suspicion to ensure site protection. File extension names cannot be trusted for verification as they can be easily fabricated. Options around this are to rename files on upload to ensure the right file extension.
* Direct access to uploaded files should be prevented. Any uploaded files are stored in a folder outside the webroot.

## 21. Discuss methods you will use to protect information and data.
Safe system design practices will be used to reduce exposure to hackers and thieves by limiting access to website infrastructure. The methods we have chosen to integrate for maintaining system security are outlined here. These methods have been chosen as they reduce the opportunity to exploit vulnerabilities and are effective in mitigating risk to information.

### Client Security
Client encryption keys for Stripe, Sendgrid and AWS will be stored in .gitignore file so they will not be published on GitHub.
* The client will store a copy of the backup offsite to protect against incidents that can destroy the original data.

### Appropriate Privileges
An admin account is required to maintain site quality. This account will have limited access to constrict what a hacker is able to do if they were to gain access. The database shouldn’t be connected to this account unless absolutely necessary. With this limitation in place, the entire database is unable to be compromised in the event of a breach.
* Depending on the user's level of access they will have read-only to full control.

### User Authentication - Passport.js
Passport provides user authentication using a username and password. User authentication through Facebook and/or Google is also possible with this approach. Passport has been chosen for integration with the ESP Gallery website due to the following factors:

* Easy to integrate as a route middleware with Express.js.
* Authentication strategies can be selected to employ based off of our requirements without creating unnecessary dependencies.
* Can be used in conjunction with JSON Web Tokens (JWT), an authentication standard that assigns and passes around encrypted tokens in requests to help identify logged in users. This is done instead of creating a cookie to store the user in a session which in our case increases privacy concerns as cookies are stored on the users machine which makes them vulnerable to malicious sites that read cookie data. This method is preferred for use with data that only enhances user experience and is disposable, as it scales well. As the site will be dealing with sensitive data we have chosen to go with the more secure approach of using JWT to protect information.

### Password Protection - BCrypt
BCrypt is used to keep important information safe by ensuring passwords remain secure. It accomplishes this by using an adaptive hash function. What sets it apart from other functions is its ability to increase the time and processing power needed to hack. It uses a Key Factor which adjusts the cost of hashing as computers become more and more powerful in the future. This method slows down the cracking process until it is no longer a viable hacking method. BCrypt has been chosen for integration with the ESP Gallery website due to the following factors:

* BCrypt is extremely resistant to hacks due to how slow it is to hash inputs compared with other functions, resulting in much better hash outputs.
	* It will keep up with Moore’s Law - Hashed passwords with BCrypt won’t be made obsolete over time due to its ability to customize work rate (Key Factor).
* Alternative hashing services such as MD5 can be more easily hacked. Rapid attempts to brute-force passwords are easier with MD5. BCrypt ensures that such attempts will be much slower due to its method of hashing.
* BCrypt limits the damage a SQL injection vulnerability could cause.

### File Storage - Amazon S3
Images will be stored by using AWS. This keeps images from being saved directly in our database, thus preventing direct access and providing another level of security.
* Amazon S3 provides automatic encryption for storage and transit of data as only the owner and bucket have access to the resource.
* S3 is easy to manage and provides storage optimization, data security and management efficiency.
* Data is protected against network and power problems as well as hardware failure.

### Payment Security - Stripe
Stripe has been chosen as our method of handling payments due to their strict adherence to user security as per the following statement from their website:

> “Stripe has been audited by a PCI-certified auditor and is certified to PCI Service Provider Level 1. This is the most stringent level of certification available in the payments industry. To accomplish this, we make use of best-in-class security tools and practices to maintain a high level of security at Stripe.”  

## 22. Research what your legal obligations are in relation to handling user data
The Privacy Act 1988 doesn’t apply to ESP Gallery as it has an annual turnover of less than $3 million. In saying this, the handing of personal information of customers can seriously impact the ability to maintain business functionality if this data were lost or altered. Necessary measures to do with user authentication and security are in place for this reason. These measures are in accordance with the current Australian laws concerning data security as outlined by the Australian Privacy Principal (APP) 11.1: 

> “taking reasonable steps to protect personal information (including sensitive information) from misuse, interference and loss, as well as unauthorised access, modification or disclosure.”  

ESP Gallery complies with the National Privacy Principles (NPP) and the Privacy Act 1998 (Commonwealth)(CTH). ESP Gallery has a no-share information policy. They do not share user information with third parties. Our client has provided a disclaimer outlining the liabilities and responsibilities for both ESP Gallery and users of the service. This will be presented on the application form on the website.

Only relevant user information that relates to the service will be asked for and will hold only the minimum amount of data needed (data minimization).  Users will be able to access and update their information if need be. This is in compliance with the OAIC as outlined in APP 11.7:

> “while an APP entity should ensure that an individual is authorised to access information, it should not require an individual to supply more information than is necessary to identify themselves when dealing with the entity.”  

The services we are utilizing in the construction of the website were chosen as they maintain a high level of security with personal data. Due to this, personal information will be protected at all stages of the information lifecycle (APP 11.9).