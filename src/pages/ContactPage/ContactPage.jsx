import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Image from "../../components/Image/Image";
import TextBox from "../../components/TextBox/TextBox";
import GalleryBigger from "../../components/GalleryBigger/GalleryBigger";
import Footer from "../../components/Footer/Footer";

const ContactPage = () => {
  return (
    <>
      <Image src="/hero.jpg" alt="outside water tank in dark" />
      <NavBar />
      <TextBox>
        <h2>Haha artist website</h2>
        <p>contact me! email: hdunn9686@gmail.com</p>
      </TextBox>
      <TextBox>
        <p>
          or maybe you want to reach out through my{" "}
          <a href="https://www.linkedin.com/in/hannah-dunn-2141aa1b1/">
            LinkedIn?
          </a>
        </p>
      </TextBox>
      <GalleryBigger>
        <Image src="/SAM_0127.JPG" alt="picture of hannah" />
        <Image src="/IMG_0688.JPG" alt="garfield illustration" />
      </GalleryBigger>
      <Footer />
    </>
  );
};

export default ContactPage;
