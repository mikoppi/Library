let myLibrary=[];
const bookFeed = document.querySelector('.bookfeed');

//The constructor 
function Book(title,author,pages,isBookRead) {
    this.title=title
    this.author=author
    this.pages=pages
    this.isBookRead=isBookRead
}

//function to add books to the array
function addBookToLibrary(title,author,pages,isBookRead) {
    let newBook=new Book(title,author,pages,isBookRead);
    myLibrary.push(newBook);
    showFeed();
}

//function to remove books from the array
function removeBookFromLibrary(index) {
    myLibrary.splice(index,1);
    let dataIndex=`[data-index="${index}"]`
    let removedElem=document.querySelector(dataIndex);
    removedElem.remove();
    showFeed();
}

function changeReadStatus(index) {
    if (myLibrary[index].isBookRead==true) {
        myLibrary[index].isBookRead=false;
    }
    else {
        myLibrary[index].isBookRead=true;
    }
    showFeed();
}    

//function that takes the values from the form and puts them into object
function getFormValues() {
    let title=document.getElementById('title').value;
    let author=document.getElementById('author').value;
    let pages=document.getElementById('pages').value;
    let isBookRead;
    if (document.getElementById('read-yes').checked) {
        isBookRead=true;
    }
    else if (document.getElementById('read-no').checked) {
        isBookRead=false;
    }
    addBookToLibrary(title,author,pages,isBookRead)
}        


//function that creates a div that contains the information
function showFeed() {
    bookFeed.innerHTML='';
    for (let i=0;i<myLibrary.length;i++) {
        let div=document.createElement('div');
        div.innerHTML=`<div class="card-body" data-index="${i}">
                            <h5 class="card-title">${myLibrary[i].title}</h5>
                            <ul>
                                <li>Author: ${myLibrary[i].author}</li>
                                <li>Pages: ${myLibrary[i].pages}</li>
                                <li>Status: ${(myLibrary[i].isBookRead) ? 'Read' : 'Not read' }</li>
                            </ul>    
                            <button type="button" onclick="removeBookFromLibrary(${i})">Remove book</button>
                            <button type="button" onclick="changeReadStatus(${i})">Change status</button>
                        </div>`    
        bookFeed.appendChild(div);                
    }    
}    

