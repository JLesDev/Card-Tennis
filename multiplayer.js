var cloud_wins
var cloud_tries
var cloud_realTries

async function roomLoad () {
  let name = 'default'

  let roomAbutton = document.getElementById('roomA')
  let roomBbutton = document.getElementById('roomB')

  let pin = Math.round(Math.random() * Math.random() * 1000000)

  document
    .getElementById('roomA')
    .addEventListener('click', async function (e) {
      roomAbutton.innerHTML = 'LOADING'

      await fetch(
        'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
        {
          method: 'POST',
          body: JSON.stringify({
            key: 'Room' + pin,
            value: 1
          })
        }
      )

      let tutorial = document.getElementById('tutorial')
      tutorial.innerHTML = ''
      let text = document.createElement('p')
      text =
        'Room pin: ' +
        pin +
        '. Get your friend to join with the room pin! Enter your name: '
      tutorial.append(text)

      let input = document.createElement('input')
      input.id = 'inputBox'
      // input.innerHTML = 'Name'
      tutorial.append(input)

      let ready = document.createElement('button')
      ready.innerHTML = 'Ready Up!'
      ready.classList.add('room')
      ready.id = 'ready'
      tutorial.append(ready)

      document
        .getElementById('ready')
        .addEventListener('click', async function (e) {
          name = document.getElementById('inputBox').value

          console.log(name)

          let tutorial = document.getElementById('tutorial')
          tutorial.innerHTML = ''

          let text = document.createElement('p')
          text =
            'Room pin: ' +
            pin +
            '. Get your friend to join with the room pin. ' +
            name +
            ' is a cool name! Waiting for another player...'
          tutorial.append(text)

          await fetch(
            'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
            {
              method: 'POST',
              body: JSON.stringify({
                key: 'Room' + pin + ' host name',
                value: name
              })
            }
          )
        })
    })

  let roomAfree = 0
  let roomBfree = 0

  await fetch(
    'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec?key=RoomA'
  )
    .then(res => res.text())
    .then(value => {
      roomAfree = Number(value)
      console.log('Room A: ', value)
    })

  await fetch(
    'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec?key=RoomB'
  )
    .then(res => res.text())
    .then(value => {
      roomBfree = Number(value)
      console.log('Room B: ', value)
    })

  if (roomAfree < 2) {
    if (roomAfree == 1) {
      roomAbutton.innerHTML = 'Room A: 1/2'
    } else {
      roomAbutton.innerHTML = 'Room A: 0/2'
    }
  } else {
    roomAbutton.style.pointerEvents = 'none'
    roomAbutton.style.backgroundColor = 'red'
    roomAbutton.innerHTML = 'Room A: FULL'
  }

  if (roomBfree < 2) {
    if (roomBfree == 1) {
      roomBbutton.innerHTML = 'Room B: 1/2'
    } else {
      roomBbutton.innerHTML = 'Room B: 0/2'
    }
  } else {
    roomBbutton.style.pointerEvents = 'none'
    roomBbutton.style.backgroundColor = 'red'
    roomBbutton.innerHTML = 'Room B: FULL'
  }

  // document
  //   .getElementById('roomA')
  //   .addEventListener('click', async function (e) {
  //     await fetch(
  //       'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           key: 'RoomA',
  //           value: roomAfree + 1
  //         })
  //       }
  //     )

  //     roomLoadA()
  //   })

  // document
  //   .getElementById('roomB')
  //   .addEventListener('click', async function (e) {
  //     await fetch(
  //       'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           key: 'RoomB',
  //           value: roomBfree + 1
  //         })
  //       }
  //     )

  //     roomLoadB()
  //   })
}

async function roomLoad2 () {
  let roomAbutton = document.getElementById('roomA')
  let roomBbutton = document.getElementById('roomB')

  let roomAfree = 0
  let roomBfree = 0

  await fetch(
    'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec?key=RoomA'
  )
    .then(res => res.text())
    .then(value => {
      roomAfree = Number(value)
      console.log('Room A: ', value)
    })

  await fetch(
    'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec?key=RoomB'
  )
    .then(res => res.text())
    .then(value => {
      roomBfree = Number(value)
      console.log('Room B: ', value)
    })

  if (roomAfree < 2) {
    if (roomAfree == 1) {
      roomAbutton.innerHTML = 'Room A: 1/2'
    } else {
      roomAbutton.innerHTML = 'Room A: 0/2'
    }
  } else {
    roomAbutton.style.pointerEvents = 'none'
    roomAbutton.style.backgroundColor = 'red'
    roomAbutton.innerHTML = 'Room A: FULL'
  }

  if (roomBfree < 2) {
    if (roomBfree == 1) {
      roomBbutton.innerHTML = 'Room B: 1/2'
    } else {
      roomBbutton.innerHTML = 'Room B: 0/2'
    }
  } else {
    roomBbutton.style.pointerEvents = 'none'
    roomBbutton.style.backgroundColor = 'red'
    roomBbutton.innerHTML = 'Room B: FULL'
  }

  document
    .getElementById('roomA')
    .addEventListener('click', async function (e) {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
        {
          method: 'POST',
          body: JSON.stringify({
            key: 'RoomA',
            value: roomAfree + 1
          })
        }
      )

      roomLoadA()
    })

  document
    .getElementById('roomB')
    .addEventListener('click', async function (e) {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
        {
          method: 'POST',
          body: JSON.stringify({
            key: 'RoomB',
            value: roomBfree + 1
          })
        }
      )

      roomLoadB()
    })
}

async function getCloudWins () {
  let mainTitle = document.getElementById('main-title')
  let mainText = document.createElement('p')
  let global = 'Global win percentage: Loading...'
  mainText.innerHTML = global
  mainTitle.append(mainText)

  await fetch(
    'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec?key=Wins'
  )
    .then(res => res.text())
    .then(value => {
      cloud_wins = Number(value)
      console.log('Cloud wins:', value)
    })

  await fetch(
    'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec?key=Tries'
  )
    .then(res => res.text())
    .then(value => {
      cloud_tries = Number(value)
      console.log('Cloud tries:', value)
    })

  //   let mainTitle = document.getElementById('main-title')
  //   let mainText = document.createElement('p')
  global =
    'Global win percentage: ' +
    Math.round((cloud_wins / cloud_tries) * 1000) / 10 +
    '%'
  mainText.innerHTML = global
  mainTitle.append(mainText)

  await fetch(
    'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
    {
      method: 'POST',
      body: JSON.stringify({
        key: 'Try ' + cloud_realTries + ' accessed',
        value: new Date().toLocaleString()
      })
    }
  )

  await fetch(
    'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec?key=Tries'
  )
    .then(res => res.text())
    .then(value => {
      cloud_realTries = Number(value)
      console.log('Real tries:', value)
    })

  await fetch(
    'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
    {
      method: 'POST',
      body: JSON.stringify({
        key: 'RealTries',
        value: cloud_realTries + 1
      })
    }
  )
}

window.onload = function () {
  // getCloudWins();
  roomLoad()
}

let quotes = [
  'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. Sheryl Sandberg',
  'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. Aristotle',
  'If the wind will not serve, take to the oars. Latin Proverb',
  'You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground. Unknown',
  'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. Marie Curie',
  'Too many of us are not living our dreams because we are living our fears. Les Brown',
  'Challenges are what make life interesting and overcoming them is what makes life meaningful. Joshua J. Marine',
  'If you want to lift yourself up, lift up someone else. Booker T. Washington',
  'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. Leonardo da Vinci',
  'Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless. Jamie Paolinetti',
  'You take your life in your own hands, and what happens? A terrible thing, no one to blame. Erica Jong',
  'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. Bob Dylan',
  'I didn’t fail the test. I just found 100 ways to do it wrong. Benjamin Franklin',
  'In order to succeed, your desire for success should be greater than your fear of failure. Bill Cosby',
  'A person who never made a mistake never tried anything new.  Albert Einstein',
  'The person who says it cannot be done should not interrupt the person who is doing it. Chinese Proverb',
  'There are no traffic jams along the extra mile. Roger Staubach',
  'It is never too late to be what you might have been. George Eliot',
  'You become what you believe. Oprah Winfrey',
  'I would rather die of passion than of boredom. Vincent van Gogh',
  'A truly rich man is one whose children run into his arms when his hands are empty. Unknown',
  'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings. Ann Landers',
  'If you want your children to turn out well, spend twice as much time with them, and half as much money. Abigail Van Buren',
  'Build your own dreams, or someone else will hire you to build theirs. Farrah Gray',
  'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at. Jesse Owens',
  'Education costs money.  But then so does ignorance. Sir Claus Moser',
  'I have learned over the years that when one’s mind is made up, this diminishes fear. Rosa Parks',
  'It does not matter how slowly you go as long as you do not stop. Confucius',
  'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. Oprah Winfrey',
  'Remember that not getting what you want is sometimes a wonderful stroke of luck. Dalai Lama',
  'You can’t use up creativity.  The more you use, the more you have. Maya Angelou',
  'Dream big and dare to fail. Norman Vaughan',
  'Our lives begin to end the day we become silent about things that matter. Martin Luther King Jr.',
  'Do what you can, where you are, with what you have. Teddy Roosevelt',
  'If you do what you’ve always done, you’ll get what you’ve always gotten. Tony Robbins',
  'Dreaming, after all, is a form of planning. Gloria Steinem',
  'It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live. Mae Jemison',
  'You may be disappointed if you fail, but you are doomed if you don’t try. Beverly Sills',
  'Remember no one can make you feel inferior without your consent. Eleanor Roosevelt',
  'Life is what we make it, always has been, always will be. Grandma Moses',
  'The question isn’t who is going to let me; it’s who is going to stop me. Ayn Rand',
  'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. Henry Ford',
  'It’s not the years in your life that count. It’s the life in your years. Abraham Lincoln',
  'Change your thoughts and you change your world. Norman Vincent Peale',
  'Either write something worth reading or do something worth writing. Benjamin Franklin',
  'Nothing is impossible, the word itself says, “I’m possible!” –Audrey Hepburn',
  'The only way to do great work is to love what you do. Steve Jobs',
  'If you can dream it, you can achieve it. Zig Ziglar'
]

function randomQuote () {
  let parent2 = document.getElementById('bot-box')
  let randomInt = Math.floor(Math.random() * 47)
  let actual = document.createElement('p')
  actual.textContent = quotes[randomInt]
  actual.setAttribute('id', 'quote')
  parent2.appendChild(actual)
}

function startGame () {
  let tut = document.getElementById('tutorial')
  tut.style.visibility = 'hidden'
}

const deck = []
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
const values = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]

suits.forEach(suit => {
  values.forEach(value => {
    deck.push({ value, suit })
  })
})

function createDeck () {
  return suits.flatMap(suit => values.map(value => ({ value, suit })))
}
const myDeck = createDeck()

function shuffleDeck (deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck
}
shuffleDeck(myDeck)

function drawCard (deck) {
  return deck.pop()
}
const myCard = drawCard(myDeck)

function displayDeck (deck) {
  const deckElement = document.createElement('div')
  deck.forEach(card => {
    const cardElement = document.createElement('div')
    cardElement.className = 'card'
    cardElement.innerText = `${card.value} of ${card.suit}`
    deckElement.appendChild(cardElement)
  })
  document.body.appendChild(deckElement)
}

function draw5 (cBox) {
  for (let i = 0; i < 5; i++) {
    let card1 = document.createElement('button')
    card1.classList.add('card')
    const myDeck2 = createDeck()
    shuffleDeck(myDeck2)
    const myCard2 = drawCard(myDeck2)
    myCard2.id = `${myCard2.value} / ${myCard2.suit}`
    console.log(myCard2.id)
    console.log(myCard2)
    let cardString = `${myCard2.value} of ${myCard2.suit}`
    card1.textContent = cardString
    // switch (myCard2.suit) {
    //     case 'Hearts' || 'Diamonds':
    //         card1.classList.add('card-red')
    //         break
    //     case 'Spades' || 'Clubs':
    //         card1.classList.add('card-black')
    //         break
    //     case 'Clubs':
    //         card1.classList.add('card-black')
    //         break
    //     default:
    //         card1.classList.add('card-red')
    //         break
    // }
    if (myCard2.suit === 'Hearts' || myCard2.suit === 'Diamonds') {
      card1.classList.add('card-red')
    } else {
      card1.classList.add('card-black')
    }

    console.log(myCard2.suit + card1.className)
    cBox.appendChild(card1)
  }
}

function draw1 (suit) {
  switch (suit) {
    case 0:
      return 'Heart'
    case 1:
      return 'Spade'
    case 2:
      return 'Club'
    case 3:
      return 'Diamond'
    default:
      return 'Heart'
  }
}

function card_val (card) {
  switch (card) {
    case 'Jack':
      return 11
    case 'Queen':
      return 12
    case 'King':
      return 13
    case 'Ace':
      return 20
    default:
      return card
  }
}

function card_val_opp (card) {
  switch (card) {
    case 10:
      return 'Jack'
    case 11:
      return 'Queen'
    case 12:
      return 'King'
    case 13:
      return 'Ace'
    default:
      return card
  }
}

function win_game (did) {
  console.log(did)
  let content = document.getElementById('content')
  content.innerHTML = ''

  let rutton = document.createElement('div')
  rutton.setAttribute('id', 'rutton')
  content.append(rutton)

  let text = document.createElement('p')

  let title = document.getElementById('placeholder2')
  title.innerText = 'The Results:'

  let play_again = document.createElement('button')
  play_again.innerText = 'Play again'
  play_again.setAttribute('id', 'play-card')
  play_again.classList.add('play-btn')

  const newButton = document.createElement('button')
  newButton.classList.add('play-btn')
  newButton.setAttribute('id', 'copyButton')
  newButton.innerHTML = 'Copy Results'

  let did2 = did
  console.log(did2)

  if (did2 == 1) {
    fetch(
      'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
      {
        method: 'POST',
        body: JSON.stringify({
          key: 'Wins',
          value: cloud_wins + 1
        })
      }
    )

    fetch(
      'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
      {
        method: 'POST',
        body: JSON.stringify({
          key: 'Tries',
          value: cloud_tries + 1
        })
      }
    )

    text.innerText = 'You won Card Tennis!'
    content.append(text)
    document.getElementById('content').appendChild(newButton)
    content.append(play_again)
  } else {
    fetch(
      'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
      {
        method: 'POST',
        body: JSON.stringify({
          key: 'Tries',
          value: cloud_tries + 1
        })
      }
    )

    text.innerText = 'You lost but keep trying!'
    content.append(text)
    document.getElementById('content').appendChild(newButton)
    content.append(play_again)
  }

  // switch (did2) {
  //     case 0:
  //         text.innerText = 'You lost but keep trying!'
  //         content.append(text)
  //         document.getElementById('content').appendChild(newButton)
  //         content.append(play_again)
  //     case 1:
  //         text.innerText = 'You won Card Tennis!'
  //         content.append(text)
  //         document.getElementById('content').appendChild(newButton)
  //         content.append(play_again)
  //     default:
  //         text.innerText = 'You lost but keep trying!'
  //         content.append(text)
  //         document.getElementById('content').appendChild(newButton)
  //         content.append(play_again)
  // }

  newButton.addEventListener('click', () => {
    console.log(did)
    copyResults(did)
  })
  document.getElementById('play-card').addEventListener('click', function (e) {
    location.reload()
  })
}

let points = 60
let score = 0
let opp_score = 0

function pointTotal () {
  if (points < 0) {
    win_game(0)
  }
  let title = document.getElementById('placeholder2')
  title.innerText =
    'Cash: $' + points + ' | Score: ' + score + ' - ' + opp_score
}

function run_game () {
  let cBox = document.createElement('div')
  cBox.setAttribute('id', 'content2')
  cBox.innerHTML = ''
  active = [] // reset

  let content = document.getElementById('content')
  content.innerHTML = ''

  let rutton = document.createElement('div')
  rutton.setAttribute('id', 'rutton')
  content.append(rutton)
  content.append(cBox)
  let buttonRow = document.getElementById('rutton')

  let play = document.createElement('button')
  play.innerText = 'Play'
  play.setAttribute('id', 'play-card')
  play.classList.add('play-btn')

  let shuffle = document.createElement('button')
  shuffle.innerText = 'Shuffle'
  shuffle.setAttribute('id', 'shuffle')
  shuffle.classList.add('play-btn')

  let sell = document.createElement('button')
  sell.innerText = 'Sell'
  sell.setAttribute('id', 'sell')
  sell.classList.add('play-btn')

  // commented reason: to be added later
  // let shop = document.createElement('button')
  // shop.innerText = 'Shop'
  // shop.setAttribute('id', 'shop')
  // shop.classList.add('play-btn')

  pointTotal()
  draw5(cBox)

  buttonRow.append(play)
  buttonRow.append(sell)
  buttonRow.append(shuffle)
  // content.append(shop)

  document.getElementById('play-card').addEventListener('click', function (e) {
    if (active.length != 0) {
      document.getElementById('play-card').style.visibility = 'hidden'
      let user_val = active[active.length - 1].innerText.split(' ')
      let card_val_user = card_val(user_val[0])
      console.log(card_val_user)
      playCard(active[active.length - 1].innerText)
    }
  })

  document.getElementById('shuffle').addEventListener('click', function (e) {
    document.getElementById('content2').innerHTML = ''
    points = points - 5
    pointTotal()
    draw5(cBox)
  })

  document.getElementById('sell').addEventListener('click', function (e) {
    sellCard(active[active.length - 1])
  })
}

async function run () {
  randomQuote()
  run_game()
}

function removeData (chart) {
  chart.data.labels.pop()
  chart.data.datasets.forEach(dataset => {
    dataset.data.pop()
  })
  chart.update()
}

function playCard (card) {
  let suit = Math.floor(Math.random() * 4)

  let card_opp_numeric = Math.max(2, Math.floor(Math.random() * 14))

  let card_opp_string = card_val_opp(card_opp_numeric)

  let content3 = document.getElementById('content')

  content3.innerHTML = ''
  let text = document.createElement('p')
  text.innerText =
    'You played the ' +
    card +
    '. Your opponent played the ' +
    card_opp_string +
    ' of ' +
    draw1(suit) +
    's'
  let user_val = card.split(' ')
  let card_val_user = card_val(user_val[0])
  let text2 = document.createElement('p')

  if (card == null) {
    alert('Not a valid option...')
  }

  console.log(Number(card_val_user))
  console.log(card_opp_numeric)

  if (Number(card_val_user) > 19) {
    points = points - 20
  } else if (Number(card_val_user) > 10) {
    points = points - 15
  } else {
    points = points - Number(card_val_user)
  }

  if (points < 1) {
    win_game(0)
    return
  }

  if (Number(card_val_user) > card_opp_numeric && points > -1) {
    console.log('p win')
    text2.innerText = 'You win!'
    if (score == 0 || score == 15) {
      score = score + 15
    } else if (score == 30) {
      score = score + 10
    } else {
      console.log('win')
      win_game(1)
      return
    }
  } else if (Number(card_val_user) == card_opp_numeric && points > -1) {
    console.log('tie')
    text2.innerText = 'Tie. Receive 5 points back.'
    points = points + 5
  } else {
    console.log('o win')
    text2.innerText = 'You lose!'
    if (opp_score == 0 || opp_score == 15) {
      opp_score = opp_score + 15
    } else if (opp_score == 30) {
      opp_score = opp_score + 10
    } else {
      console.log('lose')
      win_game(0)
      return
    }
  }

  let play_btn = document.createElement('button')
  play_btn.innerText = 'Next round'
  play_btn.classList.add('play-btn')
  play_btn.setAttribute('id', 'next-round')

  content3.appendChild(text)
  content3.appendChild(text2)
  content3.appendChild(play_btn)

  play_btn.addEventListener('click', function (e) {
    console.log('click')
    run_game()
  })
}

function sellCard (cardy) {
  let content3 = document.getElementById('content')

  let card = active[active.length - 1].innerText

  let user_val = card.split(' ')
  let card_val_user = card_val(user_val[0])
  let text2 = document.createElement('p')

  if (card == null) {
    alert('Not a valid option...')
  }

  console.log(Number(card_val_user))

  if (Number(card_val_user) > 19) {
    points = points + 5
  } else if (Number(card_val_user) > 10) {
    points = points + 3
  } else {
    points = points + 0
  }

  if (points < 1) {
    win_game(0)
    return
  }

  pointTotal()
  cardy.remove()
}

let active = []

// document.addEventListener('click', function (e) {
//     if((document.activeElement).classList.contains('card-black') == true || (document.activeElement).classList.contains('card-red') == true){
//         active.push(document.activeElement)
//     }
// })

document.addEventListener('click', function (e) {
  const card = e.target.closest('.card-red, .card-black')
  if (!card) return

  active = [card] // only one active card
  console.log('Selected:', card.innerText)
})

// document.getElementById('startButton').addEventListener('click', function (e) {
//   startGame()
// })

// document.getElementById('startButton').addEventListener('touchend', function (e) {
//   startGame()
// })

// document.getElementById('multiplayer').addEventListener('click', function (e) {
//   window.location.href = 'multiplayer.html'
// })

document.getElementById('melb').addEventListener('click', function (e) {
  window.location.href = 'index.html'
})

document.getElementById('adel').addEventListener('click', function (e) {
  window.location.href = 'how.html'
})

document.getElementById('more').addEventListener('click', function (e) {
  window.location.href = 'more.html'
})

document.getElementById('melb').addEventListener('touchend', function (e) {
  window.location.href = 'index.html'
})

document.getElementById('adel').addEventListener('touchend', function (e) {
  window.location.href = 'how.html'
})

document.getElementById('more').addEventListener('touchend', function (e) {
  window.location.href = 'more.html'
})

document.addEventListener('mousedown', e => {
  if (
    !e.target.closest(
      '.card-red, .card-black, button, .keyboard-button, .city-btn, #tutorial, a, #startButton'
    )
  ) {
    e.preventDefault()
  }
})

document.addEventListener('pointerdown', e => {
  if (
    !e.target.closest(
      '.card-red, .card-black, button, .keyboard-button, .city-btn, #tutorial'
    )
  ) {
    e.preventDefault()
  }
})

run(1)
window.run = run

function copyResults (did) {
  if (did == 1) {
    navigator.clipboard.writeText(
      'I beat Card Tennis, but can you? | JLesDev.github.io/Card-Tennis'
    )
  } else {
    navigator.clipboard.writeText(
      'I could not beat Card Tennis, can you? | JLesDev.github.io/Card-Tennis'
    )
  }

  let copied = document.getElementById('copyButton')
  copied.style.visibility = 'visible'
  copied.innerHTML = 'Copy Results'
  document.getElementById('copyButton').innerHTML = 'Copied results!'
  copied.style.color = 'rgba(134, 231, 171, 1)'
}
