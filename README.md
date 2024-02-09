# VoMA

VoMA is our vision of what a modern **Vo**lunteer **M**anagement **A**pplication should look like, and is designed with the aim of  helping our NPO, Big At Heart, to streamline administrative  workflows so that they can tailor their efforts towards engaging and providing a better experience for volunteers.

## Features

### Volunteer Dashboard
<img src=/docs/images/VoMA_Dashboard.png height="500" />
View and sign up for available volunteering projects and activities immediately upon registration.

**Recommended for you:** opportunities that are suggested to volunteers based on their skills and interested causes helps to add a personal touch.

### Login and Registration
<img src=/docs/images/VoMA_Login.png width="500" /> <img src=/docs/images/VoMA_Registration.png width="500" />

All volunteers will be managed through this application by tagging their personal information to an account.
They can then register for your volunteering activities using their own account.

### Profile Page
#### 1. Overview
<img src=/docs/images/VoMA_Profile_Overview.png height="500" />

Track your volunteering journey with Big At Heart through your profile overview.

**View volunteer stats:** displaying stats like the number of hours/events volunteered can serve as a motivator by invoking a sense of pride and fulfillment in volunteers.

**Upcoming activities:** view and keep track of all upcoming volunteering projects from the Profile page easily at a glance.

#### 2. Personal Particulars
<img src=/docs/images/VoMA_Profile_PersonalParticulars.png height="500" />

Update personal particulars.

**Immediate updates:** changes to personal information and volunteering activities are saved and applied immediately, removing the need for back-and-forth communication

#### 3. Preferences
<img src=/docs/images/VoMA_Profile_VolunteeringPreferences.png height="500" />

Indicate or update your preferences for different volunteering activities. Publicize your unique skills that will benefit certain volunteering causes.

**Volunteer Matching:** Your preferences and skills will be reviewed, and the recommended volunteering activities are shown to you in the dashboard.

### Volunteering Events
<img src=/docs/images/VoMA_Event_Description.png height="500" />

View the description, requirements and vacancy of a volunteering activity. Simply click register interest to sign up for the volunteering event. :)

## Quick Start
Our application is currently not hosted. Our future plans involves using docker_compose to containerize our backend, frontend, and the database. Then, this single container will be hosted on the web for volunteers and admins to access. We believe this structure will minimize the costs.

### Express Application
1. Make sure you have Node.JS installed.
2. Start a local [Postgres Server](https://www.pgadmin.org/download/) , and use this Schema [MySQLSchema.sql](https://github.com/CJun1039/VoMA/blob/main/backend/Schemas/MySQLSchema.sql "MySQLSchema.sql") to create a new database.
3. In the /backend directory, run the following commands:

    npm install
    npx prisma init
    npx prisma generate
    npm run start

4. For more information, visit [Prisma](https://www.prisma.io/docs/getting-started/quickstart)

### React Frontend
1. Once your express application is running, in the /frontend directory run the following commands:

    npm install
    npm run start

2. Go to http://localhost:3000/dashboard to start exploring VoMA.
3. Login/Signup pages are located at http://localhost:3000/login.

## ER Diagram for our database
![Er Diagram](/docs/images/er_diagram.jpeg)
