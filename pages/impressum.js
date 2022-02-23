import { Md } from "../components/md";
import { Page } from "../components/page";

export default function Impressum() {
  return (
    <Page seo={{ title: "Impressum" }}>
      <div className="container space-y-4 mb-12">
        <Md>{`# Impressum

##### Angaben gemäß § 5 TeleMedienGesetz (TMG)


NgC GmbH  
Wolfsacker 8  
38444 Wolfsburg


##### Kontaktdaten


Telefon: (+49) 5308 523 122 20  
eMail: info..ngcircle.com  
Internet: www.ngcircle.com


##### Unternehmensangaben


Ingenieursdienstleistungen IKT  
Geschäftsführung: Gilles Ngameni


##### Eintragung im Handelsregister


Registerummer: HRB 203527  
Registergericht: Amtsgericht Braunschweig


##### Verbraucherinformationen


Online-Streitbeilegung gemäß Art.14 Abs. 1 ODR-VO: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden: http://ec.europa.eu/consumers/odr

`}</Md>
      </div>
    </Page>
  );
}
