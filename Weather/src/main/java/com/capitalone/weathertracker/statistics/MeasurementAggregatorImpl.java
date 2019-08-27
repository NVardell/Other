package com.capitalone.weathertracker.statistics;

import com.capitalone.weathertracker.measurements.Measurement;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Measurement Aggregator Implementation
 *
 * @since 7/3/2019
 */
@Slf4j
@Service
public class MeasurementAggregatorImpl implements MeasurementAggregator {

    private double calculatedValue;
    private Measurement measurement;

    /**
     * Analyze measurements based on provided metrics and stats
     * @param measurements data collected from weather instruments
     * @param metrics names of fields measurements were taken for
     * @param stats statistical function to be executed on the measurements for the specific metrics
     * @return list of aggregated results
     */
    @Override
    public List<AggregateResult> analyze(List<Measurement> measurements, List<String> metrics, List<Statistic> stats) {

        // If any of the collections are empty - Immediately return empty list
        if(CollectionUtils.isEmpty(measurements) || CollectionUtils.isEmpty(metrics) || CollectionUtils.isEmpty(stats)) {
            return Collections.emptyList();
        }

        List<AggregateResult> metricStatResults = new ArrayList<>();

        // Loop through list of metrics & calculate the stats for them
        metrics.forEach(metric ->
            stats.forEach(statistic -> {

                calculatedValue = 0;
                measurement = null;

                switch(statistic) {
                    case AVERAGE:
                        calculatedValue = measurements.stream()
                                .filter(data -> data.getMetric(metric) != null)
                                .collect(Collectors.averagingDouble(m -> m.getMetric(metric))); break;

                    case MAX:
                        measurement = measurements.stream()
                                .filter(data -> data.getMetric(metric) != null)
                                .max(Comparator.comparingDouble(m -> m.getMetric(metric)))
                                .orElse(null); break;

                    case MIN:
                        measurement = measurements.stream()
                                .filter(data -> data.getMetric(metric) != null)
                                .min(Comparator.comparingDouble(m -> m.getMetric(metric)))
                                .orElse(null); break;

                    default:
                        throw new IllegalStateException("Unexpected statistic value: " + statistic);
                }

                // Add calculated statistic to metricStatResults List to be returned
                if(calculatedValue > 0) {
                    metricStatResults.add(new AggregateResult(metric, statistic, Math.round(calculatedValue * 10) / 10.0));
                } else if(measurement != null) {
                    metricStatResults.add(new AggregateResult(metric, statistic, measurement.getMetric(metric)));
                }
            })
        );

        return metricStatResults;
    }
}
