---
name: User Story
about: This template defines a user story
title: 'Add New Gift Listing'
labels: 'new'
assignees: ''

---

**As a** Registered User
**I need** To add a new gift listing with details like name, description, category, condition, age, and image.
**So that** I can offer items for others to find.

### Details and Assumptions
    * User must be logged in to add a gift.
    * A form should be provided to input gift details.
    * Image upload functionality is required.
    * Backend API endpoint needed to save the new gift data, including the image reference.
    * Input validation should be implemented (e.g., required fields, image format/size).

### Acceptance Criteria
 ```gherkin
 Given I am logged in
 When I navigate to the 'Add Gift' page/form
 And I fill in all required details (name, description, category, condition, age)
 And I upload a valid image
 And I click the 'Submit' or 'Add Gift' button
 Then the gift is successfully added to the database
 And I am redirected to the main page or the details page of the newly added gift
 And the new gift appears in the list of available gifts
 ```

