package pl.edu.pwr.psi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
        "pl.edu.pwr.psi.entrustments",
        "pl.edu.pwr.psi.preferences",
        "pl.edu.pwr.psi.templates",
//        "pl.edu.pwr.psi",
})
public class Api {
    public static void main(String[] args) {
        SpringApplication.run(Api.class, args);
    }
}
