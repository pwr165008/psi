package pl.edu.pwr.psi.preferences.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import pl.edu.pwr.psi.preferences.service.PreferenceService;

import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class PreferenceControllerTest {
    @InjectMocks
    private PreferenceController preferenceController;

    @Mock
    private PreferenceService preferenceService;

    @Test
    public void testAddPreferences() {
        List<String> requestBody = List.of("INZ0001", "INZ0002");
        preferenceController.addPreferences(requestBody);
        Mockito.verify(preferenceService, Mockito.times(1)).add(requestBody);
    }

    @Test
    public void testListPreferences() {
        preferenceController.listPreferences();
        Mockito.verify(preferenceService, Mockito.times(1)).list();
    }

    @Test
    public void testListAllPreferences() {
        String faculty = "W8";
        String study = "INZ-IO";
        String year = "2021";
        preferenceController.listAllPreferences(faculty, study, year);
        Mockito.verify(preferenceService, Mockito.times(1)).listAll(faculty, study, year);
    }

    @Test
    public void testReplacePreferences() {
        List<String> requestBody = List.of("INZ0001", "INZ0002");
        preferenceController.replacePreferences(requestBody);
        Mockito.verify(preferenceService, Mockito.times(1)).replace(requestBody);
    }

    @Test
    public void testDeletePreferences() {
        List<String> requestBody = List.of("INZ0001", "INZ0002");
        preferenceController.deletePreferences(requestBody);
        Mockito.verify(preferenceService, Mockito.times(1)).delete(requestBody);
    }
}
