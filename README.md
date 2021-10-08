Marquels first project

MARQUEL'S MUSIC CONSIDERATION
https://marquel101.github.io/

DESCRIPTION
This is just an opinionated website where I review artist and give my wise opinions on how good they are and when it is best to listen to them.

API and Sneak Peak:
https://api.lyrics.ovh/v1/artist/title

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
      box.append(test)

Wireframe:
https://whimsical.com/project-1-thing-Ep89qRTXdC9jxtrmvWq73U


MVP:
Fetch lyrics for each song I wanted
Have at least 3 artist completed
Build layout using HTML and Javascript
Figure out Flexbox and CSS
Succesfully change interface with a media query

PostMVP:
More artist
Find better functions/methods

Daily Goals:
| DAY | TASK |
| --- | ----------- |
| Oct 1 | Approval, API Working, Figure out my hows |
| Oct 2 | n/a |
| Oct 3 | n/a |
| Oct 4 |JavaScript |
| Oct 5 | HTML Text | 
| Oct 6 | Figure out what's wrong| 
| Oct 7 | CSS/Flexbox |
| Oct 8 | Due Date |

TIME SHEET:
| Component | Estimated Time | Time Invested |
| --------- | :------------: | :-----------: |
| Get Idea  | 2 HRs          | 5 HR          |
| Wireframes| 1 HRS          | 1 HRS         |
|  Psuedo   | 1 HRS          | 2 HR          |
| HTML      | 2 HRS          | 3 HRS         |
| JS        | 8 HRS          | 20 HRS        |
| CSS       | 5 HRS          | 10 HRS        |
| Media Q   | 3 HRS          |  6 HRS        |
            | 24 HRS         | 45 HRS        | <--- WAY TOO LONG LOL

