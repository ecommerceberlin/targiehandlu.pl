

### Przycisk rejestracji jest interaktywny

* bada liczbę zgłoszeń w pipeline (nierozstrzygniętych na TAK/NIE) 
* staje się nieaktywny jeśli liczba zgłoszeń "agreed" jest większa lub równa limitowi (ustawienie w "settings"...ustawione na 25)
* w (niektorych) tłumaczeniach można korzystać ze zmiennych 
    %{limit} 
    %{pipeline} 
    %{agreed} 
    %{venue} 
    %{time} 
    %{title}

### Flow zgłoszenia

jest podobny do tego jaki jest na profilach targowych

* jeśli wprowadzony email widnieje w bazie visitorsów - zgłoszenie jest automatycznie tworzone

* jeśli nie przeprowadzony jest proces rejestracji i zgłoszenia 

zabezpieczenia
* przed podwójnym zgłoszeniem na tę samą prezentacje














### /workshop-visitor-check

example payload sent

    {
    company_id: 2172
    email: "sss@yyy.pl"
    rel_participant_id: 156030
    }


#### statuses

* register
* already_assigned
* assigned
* over_limit
* error


## TODO

badać rownoleglosc zapisów jesli chodzi o presentation_time!
badać liczbe nierozstrzygniętych zapisów (responded_at = NULL)
nie pozwalac na akcept > 25 przez admina
powiadomienia