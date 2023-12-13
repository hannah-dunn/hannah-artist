import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Gif from "../../components/Gif/Gif";
import Gallery from "../../components/GallerySmall/GallerySmall";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import TextBox from "../../components/TextBox/TextBox";
import Footer from "../../components/Footer/Footer";

const VideoPage = () => {
  return (
    <>
      <Gif />
      <NavBar />
      <TextBox>
        <p>
          Presenting an unnerving aura intent on drawing watchers into this
          gloom-filled scene, atmospheres are explored as ephemeral yet
          inescapable elements of the everyday experience. These conceptual
          environments border the uncanny, playing with the fear of the dark,
          the unknown, and the beauty to be found in terror. Within the
          perception of luminous and gloomy space, there lies a key existential
          dimension of living in the world, integral to the human experience of
          space and time.
        </p>
      </TextBox>
      <YoutubeEmbed embedId="az8eOZKC0dU" />
      <TextBox>
        <p>
          i keep turning aroundexpecting somethingto be sprinting at mei cant
          help it im floating face downeyes in my hairsolid bodyin decaying
          waterim sorry i apologize without meaning ittumbles so easy off the
          tonguei dont even think.sorry really means nothing at all whenyou say
          it like thatwhen you think it like thati cant look out the windows at
          nightbecause i thinki know something has to be staringbackat me it
          just ispressed to the glasshot breathgaping mouthunjust fear of being
          suckedout a window
        </p>
      </TextBox>
      <YoutubeEmbed embedId="wnU0TOYc87A" />
      <br />
      <Footer />
    </>
  );
};

export default VideoPage;
