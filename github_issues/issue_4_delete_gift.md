---
name: User Story
about: This template defines a user story
title: 'Delete Gift Listing'
labels: 'new'
assignees: ''

---

**As a** Registered User
**I need** To delete a gift listing I previously created.
**So that** I can remove items that are no longer available or I no longer wish to offer.

### Details and Assumptions
    * User must be logged in and be the owner of the gift listing to delete it.
    * A 'Delete' button should be visible on the gift details page or listing view only for the owner.
    * A confirmation prompt should be displayed before deletion to prevent accidental removal.
    * Backend API endpoint needed to remove the gift data from the database.

### Acceptance Criteria
 ```gherkin
 Given I am logged in
 And I am viewing the details page of a gift I own
 When I click the 'Delete' button
 And I confirm the deletion in the prompt
 Then the gift is removed from the database
 And I am redirected to the main gift listing page
 And the deleted gift no longer appears in the list
 ```

