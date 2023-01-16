

const container = document.querySelector('.maincontainer');


let b1 = new Book('harry potter','JK Rowling',43,true);
let b2 = new Book('harry potter 2','JK Rowling',600,false);
let myLibrary=[b1,b2]; // array to store the books
display();
function Book(title,author,pages,readStatus){
    // the constructor
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readStatus=readStatus;
}

Book.prototype.changeReadStatus= function(){
    if(this.readStatus===false){
        this.readStatus=true;
  
    }else{
        this.readStatus=false;
        
    }
}


function addBookToLibrary(book){
     myLibrary.push(book);
 }

function display(){
 for(let i=0;i<myLibrary.length;i++){
    let box= document.createElement('div'); // khl2t div
    box.classList.add('box'); // aam baatiya class esma box
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    let p3=document.createElement('p');
    p1.classList.add('bookname');
    p2.classList.add('author');
    p3.classList.add('numberpages');

    let readBtn= document.createElement('button');
    readBtn.classList.add('readBtn');
   
    
    let removeBtn= document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent="remove";

    p1.textContent=myLibrary[i].title;
    p2.textContent=myLibrary[i].author;
    p3.textContent=myLibrary[i].pages + " pages";
    if(myLibrary[i].readStatus===true){
        readBtn.textContent="read";
        readBtn.style.backgroundColor='#9ffc9c';
    }else{
        readBtn.textContent="unread";
        readBtn.style.backgroundColor='#FF9c9c';
    }
    box.append(p1,p2,p3,readBtn,removeBtn);
    box.dataset.index=i;
    container.append(box);
 }
}

container.addEventListener('click',function(e){
    if(e.target.classList.contains('readBtn')){
        let index = e.target.parentElement.dataset.index;
        myLibrary[index].changeReadStatus();
        if(myLibrary[index].readStatus===true){
            e.target.style.backgroundColor='#9ffc9c';
        }else{
            e.target.style.backgroundColor='#FF9c9c';
        }
    }
    else if(e.target.classList.contains('removeBtn')){
        let index = e.target.parentElement.dataset.index;
        container.innerHTML = "";
        myLibrary.splice(index,1);
        display();
    }
});

let addBtn = document.querySelector('.addBtn');
    addBtn.addEventListener('click', function() {
    let b = new Book('harry potter','JK Rowling',43,true);
    addBookToLibrary(b);
    container.innerHTML = "";
    display();
});



