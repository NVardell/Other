package com.fasterxml.jackson.datatype.jsr310;

import java.time.YearMonth;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class TestYearMonthKeySerialization {

    private static final TypeReference<Map<YearMonth, String>> TYPE_REF = new TypeReference<Map<YearMonth, String>>() {
    };

    private ObjectMapper om;
    private Map<YearMonth, String> map;

    @Before
    public void setUp() {
        om = JsonMapper.builder()
                .addModule(new JavaTimeModule())
                .build();
        map = new HashMap<>();
    }

    @Test
    public void testSerialization() throws Exception {
        map.put(YearMonth.of(3141, 5), "test");

        String value = om.writeValueAsString(map);

        Assert.assertEquals("Value is incorrect", map("3141-05", "test"), value);
    }

    @Test
    public void testDeserialization() throws Exception {
        Map<YearMonth, String> value = om.readValue(map("3141-05", "test"), TYPE_REF);

        map.put(YearMonth.of(3141, 5), "test");
        Assert.assertEquals("Value is incorrect", map, value);
    }

    private String map(String key, String value) {
        return String.format("{\"%s\":\"%s\"}", key, value);
    }

}
