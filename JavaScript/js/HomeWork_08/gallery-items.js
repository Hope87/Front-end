"use strict";

const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

/////////////////////////////////////////////////////////////
const galleryMenu = document.querySelector(".js-gallery");
const galleryLightbox = document.querySelector(".js-lightbox");
const galleryButton = document.querySelector(
  "button[data-action='close-lightbox']"
);
const galleryLightboxImg = galleryLightbox.querySelector(".lightbox__image");

const creatImages = (items, parrent) => {
  const { preview, original, description } = items;
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.dataset.source = original;
  img.alt = description;

  parrent.appendChild(img);
};

const creatLink = (items, parrent) => {
  const { original } = items;
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;

  creatImages(items, link);

  parrent.appendChild(link);
};

const creatList = (items) => {
  const list = document.createElement("li");
  list.classList.add("gallery__item");

  creatLink(items, list);

  return list;
};

const renderItems = (array) => {
  const items = array.map((arr) => creatList(arr));

  galleryMenu.append(...items);
};
renderItems(images);

const showOriginImg = ({ dataset, alt }) => {
  galleryLightbox.classList.add("is-open");
  galleryLightboxImg.src = dataset.source;
  galleryLightboxImg.alt = alt;
};

const clearOriginImg = () => {
  galleryLightboxImg.src = "";
  galleryLightboxImg.alt = "";
};

const onClick = (e) => {
  e.preventDefault();

  if (e.target.nodeName === "IMG") {
    showOriginImg(e.target);
  }
};

const onClose = (e) => {
  if (
    e.target.nodeName === "BUTTON" ||
    e.target.className === "lightbox__overlay" ||
    e.code === "Escape"
  ) {
    galleryLightbox.classList.remove("is-open");
    clearOriginImg();
  }
};

galleryMenu.addEventListener("click", onClick);
galleryButton.addEventListener("click", onClose);
galleryLightbox.addEventListener("click", onClose);
galleryMenu.addEventListener("keyup", onClose);

/////////////////////////////////////////////////////////////////////

// const creatGallery = (array) => {
//   array.forEach((element) => {
//     const { preview, original, description } = element;
//     const list = document.createElement("li");
//     list.classList.add("gallery__item");
//     const link = document.createElement("a");
//     link.classList.add("gallery__link");
//     link.href = original;
//     const img = document.createElement("img");
//     img.classList.add("gallery__image");
//     img.src = preview;
//     img.dataset.source = original;
//     img.alt = description;
//     link.appendChild(img);
//     list.appendChild(link);
//     menu.appendChild(list);
//   });
// };

// creatGallery(images);
