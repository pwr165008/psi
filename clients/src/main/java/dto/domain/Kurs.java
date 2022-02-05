package dto.domain;

import dto.external.PlanStudiow;

import java.util.List;

public class Kurs {
    private String nazwa;
    private FormaZajec forma;
    private int liczbaGodzin;
    private String kod;
    private List<Grupa> grupy;
    private List<PlanStudiow> planStudiow;
}
