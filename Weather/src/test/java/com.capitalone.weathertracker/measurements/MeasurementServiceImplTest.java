package com.capitalone.weathertracker.measurements;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;
import org.junit.Test;

import java.io.IOException;
import java.time.OffsetDateTime;


/**
 * TODO - Add Class Definition
 *
 * @author Nate Vardell
 * @since 8/14/2019
 */
class MeasurementServiceImplTest {


    @Test
    public void testJacksonOffsetDateTimeDeserializer() throws IOException {
//        ObjectMapper mapper = new ObjectMapper().registerModule(new JavaTimeModule());
//        ObjectMapper mapper2 = new ObjectMapper();
//        mapper.findAndRegisterModules();
//        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
//        ObjectMapper mapper = JsonMapper.builder()
//                .addModule(new ParameterNamesModule())
//                .addModule(new Jdk8Module())
//                .addModule(new JavaTimeModule())
//                // and possibly other configuration, modules, then:
//                .build();
        // Up to Jackson 2.9: (but not with 3.0)
        ObjectMapper mapper = new ObjectMapper()
                .registerModule(new ParameterNamesModule())
                .registerModule(new Jdk8Module())
                .registerModule(new JavaTimeModule()); // new module, NOT JSR310Module

        String json = "\"2015-10-20T11:00:00-8:30\"";
        mapper.readValue(json, OffsetDateTime.class);
    }

}