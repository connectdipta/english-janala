document.getElementById('one').style.display = "block";
document.getElementById('two').style.display = "none";

// Get ⚡ All Levels
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(json => displayLesson(json.data)); // assuming lessons are in json.data
};

// Lesson Words
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data));
};
const displayLevelWord = (words) =>{
  console.log(words);
  
  const wordContainer = document.getElementById("edu");
  wordContainer.innerHTML = "";
  
  document.getElementById('one').style.display = "none";
  
  if(words.length === 0){

     document.getElementById('two').style.display = "block";
     return;
  }

  // document.getElementById('future').classList.add('hidden');

  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
       <div class="w-80 h-55 bg-white rounded-xl shadow-lg flex flex-col">
           <div class="h-30 w-60 text-center mx-auto mb-5 mt-7 bg-[#a8ebff] rounded-lg shadow-md ">
              <h3 class="poppins text-2xl font-bold pt-2">${word.word? word.word : "Not Here"}</h3>
              <p class="poppins text-lg font-medium">Meaning /Pronunciation</p>
              <p class="hind text-2xl font-semibold text-[#62748e]">"${word.meaning? word.meaning: "Not Here"} / ${word.pronunciation}"</p>
           </div>
           <div class="flex justify-between mx-4">
            <button class="text-[#374957] bg-[#1a91ff1a] p-3 rounded-xl transition-all duration-200 ease-in-out
          hover:bg-[#1a91ff33] hover:text-[#1a91ff] hover:shadow-md
           active:scale-95 active:bg-[#1a91ff4d]">
             <i class="fa-solid fa-circle-info"></i>
            </button>
            <button class="text-[#374957] bg-[#1a91ff1a] p-3 rounded-xl transition-all duration-200 ease-in-out
          hover:bg-[#1a91ff33] hover:text-[#1a91ff] hover:shadow-md
           active:scale-95 active:bg-[#1a91ff4d]">
            <i class="fa-solid fa-volume-high"></i>
            </button>
           </div>
       </div>
    `;
    wordContainer.appendChild(card);
  });

};

const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("levels");
  levelContainer.innerHTML = "";

  lessons.forEach((lesson) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary active:scale-95 transition-all duration-200 w-full">
        <i class="fa-solid fa-book-open mr-2"></i> Lesson-${lesson.level_no}
      </button>
    `;
    levelContainer.appendChild(btnDiv);
  });
};



// Call the function to load lessons
loadLessons();