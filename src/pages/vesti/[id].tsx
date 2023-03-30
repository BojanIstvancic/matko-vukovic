import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Image from "next/image";

import SwiperImage1 from "/public/images/pages/index/swiper-1.jpg";

import styled from "styled-components";

const StyledBlogPostItem = styled.div`
  margin-bottom: 25px;
`;
const BlogPostItemImage = styled.div`
  position: relative;
  height: 200px;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    height: 350px;
  }
`;

const BlogPostItem: React.FC<{}> = () => {
  const blogPost = {
    image: SwiperImage1,
    title: "Čitanjem do zvijezda",
    content:
      "Naša škola i ove godine natječe se u čitalačkom kvizu Čitanjem do zvijezda. Tradicionalno, natječu se učenici 7. i 8. razreda na razini kviza i plakata. Također tradicionalno, naša škola i ove godine pobijedila je dvjema ekipama u međuškolskoj razini u rješevanju kviza te su se time izborili za nacionalnu razinu za koju se spremamo u svibnju. Pobjedničku ekipu čine: Lea Vojnić Purčar, Andrija Matković i Valentin Čović, a drugu plasiranu ekipu čine: Ivona Stantić, Iva Francišković i Lea Vojnić. U kategoriji plakata školu je predstavljala Anđela Kutuzov koja je osvojila 2. mjesto i plasirala se na nacionalnu razinu. Čestitamo i sretno dalje!",
  };
  return (
    <Layout title={"Matko Vuković | Blog Item"} content={"description"}>
      <Container>
        <StyledBlogPostItem>
          <h1>{blogPost.title}</h1>
          <BlogPostItemImage>
            <Image src={blogPost.image} layout="fill" alt={"blog-post-image"} />
          </BlogPostItemImage>
          <p>{blogPost.content}</p>
        </StyledBlogPostItem>
      </Container>
    </Layout>
  );
};

export default BlogPostItem;
