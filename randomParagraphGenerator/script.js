const paragraphs = [
    "I tried to cook dinner last night, but the smoke alarm clearly disagreed with my menu. Now it’s the family’s official dinner bell.",
    "I told my dog a joke today. He didn’t laugh, but he did wag his tail. I’ll take that as a standing ovation.",
    "They say money can’t buy happiness, but it can buy pizza, and that’s pretty much the same thing.",
    "I accidentally sent a text to my boss saying, 'Can’t talk now, I’m watching cat videos.' It was supposed to be for my friend. Now my boss just sends me cat videos.",
    "I tried to be a morning person, but the morning just wasn’t into me. It keeps hitting snooze.",
    "If at first you don’t succeed, then skydiving definitely isn’t for you.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I’m on a seafood diet. I see food and I eat it."
];


  


const item = document.getElementById("items");
const dataContainer = document.getElementById("data");


function shuffle(array){

  let currentIndex = array.length;
  let randomIndex;

  while(currentIndex!=0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex],array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  
  return array;

}

function generate() {

  if (item.value == 0) {
    alert("The value cannot be zero");
  }else if (item.value > paragraphs.length){
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
  }else{

    const shuffleParagraphs = paragraphs;
    shuffle(paragraphs);

    const selectedParagraphs = shuffleParagraphs.slice(0,item.value);
    const paragraphsHTML = selectedParagraphs.map(paragraphs => `<p>${paragraphs}</p>`).join("");
    dataContainer.innerHTML = paragraphsHTML;

  }
}
