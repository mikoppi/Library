let myLibrary=[];
const bookFeed = document.querySelector('.bookfeed');

function Book(title,author,pages,isBookRead) {
    this.title=title
    this.author=author
    this.pages=pages
    this.isBookRead=isBookRead
    this.info=function() {
        if (!isBookRead) {
            let info=`${title} by ${author}, ${pages} pages, not read yet`;
            return info     
        }
        else {
            let info=`${title} by ${author}, ${pages} pages, read already`;
            return info       
        }     
    }
}
//function to add books to the array
function addBookToLibrary(title,author,pages,isBookRead) {
    let newBook=new Book(title,author,pages,isBookRead);
    myLibrary.push(newBook);
}

//function to remove books from the array
function removeBookFromLibrary(index) {
    myLibrary.splice(index,1);
}

//function that creates a div that contains the information
function showFeed() {
    bookFeed.innerHTML='';
    for (let i=0;i<myLibrary.length;i++) {
        let div=document.createElement('div');
        div.innerHTML=`<div class="card-body">
                            <h5 class="card-title">${myLibrary[i].title}</h5>
                            <ul>
                                <li>Author: ${myLibrary[i].author}</li>
                                <li>Pages: ${myLibrary[i].pages}</li>
                                <li>Status: ${(myLibrary[i].isBookRead) ? 'Read' : 'Not read' }</li>
                            </ul>
                        </div>`
        bookFeed.appendChild(div);
    }
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

