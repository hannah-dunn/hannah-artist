import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import HeroPic from "../../components/HeroPic/HeroPic";
import TextBox from "../../components/TextBox/TextBox";
import Footer from "../../components/Footer/Footer";
import Image from "../../components/Image/Image";
import GallerySmall from "../../components/GallerySmall/GallerySmall";
import CarouselItem from "../../components/Carousel/Carousel";

const HomePage = () => {
  return (
    <>
      <HeroPic />
      <Header />
      <NavBar />
      <TextBox>
        <h2>about me</h2>
        <p>
          Emerging artist Hannah Dunn b. 1999 I'm a multidisciplinary artist
          with a love for painting, video and sound. My focus is on the
          uncanniness in the world, how we perceive the existence around
          ourselves, and how we can interpret these thoughts through many
          mediums of art.
        </p>
        <p>
          I graduated from RMIT after studying Fine Arts in the Video and Sound
          branch. I was fortunate enough to be a part of three exhibitions
          during my studies, as well as our graduation exhibition, although this
          was entirely online as it was during the end of 2020. I presented a
          solo exhibition in May 2023 at the West Gippsland Art Centre, where
          I'm showing a collection of oil paintings and video artworks titled
          "Something is Peering In". My favourite art practice is portrait
          painting, followed closely by sound and video artworks of a gloomy and
          introspective nature. All of my art is mildly uncanny. In recent years
          I've been commissioned for album art done digitally, as well as
          illustrations to accompany stories in the Australian sci-fi fiction
          magazine Aurealis.
        </p>
      </TextBox>
      <GallerySmall>
        <Image src="/Snapshot - 3.png" alt="dark walls with glowing spheres" />
        <Image src="/Snapshot - 2.png" alt="dark walls with glowing spheres" />
        <Image src="/Snapshot - 4.png" alt="dark walls with glowing spheres" />
      </GallerySmall>
      <TextBox>
        <h4>
          ‘Yours forever’, 2020 To whom it may concern, Something is peering in
          and I can feel the heat seeping through the glass, hear chicken necks
          being crunched, feel of the vertebrae slipping down another throat.
          Consuming always, it’s so ugly and broken. There’s something growing
          inside of the thing, peering in, but I can feel my brain sloshing
          around, in one of those crystal punch bowls can’t see anything can’t
          recall anything nothing floating on the surface and when i think it’s
          all i can picture, fleshy and too human, bobbing in milk to keep it
          soft. We all know it is bound to go sour, I can taste the blood tang
          and rubber gloves, wet on my skin. Why can I feel the presence of
          something following behind me, weight set across shoulder blades,
          wrinkling napes to see what lurks in the doorway. i told you im sorry
          it aint mine, I’ll spill it down my mouth forever if I have to, I got
          them all in the end though. You didn’t know? splayed out on the grass
          edge of the water with the black plastic sticky and dripping. I’d do
          anything for you. I can feel it’s still there, outside the house,
          although my vision is blurred, light fluttering through the twin moths
          sitting on my eyes. Their tiny feet don’t touch any of the white or
          red, their wings drying from the weather. The dust they make drifts
          through the room, lands on my face, mixing in. collecting each one to
          see if they have any secret numbers or letters that they’ve grown all
          on their own. The sounds are getting louder now, the light a violent
          hum. I hadn’t given it much thought before, but I guess it doesn’t
          change anything. I’m joining everyone in the water, loose skin
          ballooning as I submerge, urge to tear the chunks all off and let them
          float around me. I’ve got to stop smearing the blood. Forever yours.
        </h4>
      </TextBox>
      <CarouselItem />
      <Footer />
    </>
  );
};

export default HomePage;
