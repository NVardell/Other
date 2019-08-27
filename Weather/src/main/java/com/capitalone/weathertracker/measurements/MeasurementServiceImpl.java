package com.capitalone.weathertracker.measurements;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Measurement Store Implementation
 *
 * @since 7/3/2019
 */
@Slf4j
@Service
public class MeasurementServiceImpl implements MeasurementStore, MeasurementQueryService {

    private Map<ZonedDateTime, Measurement> historicalData;

    /**
     * Adds a new measurement to the historical data map
     * @param measurement measurement data
     */
    @Override
    public void add(Measurement measurement) {

        if(CollectionUtils.isEmpty(historicalData)) {
            historicalData = new HashMap<>();
        }

        log.info("Adding new measurement data to archives.");
        historicalData.put(measurement.getTimestamp(), measurement);
    }

    /**
     * Gets measurement data for specific time
     * @param timestamp time of measurement entry
     * @return measurement data
     */
    @Override
    public Measurement fetch(ZonedDateTime timestamp) {
        log.info("Fetching measurement data for timestamp = {}", timestamp);
        return historicalData.get(timestamp.withZoneSameInstant(ZoneId.of("UTC")));
    }

    /**
     * Get a list of measurements taken between two different timestamps
     * @param from timestamp of first event
     * @param to timestamp of last event
     * @return list of measurements
     */
    @Override
    public List<Measurement> queryDateRange(ZonedDateTime from, ZonedDateTime to) {

        log.info("Querying measurements for entries within the given data range. ({} - {})", from, to);

        return historicalData.entrySet().stream()
                // Loop through the keys of the map and filter out entries based on timestamp inputs
                .filter(entry -> entry.getKey().isEqual(from) && !entry.getKey().isEqual(to)
                        || entry.getKey().isAfter(from) && entry.getKey().isBefore(to))
                // Get Measurement value from map for filtered results
                .map(Map.Entry::getValue)
                // Collect measurements & return them in a list
                .collect(Collectors.toList());
    }
}
