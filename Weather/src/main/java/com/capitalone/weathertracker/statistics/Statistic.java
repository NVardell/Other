package com.capitalone.weathertracker.statistics;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;

public enum Statistic {
  @JsonProperty("min") MIN,
  @JsonProperty("max") MAX,
  @JsonProperty("average") AVERAGE;

  /**
   * Error handling for improper enum statistic inputs
   * @param value string value
   * @return Statistic object
   */
  @JsonCreator
  static Statistic fromString(String value){
    return Arrays.stream(Statistic.values()).filter(stat -> stat.name().equalsIgnoreCase(value))
            .findFirst()
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.I_AM_A_TEAPOT,
                    "The statistic you tried to calculate (" + value + ") is not currently our cup of tea."));
  }
}
