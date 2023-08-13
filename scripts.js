let $title = document.getElementById('title');
let $author = document.getElementById('author');
let $pageNum = document.getElementById('pages');
let confirmCreateButton = document.getElementById('confirmCreate');
let createButton = document.getElementById('create_new');
let createForm = document.getElementById("create_form");
let $container = document.getElementById('container');

createForm.style.display = 'none';

function Book(title, author, pageNum){
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
}

let books = [];

function addBook(){
  let myBook = new Book($title.value, $author.value, $pageNum);
  books.push(myBook);
}

/*function removeBook(array, index){
  //array.filter
  const filteredArray = array.filter((item) => item.title != array[index].title);
  array = filteredArray;
  return array;
}*/


function displayBooks(array){
  
  for(let i = 0; i < array.length; i++ ){
    let bookCover = document.createElement("div");
    let buttonContainer = document.createElement("div");
    const label_chk = document.createElement("label");
    

    
    label_chk.textContent = "Read? ";

    let readCheckBox = document.createElement("input");
    readCheckBox.type = "checkbox";
    readCheckBox.name = "is_read";
    readCheckBox.value = "Read?";
    readCheckBox.id = "is_read";

    let removeButton = document.createElement("button");
    removeButton.style.width = '50px';
    removeButton.style.height = '25px';
    removeButton.innerHTML= "Erase";
    removeButton.className = "remove_button";
    removeButton.addEventListener('click', e => {
    e.preventDefault();
    $container.innerHTML = "";
    const filteredArray = array.filter((item) => item.title != array[i].title);
    array = filteredArray;
    displayBooks(array);
  });
    
    buttonContainer.appendChild(label_chk);
    buttonContainer.appendChild(readCheckBox);
    buttonContainer.appendChild(removeButton);
    
    bookCover.style.width = '200px';
    bookCover.style.height = '300px';
    bookCover.style.backgroundImage = "url('book_cover.png')";
    bookCover.className = "book_cover";
    bookCover.innerHTML = '<h6>' + array[i].title+ '</h6>' + '<p>' + 'by ' + array[i].author + '</p>';
    document.getElementById('container').appendChild(bookCover);


    bookCover.appendChild(buttonContainer);

  }

}
  


confirmCreateButton.addEventListener('click', e => {
  
  $container.innerHTML = "";
  e.preventDefault();
  addBook();
  displayBooks(books);



})

createButton.addEventListener("click", e => {
   if(createForm.style.display == 'none')
   {
     createForm.style.display = 'block';
   }
   else {
     createForm.style.display = 'none';}
     
})














    
  