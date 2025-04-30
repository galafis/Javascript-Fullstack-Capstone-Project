---
name: User Story
about: This template defines a user story
title: 'User Profile Page'
labels: 'new'
assignees: ''

---

**As a** Registered User
**I need** To view and edit my profile information (name, email, maybe password).
**So that** I can keep my account details up-to-date.

### Details and Assumptions
    * User should be able to access a dedicated profile page.
    * Fields like first name, last name should be editable.
    * Email might be read-only or require a verification process if changed.
    * Password change functionality should be included, requiring current password for verification.
    * Backend API endpoint needed to fetch and update user data.

### Acceptance Criteria
 ```gherkin
 Given I am logged in
 When I navigate to the profile page
 Then I see my current first name, last name, and email address

 Given I am on the profile page
 When I update my first name and click save
 Then my first name is updated in the system and displayed correctly

 Given I am on the profile page
 When I attempt to change my password with the correct current password
 Then my password is updated successfully
 ```

