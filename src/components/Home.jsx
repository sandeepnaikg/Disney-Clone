import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice"; // Import setMovies action
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Ensure correct import
import ImageSlider from "./ImageSlider"; // Import ImageSlider component
import Viewers from "./Viewers"; // Import Viewers component
// import Recommends from "./Recommends";
import Recemmonds from "./Recemmonds"; // Import Recommends component
import NewDisney from "./NewDisney"; // Import NewDisney component
import Originals from "./Originals"; // Import Originals component
import Trendings from "./Trendings"; // Import Trendings component

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const moviesCollection = collection(db, "movies");
    const unsubscribe = onSnapshot(moviesCollection, (snapshot) => {
      let recommends = [];
      let newDisneys = [];
      let originals = [];
      let trendings = [];

      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
        switch (doc.data().type) {
          case "recommend":
            console.log(recommends);
            recommends.push({ id: doc.id, ...doc.data() });
            break;
          case "new":
            newDisneys.push({ id: doc.id, ...doc.data() });
            console.log(newDisneys);
            break;
          case "original":
            originals.push({ id: doc.id, ...doc.data() });
            console.log(originals);
            break;
          case "trending":
            trendings.push({ id: doc.id, ...doc.data() });
            console.log(trendings);
            break;
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [dispatch]);

  return (
    <>
      <Container>
        <ImageSlider />
        <Viewers />
        <Recemmonds />
        <NewDisney />
        <Originals />
        <Trendings />
      </Container>
    </>
  );
};
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  background: url("/images/home-background.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 0 calc(3.5vw + 5px);
  top: 72px;

  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;
export default Home;
