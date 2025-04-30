---
name: User Story
about: This template defines a user story
title: 'Edit Existing Gift Listing'
labels: 'new'
assignees: ''

---

**As a** Registered User
**I need** To edit the details of a gift listing I previously created.
**So that** I can correct mistakes or update information (e.g., if the item's condition changes).

### Details and Assumptions
    * User must be logged in and be the owner of the gift listing to edit it.
    * An 'Edit' button should be visible on the gift details page only for the owner.
    * Clicking 'Edit' should lead to a form pre-filled with the current gift details.
    * User should be able to modify fields like name, description, category, condition, age, and image.
    * Backend API endpoint needed to update the gift data in the database.

### Acceptance Criteria
 ```gherkin
 Given I am logged in
 And I am viewing the details page of a gift I own
 When I click the 'Edit' button
 Then I am taken to a form with the current gift details pre-filled

 Given I am on the edit gift form
 When I change the description and upload a new image
 And I click the 'Save Changes' button
 Then the gift details are updated in the database
 And I am redirected to the updated gift details page
 And the changes (description and image) are visible
 ```

