Dzień dobry podrzucam punktację i informację o funkcjonalnościach projektu:
1. 0.5p za dzielenie grafiki: 
	grafikę dzielę w klasie "tile" przy pomocy background position,
	co pozwoliło mi na umieszczenie tam gifów
2. 0.5p za slider w js'ie:
	stary dobry flex i id na elementach z background img, 
	a od tego wykorzystanie querySelectora i scroll behaviour smooth i auto
3. 1p za przesuwanie działające na zasadzie zamiany z sąsiadem:
	sprawdzam czy kliknięty tile znajduje się w tej samej kolumnie/rzędzie co pusty, 
	a następnie sprawdzam czy jest o jedno pole obok
4. 1p czas gry z zakończeniem co 1ms:
	zrobiłem własne literki w photoshopie, a timer rozstawia się i rusza po kliknięciu przycisku gry,
	jest w pełni zgodny z końcowym overlayem
	disclaimer: może pojawić się efekt "migania" timera gdyż niektóre litery źle wycentrowałem, jednak nie wpływa to na ostateczny wynik
5. 1p zapewnienie wygranej:
	ten sam mechanizm co w przypadku zwykłego przesuwanie tyle, że na intervale i niestety z powtórzeniami ruchów
6. 1p rekordy Cookie:
	system działania rekordów: po zakończeniu gry pokazuje się overlay i jeśli użytkownik chce zapisać swój wynik to musi wpisać nazwę,
	w przeciwnym wypadku (podobnie jak w grach arcade) pójdzie w nicość, encode na znaki działa, udało mi się nawet wpisać moje imię
	przy użyciu emoji liter, polecam użyć: 𝓹𝓪𝔀𝓮𝓵 𝓸𝓽𝓪𝓴 , 🅿🅰🆆🅴🅻 🅾🆃🅰🅺 lub 𝖕𝖆𝖜𝖊𝖑 𝖔𝖙𝖆𝖐 przy wpisywaniu nicku do wyniku
 	aby tablica naszego top 10 została zaktualizowana trzeba niestety odświerzyć stronę
	prezentację można zobaczyć pod przyciskiem "hala sławy" znajdującym się u dołu stony
7. Bonusowe 0.5p
	Nie udało mi się zrobić, gdyż po gruntownej analizie mojego kodu doszedłem do wniosku, że musiałbym przerobić system przesuwania,
	a niestety za niedługo piszę poprawę sprawdzianu z matematyki, więc mi nie wystarczyłoby mi czasu

Z dodatkowy opcji dorzuciłem zapis ilości wykonanych ruchów, jako dodatkowy feature
Po zakończeniu gry można dalej przesuwać poszczególne części, jednak do cookie są zapisywane jedynie informacje z końca rozgrywki

Projekt stabliny, nie rdzewieje, bezwypadkowy, jestem jego pierwszym właścicielem, napisany całkowicie dynamicznie (w body html mamy tylko script)
Dzięki niemu przybliżyłem sobie zagadnienie klasy i jestem z tego powodu bardzo zadowolony

Z tego miejsca chciałbym jeszcze Panu życzyć wesołych, szczęśliwych, rodzinnych i spędzonych w zdrowiu świąt

Z pozdrowieniami
Paweł Otak