# day44_Lev3_3_projekt_js-vertiefung_kalorien-rechner

**Projekt lev3_3: Kalorien-Rechner - Aufgabenstellung**

Heute werden wir einen Kalorienrechner programmieren.
Zuerst müssen wir den Grundumsatz berechnen. Der Grundumsatz wird anhand der Harris Benedict Formel berechnet.

-   Grundumsatz bei Männern (Kalorien je Tag)

        664,7 + (13,7 _ Körpergewicht in kg) + (5 _ Körpergröße in cm) – (6,8 _ Alter in Jahren) = Grundumsatz

-   Grundumsatz bei Frauen (Kalorien je Tag)

        655,1 + (9,6 _ Körpergewicht in kg) + (1,8 _ Körpergröße in cm) – (4,7 _ Alter in Jahren) = Grundumsatz

! Das Ergebnis wird in Kilokalorien ausgegeben.

Um den Gesamtumsatz auszurechnen, sollte der PAL-Faktor (PAL=Physical Activity Level) mit dem Grundumsatz multipliziert werden.

<table>
<tr>
<th>Körperliche Belastung</th><th>PAL-Faktor</th>
</tr>
<tr>
<td>Schlafen</td><td>0,95</td>
</tr>
<tr>
<td>Nur Sitzen oder Liegen</td><td>1,2</td>
</tr>
<tr>
<td>Ausschließlich sitzende Tätigkeit mit wenig oder keiner körperlichen Aktivität in der Freizeit, z.B. Büroarbeit</td><td>1,5</td>
</tr>
<tr>
<td>Sitzende Tätigkeit mit zeitweilig gehender oder stehender Tätigkeit, z.B. Studierende, Fließbandarbeiter, Laboranten, Kraftfahrer</td><td>1,7</td>
</tr>
<tr>
<td>Überwiegend gehende oder stehende Tätigkeit, z.B. Verkäufer, Kellner, Handwerker, Mechaniker, Hausfrauen</td><td>1,9</td>
</tr>
<tr>
<td>Körperlich anstrengende berufliche Arbeit</td><td>2,2</td>
</tr>
</table>

---

_Source:_ https://github.com/Ninni-cfm/day44_Lev3_3_projekt_js-vertiefung_kalorien-rechner

_Demo:_ https://ninni-cfm.github.io/day44_Lev3_3_projekt_js-vertiefung_kalorien-rechner/
