package pl.edu.pwr.psi.entrustments.controller;

import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import pl.edu.pwr.psi.entrustments.api.EntrustmentFind;

import java.util.List;
import java.util.Map;

@RunWith(MockitoJUnitRunner.class)
public class EntrustmentControllerTest {

    @InjectMocks
    private EntrustmentController entrustmentController;

    @Mock
    private Authentication authentication;

    @Mock
    private Jwt jwt;

    @Test
    public void testFindEntrustments() {
        var entrustmentFind = new EntrustmentFind();
        Map<String, Object> claims = Map.of("https://psi.empinet.pl/roles", List.of("operator"));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        Mockito.when(authentication.getPrincipal()).thenReturn(jwt);
        Mockito.when(jwt.getClaims()).thenReturn(claims);
        var result = entrustmentController.findEntrustments(entrustmentFind);
        Assertions.assertThat(result).isNotNull();
    }
}
