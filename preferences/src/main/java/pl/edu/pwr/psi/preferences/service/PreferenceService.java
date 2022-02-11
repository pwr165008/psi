package pl.edu.pwr.psi.preferences.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import pl.edu.pwr.psi.preferences.api.Preference;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PreferenceService {

    public List<String> add(List<String> requestBody) {
//        getEmail();
        return null;
    }

    public List<String> delete(List<String> requestBody) {
//        getEmail();
        return null;
    }

    public List<Preference> listAll(String faculty, String study, String year) {
        return null;
    }

    public List<String> list() {
//        getEmail();
        return null;
    }

    public List<String> replace(List<String> requestBody) {
//        getEmail();
        return null;
    }

    private String getEmail() {
        Jwt sec = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return (String) sec.getClaims().get("https://psi.empinet.pl/email");
    }
}
