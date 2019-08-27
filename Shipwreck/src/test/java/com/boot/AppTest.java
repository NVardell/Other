package com.boot;

import com.boot.controller.HomeController;
import org.junit.Ignore;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AppTest {

    @Test
//    @Ignore
    public void testApp() {
        HomeController homeController = new HomeController();
        String result = homeController.home();
        assertEquals(result, "HOME! <3");
    }
}
