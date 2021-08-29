'use strict';
const choices=[["こうわ","たかわ","たかなわ"],
               ["かめど","かめいど","かめと"],
               ["こうじまち","かゆまち","おかとまち"],
               ["おなりもん","ごせいもん","おかどもん"],
               ["たたら","たたりき","とどろき"],
               ["いじい","しゃくじい","せきこうい"],
               ["ぞうしき","ざっしょく","ざっしき"],
               ["みとちょう","ごしろちょう","おかちまち"],
               ["ししぼね","ろっこつ","しこね"],
               ["こしゃく","こばく","こぐれ"]
]

const answers=[
    ["たかなわ"],
    ["かめいど"],
    ["こうじまち"],
    ["おなりもん"],
    ["とどろき"],
    ["しゃくじい"],
    ["ぞうしき"],
    ["みとちょう"],
    ["ししぼね"],
    ["こぐれ"]
]




for(let i = 0; i < 10; i++){
    const html =""
+`<h3>${i+1}.この地名は何て読む？</h3>`
+`<img src="imgs/${i+1}.png" alt="">`
+'<ul>'
+`<li id="${i+1}-1">${choices[i][0]}</li>`
+`<li id="${i+1}-2">${choices[i][1]}</li>`
+`<li id="${i+1}-3">${choices[i][2]}</li>`
+'</ul>'
+'<div>'
+'<p>正解！</p>'
+`<p>正解は「${answers[i]}」です！</p>`
+'</div>'
+'<div>'
+'<p>不正解！</p>'
+`<p>正解は「${answers[i]}」です！</p>`
+'</div>'　
document.write(html);
}
