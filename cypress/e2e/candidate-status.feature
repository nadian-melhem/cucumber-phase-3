Feature: Managing Candidate Statuses
    Background:
        Given Admin login to the system
        Given Admin added new employee
        Given Admin added a new Job title
        Given Admin added a new vacancy
        Given Admin added a new candidate
        Given Admin ShortListed the added candidate
        Given Admin sheceduled Interview to the added candidate
        Given User log out

    Scenario: Candidate Interview Passed Verification
        When Admin login to the system
        When Admin Access the candidate form
        When Change the candidate status to "Interview Passed"
        Then The Admin should successfully transition the candidate's status to "Interview Passed"
        Then Emphasize the modification of status "Interview Passed"

    Scenario: Candidate Interview Failed Verification
        When Admin login to the system
        When Admin Access the candidate form
        When Change the candidate status to "Interview Failed"
        Then The Admin should successfully transition the candidate's status to "Interview Failed"
        Then Emphasize the modification of status "Interview Failed"