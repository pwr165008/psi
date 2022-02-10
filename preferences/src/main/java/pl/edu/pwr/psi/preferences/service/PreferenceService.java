package pl.edu.pwr.psi.preferences.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pwr.psi.preferences.api.Preference;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PreferenceService {

    public List<String> add(String email, List<String> requestBody) {
        return null;
    }

    public List<String> delete(String email, List<String> requestBody) {
        return null;
    }

    public List<Preference> listAllPreferences(String faculty, String study, String year) {
        return null;
    }

    public List<String> listPreferences(String email) {
        return null;
    }

    public List<String> replacePreferences(String email, List<String> requestBody) {
        return null;
    }
}
