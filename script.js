console.log('HEy')
const gunna = ['https://api.lyrics.ovh/v1/gunna/sold_out_dates', 'https://api.lyrics.ovh/v1/nav/young_wheezy', 'https://api.lyrics.ovh/v1/gunna/rockstar_bikers_&_chains', 'https://api.lyrics.ovh/v1/gunna/who_you_foolin', 'https://api.lyrics.ovh/v1/gunna/top_off']
const doja = ['https://api.lyrics.ovh/v1/doja_cat/mooo!', 'https://api.lyrics.ovh/v1/doja_cat/kiss_me_more', 'https://api.lyrics.ovh/v1/doja_cat/say_so', 'https://api.lyrics.ovh/v1/doja_cat/get_into_it_(yuh)', 'https://api.lyrics.ovh/v1/doja_cat/roll_with_us']
const nickel = ['https://api.lyrics.ovh/v1/nickelback/rockstar', 'https://api.lyrics.ovh/v1/nickelback/photograph', 'https://api.lyrics.ovh/v1/nickelback/burn_it_to_the_ground', 'https://api.lyrics.ovh/v1/nickelback/animals', 'https://api.lyrics.ovh/v1/nickelback/how_you_remind_me']
const billie = ['https://api.lyrics.ovh/v1/billie_eilish/ocean_eyes', 'https://api.lyrics.ovh/v1/billie_eilish/when_the_partys_over', 'https://api.lyrics.ovh/v1/billie_eilish/my_future', 'https://api.lyrics.ovh/v1/billie_eilish/everything_i_wanted', 'https://api.lyrics.ovh/v1/billie_eilish/idontwannabeyouanymore' ]


const button = document.querySelector('button')
button.addEventListener('click', () => {
  console.log('ya clicked me')
  fetch(gunna[3])
    .then((res) => {
      return res.json()
    }).then((resjson) => {
      console.log(resjson.lyrics)
      const bar = resjson.lyrics
      let part = bar.match("Sometimes a gangsta need a hug", "I'ma give all my problems above")
      console.log(part)
      document.getElementById('gunna').innerHTML=part
      // }).then((yezzir) => {
      

      
      
      // })
    })
})
  
















// const button = document.querySelector('button')
// button.addEventListener('click', () => {
//   console.log('ya clicked me')
//     fetch(gunna[3])
//       .then((res) => {
//         return res.json()
//       })
//       .then((resJson) => {
//         console.log(resJson)
      
//       })
//   }
// )