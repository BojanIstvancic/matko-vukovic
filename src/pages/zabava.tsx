import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Fun from "@/components/presentation/Fun";

import { generateSolution } from "@/helpers/generateSolution";

const FunContainer: React.FC<{}> = () => {
  const solutions = [
    "avion",
    "anđeo",
    "album",
    "arome",

    "basan",
    "badem",
    "baget",
    "beton",

    "celer",
    "cigla",
    "cimet",
    "citat",

    "čekić",
    "čvrst",
    "čopor",
    "čorba",

    "ćerka",
    "ćilim",
    "ćitap",
    "ćorav",

    "domar",
    "dečko",
    "deoba",
    "devet",

    "đuveč",
    "đakon",
    "đeram",
    "đunta",

    "efekt",
    "ekipa",
    "ekser",
    "epika",

    "farad",
    "farba",
    "farsa",
    "fazan",

    "grozd",
    "gajba",
    "galeb",

    "harfa",
    "hauba",
    "heres",
    "heres",
    "hidra",

    "iskra",
    "ilios",
    "ideja",
    "ikona",

    "junak",
    "jarac",
    "jasle",
    "jetra",

    "krilo",
    "kanal",
    "kanal",
    "kobac",

    "labud",
    "lakat",
    "lanac",
    "lasta",

    "majka",
    "magla",
    "majica",
    "major",

    "način",
    "nakit",
    "nalaz",
    "nalog",

    "osmeh",
    "obim",
    "oblak",
    "obruč",

    "pajac",
    "patka",
    "pekar",
    "paket",

    "rubin",
    "rabin",
    "radar",
    "radio",

    "sajam",
    "sajla",
    "santa",
    "scena",

    "šofer",
    "šnala",
    "špica",
    "štala",

    "tacna",
    "tabor",
    "tajga",
    "taksi",

    "ukras",
    "ulica",
    "uslov",
    "usput",

    "vesti",
    "vijak",
    "varoš",
    "vapaj",

    "zvono",
    "zaliv",
    "zanat",
    "zapad",

    "žarač",
    "žvaka",
    "žurka",
    "ždral",
  ];
  // put this in backend and pull it from API
  const solution = generateSolution(solutions);

  return (
    <Layout title={"Matko Vuković | Zabava"} content={"description"}>
      <Container>
        <Fun solution={solution} />
      </Container>
    </Layout>
  );
};

export default FunContainer;
