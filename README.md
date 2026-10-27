
================================================

Zawartość paczki
  index.html               – cała gra (jeden plik, bez zewnętrznych zależności)
  manifest.webmanifest     – opis aplikacji (nazwa, ikony, kolory)
  sw.js                    – service worker (działanie bez internetu po pierwszym wejściu)
  cover.webp               – grafika ekranu startowego
  face1-5.webp             – twarze hominidów na torze ewolucji
  corner.webp              – grafika w rogu planszy (z menu głównego)
  icon-v3-*.png, apple-touch-icon-v3.png, favicon-v3.png – ikony (nowe logo)

Ważne: wszystkie pliki muszą leżeć w tym samym folderze na serwerze

Aktualizacja gry
  Podmień index.html, a w sw.js zwiększ numer wersji (const V='civitas-v2' itd.),
  inaczej telefony mogą jeszcze jakiś czas pokazywać starą wersję.

Test lokalny (opcjonalnie)
  W folderze z plikami uruchom:  python3 -m http.server 8000
  i wejdź na http://localhost:8000


Gra online (wersja 2)
  - Na ekranie startowym: „Gra online” → „Załóż pokój” (gospodarz) lub wpisz kod i „Dołącz” (pozostali, do 4 osób razem).
  - Połączenie idzie bezpośrednio między przeglądarkami (PeerJS/WebRTC). Wymaga internetu i działającej strony z biblioteką
    ładowaną z cdn.jsdelivr.net. Własny serwer gry nie jest potrzebny.
  - Przeglądarka gospodarza działa jak serwer: jej karta musi być otwarta przez całą grę.
  - W części sieci (np. niektóre mobilne i firmowe) połączenie może się nie udać, bo nie ma własnego serwera TURN.
  - Rozłączony gracz nie może wrócić do tej samej partii, jego tury są pomijane.
  - Nie jest to zabezpieczone przed oszustwami: gospodarz widzi wszystko, a gracze mogą ingerować w kod w przeglądarce.
  - Przy aktualizacji pamiętaj o zwiększeniu wersji w sw.js (teraz civitas-v14).

Zmiana ikony na Androidzie (wersja 0.0.3)
  - Ikony mają nowe nazwy (…-v3), żeby przeglądarki nie używały starych z pamięci podręcznej.
  - Na GitHubie usuń stare pliki: icon-192.png, icon-512.png, icon-512-maskable.png, apple-touch-icon.png, favicon.png.
  - Zainstalowana aplikacja na Androidzie odświeża ikonę sama dopiero po jakimś czasie (do kilku dni).
    Najszybciej: odinstaluj aplikację z ekranu głównego, w Chrome wyczyść dane strony i zainstaluj ponownie.

Wersja 0.0.4
  - Zapis gry: Menu → „Zapisz grę” (tylko gra na jednym urządzeniu). Zapis trafia do pamięci przeglądarki na tym urządzeniu,
    więc nie przenosi się między telefonami i znika po wyczyszczeniu danych strony. Wczytanie: ekran startowy → „Wczytaj grę”.
  - „Wyjście z gry” zamyka okno zainstalowanej aplikacji. W zwykłej karcie przeglądarki system tego zwykle blokuje.
  - Plansza ma przyciski + i −. Poziom powiększenia jest zapamiętywany.

Wersja 0.0.5
  - Nowy wygląd planszy: nocny ocean, tytuł na planszy, karty faz z sylwetkami, Targ z kartami cech, kompas,
    kolorowe heksy z rzymską cyfrą strefy oraz zachód słońca z akacją w pustym rogu mapy.

Wersja 0.0.6
  - 5 faz (Habilis, Ergaster, Erectus, Antecessor, Sapiens), tor 30 pkt, progi: II = 5, III = 12, IV = 20, V = 30 (koniec gry).
  - Strefa V na planszy wymaga fazy IV, bo faza V kończy grę.
  - Madagaskar jest tylko ozdobą (bez pól). Targ służy tylko do podglądu.
  - Poprawiony błąd: pod koniec talii rynek mógł zostać pusty po wielokrotnym tasowaniu.

Wersja 0.0.7
  - Tor ewolucji ma 40 pkt (stała TRACK w index.html). Faza V trwa od 30 pkt do końca toru, a koniec toru kończy grę.
  - Strefa V wymaga fazy V.
  - Pola stref II–V leżą rewersem i odkrywają się po wejściu pierwszej grupy. Teren jest losowany w każdej grze.
  - Liczba zestawów kart = liczba graczy (min. 2).

Wersja 0.0.8
  - Gra z komputerem (poziomy: Łatwy, Średni, Trudny; 1–3 przeciwników): Ekran startowy → Gra na tym urządzeniu → Gra z komputerem.
  - Gra wieloosobowa na jednym ekranie jest osobną opcją w tym samym menu.
  - Z planszy usunięto podpis „Półwysep Arabski” i kompas.
  - Osobny plik civitas_elementy_gry.xlsx zawiera listę wszystkich elementów gry z ilościami dla 2, 3 i 4 graczy.

Wersja 0.0.9
  - Tor ewolucji (0–40 pkt) z twarzami hominidów przy właściwych fazach: Homo habilis, ergaster, erectus, antecessor, sapiens.
  - Pod torem znaczniki graczy, które przesuwają się na bieżąco po zdobyciu punktów ewolucji.

Wersja 0.1.0
  - Poprawki wyświetlania na telefonach: poziomy ekran startowy pokazuje całą grafikę, a menu leży z boku; obsługa wcięć ekranu; mniejsze domyślne powiększenie planszy; przycisk ⤢ dopasowuje planszę do ekranu.
  - Półwysep Arabski i Madagaskar są wyszarzone (bez pól) i mają dokładniejszy kształt.
  - „Targ” przemianowany na „Rynek Cech”.
  - Mniejsza nazwa gry na planszy, a w rogu mapy grafika z menu głównego.

Wersja 0.1.1
  - Naprawiono przycinanie ekranu na telefonie: szeroki tor ewolucji rozciągał całą planszę poza ekran.
  - Układ: u góry tytuł i panel akcji, pośrodku mapa i Rynek Cech, pod mapą tor ewolucji (na telefonie przewijany w poziomie).
  - Linia brzegowa Synaju, Morza Czerwonego i Półwyspu Arabskiego narysowana na podstawie rzeczywistych współrzędnych (przeliczonych na układ planszy).
  - Usunięto z panelu u góry licznik faz graczy (poziom graczy widać na torze ewolucji pod mapą).
