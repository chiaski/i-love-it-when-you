var c = 0;

var when = ["let me rest my head on your shoulder", "remember me", "carry the world in your hands", "intertwine your fingers with mine", "offer to take out the trash for me", "go to sleep with me", "listen to me as I talk senseless", "call me new names", "wake me up with something mundane", "succeed", "smile", "create new things with me", "stick your tongue up the roof of your mouth", "send me TikToks", "pick up our conversations like nothing has ever changed", "speak in our language", "let your soul shine in what you do", "help others without being asked", "remember who I need to email back for me", "are with me", "send me something that made you smile", "tuck a piece of your hair behind your ear", "change the color of your hair", "wrap your hand around your wrist", "know exactly what to say", "look at me in silence and just see", "are there for me", "loved me, without me asking", "pray", "tell me about what you believe in, including me", "carry the light in you", "stumble drunk into my arms", "zone out on the couch with me", "stay with me at the record store for hours", "are honest when you don't know what to say", "do a tiny dance when you're happy", "worry about your Instagram captions", "show me what your brother has been up to", "take pictures of the sky", "look through your camera roll", "tell me about the birds you see", "find a nice new Wikipedia page", "tag me in memes", "show me that there is always light", "speak, and say 'i love you' so many times without even knowing", "tell me about your day", "fill myself and other people with love, almost effortlessly", "turn on the engine", "send me the newest list you made", "show me what you made for class", "spend an afternoon counting the coins scattered in your room", "cut through old magazines to make something new", "tell me about the celebrity you wanna fuck", "feel good about yourself", "bring me along", "invite me explicitly to every little thing", "trust that I can carry this world with you", "offer to Venmo me for edibles", "mix me drinks", "show me the ROM hacks you played when you were a child", "recite the history of your Runescape scamming escapades", "wait for me outside of class", "tell other people about me &mdash; and the love that comes through indirectly", "are loved by all your friends", "defy expectations every single day", "unproductive, listless, lazy", "point out what houses you'd like to demolish when we walk through the street", "squeeze my hand tighter to nudge me", "say hello to your friends on the phone", "show me your birth chart, I know nothing about it but I'll listen", "reply to my finsta story to tell me not to do stupid shit", "check in on me", "are conscious of me", "listen to Imagine Dragons without putting your Spotify on private, so that I can listen along too", "have a Team Fortress 2 Discord profile picture in 2021", "scramble across the room to find the glasses hanging off your collar", "hug me and smell like the sun and vanilla", "offer to lend me your jacket, even though I'm wearing a skirt in the winter and that won't really help my case", "follow through with all the plans and promises we have", "make me feel all this love, even from a distance", "send me photos of easy $25 giftcard rewards that I could get from random user studies", "try to imitate the birdsong", "pull me back in for a little longer when we're about to say goodbye", "roll on the floor with me", "send me unsolicited anythings (they are always welcome)", "reveal a secret Spotify playlist you've hidden from your profile", "open the Figma file with me to make memes", "text me even if you're at the dinner table", "mock me, honestly", "call me your favorite Catholic", "watch the Twilight Saga with me", "don't laugh at me when I tell you about how Homestuck is one of the most influential pieces of media of all time", "suck really bad at Mini Metro", "pull up Sudoku while waiting for absolutely anything", "always seem to have everything we need in your bag", "have to write out what you're going to ask in class on paper first", "light my cigarette", "send me things that make you think of me", "tag me and say 'us'", "tell me what a word means in your language", "tell me the lyric that <em>really</em> struck you from the recommendation I sent", "watch those four hour YouTube video essays", "are loving life", "hold the door open for me", "walk me home", "tell me about what you were like when you were younger", "buy books by their cover", "shape me as I shape you", "rank your favorite punctuation marks", "mix the tang and the vodka like you're concocting the world's fanciest cocktail", "roast my wedding playlist but have your own at 20", "favorite my shittiest tweets", "make me disregard every prophecy, every warning", "mince the garlic for me", "help me finish the food on my plate", "save quotes that you enjoy and recite them back to me", "prod me about all your book recommendations", "talk about wanting to start a Substack (you're the only newsletter I'd actually open)", "help show me that no bad thing is actually bad", "jump on new hyperfixations", "pause in conversation until you can get your thoughts together", "have your voice shift a little as you speak to me &mdash; and only me", "read all my cry for help blog posts", "remember my family's birthdays more than I can", "refill the ice cube tray"]

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//
$(function () {

  shuffle(when);
});



$(document).click(function (e) {
  // Check for left button
  if (e.button == 0) {

    console.log(c + ": " + when[c]);

    $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);

    //    $("#when-you").fadeIn("slow").prepend("<p>" + when[c] + "</p>");

    c++;
  }
});
