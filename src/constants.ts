import { MediaItem, MediaType, SectionData, SocialLink } from "./types";
import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  XIcon,
} from "./components/Icons";

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "YouTube", url: "#", Icon: YoutubeIcon },
  {
    name: "Instagram",
    url: "https://www.instagram.com/og_entertaiment/",
    Icon: InstagramIcon,
  },
  { name: "Facebook", url: "#", Icon: FacebookIcon },
  { name: "TikTok", url: "#", Icon: TiktokIcon },
  { name: "X", url: "#", Icon: XIcon },
];

// Available media from all folders
const gamesImages = [
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233612/img_0219_z7e5cp.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233613/img_0220_dbxcs4.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233612/img_0221_lupwgc.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233903/img_0380_gzk4nv.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233907/img_0381_ag66ml.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233903/img_0384_gfoid9.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233909/img_0385_p8otk3.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233626/img_0444_u8bbmy.jpg",
];
const gamesVideos = [
  "https://res.cloudinary.com/dkwutmryn/video/upload/v1763229800/IMG_8075_iov3j9.mp4",
  "https://res.cloudinary.com/dkwutmryn/video/upload/v1763229076/IMG_8129_w1cvcp.mov",
  "https://res.cloudinary.com/dkwutmryn/video/upload/v1763229053/IMG_3417_urouug.mov",
  "https://res.cloudinary.com/dkwutmryn/video/upload/v1763228896/IMG_0216_r5spl8.mov",
];
const surprisesImages = [
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234066/img_0245_lumdix.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234066/img_0246_onqpus.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234066/img_0249_nn2vlc.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234066/img_0250_vmxest.jpg",
];
const teamBuildingImages = [
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234135/img_0217_ljqh5e.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234135/img_0218_li9dhx.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234137/img_0222_qh4gx5.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234137/img_0223_lophg9.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234141/img_0224_dkmdyk.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234142/img_0225_hgympj.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234142/img_0226_do6mov.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234144/img_0227_mgs2rm.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234145/img_0228_c1df6f.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234146/img_0229_oshvzu.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234150/img_0230_supk1c.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234151/img_0231_unhwew.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234152/img_0232_enzgxi.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234153/img_0233_k8h0ex.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234156/img_0234_kj9puj.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234157/img_0235_vyw9ac.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234158/img_0236_nbsxhl.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234160/img_0237_iw0xpz.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234162/img_0238_qjivx7.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234163/img_0239_zwkxau.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234165/img_0240_o6vyv5.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234166/img_0241_i50lj9.jpg",
  "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234168/img_0242_fz2jxu.jpg",
];

// Surprises videos
const surprisesVideos = [
  "https://res.cloudinary.com/dkwutmryn/video/upload/v1763228997/IMG_8626_gifn50.mov",
  "https://res.cloudinary.com/dkwutmryn/video/upload/v1763229020/IMG_8861_oyasrx.mp4",
];

// Team building videos
const teamBuildingVideos = [
  "https://res.cloudinary.com/dkwutmryn/video/upload/v1763229020/IMG_8861_oyasrx.mp4",
  "https://res.cloudinary.com/dkwutmryn/video/upload/v1763228997/IMG_8626_gifn50.mov",
];

// Combine all media
const allImages = [...gamesImages, ...surprisesImages, ...teamBuildingImages];
const allVideos = [...gamesVideos, ...surprisesVideos, ...teamBuildingVideos];
const allMedia = [
  ...allImages.map((src, i) => ({ src, type: MediaType.Image, id: i })),
  ...allVideos.map((src, i) => ({
    src,
    type: MediaType.Video,
    id: i + 1000,
  })),
];

// Shuffle and select 12 random items
const shuffled = [...allMedia].sort(() => Math.random() - 0.5);
export const MAIN_PAGE_IMAGES: MediaItem[] = shuffled
  .slice(0, 12)
  .map((item, index) => ({
    id: index,
    type: item.type,
    src: item.src,
    alt:
      item.type === MediaType.Video
        ? `Entertainment video ${index + 1}`
        : `Mascot entertainment photo ${index + 1}`,
  }));

export const SECTIONS_DATA: SectionData[] = [
  {
    id: "games",
    title: "Games and Entertainment",
    description:
      "Dive into an immersive space of wide-screen videos, interactive effects, and engaging content. Enjoy smooth animations, fun challenges, and a vibrant mix of games and media designed to keep you entertained with every click.",
    media: [
      {
        id: 101,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233612/img_0219_z7e5cp.jpg",
        alt: "Games and entertainment",
        span: "md:col-span-1",
      },
      {
        id: 103,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233613/img_0220_dbxcs4.jpg",
        alt: "Fun activities",
        span: "md:col-span-1",
      },
      {
        id: 104,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233612/img_0221_lupwgc.jpg",
        alt: "Entertainment event",
        span: "md:col-span-1",
      },
      {
        id: 105,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233903/img_0380_gzk4nv.jpg",
        alt: "Games and fun",
        span: "md:col-span-1",
      },
      {
        id: 107,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233907/img_0381_ag66ml.jpg",
        alt: "Event photo",
        span: "md:col-span-1",
      },
      {
        id: 108,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233903/img_0384_gfoid9.jpg",
        alt: "Entertainment moment",
        span: "md:col-span-1",
      },
      {
        id: 109,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233909/img_0385_p8otk3.jpg",
        alt: "Games event",
        span: "md:col-span-1",
      },
      {
        id: 113,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763233626/img_0444_u8bbmy.jpg",
        alt: "Entertainment event",
        span: "md:col-span-1",
      },
      {
        id: 114,
        type: MediaType.Video,
        src: "https://res.cloudinary.com/dkwutmryn/video/upload/v1763229800/IMG_8075_iov3j9.mp4",
        alt: "Games and entertainment video",
        span: "md:col-span-2",
      },
      {
        id: 115,
        type: MediaType.Video,
        src: "https://res.cloudinary.com/dkwutmryn/video/upload/v1763229076/IMG_8129_w1cvcp.mov",
        alt: "Entertainment video",
        span: "md:col-span-2",
      },
      {
        id: 116,
        type: MediaType.Video,
        src: "https://res.cloudinary.com/dkwutmryn/video/upload/v1763229053/IMG_3417_urouug.mov",
        alt: "Games video",
        span: "md:col-span-2",
      },
      {
        id: 117,
        type: MediaType.Video,
        src: "https://res.cloudinary.com/dkwutmryn/video/upload/v1763228896/IMG_0216_r5spl8.mov",
        alt: "Entertainment moment video",
        span: "md:col-span-2",
      },
    ],
  },
  {
    id: "surprises",
    title: "Surprises",
    description:
      "From surprise mascot visits to flash mobs and personalized celebrations, we craft moments of pure delight. Our team works secretly to plan and execute flawless surprises that leave lasting memories and bring smiles to everyone involved.",
    media: [
      {
        id: 201,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234066/img_0245_lumdix.jpg",
        alt: "Surprise moment",
        span: "md:col-span-1",
      },
      {
        id: 202,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234066/img_0246_onqpus.jpg",
        alt: "Surprise celebration",
        span: "md:col-span-1",
      },
      {
        id: 203,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234066/img_0249_nn2vlc.jpg",
        alt: "Surprise event",
        span: "md:col-span-1",
      },
      {
        id: 204,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234066/img_0250_vmxest.jpg",
        alt: "Surprise moment",
        span: "md:col-span-1",
      },
      {
        id: 205,
        type: MediaType.Video,
        src: "https://res.cloudinary.com/dkwutmryn/video/upload/v1763228997/IMG_8626_gifn50.mov",
        alt: "Surprise video",
        span: "md:col-span-2",
      },
      {
        id: 206,
        type: MediaType.Video,
        src: "https://res.cloudinary.com/dkwutmryn/video/upload/v1763229020/IMG_8861_oyasrx.mp4",
        alt: "Surprise moment video",
        span: "md:col-span-2",
      },
    ],
  },
  {
    id: "team-building",
    title: "Team Building",
    description:
      "Strengthen bonds and boost morale with our custom-designed team-building events. We combine fun, challenge, and creativity to foster collaboration, improve communication, and energize your corporate team in a truly unique and engaging way.",
    media: [
      {
        id: 301,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234135/img_0217_ljqh5e.jpg",
        alt: "Team building activity",
        span: "md:col-span-1",
      },
      {
        id: 302,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234135/img_0218_li9dhx.jpg",
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 303,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234137/img_0222_qh4gx5.jpg",
        alt: "Team building event",
        span: "md:col-span-1",
      },
      {
        id: 304,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234137/img_0223_lophg9.jpg",
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 305,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234141/img_0224_dkmdyk.jpg",
        alt: "Team building moment",
        span: "md:col-span-1",
      },
      {
        id: 306,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234142/img_0225_hgympj.jpg",
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 307,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234142/img_0226_do6mov.jpg",
        alt: "Team building activity",
        span: "md:col-span-1",
      },
      {
        id: 308,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234144/img_0227_mgs2rm.jpg",
        alt: "Team event",
        span: "md:col-span-1",
      },
      {
        id: 309,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234145/img_0228_c1df6f.jpg",
        alt: "Team building",
        span: "md:col-span-1",
      },
      {
        id: 310,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234146/img_0229_oshvzu.jpg",
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 311,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234150/img_0230_supk1c.jpg",
        alt: "Team building event",
        span: "md:col-span-1",
      },
      {
        id: 312,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234151/img_0231_unhwew.jpg",
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 313,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234152/img_0232_enzgxi.jpg",
        alt: "Team building moment",
        span: "md:col-span-1",
      },
      {
        id: 314,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234153/img_0233_k8h0ex.jpg",
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 315,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234156/img_0234_kj9puj.jpg",
        alt: "Team building",
        span: "md:col-span-1",
      },
      {
        id: 316,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234157/img_0235_vyw9ac.jpg",
        alt: "Team event",
        span: "md:col-span-1",
      },
      {
        id: 317,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234158/img_0236_nbsxhl.jpg",
        alt: "Team building activity",
        span: "md:col-span-1",
      },
      {
        id: 318,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234160/img_0237_iw0xpz.jpg",
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 319,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234162/img_0238_qjivx7.jpg",
        alt: "Team building",
        span: "md:col-span-1",
      },
      {
        id: 320,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234163/img_0239_zwkxau.jpg",
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 321,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234165/img_0240_o6vyv5.jpg",
        alt: "Team building event",
        span: "md:col-span-1",
      },
      {
        id: 322,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234166/img_0241_i50lj9.jpg",
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 323,
        type: MediaType.Image,
        src: "https://res.cloudinary.com/dkwutmryn/image/upload/v1763234168/img_0242_fz2jxu.jpg",
        alt: "Team building moment",
        span: "md:col-span-1",
      },
      {
        id: 324,
        type: MediaType.Video,
        src: "https://res.cloudinary.com/dkwutmryn/video/upload/v1763229020/IMG_8861_oyasrx.mp4",
        alt: "Team building video",
        span: "md:col-span-2",
      },
      {
        id: 325,
        type: MediaType.Video,
        src: "https://res.cloudinary.com/dkwutmryn/video/upload/v1763228997/IMG_8626_gifn50.mov",
        alt: "Team activity video",
        span: "md:col-span-2",
      },
    ],
  },
];
