

print('***Reisekosten berechnen***')

gesamt_bus = int(
    input(print('Einfügen Sie bitte Gesamtkosten für den Reisebus: ')))
hotel_pro_person = int(
    input(print('Einfügen Sie bitte Hotelkosten pro Person: ')))
gesamt_kosten_event = int(input(
    print('Einfügen Sie bitte Gesamtkosten für touristische Events am Zielort: ')))
anzahl_der_personen = int(
    input(print('Einfügen Sie bitte Anzahl der Personen: ')))


gesamt = (hotel_pro_person*anzahl_der_personen)+gesamt_bus+gesamt_kosten_event

print('Die Gesamtkosten betragen ist: ' + str(gesamt))
print('Die Kosten pro Person sind: ' + str((gesamt/anzahl_der_personen)))
print('Viel Erfolg!')
