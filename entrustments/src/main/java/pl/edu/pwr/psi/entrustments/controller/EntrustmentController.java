package pl.edu.pwr.psi.entrustments.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AuthorizationServiceException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.psi.entrustments.api.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000"})
public class EntrustmentController implements EntrustmentsApi {
    @Override
    public ResponseEntity<EntrustmentFindResponse> findEntrustments(EntrustmentFind entrustmentFind) {
        isOperator();
        var response = new EntrustmentFindResponse();
        response.setEntrustments(List.of(
                makeEntrustment("INZ000013W", "prof.marian@pwr.edu.pl"),
                makeEntrustment("INZ030043L", "prof.marian@pwr.edu.pl"),
                makeEntrustment("INZ010012C", "prof.marian@pwr.edu.pl"),
                makeEntrustment("INZ010012C", "dr.stefan@pwr.edu.pl")
        ));
        response.setCourses(List.of(
                makeCourse("INZ000013W"),
                makeCourse("INZ030043D"),
                makeCourse("INZ010012C")
        ));
        response.setLecturers(List.of(
                makeLecturer("prof.marian@pwr.edu.pl"),
                makeLecturer("dr.stefan@pwr.edu.pl")
        ));
        response.setPreferences(List.of(
                makePreferences("dr.stefan@pwr.edu.pl", "INZ010012C"),
                makePreferences("dr.stefan@pwr.edu.pl", "INZ030043L")
        ));
        response.setLimitations(List.of());
        response.setPastAssignments(List.of(
                makePastAssignment("dr.stefan@pwr.edu.pl", "INZ010012C")
        ));
        return ResponseEntity.ok(response);
    }

    private void isOperator() {
        Jwt sec = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<String> roles = (List<String>) sec.getClaims().get("https://psi.empinet.pl/roles");
        if(!roles.contains("operator")) {
            throw new AuthorizationServiceException("Not permitted");
        }
    }

    private Assignment makePastAssignment(String lecturerId, String courseId) {
        var assignment = new Assignment();
        assignment.setLecturerId(lecturerId);
        assignment.setCourseId(courseId);
        return assignment;
    }

    private Preference makePreferences(String lecturerId, String courseId) {
        var preference = new Preference();
        preference.setLecturerId(lecturerId);
        preference.setCourseId(courseId);
        return preference;
    }

    private Lecturer makeLecturer(String lecturerId) {
        var lecturer = new Lecturer();
        lecturer.setId(lecturerId);
        return lecturer;
    }

    private Course makeCourse(String courseId) {
        var course = new Course();
        course.setId(courseId);
        return course;
    }

    private Entrustment makeEntrustment(String courseId, String lecturerId) {
        var entrustment = new Entrustment();
        entrustment.setEntrustmentId(UUID.randomUUID().toString());
        entrustment.setCourseId(courseId);
        entrustment.setLecturerId(lecturerId);
        return entrustment;
    }
//
//    @Override
//    public ResponseEntity<EntrustmentFindResponse> findEntrustments(String authentication, EntrustmentFind entrustmentFind) {
//
//        return null;
//    }
}
