import Container from "@/components/Container";
import Layout from "@/components/Layout";
import styled from "styled-components";
import SchoolOne from "/public/images/pages/o-skoli/velika-skola.jpg";
import SchoolTwo from "/public/images/pages/o-skoli/mala-skola.jpg";
import SchoolThree from "/public/images/pages/o-skoli/mala-skola-2.jpg";
import Image from "next/image";

const AboutUsInner = styled.div`
  padding-bottom: 20px;
`;

const AboutBlock = styled.div`
  margin-bottom: 30px;
`;

const AboutBlockContent = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

const AboutBlockContentImage = styled.div`
  position: relative;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    flex: 300px 0 0;
    margin-right: 30px;
    margin-bottom: 0;
  }
`;

const AboutUs: React.FC<{}> = () => {
  return (
    <Layout title={"Matko Vuković | O školi"} content={"description"}>
      <Container>
        <AboutUsInner>
          <h1>O školi</h1>
          <p>
            Образовање деце је традиција и обавеза. Због тога су наши преци још
            давне 1857. године у Суботици изградили и прву основну школу која
            данас носи име "Соња Маринковић". Она се раније звала: "Основна
            школа првог кварта", ОШ "Доситеј Обрадовић", ОШ првог кварта "Пајо
            Кујунџић". Данашње име добила је 1962. год. по народном хероју Соњи
            Маринковић, рођене 3. јуна када се прославља и дан школе. Ми смо
            данас школа која је спој традиције, искуства и нових наставних
            метода рада спремних да радимо у 21. веку.
          </p>
          <br />
          <AboutBlock>
            <h2>Centralna škola</h2>
            <AboutBlockContent>
              <AboutBlockContentImage>
                <Image
                  src={SchoolOne}
                  alt="velika-skola"
                  width={550}
                  height={367}
                />
              </AboutBlockContentImage>
              <p>
                Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum
                eget, diam. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nunc sed turpis.
                Praesent egestas tristique nibh. Suspendisse nisl elit, rhoncus
                eget, elementum ac, condimentum eget, diam. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nunc sed turpis. Praesent egestas tristique
                nibh. Suspendisse nisl elit, rhoncus eget, elementum ac,
                condimentum eget, diam. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Nunc sed
                turpis. Praesent egestas tristique nibh.
              </p>
            </AboutBlockContent>
          </AboutBlock>
          <AboutBlock>
            <h2>Mala škola u Gatu</h2>
            <AboutBlockContent>
              <AboutBlockContentImage>
                <Image
                  src={SchoolTwo}
                  alt="mala-skola"
                  width={550}
                  height={350}
                />
              </AboutBlockContentImage>
              <p>
                Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum
                eget, diam. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nunc sed turpis.
                Praesent egestas tristique nibh. Suspendisse nisl elit, rhoncus
                eget, elementum ac, condimentum eget, diam. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nunc sed turpis. Praesent egestas tristique
                nibh. Suspendisse nisl elit, rhoncus eget, elementum ac,
                condimentum eget, diam. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Nunc sed
                turpis. Praesent egestas tristique nibh.
              </p>
            </AboutBlockContent>
          </AboutBlock>
          <AboutBlock>
            <h2>Mala škola u Malom bajmoku</h2>
            <AboutBlockContent>
              <AboutBlockContentImage>
                <Image
                  src={SchoolThree}
                  alt="mala-skola-2"
                  width={550}
                  height={373}
                />
              </AboutBlockContentImage>
              <p>
                Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum
                eget, diam. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nunc sed turpis.
                Praesent egestas tristique nibh. Suspendisse nisl elit, rhoncus
                eget, elementum ac, condimentum eget, diam. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nunc sed turpis. Praesent egestas tristique
                nibh. Suspendisse nisl elit, rhoncus eget, elementum ac,
                condimentum eget, diam. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Nunc sed
                turpis. Praesent egestas tristique nibh.
              </p>
            </AboutBlockContent>
          </AboutBlock>

          <h2 style={{ color: "var(--gray-300)" }}>Ђаци су наша школа</h2>
          <p>
            Свим запосленима је драго што све ово имају, али - нашу школу не
            чине просторије и објекти. НАША ШКОЛА СУ НАШИ САДАШЊИ ЂАЦИ , И МНОГЕ
            ГЕНЕРАЦИЈЕ, И ТАКО ПРЕКО 150 ГОДИНА. Они постижу запажене резултате
            у образовном смислу што доказују бројне дипломе на такмичењима од
            општинских до државних. Школске ходнике красе многи пехари и медаље.
            Наши ђаци годинама уназад полажу пријемне испите за средњу школу са
            највећим бројем бодова у општини и региону и уписују даље школе које
            су и желили. Зато и није никако чудо што се овде школују деца и са
            других територија града јер се добар глас надалеко чује.
          </p>
        </AboutUsInner>
      </Container>
    </Layout>
  );
};

export default AboutUs;
