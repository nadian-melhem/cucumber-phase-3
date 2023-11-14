Feature: Upload Candidate Resume for Hired Status
  Background:
    Given Admin login to the system
    Given Admin added new employee
    Given Admin added a new Job title
    Given Admin added a new vacancy
    Given Admin added a new candidate
    Given Admin ShortListed the added candidate
    Given Admin sheceduled Interview to the added candidate
    Given Admin Access the candidate form
    Given Change the candidate status to "Interview Passed"
    Given Change the candidate status to "Offer Job"
    Given User log out

  Scenario: Verify User can upload a txt file for Hired
    When Admin login to the system
    When Admin Access the candidate form
    When Admin Enable Edit candidate switch
    When Upload a txt file to the Resume section
    When Save the form
    When Download the uploaded file
    Then The uploaded file should contain the same data as was uploaded
