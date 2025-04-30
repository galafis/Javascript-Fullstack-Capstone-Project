---
name: User Story
about: This template defines a user story
title: 'Frontend Styling and Responsiveness Improvements'
labels: 'backlog'
assignees: ''

---

**As a** User accessing the site on different devices
**I need** The application interface to be visually appealing and adapt correctly to various screen sizes (desktop, tablet, mobile).
**So that** I have a good user experience regardless of the device I use.

### Details and Assumptions
    * Review current CSS and Bootstrap usage.
    * Identify areas where styling can be improved for better aesthetics (e.g., spacing, alignment, color consistency).
    * Test the application on different screen resolutions and browsers.
    * Implement responsive design techniques (e.g., media queries, flexible layouts) where needed.
    * Ensure components like the navbar, forms, and gift listings display correctly on smaller screens.

### Acceptance Criteria
 ```gherkin
 Given I open the application on a mobile device
 When I navigate through different pages (login, register, main list, details, search)
 Then all elements are displayed correctly without horizontal scrolling or overlapping text/images
 And interactive elements (buttons, inputs) are easily tappable

 Given the application is viewed on a desktop browser
 When the window is resized to simulate tablet or mobile widths
 Then the layout adjusts smoothly and remains usable
 ```

