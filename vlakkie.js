// [Previous Vlakkie and Zyn code remains unchanged...]
const scenarios = [
    "running from a predator",
    "extreme temperatures", 
    "a first date",
    "a job interview",
    "a zombie apocalypse",
    "zero gravity",
    "scuba diving",
    "a courtroom trial",
    "a family reunion",
    "a meditation retreat"
];

// Snarky comments
const snark = [
    "Because nothing says 'I value my life' like vaping while being chased.",
    "The real question is why you're vaping in this situation to begin with.",
    "Priorities, am I right?",
    "This is why we can't have nice things.",
    "I'm not saying this is a good idea, but if you're gonna do it...",
    "Famous last words: 'Hold my vape while I...'",
    "This advice is terrible and you should feel bad for needing it.",
    "Just when I thought you couldn't get any dumber...",
    "I'm judging you so hard right now.",
    "This isn't advice, it's a cry for help."
];

// Complete classic advice examples
const classicAdvice = [
    "When vaping in zero gravity, exhale slowly or you'll create a nicotine nebula that astronauts will study for years.",
    "If a lion chases you, blow vape in its face - big cats hate fruity flavors the most.",
    "In -40° weather, keep your vape in your armpit to prevent freezing (and to add a unique body odor note to your juice).",
    "On a first date, exhale through your nose to look more sophisticated (and to hide the fact you're nervous).",
    "During a zombie apocalypse, vape clouds make excellent temporary camouflage (zombies can't see through sick clouds, bro).",
    "When skydiving, wait until after you've pulled the parachute to take a hit - freefall makes it hard to gauge your airflow.",
    "In a library, ghost inhale only - librarians respect stealth vapers.",
    "At a funeral, stick to tobacco flavors out of respect (but still blow it under the pew).",
    "When scuba diving, exhale through your regulator for the world's first underwater vape trick.",
    "During a bank robbery, blow clouds at the security cameras to create artistic footage.",
    "On a rollercoaster, hold your vape upside down to prevent leaks (and to look cool in the photo).",
    "When being interrogated, blow O-rings to distract your captors with your sick skills.",
    "In a sauna, the heat will make your juice last longer (this is terrible advice).",
    "During a thunderstorm, metal vapes make excellent lightning rods (and bad life choices).",
    "When meeting the president, exhale downward so it looks like the Resolute Desk is on fire.",
    "At a wedding, coordinate your vape color with the bride's dress for maximum drama.",
    "While giving birth, ask the doctor if you can vape through the contractions (don't actually do this).",
    "During a marathon, alternate between vaping and drinking water at hydration stations.",
    "In a confessional booth, blow clouds to make your sins look more dramatic.",
    "When hiding from the police, use menthol flavors - dogs can't track minty freshness."
];

const adviceDisplay = document.getElementById('advice-display');
const generateBtn = document.getElementById('generate-btn');
const adviceList = document.getElementById('advice-list');
const adviceText = document.querySelector('.advice-text');
const snarkyComment = document.querySelector('.snarky-comment');

// Generate complete random advice
function generateAdvice() {
    const randomAdvice = classicAdvice[Math.floor(Math.random() * classicAdvice.length)];
    const randomSnark = snark[Math.floor(Math.random() * snark.length)];
    
    // Show complete advice
    adviceText.textContent = randomAdvice;
    snarkyComment.textContent = randomSnark;
    
    // Add to advice archive
    const newAdvice = document.createElement('li');
    newAdvice.textContent = randomAdvice;
    adviceList.prepend(newAdvice);
}

// Populate initial classic advice
classicAdvice.slice(0, 5).forEach(advice => {
    const li = document.createElement('li');
    li.textContent = advice;
    adviceList.appendChild(li);
});

// Zyn scenarios
const zynScenarios = [
    "an existential crisis",
    "a meditation session", 
    "plant communication",
    "morning routine",
    "a job interview",
    "a first date",
    "a funeral",
    "skydiving",
    "yoga class",
    "an exam"
];

// Zyn snarky comments
const zynSnark = [
    "This is why zebras don't get invited to parties.",
    "I'm not judging, but evolution might be.",
    "This advice works 0% of the time, 100% of the time.",
    "Just because you can doesn't mean you should (but you will).",
    "This is how zebras went extinct the first time.",
    "I'm concerned about how easily you accepted this advice.",
    "This isn't wisdom, it's a cry for help.",
    "You know this is terrible, right?",
    "I can't believe you're actually considering this.",
    "This advice comes with free regrets."
];

// Complete classic Zyn advice examples
const classicZynAdvice = [
    "Use Zyn to fuel your existential crisis: nothing says 'midlife crisis' like nicotine-fueled introspection about life's meaninglessness.",
    "Try Zyn-flavored meditation: because what's more zen than a nicotine buzz?",
    "Use Zyn to communicate with plants: they're judging you anyway, might as well get them on the same nicotine wavelength.",
    "Replace morning coffee with Zyn: who needs caffeine when you can have nicotine?",
    "During job interviews, discreetly stick Zyn to your resume - it shows commitment to bad decisions.",
    "At funerals, offer Zyn pouches as memorial favors - 'He would have wanted you to be addicted too'.",
    "When skydiving, swallow a Zyn pouch for the world's first nicotine-powered freefall.",
    "During yoga, place Zyn under your tongue in downward dog for maximum zen.",
    "On first dates, offer to share a Zyn - nothing builds connection like mutual addiction.",
    "During exams, use Zyn as a memory aid - the withdrawal will motivate you to finish faster."
];

// DOM elements for Zyn
const zynAdviceDisplay = document.getElementById('zyn-advice-display');
const zynGenerateBtn = document.getElementById('zyn-generate-btn');
const zynAdviceList = document.getElementById('zyn-advice-list');
const zynAdviceText = zynAdviceDisplay.querySelector('.advice-text');
const zynSnarkyComment = zynAdviceDisplay.querySelector('.snarky-comment');

// Generate complete random Zyn advice
function generateZynAdvice() {
    const randomAdvice = classicZynAdvice[Math.floor(Math.random() * classicZynAdvice.length)];
    const randomSnark = zynSnark[Math.floor(Math.random() * zynSnark.length)];
    
    zynAdviceText.textContent = randomAdvice;
    zynSnarkyComment.textContent = randomSnark;
    
    const newAdvice = document.createElement('li');
    newAdvice.textContent = randomAdvice;
    zynAdviceList.prepend(newAdvice);
}

// Populate initial classic Zyn advice
classicZynAdvice.slice(0, 5).forEach(advice => {
    const li = document.createElement('li');
    li.textContent = advice;
    zynAdviceList.appendChild(li);
});

// Event listeners
generateBtn.addEventListener('click', generateAdvice);
zynGenerateBtn.addEventListener('click', generateZynAdvice);

// Initial advice
generateAdvice();
generateZynAdvice();


// [Previous Vlakkie and Zyn code remains unchanged...]

// Ciggie scenarios
const ciggieScenarios = [
    "getting your ex back",
    "finding a date",
    "a dead-end job",
    "finding life's purpose",
    "a family gathering",
    "a job interview",
    "a first date",
    "a therapy session",
    "a workout",
    "a meditation retreat",
    "a midlife crisis",
    "a creative block",
    "a traffic jam",
    "a bad haircut",
    "a tax audit",
    "a haunted house",
    "a vegan dinner party",
    "a job promotion",
    "a spiritual awakening",
    "a public speaking event"
];

// Ciggie snarky comments
const ciggieSnark = [
    "This is why cicadas only live for a few weeks.",
    "I'm not judging, but natural selection might be.",
    "This advice is 100% guaranteed to make things worse.",
    "Just because you can doesn't mean you should (but you will).",
    "This is how you end up on a watchlist.",
    "I'm concerned about how easily you accepted this advice.",
    "This isn't wisdom, it's a cry for help.",
    "You know this is terrible, right?",
    "I can't believe you're actually considering this.",
    "This advice comes with free lung damage.",
    "Darwin would be taking notes right now.",
    "This advice sponsored by Big Tobacco's marketing department.",
    "The surgeon general called - they want their warning label back.",
    "This is how supervillains are born.",
    "Your future self will hate you for this.",
    "This advice has been banned in 47 countries.",
    "The CDC just added this to their list of preventable diseases.",
    "This is what happens when you don't hug your kids enough.",
    "Your life insurance provider would like a word.",
    "This advice comes with complimentary regret."
];

// Complete classic Ciggie advice examples
const classicCiggieAdvice = [
    "Want to get your ex back? Smoke a pack of cigarettes while watching their Instagram story. The tears and nicotine will make you a more interesting person, guaranteed.",
    "Need a date? Just light up a cigarette and shout 'I'm a free spirit' at the nearest coffee shop. Someone will either be intrigued or terrified.",
    "Stuck in a dead-end job? Smoke a few cigarettes while imagining yourself as a successful entrepreneur. The nicotine will give you confidence to...well, maybe not actually start a business, but you'll feel like a boss.",
    "Want to find your true purpose in life? Smoke a pack of cigarettes while staring at a blank piece of paper. The nicotine will give you profound insights, and the paper will remain blank - a metaphor for life really.",
    "At family gatherings, blow smoke rings at relatives to establish dominance and cover the smell of dysfunction.",
    "During job interviews, ash on the interviewer's desk to show you're not afraid of commitment.",
    "On first dates, exhale through your nose to look like a dragon - nothing says 'mate material' like mythical creature vibes.",
    "In therapy sessions, chain smoke while saying 'I don't think the problem is me' for maximum dramatic effect.",
    "When working out, replace water breaks with smoke breaks - it's like interval training for your lungs.",
    "At meditation retreats, use your cigarette as a focus object - watch the ember burn down like your life expectancy.",
    "Having a midlife crisis? Chain smoke while buying a motorcycle - the nicotine will make the midlife crisis more authentic.",
    "Facing creative block? Smoke three cigarettes at once - the oxygen deprivation will give you that edgy artist look.",
    "Stuck in traffic? Roll down your window and smoke angrily at other drivers - it won't help traffic but it'll make you feel superior.",
    "Got a bad haircut? Chain smoke until your hair smells like an ashtray - people will be too distracted to notice the haircut.",
    "Being audited by the IRS? Blow smoke at the tax forms - the IRS agents will be too busy coughing to find your deductions.",
    "In a haunted house? Light up a cigarette - ghosts hate secondhand smoke more than they hate the living.",
    "At a vegan dinner party? Smoke directly into the hummus - it'll give it that authentic 'I don't care' flavor.",
    "Getting promoted? Celebrate by smoking in the office - nothing says 'executive material' like ignoring fire codes.",
    "Having a spiritual awakening? Meditate while smoking - the nicotine will help you see through the illusion of healthy life choices.",
    "Public speaking? Take a long drag before your speech - the coughing fit will make you seem more relatable."
];

// DOM elements for Ciggie
const ciggieAdviceDisplay = document.getElementById('ciggie-advice-display');
const ciggieGenerateBtn = document.getElementById('ciggie-generate-btn');
const ciggieAdviceList = document.getElementById('ciggie-advice-list');
const ciggieAdviceText = ciggieAdviceDisplay.querySelector('.advice-text');
const ciggieSnarkyComment = ciggieAdviceDisplay.querySelector('.snarky-comment');

// Generate complete random Ciggie advice
function generateCiggieAdvice() {
    const randomAdvice = classicCiggieAdvice[Math.floor(Math.random() * classicCiggieAdvice.length)];
    const randomSnark = ciggieSnark[Math.floor(Math.random() * ciggieSnark.length)];
    
    ciggieAdviceText.textContent = randomAdvice;
    ciggieSnarkyComment.textContent = randomSnark;
    
    const newAdvice = document.createElement('li');
    newAdvice.textContent = randomAdvice;
    ciggieAdviceList.prepend(newAdvice);
}

// Populate initial classic Ciggie advice
classicCiggieAdvice.slice(0, 5).forEach(advice => {
    const li = document.createElement('li');
    li.textContent = advice;
    ciggieAdviceList.appendChild(li);
});

ciggieGenerateBtn.addEventListener('click', generateCiggieAdvice);
generateCiggieAdvice();
