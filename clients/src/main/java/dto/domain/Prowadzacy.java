package dto.domain;

import java.util.List;

public abstract class Prowadzacy {
    private Osoba osoba;
    private int limitGodzin;
    private int liczbaGodzin;
    private int pensum;
    private List<Specjalizacja> specjalizacje;
    private List<Kurs> preferencje;
    private List<OpiekaNadPracaDyplomowa> praceDyplomowe;
    private List<OpiekaNadRozprawaDoktorska> rozprawyDoktorskie;
}
