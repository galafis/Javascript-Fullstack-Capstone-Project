---
name: User Story
about: This template defines a user story
title: 'Implement Sentiment Analysis Display'
labels: 'icebox'
assignees: ''

---

**As a** User viewing gift details
**I need** To see an indicator of the general sentiment (positive/negative) associated with the gift, perhaps based on its description or future comments.
**So that** I can quickly gauge the perceived quality or desirability of the gift.

### Details and Assumptions
    * The backend already has a placeholder `sentiment/index.js` using the `natural` library.
    * This task involves calculating the sentiment score for a gift's description (or comments, once implemented) and displaying it on the frontend.
    * The display could be a simple icon (smiley/frowny face), a score, or a textual label (Positive/Negative/Neutral).
    * Backend API needs modification to calculate and return the sentiment score along with gift details.
    * Frontend needs modification to display the sentiment indicator on the gift details page.

### Acceptance Criteria
 ```gherkin
 Given I am viewing the details page of a gift
 When the page loads
 Then I see a sentiment indicator (e.g., 'Positive Sentiment') displayed near the gift description

 Given a gift has a very positive description
 When its sentiment is calculated
 Then the displayed sentiment indicator reflects a positive score/label
 ```

