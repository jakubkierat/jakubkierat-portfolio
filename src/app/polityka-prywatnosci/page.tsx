import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Polityka prywatności | Jakub Kierat",
  description: "Polityka prywatności strony portfolio Jakuba Kierata.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Wróć na stronę główną
      </Link>

      <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
        Polityka prywatności
      </h1>
      <p className="mt-3 text-sm text-muted">Ostatnia aktualizacja: 5 sierpnia 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-base font-medium text-foreground">1. Administrator danych</h2>
          <p className="mt-2">
            Administratorem danych osobowych przekazanych przez formularz kontaktowy na
            tej stronie jest Jakub Kierat, kontakt: kieratjakubb@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">2. Jakie dane są zbierane</h2>
          <p className="mt-2">
            Formularz kontaktowy zbiera wyłącznie dane, które sam/sama podajesz: imię
            i nazwisko, adres e-mail, opcjonalnie numer telefonu, rodzaj i budżet
            planowanego projektu oraz treść wiadomości.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            3. Cel i podstawa prawna przetwarzania
          </h2>
          <p className="mt-2">
            Dane są przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie
            oraz ewentualnego przygotowania oferty i podjęcia współpracy. Podstawą
            prawną przetwarzania jest zgoda wyrażona przy wysyłce formularza (art. 6
            ust. 1 lit. a RODO) oraz, w razie dalszych ustaleń dotyczących
            realizacji projektu, działania zmierzające do zawarcia umowy (art. 6
            ust. 1 lit. b RODO).
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">4. Odbiorcy danych</h2>
          <p className="mt-2">
            Wiadomości z formularza są dostarczane za pośrednictwem usługi Resend
            (Resend Inc.), która pełni rolę procesora i przetwarza dane wyłącznie w
            celu technicznej wysyłki e-maila. Dane nie są sprzedawane ani
            udostępniane innym podmiotom w celach marketingowych.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">5. Okres przechowywania</h2>
          <p className="mt-2">
            Dane z formularza przechowywane są przez czas potrzebny do obsługi
            zapytania i ewentualnej korespondencji dotyczącej projektu, nie dłużej
            niż 12 miesięcy od ostatniego kontaktu, chyba że dalsza współpraca
            wymaga ich dłuższego przechowywania.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">6. Twoje prawa</h2>
          <p className="mt-2">
            Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia,
            ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu
            oraz do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z
            prawem przetwarzania dokonanego przed jej cofnięciem. Przysługuje Ci
            również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
            Osobowych.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">7. Dobrowolność podania danych</h2>
          <p className="mt-2">
            Podanie danych w formularzu jest dobrowolne, ale niezbędne do udzielenia
            odpowiedzi na zapytanie.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">8. Pliki cookies</h2>
          <p className="mt-2">
            Ta strona nie wykorzystuje plików cookies do celów analitycznych,
            marketingowych ani śledzących i nie zbiera danych o ruchu użytkowników
            za pomocą zewnętrznych narzędzi. Jeśli to się zmieni, ta sekcja zostanie
            zaktualizowana, a na stronie pojawi się stosowny baner z prośbą o zgodę.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">9. Zmiany polityki</h2>
          <p className="mt-2">
            Zastrzegam sobie prawo do wprowadzania zmian w niniejszej polityce
            prywatności. Aktualna wersja jest zawsze dostępna pod tym adresem.
          </p>
        </section>
      </div>
    </main>
  );
}
