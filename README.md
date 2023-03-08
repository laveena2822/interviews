# Provus Interview Project: Setup

1. First, clone this repository to your local machine.
2. Next, create a new branch with the following format: `name_location_role_provus_test`. Be sure to replace `name` with your own name, and `location` with your current location (e.g. city or country), `role` with your position or role on the project. This will help us to identify your branch and ensure that everyone is working on the correct code.
3. Choose your preferred Integrated Development Environment (IDE) and connect to the scratch org using the credentials that were sent to your email. These credentials will allow you to access the development environment and begin working on the project.
4. Deploy the force-app to the scratch org to ensure that you have the latest code and can begin developing. You can do this by following the deployment instructions provided in the repository.
5. Finally, assign the permission set `Provus_Quoting` to your scratch org User.


By following these instructions, you'll be able to set up your development environment and start working on the project right away. Let us know if you have any questions or issues with the setup process.

# Approach used
1. Used the QuoteDto class as a wrapper created fields in that class that are required and pass there values from constructor.
2. Created a controller class listed methods there to get the data and update the data.
3. Make changes in the lwc component according to the requirement first fetched the data using wire and then updated the data on click of save button.
4. Also I have tried to approach the dialog box task Till the time I was only able to open the model used adjustQuotePrice as a modal component.