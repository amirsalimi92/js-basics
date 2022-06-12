

print('***Kostenplan für eine Reise***')
print('-------------------------------')


gesamt_bus = int(
    input('Einfügen Sie bitte Gesamtkosten für den Reisebus: '))
hotel_pro_person = int(
    input('Einfügen Sie bitte Hotelkosten pro Person: '))
gesamt_kosten_event = int(input(
    'Einfügen Sie bitte Gesamtkosten für touristische Events am Zielort: '))
anzahl_der_personen = int(
    input('Einfügen Sie bitte Anzahl der Personen: '))


gesamt = (hotel_pro_person*anzahl_der_personen)+gesamt_bus+gesamt_kosten_event

print('\n')
print('Die Gesamtkosten betragen ist: ' + str(gesamt))
print('Die Kosten pro Person sind: ' + str((gesamt/anzahl_der_personen)))
print('\n')
print('Viel Erfolg!')
