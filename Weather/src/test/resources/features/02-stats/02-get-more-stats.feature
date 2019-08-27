@new
Feature: Get more statistics
  In order to understand trends of measurements
  I want to be able to get statistics over specified periods of time

  Background:
    Given I have submitted new measurements as follows:
      | timestamp                  | temperature | dewPoint |
      | "2015-09-01T16:00:00.000Z" | 27.1        | 16.9     |

  Scenario: Get stats for the one reported metric
    # GET /stats?<params...>
    When I get stats with parameters:
      | param        | value                    |
      | stat         | min                      |
      | metric       | temperature              |
      | fromDateTime | 2015-09-01T16:00:00.000Z |
      | toDateTime   | 2015-09-01T16:00:00.000Z |
    Then the response has a status code of 200
    And the response body is an empty array
    # Because the 'toDateTime' is exclusive.


  Scenario: Get stats for times that don't exist in measurements
     # GET /stats?<params...>
    When I get stats with parameters:
      | param        | value                    |
      | stat         | min                      |
      | stat         | max                      |
      | stat         | average                  |
      | metric       | dewPoint                 |
      | fromDateTime | 2015-09-01T17:00:00.000Z |
      | toDateTime   | 2015-09-01T18:00:00.000Z |
    Then the response has a status code of 200
    And the response body is an empty array


  Scenario: Get stats for a statistical function that doesn't exist
     # GET /stats?<params...>
    When I get stats with parameters:
      | param        | value                    |
      | stat         | DNE                      |
      | metric       | dewPoint                 |
      | fromDateTime | 2015-09-01T16:00:00.000Z |
      | toDateTime   | 2015-09-01T17:00:00.000Z |
    Then the response has a status code of 418
      
      
      