# AI Safety Incident Dashboard

Overview

The AI Safety Incident Dashboard is an interactive web component that allows users to view and manage a list of AI safety incidents. It supports filtering and sorting incidents by severity and reported date, displays detailed information about each incident, and allows users to report new incidents.


Features

1. Display a list of AI safety incidents with Title, Severity, and Reported Date.
2. Filtering controls to filter the incidents by Severity (All, Low, Medium, High).
3. Sorting controls to sort the list by Reported Date (Newest First, Oldest First).
4. Arrow buttons that toggles the visibility of a full Description for each incident.
5. Report New Incident form that lets users submit new incidents with a Title, Description, and Severity.
6. Responsive Layout using Flexbox and clean styling with hover effects.


Tech Stack

HTML: Used for the basic structure of the dashboard.
CSS: Used for styling and creating a responsive layout with Flexbox.
JavaScript: Used for interactivity and state management in the dashboard.
React: Framework for building the UI and handling component-based architecture.


Setup Instructions

Prerequisites

Node.js (v14 or higher)
npm (for package management)


Install Dependencies

1. clone this repository to your local machine: git clone https://github.com/HimagiriNandan/ai-safety-dashboard.git
2. Navigate to the project directory: cd ai-safety-dashboard
3. Install the project dependencies: npm install
4. Run project in your local machine: npm run dev
   

Design Decisions

State Management:

For local state management, React's useState hook was used to handle the list of incidents, as well as the toggling of incident details and form visibility.
Global state management was implemented using React’s useContext to share the incident data across components, making it easier to manage the state globally without the need for prop drilling.

Component Structure:

The components were organized into smaller, reusable components for better maintainability and readability. These include:

IncidentList: Manages the display of the list of incidents.
ReportIncidentForm: Handles the submission of new incidents.
FilterSortControl: Contains controls for filtering and sorting the incidents.

The project’s structure is divided into separate folders for better organization:

components: Contains all React component files.
styles: Holds all the CSS/SCSS styles.
context: Stores the useContext provider and global state logic.

Flexbox Layout: The layout was designed using Flexbox to ensure the dashboard remains responsive across various screen sizes, providing a smooth user experience on both desktops and mobile devices.

Input Validation: Basic input validation was added to ensure that the Title, Description, and Severity fields are not empty before allowing the form to be submitted. This validation ensures that all necessary data is provided for each incident.

Contributing
Feel free to fork this repository and create pull requests if you have any suggestions or improvements. All contributions are welcome!


Desktop View:

![Screenshot_20250503_122946](https://github.com/user-attachments/assets/cd2efa4d-f3dd-4010-bad1-5fe6d7890054)


![Screenshot_20250503_122930](https://github.com/user-attachments/assets/2f1d52a0-5bf0-4b2b-9671-f3d606becf36)


Mobile view:

![{0F1FD7CB-73FB-47C7-B5E4-01089B4660EF}](https://github.com/user-attachments/assets/357589cd-01f4-481b-a195-7b7f1ae0886d)





###################### Thanks for visiting ################################
