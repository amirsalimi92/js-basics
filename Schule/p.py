#!/usr/bin/env python
# ------------------------------------------------------
# Dateiname: reise.py
# Berechnung des Kostenplans für eine Reise
#
# Python 3
# Kapitel 3
# Michael Weigend, 15.06.2019
# -----------------------------------------------------
print("Kostenplan für eine Reise")
print("-------------------------")

bus = 0
hotel = 0
events = 0
personen = 0

# Eingabe
while bus == 0:
    try:
        bus = float(input("Kosten für den Reisebus: "))
    except ValueError:
        print("Bitte geben Sie Centbetraege mit einem Punkt (.) ein z.B.: 0,99 -> 0.99 . Es duerfen keine Kommas, Leerzeichen oder Buchstaben verwendet werden!")
        input()

while hotel == 0:
    try:
        hotel = float(input("Hotelkosten pro Person: "))
    except:
        print("Bitte geben Sie Centbetraege mit einem Punkt (.) ein z.B.: 0,99 -> 0.99 . Es duerfen keine Kommas, Leerzeichen oder Buchstaben verwendet werden!")
        input()

while events == 0:
    try:
        events = float(input("Gesamtkosten für touristische Events: "))
    except:
        print("Bitte geben Sie Centbetraege mit einem Punkt (.) ein z.B.: 0,99 -> 0.99 . Es duerfen keine Kommas, Leerzeichen oder Buchstaben verwendet werden!")
        input()

while personen == 0:
    try:
        personen = int(input("Anzahl der Teilnehmer: "))
    except:
        print("Bitte geben Sie Centbetraege mit einem Punkt (.) ein z.B.: 0,99 -> 0.99 . Es duerfen keine Kommas, Leerzeichen oder Buchstaben verwendet werden!")
        input()


# Verarbeitung
gesamtkosten = bus + events + personen*hotel
kostenProPerson = gesamtkosten/personen

# Ausgabe
print()
print("Die Gesamtkosten betragen", gesamtkosten, "EUR.")
print("Die Kosten pro Person sind", kostenProPerson, "EUR.")

input()
