import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

import SwiperImage1 from "/public/images/pages/index/swiper-1.jpg";
import SwiperImage2 from "/public/images/pages/index/swiper-2.jpg";
import SwiperImage3 from "/public/images/pages/index/swiper-3.jpg";

import styled from "styled-components";

const StyledBlog = styled.div`
  margin-bottom: 25px;
`;

const BlogPostContainer = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 20px;
  }
`;
const BlogPost = styled.div`
  height: 100px;
  max-width: 550px;
  margin-bottom: 25px;

  display: flex;
  -webkit-box-align: center;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`;
const BlogPostImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 120px;
  flex-shrink: 0;
  margin-right: 25px;

  border-radius: 15px;
  overflow: hidden;

  @media (min-width: 600px) {
    width: 150px;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const BlogPostContent = styled.div`
  h3 {
    transition: all 0.3s ease 0s;
    margin-bottom: 10px;

    &:hover,
    &:focus {
      cursor: pointer;
      color: var(--primary);
    }

    @media (max-width: 599px) {
      font-size: 15px;
    }
  }

  p {
    @media (max-width: 599px) {
      display: none;
    }
  }
`;

const Blog: React.FC<{}> = () => {
  const blogPosts = [
    {
      image: SwiperImage1,
      title: "Čitanjem do zvijezda",
      content:
        "Naša škola i ove godine natječe se u čitalačkom kvizu Čitanjem do zvijezda. Tradicionalno, natječu se učenici 7. i 8. razreda na razini kviza i plakata. Također tradicionalno, naša škola i ove godine pobijedila je dvjema ekipama u međuškolskoj razini u rješevanju kviza te su se time izborili za nacionalnu razinu za koju se spremamo u svibnju. Pobjedničku ekipu čine: Lea Vojnić Purčar, Andrija Matković i Valentin Čović, a drugu plasiranu ekipu čine: Ivona Stantić, Iva Francišković i Lea Vojnić. U kategoriji plakata školu je predstavljala Anđela Kutuzov koja je osvojila 2. mjesto i plasirala se na nacionalnu razinu. Čestitamo i sretno dalje!",
    },
    {
      image: SwiperImage2,
      title: "Republičko takmičenje u plivanju",
      content:
        "28.01. i 01.03. U Kragujevcu održano je republičko takmičenje u plivanju. Našu školu su predstavila četiri učenika od kojih je tri učenika dospelo na pobedničko postolje osvojivši tri medalje. Najmlađa takmičarka je Katarina Popović 3.razred nastupila u disciplini 50m leđno i osvojila 3. mesto. Leon Milodanović 6.razred nastupio u disciplini 50m delfin i okitio se srebrnom medaljom. Ena Martić 7.razred je plivala kraul osvojivši 3.mesto. Veliki uspeh je ostvario i Leon Hemi 6.razred, osvojivši peto mesto u disciplini 50m leđno. Svim učenicima čestitamo a već u maju nastupaju na sportskoj olimpijadi u Zrenjaninu, popularnije zvanim SOŠOV.",
    },
    {
      image: SwiperImage3,
      title: "Gradsko takmičenje u odbojci",
      content:
        "U konkurenciji pionira, prvo mesto zauzela je O.Š. Kizur Ištvan, drugo Matko Vuković, treće Jovan Mikić. I ove godine su naši odbojkaši i odbojkašice opravdali očekivanja i našli se u samom vrhu Subotičke odbojke",
    },
    {
      image: SwiperImage1,
      title: "Čitanjem do zvijezda",
      content:
        "Naša škola i ove godine natječe se u čitalačkom kvizu Čitanjem do zvijezda. Tradicionalno, natječu se učenici 7. i 8. razreda na razini kviza i plakata. Također tradicionalno, naša škola i ove godine pobijedila je dvjema ekipama u međuškolskoj razini u rješevanju kviza te su se time izborili za nacionalnu razinu za koju se spremamo u svibnju. Pobjedničku ekipu čine: Lea Vojnić Purčar, Andrija Matković i Valentin Čović, a drugu plasiranu ekipu čine: Ivona Stantić, Iva Francišković i Lea Vojnić. U kategoriji plakata školu je predstavljala Anđela Kutuzov koja je osvojila 2. mjesto i plasirala se na nacionalnu razinu. Čestitamo i sretno dalje!",
    },
    {
      image: SwiperImage2,
      title: "Republičko takmičenje u plivanju",
      content:
        "28.01. i 01.03. U Kragujevcu održano je republičko takmičenje u plivanju. Našu školu su predstavila četiri učenika od kojih je tri učenika dospelo na pobedničko postolje osvojivši tri medalje. Najmlađa takmičarka je Katarina Popović 3.razred nastupila u disciplini 50m leđno i osvojila 3. mesto. Leon Milodanović 6.razred nastupio u disciplini 50m delfin i okitio se srebrnom medaljom. Ena Martić 7.razred je plivala kraul osvojivši 3.mesto. Veliki uspeh je ostvario i Leon Hemi 6.razred, osvojivši peto mesto u disciplini 50m leđno. Svim učenicima čestitamo a već u maju nastupaju na sportskoj olimpijadi u Zrenjaninu, popularnije zvanim SOŠOV.",
    },
    {
      image: SwiperImage3,
      title: "Gradsko takmičenje u odbojci",
      content:
        "U konkurenciji pionira, prvo mesto zauzela je O.Š. Kizur Ištvan, drugo Matko Vuković, treće Jovan Mikić. I ove godine su naši odbojkaši i odbojkašice opravdali očekivanja i našli se u samom vrhu Subotičke odbojke",
    },
    {
      image: SwiperImage1,
      title: "Čitanjem do zvijezda",
      content:
        "Naša škola i ove godine natječe se u čitalačkom kvizu Čitanjem do zvijezda. Tradicionalno, natječu se učenici 7. i 8. razreda na razini kviza i plakata. Također tradicionalno, naša škola i ove godine pobijedila je dvjema ekipama u međuškolskoj razini u rješevanju kviza te su se time izborili za nacionalnu razinu za koju se spremamo u svibnju. Pobjedničku ekipu čine: Lea Vojnić Purčar, Andrija Matković i Valentin Čović, a drugu plasiranu ekipu čine: Ivona Stantić, Iva Francišković i Lea Vojnić. U kategoriji plakata školu je predstavljala Anđela Kutuzov koja je osvojila 2. mjesto i plasirala se na nacionalnu razinu. Čestitamo i sretno dalje!",
    },
    {
      image: SwiperImage2,
      title: "Republičko takmičenje u plivanju",
      content:
        "28.01. i 01.03. U Kragujevcu održano je republičko takmičenje u plivanju. Našu školu su predstavila četiri učenika od kojih je tri učenika dospelo na pobedničko postolje osvojivši tri medalje. Najmlađa takmičarka je Katarina Popović 3.razred nastupila u disciplini 50m leđno i osvojila 3. mesto. Leon Milodanović 6.razred nastupio u disciplini 50m delfin i okitio se srebrnom medaljom. Ena Martić 7.razred je plivala kraul osvojivši 3.mesto. Veliki uspeh je ostvario i Leon Hemi 6.razred, osvojivši peto mesto u disciplini 50m leđno. Svim učenicima čestitamo a već u maju nastupaju na sportskoj olimpijadi u Zrenjaninu, popularnije zvanim SOŠOV.",
    },
    {
      image: SwiperImage3,
      title: "Gradsko takmičenje u odbojci",
      content:
        "U konkurenciji pionira, prvo mesto zauzela je O.Š. Kizur Ištvan, drugo Matko Vuković, treće Jovan Mikić. I ove godine su naši odbojkaši i odbojkašice opravdali očekivanja i našli se u samom vrhu Subotičke odbojke",
    },
    {
      image: SwiperImage1,
      title: "Čitanjem do zvijezda",
      content:
        "Naša škola i ove godine natječe se u čitalačkom kvizu Čitanjem do zvijezda. Tradicionalno, natječu se učenici 7. i 8. razreda na razini kviza i plakata. Također tradicionalno, naša škola i ove godine pobijedila je dvjema ekipama u međuškolskoj razini u rješevanju kviza te su se time izborili za nacionalnu razinu za koju se spremamo u svibnju. Pobjedničku ekipu čine: Lea Vojnić Purčar, Andrija Matković i Valentin Čović, a drugu plasiranu ekipu čine: Ivona Stantić, Iva Francišković i Lea Vojnić. U kategoriji plakata školu je predstavljala Anđela Kutuzov koja je osvojila 2. mjesto i plasirala se na nacionalnu razinu. Čestitamo i sretno dalje!",
    },
    {
      image: SwiperImage2,
      title: "Republičko takmičenje u plivanju",
      content:
        "28.01. i 01.03. U Kragujevcu održano je republičko takmičenje u plivanju. Našu školu su predstavila četiri učenika od kojih je tri učenika dospelo na pobedničko postolje osvojivši tri medalje. Najmlađa takmičarka je Katarina Popović 3.razred nastupila u disciplini 50m leđno i osvojila 3. mesto. Leon Milodanović 6.razred nastupio u disciplini 50m delfin i okitio se srebrnom medaljom. Ena Martić 7.razred je plivala kraul osvojivši 3.mesto. Veliki uspeh je ostvario i Leon Hemi 6.razred, osvojivši peto mesto u disciplini 50m leđno. Svim učenicima čestitamo a već u maju nastupaju na sportskoj olimpijadi u Zrenjaninu, popularnije zvanim SOŠOV.",
    },
    {
      image: SwiperImage3,
      title: "Gradsko takmičenje u odbojci",
      content:
        "U konkurenciji pionira, prvo mesto zauzela je O.Š. Kizur Ištvan, drugo Matko Vuković, treće Jovan Mikić. I ove godine su naši odbojkaši i odbojkašice opravdali očekivanja i našli se u samom vrhu Subotičke odbojke",
    },
  ];
  return (
    <Layout title={"Matko Vuković | Vesti"} content={"description"}>
      <Container>
        <StyledBlog>
          <h1>Vesti</h1>
          <BlogPostContainer>
            {blogPosts.map((item, index) => (
              <BlogPost key={index}>
                <BlogPostImageContainer>
                  <Image
                    src={item.image}
                    layout="fill"
                    alt={`blog-post-image-${index}`}
                  />
                  <a href="#" target="_blank" />
                </BlogPostImageContainer>
                <BlogPostContent>
                  <Link href="#">
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.content.substr(0, 95)}...</p>
                </BlogPostContent>
              </BlogPost>
            ))}
          </BlogPostContainer>
        </StyledBlog>
      </Container>
    </Layout>
  );
};

export default Blog;
