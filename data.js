import Image from "next/image";

const image1 = require("./assets/helpandtips/image1.svg");
const image2 = require("./assets/helpandtips/image2.svg");
const image3 = require("./assets/helpandtips/image3.svg");

export const dataTestimonials = {
  datas: [
    {
      id: 1,
      title: "Blu Kicks",
      desc: "Places where you can leverage tools and software to free up time to focus on growing the business.",
    },
    {
      id: 2,
      title: "Angelus",
      desc: "All those apps took me months to get running. Now the site practically runs itself!",
    },
    {
      id: 3,
      title: "SoYoung",
      desc: "Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction",
    },
  ],
};


export const dataHelpAndTips = {
  datas: [
    {
      id: 1,
      image_url: image1,
      title: 'Start quickly with simple steps',
    },
    {
      id: 2,
      image_url: image2,
      title: 'Run smoothly at vero eos et accusamus',
    },
    {
      id: 3,
      image_url: image3,
      title: 'Denounce with righteous indignation',
    },
  ]
}