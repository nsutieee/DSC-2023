import React, { useState } from "react";
import MasonryLayout from "@/src/components/MasonryLayout/MasonryLayout";
import Dropdown from "@/src/components/Dropdown/Dropdown";
import ContainerCard from "@/src/components/ContainerCard/ContainerCard";
import images from "../../Images.json";
import styles from "./Gallery.module.css";
const ddItems = [
  {
    id: 1,
    title: "All Images",
    active: true,
  },
  {
    id: 2,
    title: "Diversity",
    active: false,
  },
  {
    id: 3,
    title: "Networking",
    active: false,
  },
  {
    id: 4,
    title: "Innovation",
    active: false,
  },
  {
    id: 5,
    title: "Passion",
    active: false,
  },
];

function Gallery() {
  const [categoryImage, setCategoryImage] = useState(images.categories.all);
  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter((item) => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0];
        return item.toLowerCase().includes(titleSplited);
      });
      return [...images.categories[categoryChoose]];
    });
  };
  return (
    <div
      className='flex justify-content-center'
      style={{ marginTop: "160px", padding: "50px" }}
      id='gallery'
    >
      <ContainerCard>
        <div
          className={`${styles["gallery-setting"]} flex justify-between align-middle`}
          // style={
          //   ({
          //     width: "50%",
          //   },
          //   { marginBottom: "40px" })
          // }
        >
          <h1 className=''>Galleria</h1>
          <Dropdown
            title='All Images'
            items={ddItems}
            liftingDdTextUp={takeDdTitle}
          />
        </div>
        <MasonryLayout images={categoryImage} />
      </ContainerCard>
    </div>
  );
}

export default Gallery;
