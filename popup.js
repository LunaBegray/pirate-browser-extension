document.getElementById("translate").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: pirateTranslate
    });
  });
});

function pirateTranslate() {
  const pirateWords = {
    "hello": "ahoy",
    "friend": "matey",
    "yes": "aye",
    "no": "nay",
    "please": "prithee",
    "thank you": "much obliged",
    "goodbye": "farewell",
    "morning": "mornin' mate",
    "night": "good night, me hearty",
    "how are you?": "how be ye?",
    "I am fine": "I be fine, arr",
    "what's up?": "what be goin' on?",
    "see you later": "catch ye on the flip side",
    "sorry": "me bad",
    "excuse me": "pardon me, ye scallywag",
    "you're welcome": "yer welcome, ye bilge rat",
    "food": "grub",
    "water": "grog",
    "drink": "swill",
    "beer": "ale",
    "good": "sound",
    "bad": "rotten",
    "happy": "in good spirits",
    "sad": "down in the dumps",
    "angry": "mad as a hornet",
    "stupid": "dull as a bilge pump",
    "smart": "sharp as a cutlass",
    "big": "massive",
    "small": "wee",
    "fast": "quick as a sea breeze",
    "slow": "draggin' like a snail",
    "danger": "a perilous affair",
    "help": "lend a hand",
    "stop": "avast",
    "go": "sail forth",
    "start": "set sail",
    "finish": "dock the ship",
    "work": "labor",
    "rest": "take a spell",
    "sleep": "catch some shut-eye",
    "wake up": "rise and shine",
    "fire": "blast the cannons",
    "fight": "duel",
    "win": "claim victory",
    "lose": "walk the plank",
    "enemy": "foe",
    "friend": "matey",
    "captain": "Cap'n",
    "crew": "the swashbucklers",
    "ship": "vessel",
    "boat": "dinghy",
    "sail": "set the mainsail",
    "storm": "a tempest",
    "sea": "the deep blue",
    "island": "a cove",
    "treasure": "booty",
    "gold": "doubloons",
    "silver": "pieces of eight",
    "map": "chart",
    "compass": "navigator's tool",
    "pirate": "buccaneer",
    "treasure hunt": "booty chase",
    "rum": "grog",
    "bar": "tavern",
    "captain's quarters": "Cap'n's cabin",
    "deck": "the main deck",
    "mast": "the crow's nest",
    "sword": "cutlass",
    "knife": "dagger",
    "gun": "blunderbuss",
    "cannon": "ship's gun",
    "hook": "pirate's hook",
    "eyepatch": "pirate's shade",
    "parrot": "feathered mate",
    "pirate flag": "Jolly Roger",
    "treasure chest": "booty box",
    "cave": "hidden lair",
    "mysterious": "bewildering",
    "curse": "blasted hex",
    "sailor": "sea dog",
    "navigator": "sea chart master",
    "stormy": "tempestuous",
    "calm": "serene",
    "shipwreck": "wrecked vessel",
    "island": "deserted isle",
    "sea monster": "kraken",
    "mermaid": "sea wench",
    "whale": "great leviathan",
    "shark": "devil fish",
    "whale": "great leviathan",
    "seaweed": "ocean moss",
    "tide": "the pull of the deep",
    "sun": "the fiery orb",
    "moon": "the silver lantern",
    "star": "the heavens' guide",
    "cloud": "sea fog",
    "rain": "water from the sky",
    "snow": "frozen sea mist",
    "wind": "the gale",
    "fog": "sea mist",
    "ice": "frost",
    "stormy": "tempest-tossed",
    "clear sky": "no cloud in sight",
    "big wave": "mighty swell",
    "small wave": "gentle roll",
    "peace": "calm waters",
    "fight": "swordplay",
    "battle": "naval clash",
    "victory": "claim the prize",
    "defeat": "davy jones' locker",
    "dangerous": "fraught with peril",
    "safe": "free from harm",
    "risk": "dangerous venture",
    "run": "make sail",
    "stand": "hold yer ground",
    "sit": "rest yer bones",
    "leave": "set forth",
    "arrive": "dock yer ship",
    "enter": "make yer way aboard",
    "exit": "haul anchor",
    "return": "come back to port",
    "question": "what's yer query?",
    "answer": "the response be...",
    "time": "hourglass",
    "hour": "the passing of time",
    "minute": "tick-tock",
    "second": "split moment",
    "day": "sun's journey",
    "week": "seven sunrises",
    "month": "thirty moons",
    "year": "full revolution",
    "birthday": "day of yer birth",
    "celebrate": "have a feast",
    "party": "shindig",
    "fun": "jolly good",
    "happy": "in high spirits",
    "sad": "low in the sails",
    "angry": "spitting fire",
    "confused": "lost at sea",
    "tired": "worn out like a rigging",
    "bored": "chasing me tail",
    "excited": "ready to set sail",
    "surprised": "shiver me timbers",
    "scared": "scared stiff",
    "nervous": "a bag of nerves",
    "shy": "timid as a mouse",
    "brave": "bold as brass",
    "bold": "daring",
    "weak": "lacking in strength",
    "strong": "tough as oak",
    "smart": "sharp as a hook",
    "dumb": "thick as a plank",
    "beautiful": "fair as the seas",
    "ugly": "as hideous as a barnacle",
    "hot": "burnin' like the sun",
    "cold": "frozen like the arctic",
    "rainy": "drenched like a mutineer",
    "sunny": "bright as gold",
    "cloudy": "overcast like a storm's brewing",
    "windy": "blowin' like a gale",
    "snowy": "frozen like a dead man's breath",
    "stormy": "tempest-tossed",
    "clear": "no fog on the horizon"
  };

  document.body.innerHTML = document.body.innerHTML.replace(/\b(\w+)\b/g, (word) => pirateWords[word.toLowerCase()] || word);
}