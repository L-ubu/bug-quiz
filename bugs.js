// Bug database — images array allows random photo variation per round
const BUGS = [
  {
    name: "Ladybug",
    images: ["images/ladybug.jpg", "images/ladybug2.jpg"],
    funFact: "When ladybugs feel threatened, they play dead and release a smelly yellow fluid from their leg joints. Talk about commitment to the act!"
  },
  {
    name: "Monarch Butterfly",
    images: ["images/monarch.jpg"],
    funFact: "Monarch butterflies are GPS wizards — they navigate thousands of miles to a place they've never been, using the sun and Earth's magnetic field!"
  },
  {
    name: "Praying Mantis",
    images: ["images/mantis.jpg"],
    funFact: "The praying mantis is the only insect that can look over its shoulder. They have stereo vision just like humans, but their 3D works completely differently from ours!"
  },
  {
    name: "Atlas Moth",
    images: ["images/atlas.jpg"],
    funFact: "Atlas moths are born with a countdown timer — no mouths as adults, so they literally cannot eat. They live their entire adult life on energy stored as caterpillars!"
  },
  {
    name: "Firefly",
    images: ["images/firefly.jpg"],
    funFact: "Fireflies produce 'cold light' — unlike a lightbulb that wastes 90% of energy as heat, firefly light is nearly 100% efficient. Scientists still can't replicate this!"
  },
  {
    name: "Jewel Beetle",
    images: ["images/jewel.png"],
    funFact: "Jewel beetles can sense forest fires from 80 km away! They have tiny infrared sensors because they lay eggs in freshly burned wood. Nature's firefighters!"
  },
  {
    name: "Hercules Beetle",
    images: ["images/hercules.jpg"],
    funFact: "If a Hercules beetle were human-sized, it could carry about 65 tons — roughly 10 elephants stacked on top of each other!"
  },
  {
    name: "Luna Moth",
    images: ["images/luna.jpg"],
    funFact: "Luna moth tail streamers aren't just pretty — they spin in flight creating echoes that confuse bat sonar, acting like tiny decoys!"
  },
  {
    name: "Dragonfly",
    images: ["images/dragonfly.jpg", "images/dragonfly2.jpg"],
    funFact: "Dragonflies are the deadliest hunters with a 95% success rate. Lions succeed about 25% of the time and great white sharks about 50%!"
  },
  {
    name: "Orchid Mantis",
    images: ["images/orchid.jpg"],
    funFact: "Orchid mantises are such good flower impersonators that bees actually prefer visiting them over real flowers. The ultimate catfishing of the insect world!"
  },
  {
    name: "Dung Beetle",
    images: ["images/dung.jpg", "images/dung2.jpg"],
    funFact: "Dung beetles are astronomers! They climb on top of their dung ball and do a little dance to orient themselves using the Milky Way. First animals known to navigate by starlight!"
  },
  {
    name: "Stick Insect",
    images: ["images/stick.jpg"],
    funFact: "Stick insects evolved to look like sticks. Some species take it further: their eggs look like seeds, so ants carry them underground, protecting them!"
  },
  {
    name: "Blue Morpho Butterfly",
    images: ["images/morpho.jpg", "images/morpho2.jpg"],
    funFact: "Blue Morpho butterflies aren't actually blue! Their wings have tiny ridges that reflect blue light like a prism. Shrink down and look closely — the wings are transparent!"
  },
  {
    name: "Bombardier Beetle",
    images: ["images/bombardier.jpg"],
    funFact: "The bombardier beetle has a chemical weapon in its butt — it mixes two chemicals causing an explosive reaction, shooting boiling liquid at predators with a pop!"
  },
  {
    name: "Honeybee",
    images: ["images/honeybee.jpg", "images/honeybee2.jpg"],
    funFact: "Honeybees are tiny mathematicians — hexagonal honeycombs are the most efficient shape for storing the most honey with the least wax. They solved this geometry millions of years before humans!"
  },
  {
    name: "Giant Weta",
    images: ["images/weta.jpg"],
    funFact: "Giant wetas are so heavy they can't even jump! They're the pandas of the insect world — ancient, chunky, and surprisingly gentle despite looking terrifying."
  },
  {
    name: "Goliath Beetle",
    images: ["images/goliath.jpg"],
    funFact: "Goliath beetles are among the heaviest insects on Earth, weighing up to 100 grams — about the weight of an apple! Despite this, they can still fly."
  },
  {
    name: "Rhinoceros Beetle",
    images: ["images/rhino_beetle.jpg"],
    funFact: "Rhinoceros beetles can lift 850 times their own weight! If humans were that strong, we'd be lifting 65 tons — the weight of a loaded freight train car."
  },
  {
    name: "Golden Tortoise Beetle",
    images: ["images/golden_tortoise.jpg"],
    funFact: "Golden tortoise beetles can change color from gold to red when disturbed or during mating — they're basically living mood rings!"
  },
  {
    name: "Leaf Insect",
    images: ["images/leaf_insect.jpg"],
    funFact: "Leaf insects are so convincing as leaves that they even have fake brown spots and bite marks on their wings to look like real damaged leaves!"
  },
  {
    name: "Lanternfly",
    images: ["images/lanternfly.jpg"],
    funFact: "Despite the name, lanternflies don't actually glow! Early naturalists mistakenly believed their strange elongated heads produced light."
  },
  {
    name: "Rainbow Stag Beetle",
    images: ["images/rainbow_stag.jpg"],
    funFact: "The rainbow stag beetle from Australia shimmers with every color of the rainbow! Their iridescence comes from microscopic structures in their exoskeleton."
  },
  {
    name: "Rosy Maple Moth",
    images: ["images/rosy_maple.png"],
    funFact: "Rosy maple moths look like they were designed by a candy shop — their woolly pink and yellow fur makes them the most fabulous moths in North America!"
  },
  {
    name: "Io Moth",
    images: ["images/io_moth.jpg"],
    funFact: "The Io moth has giant fake eyespots on its hindwings. When threatened, it flashes them open to startle predators into thinking they're facing a huge owl!"
  },
  {
    name: "Death's-head Hawkmoth",
    images: ["images/deathshead.jpg"],
    funFact: "The death's-head hawkmoth can sneak into beehives and steal honey! It mimics the scent of bees so the hive doesn't attack it. Also famous from Silence of the Lambs!"
  },
  {
    name: "Hummingbird Hawk-moth",
    images: ["images/hummingbird_moth.jpg"],
    funFact: "Hummingbird hawk-moths hover and fly so much like actual hummingbirds that people constantly mistake them for the real thing! They even make a humming sound."
  },
  {
    name: "Glasswinged Butterfly",
    images: ["images/glasswinged.jpg"],
    funFact: "The glasswinged butterfly has transparent wings because its scales are shaped like tiny pillars that let light pass through — like nature's anti-reflective coating!"
  },
  {
    name: "Peacock Butterfly",
    images: ["images/peacock_butterfly.jpg"],
    funFact: "When threatened, the peacock butterfly snaps its wings open to reveal four huge eyespots AND makes a hissing sound by rubbing its wings together!"
  },
  {
    name: "Swallowtail Butterfly",
    images: ["images/swallowtail.jpg"],
    funFact: "Swallowtail caterpillars have a secret weapon called an osmeterium — a bright orange forked organ that pops out of their head and smells like rotten fruit!"
  },
  {
    name: "Giant Water Bug",
    images: ["images/water_bug.jpg"],
    funFact: "Giant water bugs are called 'toe-biters' for a reason — they have one of the most painful bites of any insect and can take down small fish and frogs!"
  },
  {
    name: "Assassin Bug",
    images: ["images/assassin_bug.jpg"],
    funFact: "Some assassin bugs stack the corpses of their victims on their back as camouflage and armor. They're literally wearing a backpack of dead ants!"
  },
  {
    name: "Cicada",
    images: ["images/cicada.jpg"],
    funFact: "Some cicadas stay underground for 17 years before emerging all at once! Their song can reach 120 decibels — as loud as a rock concert!"
  },
  {
    name: "Walking Leaf",
    images: ["images/walking_leaf.jpg"],
    funFact: "Walking leaf insects even sway gently as they move, mimicking a leaf blowing in the wind. They take camouflage to an artistic level!"
  },
  {
    name: "Ant",
    images: ["images/ant.jpg"],
    funFact: "Ants have been farming for 60 million years — long before humans! Leafcutter ants grow their own fungus gardens and even use antibiotics to keep their crops healthy."
  },
  {
    name: "Titan Beetle",
    images: ["images/titan_beetle.jpg"],
    funFact: "The titan beetle can grow up to 17 cm long and its jaws can snap a pencil in half! No one has ever found their larvae — a mystery of the Amazon."
  },
  {
    name: "Weevil",
    images: ["images/weevil.jpg"],
    funFact: "There are over 97,000 species of weevils — more than any other animal family! Their adorable little snout is actually a specialized mouth for drilling into plants."
  },
  {
    name: "Katydid",
    images: ["images/katydid.jpg"],
    funFact: "Katydids hear with their knees! They have oval ear-drums called tympana on their front legs. They got their name from their call: 'katy-did, katy-didn't'!"
  },
  {
    name: "Bumblebee",
    images: ["images/bumblebee.jpg"],
    funFact: "Bumblebees cheat physics by spinning their wings in a figure-8 pattern creating mini tornadoes of lift! The myth that they 'shouldn't fly' is based on oversimplified math."
  },
  {
    name: "Tarantula Hawk",
    images: ["images/tarantula_hawk.jpg"],
    funFact: "The tarantula hawk wasp has one of the most painful stings on Earth — a 4 on the Schmidt Pain Index. It paralyzes tarantulas and lays eggs inside them!"
  },
  {
    name: "Emerald Cockroach Wasp",
    images: ["images/emerald_wasp.jpg"],
    funFact: "The emerald cockroach wasp turns cockroaches into zombies! It stings their brain in a precise spot, making the roach walk obediently into the wasp's nest."
  },
  {
    name: "Painted Lady",
    images: ["images/painted_lady.jpg"],
    funFact: "Painted lady butterflies make the longest insect migration on Earth — up to 15,000 km across the Sahara Desert, spanning multiple generations!"
  },
  {
    name: "Red Admiral",
    images: ["images/red_admiral.jpg"],
    funFact: "Red admiral butterflies are so territorial that they'll chase away birds, cats, and even people who enter their patch! They also love rotting fruit over flowers."
  },
  {
    name: "Sphinx Moth",
    images: ["images/sphinx_moth.jpg"],
    funFact: "Sphinx moths are among the fastest flying insects at over 50 km/h! Darwin predicted their existence before they were discovered, based on a deep orchid."
  },
];

// Helper: pick a random image for a bug
function bugImage(bug) {
  return bug.images[Math.floor(Math.random() * bug.images.length)];
}

// Quiz questions
const QUIZ_QUESTIONS = [
  { q: "Which insect has a 95% hunting success rate?", answer: "Dragonfly", options: ["Praying Mantis", "Dragonfly", "Orchid Mantis", "Assassin Bug"], bugRef: "Dragonfly" },
  { q: "Which beetle navigates using the Milky Way?", answer: "Dung Beetle", options: ["Hercules Beetle", "Jewel Beetle", "Dung Beetle", "Bombardier Beetle"], bugRef: "Dung Beetle" },
  { q: "How far do Monarch butterflies migrate each year?", answer: "Up to 4,800 km", options: ["Up to 500 km", "Up to 1,200 km", "Up to 4,800 km", "Up to 10,000 km"], bugRef: "Monarch Butterfly" },
  { q: "Which insect can turn its head 180 degrees?", answer: "Praying Mantis", options: ["Dragonfly", "Stick Insect", "Praying Mantis", "Firefly"], bugRef: "Praying Mantis" },
  { q: "What do Atlas moth adults lack?", answer: "A mouth", options: ["Wings", "A mouth", "Antennae", "Legs"], bugRef: "Atlas Moth" },
  { q: "Which insect's color comes from microscopic scales, not pigments?", answer: "Blue Morpho Butterfly", options: ["Jewel Beetle", "Blue Morpho Butterfly", "Ladybug", "Firefly"], bugRef: "Blue Morpho Butterfly" },
  { q: "How many times their body weight can a Hercules beetle carry?", answer: "850 times", options: ["100 times", "500 times", "850 times", "2,000 times"], bugRef: "Hercules Beetle" },
  { q: "What temperature does the bombardier beetle's spray reach?", answer: "100\u00b0C (212\u00b0F)", options: ["50\u00b0C (122\u00b0F)", "75\u00b0C (167\u00b0F)", "100\u00b0C (212\u00b0F)", "150\u00b0C (302\u00b0F)"], bugRef: "Bombardier Beetle" },
  { q: "What do fireflies produce that is nearly 100% energy efficient?", answer: "Cold light", options: ["Warmth", "Cold light", "Sound waves", "Electric shocks"], bugRef: "Firefly" },
  { q: "How do honeybees communicate the location of food?", answer: "Waggle dance", options: ["Pheromone trails", "Waggle dance", "High-pitched buzzing", "Wing patterns"], bugRef: "Honeybee" },
  { q: "Why do luna moths have long tail streamers?", answer: "To confuse bat sonar", options: ["To attract mates", "To confuse bat sonar", "To help steer in flight", "For balance"], bugRef: "Luna Moth" },
  { q: "Which insect can detect forest fires from 80 km away?", answer: "Jewel Beetle", options: ["Firefly", "Dragonfly", "Jewel Beetle", "Bombardier Beetle"], bugRef: "Jewel Beetle" },
  { q: "What shape do stick insect eggs mimic?", answer: "Plant seeds", options: ["Pebbles", "Plant seeds", "Raindrops", "Flower buds"], bugRef: "Stick Insect" },
  { q: "How heavy can a giant weta get?", answer: "Up to 70 grams", options: ["Up to 10 grams", "Up to 30 grams", "Up to 70 grams", "Up to 150 grams"], bugRef: "Giant Weta" },
  { q: "How long have dragonflies existed on Earth?", answer: "300 million years", options: ["50 million years", "150 million years", "300 million years", "500 million years"], bugRef: "Dragonfly" },
  { q: "Which insect turns cockroaches into zombies?", answer: "Emerald Cockroach Wasp", options: ["Tarantula Hawk", "Emerald Cockroach Wasp", "Assassin Bug", "Bombardier Beetle"], bugRef: "Emerald Cockroach Wasp" },
  { q: "How long can cicadas stay underground?", answer: "17 years", options: ["3 years", "7 years", "17 years", "50 years"], bugRef: "Cicada" },
  { q: "Which beetle can change from gold to red when disturbed?", answer: "Golden Tortoise Beetle", options: ["Jewel Beetle", "Golden Tortoise Beetle", "Rainbow Stag Beetle", "Goliath Beetle"], bugRef: "Golden Tortoise Beetle" },
  { q: "Which moth sneaks into beehives to steal honey?", answer: "Death's-head Hawkmoth", options: ["Atlas Moth", "Luna Moth", "Death's-head Hawkmoth", "Sphinx Moth"], bugRef: "Death's-head Hawkmoth" },
  { q: "What do some assassin bugs stack on their backs?", answer: "Corpses of their victims", options: ["Leaves and twigs", "Corpses of their victims", "Grains of sand", "Flower petals"], bugRef: "Assassin Bug" },
  { q: "How many species of weevils exist?", answer: "Over 97,000", options: ["About 5,000", "Over 25,000", "Over 97,000", "Over 200,000"], bugRef: "Weevil" },
  { q: "Where do katydids have their ears?", answer: "On their knees", options: ["On their head", "On their antennae", "On their knees", "On their abdomen"], bugRef: "Katydid" },
  { q: "What is the tarantula hawk's sting rated on the Schmidt Pain Index?", answer: "4 out of 4", options: ["1 out of 4", "2 out of 4", "3 out of 4", "4 out of 4"], bugRef: "Tarantula Hawk" },
  { q: "Which butterfly makes the longest insect migration on Earth?", answer: "Painted Lady", options: ["Monarch Butterfly", "Painted Lady", "Red Admiral", "Swallowtail Butterfly"], bugRef: "Painted Lady" },
  { q: "How fast can sphinx moths fly?", answer: "Over 50 km/h", options: ["Over 15 km/h", "Over 30 km/h", "Over 50 km/h", "Over 100 km/h"], bugRef: "Sphinx Moth" },
  { q: "Which insect is often mistaken for a hummingbird?", answer: "Hummingbird Hawk-moth", options: ["Sphinx Moth", "Hummingbird Hawk-moth", "Io Moth", "Atlas Moth"], bugRef: "Hummingbird Hawk-moth" },
  { q: "What makes glasswinged butterfly wings transparent?", answer: "Pillar-shaped scales", options: ["They have no scales", "Pillar-shaped scales", "A special wax coating", "Extremely thin membranes"], bugRef: "Glasswinged Butterfly" },
  { q: "Have titan beetle larvae ever been found by scientists?", answer: "No, never", options: ["Yes, in Brazil", "Yes, in captivity only", "No, never", "Only fossilized ones"], bugRef: "Titan Beetle" },
  { q: "How long have ants been farming?", answer: "60 million years", options: ["10,000 years", "1 million years", "60 million years", "200 million years"], bugRef: "Ant" },
  { q: "What happens when a peacock butterfly feels threatened?", answer: "It hisses by rubbing its wings", options: ["It sprays chemicals", "It plays dead", "It hisses by rubbing its wings", "It emits a bright flash"], bugRef: "Peacock Butterfly" },
  { q: "What is a swallowtail caterpillar's secret weapon called?", answer: "Osmeterium", options: ["Spiracle", "Osmeterium", "Proboscis", "Tympanum"], bugRef: "Swallowtail Butterfly" },
  { q: "What makes the rosy maple moth so distinctive?", answer: "Pink and yellow woolly fur", options: ["Transparent wings", "Giant eyespots", "Pink and yellow woolly fur", "Bioluminescence"], bugRef: "Rosy Maple Moth" },
  { q: "Why are giant water bugs called 'toe-biters'?", answer: "They have an extremely painful bite", options: ["They eat toes", "They have an extremely painful bite", "They hide in shoes", "They look like toes"], bugRef: "Giant Water Bug" },
];

// True/False statements
const TF_STATEMENTS = [
  { statement: "Ladybugs bleed from their knees as a defense mechanism.", isTrue: true, explanation: "Yep! It's called 'reflex bleeding' — they release a stinky yellow fluid from their leg joints to gross out predators.", bugRef: "Ladybug" },
  { statement: "Butterflies taste with their feet.", isTrue: true, explanation: "True! Butterflies have taste receptors on their feet so they can identify plants by landing on them.", bugRef: "Monarch Butterfly" },
  { statement: "Praying mantises can see in full color like humans.", isTrue: false, explanation: "Nope! They have incredible 3D vision but most mantises can't see the full color spectrum. Their depth perception is unmatched though!", bugRef: "Praying Mantis" },
  { statement: "Atlas moths can survive for up to 6 months without eating.", isTrue: false, explanation: "Not quite — they have no mouths at all, but they only live 1-2 weeks as adults, surviving on fat stored during their caterpillar stage.", bugRef: "Atlas Moth" },
  { statement: "Some fireflies use their light to lure and eat other firefly species.", isTrue: true, explanation: "Sneaky but true! Female Photuris fireflies mimic the flash patterns of other species to lure in males — then eat them!", bugRef: "Firefly" },
  { statement: "The Hercules beetle can fly despite its massive horns.", isTrue: true, explanation: "Yes! Despite being one of the largest beetles, they can spread their wing cases and fly, though not exactly gracefully.", bugRef: "Hercules Beetle" },
  { statement: "Dragonflies can only fly forward.", isTrue: false, explanation: "Wrong! Dragonflies can move in all six directions — forward, backward, up, down, left, and right. They can even hover!", bugRef: "Dragonfly" },
  { statement: "Dung beetles were worshipped as gods in ancient Egypt.", isTrue: true, explanation: "True! The scarab represented the sun god Ra. Egyptians believed the beetle rolling dung was like Ra rolling the sun across the sky.", bugRef: "Dung Beetle" },
  { statement: "Blue Morpho butterfly wings contain blue pigment.", isTrue: false, explanation: "Nope! The blue comes from microscopic ridged scales that reflect blue wavelengths of light. It's structural color, not pigment!", bugRef: "Blue Morpho Butterfly" },
  { statement: "Stick insects can regrow lost limbs.", isTrue: true, explanation: "True! If a stick insect loses a leg, it can regenerate a new one during its next molt. Pretty leggy!", bugRef: "Stick Insect" },
  { statement: "Honeybees can recognize individual human faces.", isTrue: true, explanation: "Remarkably true! Honeybees can be trained to recognize specific human faces, even days after first seeing them.", bugRef: "Honeybee" },
  { statement: "The bombardier beetle's spray is actually cold.", isTrue: false, explanation: "Absolutely not! The spray reaches 100\u00b0C (212\u00b0F)! It's produced by an explosive chemical reaction inside the beetle's body.", bugRef: "Bombardier Beetle" },
  { statement: "Jewel beetles are attracted to forest fires.", isTrue: true, explanation: "True! They have infrared sensors to detect fires from 80 km away because they lay their eggs in freshly burned wood.", bugRef: "Jewel Beetle" },
  { statement: "Giant wetas can jump up to 3 meters high.", isTrue: false, explanation: "Nope! Giant wetas are too heavy to jump at all. At up to 70 grams, they're the heavyweight champions of the insect world.", bugRef: "Giant Weta" },
  { statement: "A queen honeybee can lay up to 2,000 eggs in a single day.", isTrue: true, explanation: "True! That's roughly one egg every 43 seconds. She can keep this up for years.", bugRef: "Honeybee" },
  { statement: "Golden tortoise beetles can change color based on their mood.", isTrue: true, explanation: "True! They shift from gold to red when stressed or during mating by controlling moisture in layers beneath their transparent shell.", bugRef: "Golden Tortoise Beetle" },
  { statement: "Lanternflies produce light from their elongated heads.", isTrue: false, explanation: "Nope! Despite the name, lanternflies don't glow at all. Early naturalists mistakenly believed they did.", bugRef: "Lanternfly" },
  { statement: "The death's-head hawkmoth can mimic the scent of bees.", isTrue: true, explanation: "True! It produces chemicals that smell like bees, allowing it to sneak into hives and steal honey without being attacked.", bugRef: "Death's-head Hawkmoth" },
  { statement: "Cicadas can be as loud as a rock concert.", isTrue: true, explanation: "True! Some cicadas produce sounds up to 120 decibels — comparable to a chainsaw or a rock concert at close range!", bugRef: "Cicada" },
  { statement: "Assassin bugs wear the corpses of their prey as camouflage.", isTrue: true, explanation: "Disturbingly true! Some species stack dead ant bodies on their backs. It confuses predators and even helps them hunt more ants!", bugRef: "Assassin Bug" },
  { statement: "Bumblebees technically shouldn't be able to fly according to physics.", isTrue: false, explanation: "That's a myth! The old claim was based on oversimplified math. Their wing rotation creates vortices that generate plenty of lift.", bugRef: "Bumblebee" },
  { statement: "The tarantula hawk wasp eats tarantulas alive.", isTrue: false, explanation: "Not exactly — it paralyzes the tarantula and drags it to a burrow, then lays an egg ON it. The larva eats the still-living spider!", bugRef: "Tarantula Hawk" },
  { statement: "The emerald cockroach wasp performs brain surgery on cockroaches.", isTrue: true, explanation: "Essentially yes! It stings precisely into the brain to disable the escape reflex, turning the roach into a willing zombie.", bugRef: "Emerald Cockroach Wasp" },
  { statement: "Painted lady butterflies migrate farther than monarch butterflies.", isTrue: true, explanation: "True! Painted ladies can cover up to 15,000 km across the Sahara — monarchs 'only' do about 4,800 km.", bugRef: "Painted Lady" },
  { statement: "Red admiral butterflies are shy and avoid other animals.", isTrue: false, explanation: "The opposite! Red admirals are famously aggressive and territorial — they'll chase away birds, cats, and even people!", bugRef: "Red Admiral" },
  { statement: "Sphinx moths were predicted by Charles Darwin before being discovered.", isTrue: true, explanation: "True! Darwin saw a Madagascar orchid with a 30 cm deep nectar tube and predicted a moth with a tongue that long must exist. Found 21 years later!", bugRef: "Sphinx Moth" },
  { statement: "Hummingbird hawk-moths are actually related to hummingbirds.", isTrue: false, explanation: "Nope! They're moths — not even close to birds. Their similarity is a textbook case of convergent evolution!", bugRef: "Hummingbird Hawk-moth" },
  { statement: "Titan beetle larvae have never been found by scientists.", isTrue: true, explanation: "True! Despite the adults being 17 cm long, nobody has ever found a titan beetle larva. They're believed to feed inside trees deep in the Amazon.", bugRef: "Titan Beetle" },
  { statement: "Ants invented agriculture before humans did.", isTrue: true, explanation: "True! Leafcutter ants have been farming fungus for about 60 million years. They even use natural antibiotics to protect their crops!", bugRef: "Ant" },
  { statement: "The Io moth's eyespots can actually see.", isTrue: false, explanation: "Nope! They're just patterns on the wings. But they're convincing enough to scare birds into thinking they're owl eyes!", bugRef: "Io Moth" },
  { statement: "Walking leaf insects sway when they walk to mimic wind.", isTrue: true, explanation: "True! They rock gently back and forth as they walk, perfectly imitating a leaf rustling in a breeze. Method acting at its finest!", bugRef: "Walking Leaf" },
  { statement: "Weevils are the largest animal family on Earth.", isTrue: true, explanation: "True! With over 97,000 known species, weevils (Curculionidae) are the biggest family in the entire animal kingdom!", bugRef: "Weevil" },
  { statement: "Katydids hear with tiny ears on their front legs.", isTrue: true, explanation: "True! Their tympana (eardrums) are located just below the knee on their front legs. They literally listen with their legs!", bugRef: "Katydid" },
];
