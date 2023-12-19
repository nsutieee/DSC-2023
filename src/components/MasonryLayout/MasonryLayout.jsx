// import styles of this component
import styles from "./MasonryLayout.module.css";

// import other react pkg to use
import Masonry from "react-masonry-css";

// import other component to use
import MasonryBox from "./MasonryBox/MasonryBox";
// import logo from "../../images/TechWeekLogo.png"

// import logo from "../../Assets/ieee-logo.png";

import logo from "./ieee-logo.png";

// MasonryLayout Component
const MasonryLayout = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles["my-masonry-grid"]}
      columnClassName={styles["my-masonry-grid_column"]}
    >
      {images.map((item) => (
        <MasonryBox
          key={item.id}
          wallSrc={item.src}
          userProf='./ieee-logo.png'
          userName={"DSC"}
        />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;

const images = {
  categories: {
    all: [
      {
        id: "wallpaper 1",
        src: "img/diversity/d1.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Arash",
          job: "Designer",
        },
      },

      {
        id: "wallpaper 3",
        src: "img/diversity/d3.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Anne",
          job: "Graphic Designer",
        },
      },
      {
        id: "wallpaper 4",
        src: "img/diversity/d4.jpg",
        user: {
          src: "img/profile/4.jpg",
          name: "James",
          job: "editor",
        },
      },
      {
        id: "wallpaper 5",
        src: "img/diversity/d5.jpg",
        user: {
          src: "img/profile/5.jpg",
          name: "Mary",
          job: "Developer",
        },
      },
      {
        id: "wallpaper 6",
        src: "img/diversity/d6.jpg",
        user: {
          src: "img/profile/3.png",
          name: "Patricia",
          job: "Front-End",
        },
      },
      {
        id: "wallpaper 7",
        src: "img/diversity/d7.jpg",
        user: {
          src: "img/profile/4.jpg",
          name: "Jennifer",
          job: "Front-End",
        },
      },
      {
        id: "wallpaper 3",
        src: "img/passion/p3.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Anne",
          job: "Graphic Designer",
        },
      },
      {
        id: "wallpaper 2",
        src: "img/innovation/i2.jpg",
        user: {
          src: "img/profile/2.png",
          name: "Farbod",
          job: "Scientist",
        },
      },
      {
        id: "wallpaper 3",
        src: "img/innovation/i3.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Anne",
          job: "Graphic Designer",
        },
      },
    ],
    diversity: [
      {
        id: "wallpaper 1",
        src: "img/diversity/d1.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Arash",
          job: "Designer",
        },
      },

      {
        id: "wallpaper 3",
        src: "img/diversity/d3.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Anne",
          job: "Graphic Designer",
        },
      },
      {
        id: "wallpaper 4",
        src: "img/diversity/d4.jpg",
        user: {
          src: "img/profile/4.jpg",
          name: "James",
          job: "editor",
        },
      },
      {
        id: "wallpaper 5",
        src: "img/diversity/d5.jpg",
        user: {
          src: "img/profile/5.jpg",
          name: "Mary",
          job: "Developer",
        },
      },
      {
        id: "wallpaper 6",
        src: "img/diversity/d6.jpg",
        user: {
          src: "img/profile/3.png",
          name: "Patricia",
          job: "Front-End",
        },
      },
      {
        id: "wallpaper 7",
        src: "img/diversity/d7.jpg",
        user: {
          src: "img/profile/4.jpg",
          name: "Jennifer",
          job: "Front-End",
        },
      },
    ],
    innovation: [
      {
        id: "wallpaper 1",
        src: "img/innovation/i1.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Arash",
          job: "Designer",
        },
      },
      {
        id: "wallpaper 2",
        src: "img/innovation/i2.jpg",
        user: {
          src: "img/profile/2.png",
          name: "Farbod",
          job: "Scientist",
        },
      },
      {
        id: "wallpaper 3",
        src: "img/innovation/i3.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Anne",
          job: "Graphic Designer",
        },
      },
      {
        id: "wallpaper 4",
        src: "img/innovation/i4.jpg",
        user: {
          src: "img/profile/4.jpg",
          name: "James",
          job: "editor",
        },
      },
      {
        id: "wallpaper 5",
        src: "img/innovation/i5.jpg",
        user: {
          src: "img/profile/5.jpg",
          name: "Mary",
          job: "Developer",
        },
      },
      {
        id: "wallpaper 6",
        src: "img/innovation/i6.jpg",
        user: {
          src: "img/profile/3.png",
          name: "Patricia",
          job: "Front-End",
        },
      },
    ],
    passion: [
      {
        id: "wallpaper 1",
        src: "img/passion/p1.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Arash",
          job: "Designer",
        },
      },
      {
        id: "wallpaper 2",
        src: "img/passion/p2.jpg",
        user: {
          src: "img/profile/2.png",
          name: "Farbod",
          job: "Scientist",
        },
      },
      {
        id: "wallpaper 3",
        src: "img/passion/p3.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Anne",
          job: "Graphic Designer",
        },
      },
      {
        id: "wallpaper 4",
        src: "img/passion/p4.jpg",
        user: {
          src: "img/profile/4.jpg",
          name: "James",
          job: "editor",
        },
      },
      {
        id: "wallpaper 5",
        src: "img/passion/p5.jpg",
        user: {
          src: "img/profile/5.jpg",
          name: "Mary",
          job: "Developer",
        },
      },
    ],
    networking: [
      {
        id: "wallpaper 1",
        src: "img/networking/n1.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Arash",
          job: "Designer",
        },
      },
      {
        id: "wallpaper 2",
        src: "img/networking/n2.jpg",
        user: {
          src: "img/profile/2.png",
          name: "Farbod",
          job: "Scientist",
        },
      },
      {
        id: "wallpaper 3",
        src: "img/networking/n3.jpg",
        user: {
          src: "img/profile/1.jpg",
          name: "Anne",
          job: "Graphic Designer",
        },
      },
      {
        id: "wallpaper 4",
        src: "img/networking/n4.jpg",
        user: {
          src: "img/profile/4.jpg",
          name: "James",
          job: "editor",
        },
      },
      {
        id: "wallpaper 5",
        src: "img/networking/n5.jpg",
        user: {
          src: "img/profile/5.jpg",
          name: "Mary",
          job: "Developer",
        },
      },
      {
        id: "wallpaper 5",
        src: "img/networking/n6.jpg",
        user: {
          src: "img/profile/5.jpg",
          name: "Mary",
          job: "Developer",
        },
      },
    ],
  },
};
