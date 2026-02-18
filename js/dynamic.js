const tweetInput = document.getElementById("tweetInput");
const charCount = document.getElementById("charCount");
const tweetBtn = document.getElementById("tweetBtn");

const maxChar = 160;

// Function to update count and check max characters remaining
function updateCount(){
const remaining = maxChar - tweetInput.value.length;



if (remaining <= 0){
    charCount.textContent = "Character limit exceeded 160 max."
    charCount.style.color = "red";
    tweetBtn.disabled = true;
} else {
    charCount.textContent = remaining + " characters remaining";
    charCount.style.color = "black";
      tweetBtn.disabled = false;
    }

}

function validTweet(){
    if(tweetInput.value.length > maxChar){
        tweetBtn.disabled = true;
         charCount.textContent = "Character limit exceeded 160 max.";
        charCount.style.color = "red";
    }
}

tweetInput.addEventListener("input", updateCount)
tweetBtn.addEventListener("click", validTweet);

updateCount();