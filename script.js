

// namespace
const willowForm = {};

// selections
const form = document.getElementById('commentForm');
const commentArea = document.querySelector('section.userComments');
const nameInput = document.getElementById('name')
const textInput = document.getElementById('comment')
const emailInput = document.getElementById('email')
// init function
willowForm.init = function() {
    form.reset();
    commentFormListener();
}

function commentFormListener(){
    form.addEventListener('submit', () => {
        createComment();
        // remove lastComment class from any existing comments
        document.querySelector('.lastComment').classList.remove('lastComment');
        form.reset();
    })
}

function createComment(){
    const newComment = document.createElement('article');
    newComment.innerHTML = `
        <div class="flexWrapper">
            <div class="imageWrapper">
                <img src="https://www.placecage.com/90/90" alt="User Barb's profile image.">
            </div>
            <div class="commentTextWrapper">
                <h4></h4>
                <p></p>
            </div>
        </div>
    `
    newComment.classList.add('comment', 'lastComment')
    const newCommentDateNode = newComment.childNodes[1].childNodes[3].childNodes[1]
    const newCommentTextNode = newComment.childNodes[1].childNodes[3].childNodes[3]

    const commentTime = new Date();
    const numericDay = commentTime.getDay();
    const numericMonth = commentTime.getMonth();
    const numericDate = commentTime.getDate();
    const numericYear = commentTime.getFullYear();

    const day = convertDay(numericDay);
    const month = convertMonth(numericMonth);
    const date = convertDate(numericDate);

    newCommentDateNode.textContent = `${day} ${month} ${date}, ${numericYear}  by ${nameInput.value}`
    newCommentTextNode.textContent = textInput.value


    appendComment(newComment)
}

function convertDay(numericDay) {
    switch (numericDay){
        case 0: return `Sunday`;
        case 1 : return `Monday`;
        case 2: return `Tuesday`;
        case 3: return `Wednesday`;
        case 4: return `Thursday`;
        case 5: return `Friday`;
        case 6: return `Saturday`;
    }
}

function convertMonth(numericMonth) {
    switch (numericMonth) {
        case 0: return `January`;
        case 1: return `February`;
        case 2: return `March`;
        case 3: return `April`;
        case 4: return `May`;
        case 5: return `June`;
        case 6: return `July`;
        case 7: return `August`;
        case 8: return `September`;
        case 9: return `October`;
        case 10: return `November`;
        case 11: return `December`;
    }
}

function convertDate(numericDate){
    const dateString = numericDate + '';
    const lastDigit = dateString.charAt(dateString.length - 1);
    // st : 1
    // nd : 2
    // rd : 3
    // th : 4 5 6 7 8 9 0
    let dateEnding;
    if (lastDigit === `1`){
        dateEnding = `st`;
    } else if (lastDigit === `2`){
        dateEnding = `nd`;
    } else if (lastDigit === `3`){
        dateEnding = `rd`;
    } else {
        dateEnding = `th`;
    } 
    return dateString + dateEnding;
}

function appendComment(newComment) {
    commentArea.appendChild(newComment);
}

// on window load initialize function
window.onload = willowForm.init();
