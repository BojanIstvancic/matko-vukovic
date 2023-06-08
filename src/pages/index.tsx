import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";

import Layout from "../components/Layout";
import Container from "@/components/Container";
import Home from "@/components/presentation/Home";

import {
  getBlogPostItemsAsync,
  selectBlogThreeItems,
} from "@/features/blog/blogSlice";

const HomeContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { posts, status } = useAppSelector(selectBlogThreeItems);

  useEffect(() => {
    if (!posts) {
      dispatch(getBlogPostItemsAsync());
    }
  }, [posts, dispatch]);

  const eventsData = [
    {
      date: "sreda, 07.jun 2023",
      events: [
        {
          id: 1,
          type: "exam",
          group: "8c",
          text: "Test iz matematika koji obuhvata tri poglavlja: sabiranje, oduzimanje, množenje.",
        },
        {
          id: 2,
          type: "info",
          group: "all",
          text: "Danas ce biti organizovana priredba za prijem prvaka u školi u Malom Bajmoku.",
        },
        {
          id: 3,
          type: "dayOff",
          group: "all",
          text: "Zbog standardnih praznika za odmor, dani 01. - 04. Maj će biti neradni. Sa nastavom se redovno nastavlja 05. Maja u ponedeljak.",
        },
      ],
    },
    {
      date: "četvrtak, 08.jun 2023",
      events: [
        {
          id: 4,
          type: "exam",
          group: "1c",
          text: "Test na temu lektira - Mali Princ.",
        },
        {
          id: 5,
          type: "info",
          group: "all",
          text: "Danas ce 1. razredi škole u Malom Bajmoku ići u ZOO VRT.",
        },
        {
          id: 6,
          type: "dayOff",
          group: "all",
          text: "Zbog standardnih praznika za odmor, dani 01. - 04. Maj će biti neradni. Sa nastavom se redovno nastavlja 05. Maja u ponedeljak.",
        },
      ],
    },
  ];

  // remove this when logic added

  return (
    <Layout title={"Matko Vuković | Naslovna"} content={"description"}>
      <Container>
        <Home posts={posts} status={status} eventsData={eventsData} />
      </Container>
    </Layout>
  );
};

export default HomeContainer;
