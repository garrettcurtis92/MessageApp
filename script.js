// Arrays of different data pieces for the random message
const messages = [
	"You are destined for greatness.",
	"Embrace the challenges that come your way.",
	"Happiness is a journey, not a destination.",
	"Stay curious and keep learning.",
	"Believe in yourself and your abilities.",
	"Success is not final, failure is not fatal: It is the courage to continue that counts.",
	"Believe you can and you're halfway there.",
	"The only limit to our realization of tomorrow will be our doubts of today.",
	"It does not matter how slowly you go as long as you do not stop.",
	"You miss 100% of the shots you don't take.",
	"In the middle of every difficulty lies opportunity.",
	"The way to get started is to quit talking and begin doing.",
	"It always seems impossible until it's done.",
	"Dream big and dare to fail.",
	"The secret of getting ahead is getting started.",
	"Your time is limited, don't waste it living someone else's life.",
	"Hardships often prepare ordinary people for an extraordinary destiny.",
	"Life is what happens when you're busy making other plans.",
	"It is never too late to be what you might have been.",
	"Success is stumbling from failure to failure with no loss of enthusiasm.",
	"The best revenge is massive success.",
	"The only way to do great work is to love what you do.",
	"The future belongs to those who believe in the beauty of their dreams.",
	"In three words I can sum up everything I've learned about life: it goes on.",
	"Don't count the days, make the days count.",
];

const authors = [
	"Unknown",
	"Inspiration Guru",
	"Wise Owl",
	"Positive Vibes",
	"Your Inner Voice",
	"Winston Churchill",
	"Theodore Roosevelt",
	"Franklin D. Roosevelt",
	"Confucius",
	"Wayne Gretzky",
	"Albert Einstein",
	"Walt Disney",
	"Nelson Mandela",
	"Norman Vaughan",
	"Mark Twain",
	"Steve Jobs",
	"C.S. Lewis",
	"John Lennon",
	"George Eliot",
	"Winston Churchill",
	"Frank Sinatra",
	"Steve Jobs",
	"Eleanor Roosevelt",
	"Robert Frost",
	"Muhammad Ali",
];

const emojis = [
	"🌟",
	"🚀",
	"🌈",
	"🌻",
	"💡",
	"🌟",
	"🚀",
	"🌈",
	"💪",
	"🔥",
	"✨",
	"🌻",
	"🎯",
	"🏆",
	"👑",
	"🌠",
	"🌊",
	"🌄",
	"🌞",
	"⚡",
	"🎈",
	"🌺",
	"💡",
	"🍀",
	"❤️",
];

// Function to generate a random number
function getRandomIndex(array) {
	return Math.floor(Math.random() * array.length);
}

// Generate a random message
function generateRandomMessage() {
	const randomMessage = messages[getRandomIndex(messages)];
	const randomAuthor = authors[getRandomIndex(authors)];
	const randomEmoji = emojis[getRandomIndex(emojis)];

	return `${randomMessage} - ${randomAuthor} ${randomEmoji}`;
}

// Generate and display the random message
const randomMessage = generateRandomMessage();
console.log(randomMessage);

// ... Your previous code for generating random messages

// Get references to HTML elements
const quoteDisplay = document.getElementById("quoteDisplay");
const generateButton = document.getElementById("generateButton");

// Add a click event listener to the "Generate" button
generateButton.addEventListener("click", () => {
	const randomMessage = generateRandomMessage();
	quoteDisplay.textContent = randomMessage; // Update the content of the h2 element
});
