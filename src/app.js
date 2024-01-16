class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()

  constructor(title,detail){
    this.title = title
    this.detail = detail
  }

  addTitle(){

    var title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    console.log(title_card);

    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;

  }

  addDescription(){

    var detail_card = document.createElement('p');
    detail_card.setAttribute("id","blog-detail");


    document.getElementById('card-text').appendChild(detail_card);
    detail_card.innerHTML += this.detail;

  }


}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`

let flag = false

function helperAddPost(){

  let popup = document.getElementById('popupContact')
  if (flag==false){
    popup.style.display = 'block'
    flag = true
  }else{
    popup.style.display = 'none'
    flag = false
  }

}
function helperPost(){

  let title = document.getElementById('title').value
  let detail = document.getElementById('detail').value

  let info = new Blog(title,detail)
  info.addTitle()
  info.addDescription()

}
