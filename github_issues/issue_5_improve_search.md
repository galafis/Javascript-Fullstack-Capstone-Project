---
name: User Story
about: This template defines a user story
title: 'Improve Search Functionality'
labels: 'backlog'
assignees: ''

---

**As a** User searching for gifts
**I need** To be able to sort search results (e.g., by date added, age) and view results in pages.
**So that** I can more easily find relevant gifts, especially when there are many listings.

### Details and Assumptions
    * Add sorting options to the search interface (dropdown or buttons).
    * Implement pagination controls (e.g., 'Next', 'Previous', page numbers) below the search results.
    * Backend API needs to support sorting parameters and pagination (limit, offset/page number).
    * Default sorting should be defined (e.g., most recent first).

### Acceptance Criteria
 ```gherkin
 Given I am on the search results page
 When I select 'Sort by Age (Oldest First)'
 Then the gift listings are reordered with the oldest items appearing first

 Given I am on the search results page with more than 10 results
 When I see the pagination controls
 And I click the 'Next' page button
 Then I see the next set of gift listings (e.g., items 11-20)
 ```

