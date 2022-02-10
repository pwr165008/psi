package pl.edu.pwr.psi.preferences.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.psi.preferences.api.Preference;
import pl.edu.pwr.psi.preferences.api.PreferencesApi;
import pl.edu.pwr.psi.preferences.service.PreferenceService;

import java.util.List;


@RestController
@RequiredArgsConstructor
@CrossOrigin
public class PreferenceController implements PreferencesApi {
    private final PreferenceService preferenceService;

    @Override
    public ResponseEntity<List<String>> addPreferences(List<String> requestBody) {
        return ResponseEntity.ok(preferenceService.add(getEmail(), requestBody));
    }

    @Override
    public ResponseEntity<List<String>> deletePreferences(List<String> requestBody) {
        return ResponseEntity.ok(preferenceService.delete(getEmail(), requestBody));
    }

    @Override
    public ResponseEntity<List<Preference>> listAllPreferences(String faculty, String study, String year) {
        return ResponseEntity.ok(preferenceService.listAllPreferences(faculty, study, year));
    }

    @Override
    public ResponseEntity<List<String>> listPreferences() {
        return ResponseEntity.ok(preferenceService.listPreferences(getEmail()));
    }

    @Override
    public ResponseEntity<List<String>> replacePreferences(List<String> requestBody) {
        return ResponseEntity.ok(preferenceService.replacePreferences(getEmail(), requestBody));
    }

    private String getEmail() {
        Jwt sec = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return (String) sec.getClaims().get("https://psi.empinet.pl/email");
    }
}
