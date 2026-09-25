// Things you like. Works exactly like experiences.js:
// each { ... } block becomes one item in the "Things I like" list.
//
//   title    – the text shown in the list
//   details  – shown in the side panel; each string is a paragraph.
//              Add links with <a href="https://...">link text</a>
//   link     – optional URL shown in the side panel, or ""

const likes = [
  {
    title: "Music",
    details: [`I make a lot of playlists. I like associating places, periods of my life, and experiences with music. 
      It's nice being able to listen back and remember exactly where I was.`,
      `<a href="https://jasonau4.wixsite.com/blog/post/music-as-classical-conditioning">Music as classical conditioning</a>: Honestly a bit of an embarrassing read these days, but a glimpse into my thought process`,
      `Lately I've gotten really into live music. I went to the first ever Daisy Chain Fields and I have been craving another experience like that ever since. Chappell Roan's set 
      changed my life.`,
      `<a href="https://open.spotify.com/user/wshfumhxtsywsz8jko6rbee07?si=31f8d80615274237">My spotify profile</a>`,
      `<a href="https://www.last.fm/user/jasonau4">My last.fm profile</a>`],
    link: "",
  },
  {
    title: "Climbing",
    details: [`A friend got me into rock climbing after I graduated from college. I started 
      in November 2025 and since then it's become one of the biggest constants in my life. Always
      looking for new people to climb with.`, 
      `Currently chasing V6.`],
    link: "",
  },
  {
    title: "Sports (duh)",
    details: [`Mostly a Golden State Warriors fanatic. Their 2022 championship run genuinely
      inspired so much hope in my life in a time where I felt lost.`,
      `These days I'm also rooting for the Philadelphia Eagles and 76ers, Dallas Wings, and Detroit Lions, plus pretty much any fun underdog story.`],
    link: "",
  },
];
