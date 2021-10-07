console.log('HEy')

const gunna = ['https://api.lyrics.ovh/v1/gunna/sold_out_dates', 'https://api.lyrics.ovh/v1/nav/young_wheezy', 'https://api.lyrics.ovh/v1/gunna/rockstar_bikers_&_chains', 'https://api.lyrics.ovh/v1/gunna/who_you_foolin', 'https://api.lyrics.ovh/v1/gunna/top_off']
const doja = ['https://api.lyrics.ovh/v1/doja_cat/mooo!', 'https://api.lyrics.ovh/v1/doja_cat/kiss_me_more', 'https://api.lyrics.ovh/v1/doja_cat/say_so', 'https://api.lyrics.ovh/v1/doja_cat/get_into_it_(yuh)', 'https://api.lyrics.ovh/v1/doja_cat/roll_with_us']
const nickel = ['https://api.lyrics.ovh/v1/nickelback/rockstar', 'https://api.lyrics.ovh/v1/nickelback/photograph', 'https://api.lyrics.ovh/v1/nickelback/burn_it_to_the_ground', 'https://api.lyrics.ovh/v1/nickelback/animals', 'https://api.lyrics.ovh/v1/nickelback/how_you_remind_me']
const billie = ['https://api.lyrics.ovh/v1/billie_eilish/ocean_eyes', 'https://api.lyrics.ovh/v1/billie_eilish/when_the_partys_over', 'https://api.lyrics.ovh/v1/billie_eilish/my_future', 'https://api.lyrics.ovh/v1/billie_eilish/everything_i_wanted', 'https://api.lyrics.ovh/v1/billie_eilish/idontwannabeyouanymore']



/* makes the content show */
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
  }

// Closes droopdown when you click anywhere on screen
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("artists");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//variables
words = document.getElementById('artistname')
let intro = document.getElementById('intro')
var n = document.getElementById("nickel.bio")
var b = document.getElementById("billie.bio")
var g = document.getElementById("gunna.bio")
var d = document.getElementById("doja.bio")

const bill = () => {

  //clears bios so that only the artist bio shows
  //I FIGURED THIS OUT MYSELF
  
  let songs = document.querySelector('.lyrics')
  songs.innerHTML = ""
  if (g.style.display === "block" ) {
    g.style.display = "none";
  };
  if (n.style.display === "block" ) {
    n.style.display = "none";
  };
  if (d.style.display === "block" ) {
    d.style.display = "none";
  };
  if (b.style.display === "none" ) {
    b.style.display = "block";
  };
  words.innerHTML = "BILLIE"
  document.body.style.backgroundImage = 'url(https://i.imgur.com/fUmPlII.jpg)'
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'
  

  //the way my API is set up I had to fetch each individual song for every artist
  fetch(billie[0])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      //this gives me my exact phrase from song
      bar = lyrics.match('You really know how to make me cry')
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    }).then
  fetch(billie[1])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match("Quiet when I'm coming home, I'm on my own")
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    }) 
  fetch(billie[2])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match("I can't seem to focus")
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    }).then
  fetch(billie[3])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match(`And you say, "As long as I'm here, no one can hurt you`)
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    }).then
  fetch(billie[4])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match('Fall apart twice a day')
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    }) 
}
const wunna = () => {

  if (b.style.display === "block" ) {
    b.style.display = "none";
  };
  if (n.style.display === "block" ) {
    n.style.display = "none";
  };
  if (d.style.display === "block" ) {
    d.style.display = "none";
  };
  if (g.style.display === "none" ) {
    g.style.display = "block";
  };
  document.body.style.backgroundImage = 'url(https://i.imgur.com/2Rc7G0i.jpg)'
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'

    let songs = document.querySelector('.lyrics')
    songs.innerHTML = ""
    words.innerHTML = "GUNNA"

    //document.body.style.background = ('rgba(11, 228, 138, 0.609)')
  
    fetch(gunna[0])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match("I clean up real nice, I don't got a maid")
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
      
    })
  
    
    fetch(gunna[1])
      .then((res) => {
        return res.json()
      }).then((resjson) => {
        lyrics = resjson.lyrics
        //console.log(lyrics)
      }).then((spit) => {
        bar = lyrics.match("Got power like Austin, they cap with a gown")
        bBar = bar.join()
        console.log(bBar)
        const test = document.createElement('h4')
        test.innerText = bBar
        document.querySelector('.lyrics').append(test)
      })
  
    
    fetch(gunna[2])
      .then((res) => {
        return res.json()
      }).then((resjson) => {
        lyrics = resjson.lyrics
        //console.log(lyrics)
      }).then((spit) => {
        bar = lyrics.match("Thank God that He blessed me with talent")
        bBar = bar.join()
        console.log(bBar)
        const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
      })
  
    
    fetch(gunna[3])
      .then((res) => {
        return res.json()
      }).then((resjson) => {
        lyrics = resjson.lyrics
        //console.log(lyrics)
      }).then((spit) => {
        bar = lyrics.match("Sometimes a gangsta need a hug")
        bBar = bar.join()
        console.log(bBar)
        const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
      })
  
    
    fetch(gunna[4])
      .then((res) => {
        return res.json()
      }).then((resjson) => {
        lyrics = resjson.lyrics
        //console.log(lyrics)
      }).then((spit) => {
        bar = lyrics.match("I can take care my team now, I'ma hold my whole team down")
        bBar = bar.join()
        console.log(bBar)
        const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
      })
}
const cat = () => {

  
  if (g.style.display === "block" ) {
    g.style.display = "none";
  };
  if (n.style.display === "block" ) {
    n.style.display = "none";
  };
  if (b.style.display === "block" ) {
    b.style.display = "none";
  };
  if (d.style.display === "none" ) {
    d.style.display = "block";
  };

  let songs = document.querySelector('.lyrics')
  songs.innerHTML = ""

  document.body.style.backgroundImage = 'url(https://i.imgur.com/EMDyXl0.jpg)'
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'

  words.innerHTML = "DOJA CAT"
  fetch(doja[0])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match('And they feed me real good issa honour')
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    })
    fetch(doja[1])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match("Sugar, I ain't no dummy, dummy")
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    })
  
  fetch(doja[2])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match("Didn't even notice, no punches there to roll with")
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    })
  
  fetch(doja[3])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match(`You just wanna pop up on these clowns like you're the Batman`)
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    })
  
  fetch(doja[4])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match('Maybe you can roll, roll with us yeah')
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    })
}
const back = () => {
  
  if (g.style.display === "block" ) {
    g.style.display = "none";
  };
  if (b.style.display === "block" ) {
    b.style.display = "none";
  };
  if (d.style.display === "block" ) {
    d.style.display = "none";
  };
  if (n.style.display === "none" ) {
    n.style.display = "block";
  };

  let songs = document.querySelector('.lyrics')
  songs.innerHTML = ""
  document.body.style.backgroundImage = 'url(https://i.imgur.com/C4oqK7d.jpg)'
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'
  
  words.innerHTML = "NICKELBACK"
  
  fetch(nickel[0])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      lyrics = resjson.lyrics
      //console.log(lyrics)
    }).then((spit) => {
      bar = lyrics.match(`Hey hey I wanna be a rockstar`)
      bBar = bar.join()
      console.log(bBar)
      const test = document.createElement('h4')
      test.innerText = bBar
      document.querySelector('.lyrics').append(test)
    })
  
    
    fetch(nickel[1])
      .then((res) => {
        return res.json()
      }).then((resjson) => {
        lyrics = resjson.lyrics
        //console.log(lyrics)
      }).then((spit) => {
        bar = lyrics.match("Look At This Photograph")
        bBar = bar.join()
        console.log(bBar)
        const test = document.createElement('h4')
        test.innerText = bBar
        document.querySelector('.lyrics').append(test)
      })
  
    
    fetch(nickel[2])
      .then((res) => {
        return res.json()
      }).then((resjson) => {
        lyrics = resjson.lyrics
        //console.log(lyrics)
      }).then((spit) => {
        bar = lyrics.match("We're going till the world stops")
        bBar = bar.join()
        console.log(bBar)
        const test = document.createElement('h4')
        test.innerText = bBar
        document.querySelector('.lyrics').append(test)
      })
  
    
    fetch(nickel[3])
      .then((res) => {
        return res.json()
      }).then((resjson) => {
        lyrics = resjson.lyrics
        //console.log(lyrics)
      }).then((spit) => {
        bar = lyrics.match("This Train Is Coming Off The Track")
        bBar = bar.join()
        console.log(bBar)
        const test = document.createElement('h4')
        test.innerText = bBar
        document.querySelector('.lyrics').append(test)
      })
  
    
    fetch(nickel[4])
      .then((res) => {
        return res.json()
      }).then((resjson) => {
        lyrics = resjson.lyrics
        //console.log(lyrics)
      }).then((spit) => {
        bar = lyrics.match("I'm sick of sight without a sense of feeling")
        bBar = bar.join()
        console.log(bBar)
        const test = document.createElement('h4')
        test.innerText = bBar
        document.querySelector('.lyrics').append(test)
      })
}


