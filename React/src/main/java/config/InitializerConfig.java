package config;

import com.other.react.group.Event;
import com.other.react.group.Group;
import com.other.react.group.GroupRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
public class InitializerConfig implements CommandLineRunner {

    private final GroupRepo repo;

    public InitializerConfig(GroupRepo repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("\n\n\nBAM BAM BAM\n\n\n");

        Stream.of("Denver JUG", "Utah JUG", "Seattle JUG",
                "Richmond JUG").forEach(name ->
                repo.save(new Group(name))
        );

        Group djug = repo.findByName("Denver JUG");
        Event e = Event.builder().title("Full Stack Reactive")
                .description("Reactive with Spring Boot + React")
                .date(Instant.parse("2018-12-12T18:00:00.000Z"))
                .build();
        djug.setEvents(Collections.singleton(e));
        repo.save(djug);

        repo.findAll().forEach(System.out::println);
    }
}
