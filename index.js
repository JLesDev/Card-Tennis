// window.callbacks = root;
console.log("test");
console.log(window.callbacks);
window.mutate_chart_object = function (v) {
    if (v.id == ("bar")) {
        v.options.scales.y1.ticks = {
            callback:
                function (value, _index, _values) {
                    return '$' + value.toFixed(2);
                }
        };
    }
    return v
};

function cityText(city) {
    let parent = document.querySelector('#content2');
    switch (city) {
        case 0:
            parent.textContent = "Melbourne";
            break;
        case 1:
            parent.textContent = "Adelaide";
            break;
        case 2:
            parent.textContent = "Sydney";
            break;
        case 3:
            parent.textContent = "Brisbane";
            break;
    }
}

let miner = 999;
let maxer = -999;

let quotes = [
    "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. Sheryl Sandberg"
    ,

    "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. Aristotle"
    ,

    "If the wind will not serve, take to the oars. Latin Proverb"
    ,

    "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground. Unknown"
    ,

    "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. Marie Curie"
    ,

    "Too many of us are not living our dreams because we are living our fears. Les Brown"
    ,

    "Challenges are what make life interesting and overcoming them is what makes life meaningful. Joshua J. Marine"
    ,

    "If you want to lift yourself up, lift up someone else. Booker T. Washington"
    ,

    "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. Leonardo da Vinci"
    ,

    "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless. Jamie Paolinetti"
    ,

    "You take your life in your own hands, and what happens? A terrible thing, no one to blame. Erica Jong"
    ,

    "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. Bob Dylan"
    ,

    "I didn’t fail the test. I just found 100 ways to do it wrong. Benjamin Franklin"
    ,

    "In order to succeed, your desire for success should be greater than your fear of failure. Bill Cosby"
    ,

    "A person who never made a mistake never tried anything new.  Albert Einstein"
    ,

    "The person who says it cannot be done should not interrupt the person who is doing it. Chinese Proverb"
    ,

    "There are no traffic jams along the extra mile. Roger Staubach"
    ,

    "It is never too late to be what you might have been. George Eliot"
    ,

    "You become what you believe. Oprah Winfrey"
    ,

    "I would rather die of passion than of boredom. Vincent van Gogh"
    ,

    "A truly rich man is one whose children run into his arms when his hands are empty. Unknown"
    ,

    "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings. Ann Landers"
    ,

    "If you want your children to turn out well, spend twice as much time with them, and half as much money. Abigail Van Buren"
    ,

    "Build your own dreams, or someone else will hire you to build theirs. Farrah Gray"
    ,

    "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at. Jesse Owens"
    ,

    "Education costs money.  But then so does ignorance. Sir Claus Moser"
    ,

    "I have learned over the years that when one’s mind is made up, this diminishes fear. Rosa Parks"
    ,

    "It does not matter how slowly you go as long as you do not stop. Confucius"
    ,

    "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. Oprah Winfrey"
    ,

    "Remember that not getting what you want is sometimes a wonderful stroke of luck. Dalai Lama"
    ,

    "You can’t use up creativity.  The more you use, the more you have. Maya Angelou"
    ,

    "Dream big and dare to fail. Norman Vaughan"
    ,

    "Our lives begin to end the day we become silent about things that matter. Martin Luther King Jr."
    ,

    "Do what you can, where you are, with what you have. Teddy Roosevelt"
    ,

    "If you do what you’ve always done, you’ll get what you’ve always gotten. Tony Robbins"
    ,

    "Dreaming, after all, is a form of planning. Gloria Steinem"
    ,

    "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live. Mae Jemison"
    ,

    "You may be disappointed if you fail, but you are doomed if you don’t try. Beverly Sills"
    ,

    "Remember no one can make you feel inferior without your consent. Eleanor Roosevelt"
    ,

    "Life is what we make it, always has been, always will be. Grandma Moses"
    ,

    "The question isn’t who is going to let me; it’s who is going to stop me. Ayn Rand"
    ,

    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. Henry Ford"
    ,

    "It’s not the years in your life that count. It’s the life in your years. Abraham Lincoln"
    ,

    "Change your thoughts and you change your world. Norman Vincent Peale"
    ,

    "Either write something worth reading or do something worth writing. Benjamin Franklin"
    ,

    "Nothing is impossible, the word itself says, “I’m possible!” –Audrey Hepburn"
    ,

    "The only way to do great work is to love what you do. Steve Jobs"
    ,

    "If you can dream it, you can achieve it. Zig Ziglar"
];

function randomQuote() {
    let parent2 = document.getElementById('bot-box');
    let randomInt = Math.floor(Math.random() * 47);
    let actual = document.createElement('p');
    actual.textContent = quotes[randomInt];
    parent2.appendChild(actual);
}

const deck = [];
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

suits.forEach(suit => {
    values.forEach(value => {
        deck.push({ value, suit });
    });
});

function createDeck() {
    return suits.flatMap(suit => values.map(value => ({ value, suit })));
}
const myDeck = createDeck();

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}
shuffleDeck(myDeck);

function drawCard(deck) {
    return deck.pop();
}
const myCard = drawCard(myDeck);

function displayDeck(deck) {
    const deckElement = document.createElement('div');
    deck.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerText = `${card.value} of ${card.suit}`;
        deckElement.appendChild(cardElement);
    });
    document.body.appendChild(deckElement);
}
// displayDeck(myDeck);

function draw5(cBox) {
    for (let i = 0; i < 5; i++) {
        let card1 = document.createElement('button');
        card1.classList.add('card');
        const myDeck2 = createDeck();
        shuffleDeck(myDeck2);
        const myCard2 = drawCard(myDeck2);
        myCard2.id = `${myCard2.value} / ${myCard2.suit}`;
        console.log(myCard2.id);
        console.log(myCard2);
        let cardString = `${myCard2.value} of ${myCard2.suit}`;
        card1.textContent = cardString;
        switch (myCard2.suit) {
            case "Hearts" || "Diamonds":
                card1.classList.add('card-red');
                break
            case "Spades" || "Clubs":
                card1.classList.add('card-black');
                break
            case "Clubs":
                card1.classList.add('card-black');
                break
            default:
                card1.classList.add('card-red');
                break
        }
        console.log(myCard2.suit + card1.className);
        cBox.appendChild(card1);
    }
}

function draw1(suit) {
    switch (suit) {
        case 0:
            return "Heart"
        case 1:
            return "Spade"
        case 2:
            return "Club"
        case 3:
            return "Diamond"
        default:
            return "Heart"
    }
}

function card_val(card) {
    switch (card) {
        case "Jack":
            return 11
        case "Queen":
            return 12
        case "King":
            return 13
        case "Ace":
            return 20
        default:
            return card
    }
}

function card_val_opp(card) {
    switch (card) {
        case 10:
            return "Jack"
        case 11:
            return "Queen"
        case 12:
            return "King"
        case 13:
            return "Ace"
        default:
            return card + 1
    }
}

function win_game(did){
    switch(did){
        case 0:
            alert("You lost!");
            location.reload();
        case 1:
            alert("You won!");
            location.reload();
        default:
            break;
    }
}


let points = 60;
let score = 0;
let opp_score = 0;

function pointTotal() {
    let title = document.getElementById('placeholder2');
    title.innerText = 'Points: ' + points + " | Score: " + score + " - " + opp_score;
}

// function run_game(){
//   pointTotal();
//   let cBox = document.getElementById('content2');
// //   let cBox2 = document.createElement('div');
// //   cBox2.id = 'content2';
// //   cBox.appendChild(cBox2);
//   draw5(cBox);
// }

// function run_game() {
//     let play = document.createElement('button');
//     play.innerText = 'Play';
//     play.classList.add('city-btn');
//     play.id = 'play-btn';
//     pointTotal();
//     let cBox = document.getElementById('content2');
//     //     document.getElementById("play-card").style.visibility = "visible";
//     cBox.innerHTML = ''; // Clear previous cards
//     active = [];         // Reset active selection
//     cBox.append(play);
//     draw5(cBox);
// }

function run_game() {
    console.log(document.getElementById('content2'));
    let cBox = document.getElementById('content2');
    cBox.innerHTML = '';
    active = [];         // reset active selection

    let play = document.createElement('button');
    play.innerText = 'Play';
    play.classList.add('city-btn');
    play.id = 'play-card';

    cBox.append(play);   // add the button now that it's clear

    pointTotal();
    draw5(cBox);
}

async function run() {
    randomQuote();
    run_game()
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function playCard(card) {
    let suit = Math.floor(Math.random() * 4);
    let card_opp = Math.floor(Math.random() * 14);

    let card_opp_val = card_val_opp(card_opp);

    let content3 = document.getElementById('content2');
    content3.innerHTML = '';
    let text = document.createElement('p');
    text.innerText = 'You played the ' + card + '. Your opponent played the ' + card_opp_val + ' of ' + draw1(suit) + 's';
    let user_val = card.split(" ");
    let card_val_user = card_val(user_val[0]);
    let text2 = document.createElement('p');

    console.log(Number(card_val_user));
    console.log(card_opp_val);

    if (Number(card_val_user) > 19) {
        points = points - 20;
    }
    else if (Number(card_val_user) > 10) {
        points = points - 15;
    }
    else {
        points = points - Number(card_val_user);
    }

    if(points < 1){
        win_game(0);
        return;
    }

    if (Number(card_val_user) > card_opp_val && points > 1) {
        text2.innerText = 'You win!';
        if(score == 0 || score == 15){
            score = score + 15;
        }
        else if(score == 30){
            score = score + 10;
        }
        else{
            win_game(1);
            return;
        }
    }
    else {
        text2.innerText = 'You lose!';
         if(opp_score == 0 || opp_score == 15){
            opp_score = opp_score + 15;
        }
        else if(opp_score == 30){
            opp_score = opp_score + 10;
        }
        else{
            win_game(0);
            return;
        }
    }

    let play_btn = document.createElement('button');
    play_btn.innerText = 'Next round';
    play_btn.classList.add('city-btn');
    play_btn.id = 'next-round';

    content3.appendChild(text);
    content3.appendChild(text2);
    content3.appendChild(play_btn);

    play_btn.addEventListener("click", function (e) {
        run_game();
    });
}

let active = [];

document.addEventListener("click", function (e) {
    active.push(document.activeElement);
});

document.getElementById("play-card").addEventListener("click", function (e) {
    document.getElementById("play-card").style.visibility = "hidden";
    let user_val = active[active.length - 1].innerText.split(" ");
    let card_val_user = card_val(user_val[0]);
    console.log(card_val_user);
    playCard(active[active.length - 1].innerText);
});

document.getElementById("melb").addEventListener("click", function (e) {
    runner(0);
    window.location.href = "index.html";
});

document.getElementById("adel").addEventListener("click", function (e) {
    runner(1);
    window.location.href = "adelaide.html";
});

document.getElementById("more").addEventListener("click", function (e) {
    runner(3);
    window.location.href = "more.html";
});

// document.getElementById("next-round").addEventListener("click", function (e) {
//   run_game();
// });

function runner(city) {
    cityText(city);
    console.log("RUNNER");
    location.reload;
    run(city);
}

run(1);
window.run = run;