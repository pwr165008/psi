package pl.edu.pwr.psi.powierzenia.domain;

import pl.edu.pwr.psi.powierzenia.external.PlanStudiow;

import java.util.List;

public class Kurs {
    private String nazwa;
    private FormaZajec forma;
    private int liczbaGodzin;
    private String kod;
    private List<Grupa> grupy;
    private PlanStudiow planStudiow;
}
