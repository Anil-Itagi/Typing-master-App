const data = document.getElementById('txt');
const d = data.textContent;
var set = "QWERTYUIOPASDFGHJKLZXCVBNM"
for (var i = 0; i < 26; i++) {

    const node = document.createElement('div');
    const h1Node = document.createElement('h1');
    const textnode = document.createTextNode(set[i]);
    h1Node.appendChild(textnode);
    node.appendChild(h1Node);
    node.classList.add('inner');

    node.setAttribute('id', 'myid');
    document.getElementById('outer').appendChild(node);

}


let q = 0;

function designkey(input) {
    const list = document.querySelectorAll(".inner");
    const letter = input.toUpperCase();
    var audio = document.getElementById('myAudio');
    audio.play();
    for (let i = 0; i < list.length; i++) {
        const nodeLetter = list[i].querySelector('h1').textContent;
        if (letter === nodeLetter) {
            list[i].classList.add('hovered');
        } else {
            list[i].classList.remove('hovered');
        }
    }
}

const meaningfulWords = [

    // Fruits
    "apple", "banana", "orange", "grape", "strawberry",
    "pineapple", "watermelon", "kiwi", "mango", "pear",
    "peach", "plum", "cherry", "blueberry", "raspberry",
    "lemon", "lime", "avocado", "coconut", "fig",
    "pomegranate", "guava", "passionfruit", "dragonfruit", "lychee",
    "persimmon", "nectarine", "tangerine", "cantaloupe", "date",
    "kiwifruit", "mulberry", "papaya", "quince", "starfruit",
    "cranberry", "gooseberry", "elderberry", "apricot", "blackberry",
    "boysenberry", "honeydew", "rhubarb", "plantain", "kumquat",
    "lingonberry", "mandarin", "jackfruit", "carambola", "acai",

    // Vegetables
    "carrot", "broccoli", "potato", "tomato", "cucumber",
    "spinach", "lettuce", "onion", "pepper", "cabbage",
    "celery", "garlic", "zucchini", "eggplant", "corn",
    "sweet potato", "asparagus", "cauliflower", "green bean", "pea",
    "radish", "beetroot", "mushroom", "squash", "artichoke",
    "fennel", "kale", "turnip", "rutabaga", "bok choy",
    "watercress", "snow pea", "okra", "endive", "shallot",
    "leek", "chard", "ramps", "daikon", "tatsoi",
    "chayote", "jicama", "salsify", "yuca", "lotus root",

    // Cities
    "new york", "london", "paris", "tokyo", "sydney",
    "rome", "cairo", "beijing", "mumbai", "berlin",
    "istanbul", "moscow", "rio de janeiro", "cape town", "singapore",
    "dubai", "hong kong", "amsterdam", "athens", "budapest",
    "prague", "vienna", "lisbon", "helsinki", "stockholm",
    "oslo", "wellington", "brussels", "buenos aires", "manila",

    // Names
    "john", "mary", "alex", "emily", "michael",
    "sarah", "david", "emma", "chris", "olivia",
    "james", "samantha", "andrew", "jennifer", "matthew",
    "elizabeth", "ryan", "jessica", "nathan", "lauren",
    "adam", "natalie", "justin", "ashley", "daniel",
    "william", "victoria", "patrick", "rebecca", "stephen",
    "charlotte", "george", "hannah", "benjamin", "sophia",
    "katherine", "peter", "lucy", "thomas", "abigail",

    // Things
    "book", "chair", "table", "computer", "phone",
    "bicycle", "camera", "guitar", "watch", "shoes",
    "hat", "umbrella", "bag", "glasses", "wallet",
    "pen", "notebook", "headphones", "keyboard", "television",
    "microwave", "refrigerator", "oven", "lamp", "mirror",
    "backpack", "couch", "bed", "desk", "pillow",
    "blanket", "calendar", "calendar", "painting", "easel",
    "scissors", "tape", "glue", "marker", "ruler",

    // Animals
    "dog", "cat", "bird", "fish", "rabbit",
    "elephant", "lion", "tiger", "monkey", "zebra",
    "giraffe", "hippo", "crocodile", "penguin", "kangaroo",
    "gorilla", "rhinoceros", "octopus", "dolphin", "whale",
    "seagull", "snake", "turtle", "koala", "panda",
    "cheetah", "leopard", "wolf", "fox", "bear",
    "otter", "beaver", "squirrel", "deer", "elk",
    "moose", "buffalo", "rhinoceros", "porcupine", "armadillo",

    // Miscellaneous
    "sun", "moon", "star", "cloud", "rain",
    "tree", "flower", "mountain", "river", "ocean",
    "fire", "wind", "snow", "ice", "sand",
    "bridge", "castle", "statue", "fountain", "park",
    "beach", "island", "volcano", "cave", "desert",
    "valley", "plateau", "canyon", "glacier", "waterfall",
    "lagoon", "tundra", "reef", "oasis", "savanna",
    "steppe", "marsh", "delta", "bayou", "estuary"

    // Add more words as needed
];

// Function to generate a random word


var que = "";

function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * meaningfulWords.length);
    que = que + meaningfulWords[randomIndex] + " ";
    document.getElementById('txt').innerHTML += meaningfulWords[randomIndex] + "  ";
}

function showHiddenInput() {
    const hiddenInput = document.getElementById('inp');
    hiddenInput.style.left = -1000; // Make the input visible
    hiddenInput.focus(); // Focus on the input


}
var sec = 60;
var min = 0;

function start() {
    if (sec == 0) {
        return 1;
    }
    setTimeout(start, 1000);
    sec -= 1;
    document.getElementById('ti').innerHTML = 'TIME  :' +
        '00:' + min + ':' + sec;
}


var inputvalue = "";

let keydown = document.addEventListener('keydown', f);

function f() {
    document.removeEventListener('keydown', f);
    start();
    showHiddenInput();
}

const inputfile = document.getElementById('inp');


inputfile.addEventListener('input', function(event) {
    if (sec != 0) {
        var i = 0;
        inputvalue = event.target.value;
        var k = document.getElementById('txt').textContent;
        document.getElementById('txt').textContent = '';
        designkey(inputvalue[inputvalue.length - 1]);
        for (i = 0; i < inputvalue.length; i++) {
            var span = document.createElement('span');
            span.textContent += que[i];
            if (inputvalue[i] == que[i]) {

                span.style.color = 'green';
            } else {
                span.style.color = 'red';

            }
            score = 0;
            var div = '';
            var span1 = document.createElement('span');
            for (let j = inputvalue.length; j < que.length; j++) {
                span1.textContent += que[j];
            }

            showscore();

            document.getElementById('txt').appendChild(span);
        }
        document.getElementById('txt').appendChild(span1);
        if (i == que.length - 1) {
            return 1;
        }

        if (i == que.length) {
            return 1;

        }

    } else {
        showResult();
    }
});
let v = 0;

function showscore() {
    var sc = 0;
    for (let i = 0; i < inputvalue.length; i++) {
        if (que[i] == inputvalue[i]) {
            sc++;
        } else
            sc--;
        sc1 = sc;
    }
    document.getElementById('score').innerHTML = ' SCORE :' + sc;
}

function showResult() {

    if (v == 0) {
        for (let i = 0; i < inputvalue.length; i++) {
            if (inputvalue[i] == que[i])
                v++;
        }
        var acc = (v / inputvalue.length) * 100;


        showAccuracyBanner(Math.round(acc, 2));
        document.removeEventListener('input', showResult);
    }
}

// Generate and print 10 random words
for (let i = 0; i < 30; i++) {
    generateRandomWord();
}
if (sec == 0 && sc < 0) {
    showAccuracyBanner(Math.round(acc, 2));
}

function showAccuracyBanner(accuracy) {
    // Create a div element




    var audio1 = document.getElementById('myAudio1');
    audio1.play();

    const banner = document.createElement('div');
    banner.setAttribute('id', 'accu');
    // Set the content of the div
    banner.textContent = "Accuracy: " + accuracy + "%";

    // Add a class to style the banner
    banner.classList.add('accuracy-banner');

    // Append the banner to the document body
    document.body.appendChild(banner);


    const tryAgainButton = document.createElement('button');
    tryAgainButton.setAttribute('id', 'tryAgain');
    tryAgainButton.textContent = 'Try Again';

    // Create the "Close" button
    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closebtn');
    closeButton.textContent = 'Close';

    var banner1 = document.getElementById('accu');
    banner1.appendChild(tryAgainButton);
    banner1.appendChild(closeButton);

    tryAgainButton.addEventListener('click', function() {
        location.reload();
    });

    closeButton.addEventListener('click', function() {
        // Add your logic for "Close" button click event here

        window.close();
    });

    // Remove the banner after a certain duration (e.g., 3 seconds)
    setTimeout(function() {
        banner.remove();
    }, 5000); // Adjust the duration as needed


}