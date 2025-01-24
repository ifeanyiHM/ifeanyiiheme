export interface BlogContextProps {
  blogs: BlogPostProps[];
  fetchBlogs: () => Promise<void>;
  // displayShareIcon: boolean;
  // setDisplayShareIcon: (type: boolean) => void;
}

export const defaultBlogProps: BlogContextProps = {
  blogs: [],
  fetchBlogs: async () => {},
  // displayShareIcon: false,
  // setDisplayShareIcon: (type: boolean) => {},
};

export interface BlogPostProps {
  _id: string;
  numId: string;
  title: string;
  author: string;
  authorImage: string;
  authorBio: string;
  readTime: string;
  date: string;
  slug: string;
  coverImage: {
    image: string;
    zoomedImage: string;
  }[];
  alt: string;
  headParagraph: string;
  sections: {
    imgSubtitle?: string;
    subtitle?: string;
    image: {
      image: string;
      zoomedImage: string;
    }[];
    alt: string;
    text: string;
  }[];
  tags: string[];
  reaction: {
    views: number;
    hearts: number;
  };
  comments: [
    {
      name: string;
      thought: string;
      date: string;
      background: string;
    }
  ];
}

export const blogData = [
  {
    id: "impossiblelives001",
    title: "Impossible Lives",
    author: "Alok",
    authorImage: "",
    readTime: "5 min read",
    date: "September 18, 2021",
    coverImage: [
      {
        image: "/blogs/impossible.jpg",
        zoomedImage: "/blogs/impossible.jpg",
      },
    ],
    alt: "text image",
    headParagraph:
      "we live impossible lives. Miracles are not exceptional; they are everywhere.  In order for me to be here writing this to you now, for you to be there reading it, a billion things had to go right and a billion things wrong. This was not supposed to happen. and it is. We are not supposed to happen. and we do. if that's not a testament to the gruesome charm of being alive and meaning it, i'm not sure what is.",
    sections: [
      {
        text: "Impossible is enlisted as a foot soldier for the status quo. Its purpose is to re-inscribe the political coordinates of existence, stifle any attempt to stray anywhere else. when they say: &quot;that's impossible!&quot; they mean: &quot;don't imagine otherwise!&quot; and when you do just that, they will dismiss you as naïve and idealistic. So what?",
      },
      {
        image: [
          {
            image: "/blogs/tic-tac-toe.jpg",
            zoomedImage: "/blogs/tic-tac-toe.jpg",
          },
        ],
        alt: "tic tac toe",
        text: "Reality is a construction project with no completion date in sight. Of course a camera cannot capture itself. Of course a telescope cannot see what it doesn't. Of course they will delegitimize any viable alternative. But are we trying to be legitimate? Or are we trying to live? Have bad manners: daydream anyways.",
      },
      {
        text: "Lurking beneath every crisis is another: parched imagination. Poet Amanda Gorman calls the country simply unfinished, not broken. What if this world was just one draft? What if everything could be rewritten? The job of an artist is to replenish imagination. Which is to say: there are ideas we haven't considered yet. Feelings we haven't encountered yet. Love we haven't surrendered to yet. &quot;Yet&quot; is the most wondrous word ever built. Let's live there together. Redesign existence.",
      },
      {
        text: "As a child it wasn't safe for me to express myself outside. So I stayed inside. I went treasure hunting in the library. Novels became my instruction manuals. History, my family. Sometimes I'd stay up all night watching nova documentaries about space. What a delight to discover that I was insignificant. What a relief to discover so early that beauty comes from the things we will never know, not the things we do.",
      },
      {
        image: [
          {
            image: "/blogs/miracle.jpg",
            zoomedImage: "/blogs/miracle.jpg",
          },
        ],
        alt: "miracle",
        text: "I'm not sure what the future holds, but i know what i do. A book. A phone. A conviction: impossible is an invitation to imagine something else.",
      },
    ],
    tags: [
      "self Improvement",
      "lifeStyle",
      "Freedom",
      "Universe",
      "Mindfulness",
      "miracles",
      "gratefulness",
    ],
    reaction: {
      views: 50,
      hearts: 8,
    },
    comments: [],
  },
  // {
  //   id: "fine002",
  //   title: "Fine body and soul if you love to go in simple words",
  //   author: "Ifeanyi Iheme",
  //   authorImage: "",
  //   readTime: "5 min read",
  //   date: "December 23, 2024",
  //   coverImage: [
  //     {
  //       image: "/blogs/love.jpg",
  //       zoomedImage: "/blogs/love.jpg",
  //     },
  //   ],
  //   alt: "love",
  //   headParagraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  //   sections: [
  //     {
  //       subtitle: "Image Sub Title",
  //       image: [
  //         {
  //           image: "/blogs/for-you.png",
  //           zoomedImage: "/blogs/for-you.png",
  //         },
  //       ],
  //       alt: "love",
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  //     },
  //     {
  //       subtitle: "Image Sub Title",
  //       image: [
  //         {
  //           image: "/blogs/tic-tac-toe.jpg",
  //           zoomedImage: "/blogs/tic-tac-toe.jpg",
  //         },
  //       ],
  //       alt: "love",
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  //     },
  //   ],
  //   tags: ["self Improvement", "life", "Technology", "experience", "style"],
  //   reaction: {
  //     views: 50,
  //     hearts: 20,
  //   },
  // },
  {
    id: "family003",
    title: "My Love letter to Family and Friends",
    author: "Ifeanyi Iheme",
    authorImage: "",
    readTime: "5 min read",
    date: "August 17, 2021",
    coverImage: [
      {
        image: "/blogs/family-love-letter/somto.jpg",
        zoomedImage: "/blogs/family-love-letter/somto-full.jpg",
      },
      {
        image: "/blogs/family-love-letter/mother.JPG",
        zoomedImage: "/blogs/family-love-letter/mother-full.JPG",
      },
      {
        image: "/blogs/family-love-letter/somto3.jpg",
        zoomedImage: "/blogs/family-love-letter/somto3-full.jpg",
      },
      {
        image: "/blogs/family-love-letter/somto2.jpg",
        zoomedImage: "/blogs/family-love-letter/somto2-full.jpg",
      },
    ],

    alt: "my brother, my nephew and I",
    headParagraph:
      "Reminiscing on a series of events through two decades and about a half; the combined mechanism for raising a child in a world with incredible realities: the good, the bad, and the ugly moments of growing up. The days of laughter and sorrow. The chain of events that unfold into adulthood. I’ve perceived certain people in our lives as underlying elements, whose existence gives meaning to ours. People who take on the responsibility of aiding our stability and growth. People committed to the task of facilitating our happiness, like one paying a duty call. People to whom our well-being is deeply embedded in their priorities, whose fond expression of love, though correctional and chastising, is yet full of sincerity, purity, and realness: my family and my friends.",
    sections: [
      {
        imgSubtitle: "Family",
        image: [
          {
            image: "/blogs/family-love-letter/gabriel.jpg",
            zoomedImage: "/blogs/family-love-letter/gabriel-full.jpg",
          },
        ],

        alt: "Gabriel and I on our way to his cousin's wedding",
        text: "From my family, I observe the outpouring of love and affection from praying parents and supportive siblings. A people who find you perfect in your broken pieces, take on pain for your gain, and are overcome with grief for your troubles. These dear ones, whose love we sometimes take for granted while craving the affection and attention of those who never mattered. The institution I find most delicate to the growth of a person—the family. The unit from which a man is first truly and limitlessly loved. The first God-given blessing to a child… Family.",
      },
      {
        text: "Also, from a unique sort of family—people we call friends—I’m blessed to have companions with keen insight and comprehension of the depth and breadth of true friendship. Friends who, in a heartbeat, would rescind any self-interest and run to my aid. Friends who bear the burden of responsibility to present a blueprint for salvation in times of setback. Friends like comrades on a battlefield, solely for the purpose of shielding a fellow from attack. Friends who are like the reincarnation of the men in Luke 5:18–19. Friends worthy of emulation by angels. Friends who are matchless, invaluable, irreplaceable, and priceless.",
      },
      {
        imgSubtitle: "Friends",
        image: [
          {
            image: "/blogs/family-love-letter/darl.jpg",
            zoomedImage: "/blogs/family-love-letter/darl-full.jpg",
          },
        ],

        alt: "a picture with Darlington",
        text: "To my family: Mom, Dad, Chisom, Bertha, Miracle, Obinna, Somtochukwu.",
      },
      {
        text: "And to my friends: Gabriel, Darlington, Kenny, Erik, Dotun.",
      },
      {
        text: "I’ve crossed paths with a handful of wonderful beings over the course of my life, and I would be remiss if I did not admit to having felt their impact. I must frankly express, with uncontainable glee pouring from my heart, that you all have been a miracle in my life.",
      },
      {
        text: "This birthday, I am purposely making a clarion call to celebrate you and to let the world see your goodness—your love and care for me, which I do not take for granted. They have been my greatest motivation. Not one dawn to dusk passes without a thought of you. I never fail to mention you whenever I pray. You are a perfect example of humanity, God in the flesh, and the ones who truly matter in every sense.",
      },
      {
        text: "Sounds, and writings, mind and matter cannot contain the extent to which I’m grateful to God for you. Every cell in my body, every fire in my spirit, and every thought in my soul is consumed with love for you all. I LOVE YOU ALL.",
      },
      {
        text: "Not one dawn to dusk passes without a thought of you. I never fail to mention you whenever I pray. You are a perfect example of humanity, God in the flesh, and the ones who truly matter in every sense. Sounds, and writings, mind and matter cannot contain the extent to which I’m grateful to God for you. Every cell in my body, every fire in my spirit, and every thought in my soul is consumed with love for you all. I LOVE YOU ALL.",
      },
      {
        text: "Barbara Bush once said, “When all the dust is settled and all the crowds are gone, the things that matter are faith, family, and friends.” ",
      },
      {
        text: "Sincerely yours, Ifeanyi ❤️❤️❤️❤️❤️❤️ ",
      },
    ],
    tags: [
      "Family",
      "Friends",
      "Gratefulness",
      "Growth",
      "love",
      "Appreciation",
    ],
    reaction: {
      views: 10,
      hearts: 10,
    },
    comments: [],
  },
  {
    id: "join004",
    title: "My coding journey",
    author: "Ifeanyi Iheme",
    authorImage: "",
    readTime: "5 min read",
    date: "January 3, 2025",
    coverImage: [
      {
        image: "/blogs/for-you.png",
        zoomedImage: "/blogs/for-you.png",
      },
    ],
    alt: "love",
    headParagraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
    sections: [
      {
        subtitle: "Image Sub Title",
        image: [
          {
            image: "/blogs/love.jpg",
            zoomedImage: "/blogs/love.jpg",
          },
        ],
        alt: "love",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
      },
      {
        subtitle: "Image Sub Title",
        image: [
          {
            image: "/blogs/tic-tac-toe.jpg",
            zoomedImage: "/blogs/tic-tac-toe.jpg",
          },
        ],
        alt: "love",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
      },
    ],
    tags: ["self Improvement", "life", "Technology", "experience", "style"],
    reaction: {
      views: 50,
      hearts: 5,
    },
    comments: [],
  },
];

// {
//   imgSubtitle: "Image Sub Title",
//   subtitle: "Sub Title",
//   image: "/blogs/gabriel.jpg",
//   alt: "Gabriel and I on our way to his cousin's wedding",
//   text: "From my family, I observe the outpouring of love and affection",
// },
