package com.boot.cucumber;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.BootstrapWith;
import org.springframework.web.client.RestTemplate;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

//@SpringBootTest
//@BootstrapWith
public class CucumberSteps  {
//public class CucumberSteps extends SpringIntegrationTest {

    RestTemplate restTemplate;
    ResponseEntity<String> response;

    @cucumber.api.java.en.When("the user requests \\/home")
    public void theUserRequestsHome() {
        restTemplate = new RestTemplate();
        response = restTemplate.getForEntity("http://localhost:8080/home", String.class);
    }
    @cucumber.api.java.en.Then("the user receives status code of {int}")
    public void theUserReceivesStatusCodeOf(int statusCode) {
        HttpStatus currentStatusCode = response.getStatusCode();
        assertThat("status code is incorrect : "+ response.getBody(), currentStatusCode.value(), is(statusCode));
    }
    @cucumber.api.java.en.And("the user sees the Home message")
    public void theUserSeesTheHomeMessage() {
        assertThat(response.getBody(), is("HOME! <3"));
    }
}
