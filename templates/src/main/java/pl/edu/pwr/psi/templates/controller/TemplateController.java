package pl.edu.pwr.psi.templates.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.psi.templates.api.Template;
import pl.edu.pwr.psi.templates.api.TemplatesApi;
import pl.edu.pwr.psi.templates.service.TemplateService;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:6006"})
public class TemplateController implements TemplatesApi {

    private final TemplateService templateService;

    @Override
    public ResponseEntity<Template> getTemplate(String id) {
        return ResponseEntity.ok(makeTemplate("W8", "IO", "Coś się zmieniło w systemie powierzeń."));
    }

    @Override
    public ResponseEntity<List<Template>> listTemplates() {
        return ResponseEntity.ok(List.of(
                makeTemplate("W8", "IO", "Coś się zmieniło."),
                makeTemplate("W8", "ZZZ", "Zobacz zmiany."),
                makeTemplate("W4n", "IO", "Nowości.")
        ));
    }

    private Template makeTemplate(String faculty, String study, String message) {
        Template template = new Template();
        template.setId(UUID.randomUUID().toString());
        template.setFaculty(faculty);
        template.setStudy(study);
        template.setMessage(message);
        return template;
    }
}
