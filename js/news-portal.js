const fetchCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res =>res.json())
    .then(data =>showCatagories(data.data))
}

const showCatagories = data => {
    // console.log(data);
    // capture catagoriess container to append all the catagory links
    const catagoriesContainer = document.getElementById('categories-container');
    data.news_category.forEach(singleCatagory => {
        console.log(showCatagories);
        // catagoriesContainer.innerHTML +=`    <a class="nav-link" href="#">${singleCatagory?.category_name}</a>`
        let linkContainer = document.createElement('p');
        linkContainer.innerHTML = `<a class="nav-link" href="#" onclick="fetchCatagoryNews('${singleCatagory.category_id}','${singleCatagory?.category_name}')">${singleCatagory?.category_name}</a>`
        catagoriesContainer.appendChild(linkContainer)
    });
}

// fetch all news available in a catagory
const fetchCatagoryNews = (category_id,category_name) =>{
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url).then(res => res.json())
    .then(data => showAllNews(data.data,category_name))
}


const showAllNews =(data,category_name) =>{
    console.log(data,category_name);
    document.getElementById('news-count').innerText = data.length
    document.getElementById('catagory-name').innerText = category_name
    const newsContainer = document.getElementById('all-news')
    newsContainer.innerHTML='';
    data.forEach(singleNews => {
        // newsContainer.innerHTML =+ ``

        const{_id,image_url,title,details,author,total_view}=singleNews;
        const card = document.createElement('div')
        card.classList.add('çard','mb-3');
        card.innerHTML = `

    <div class="row g-0 bg-body ">
        <div class="col-md-4">
            <img src="${image_url}
            " class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8 d-flex flex-column p-3">
          <div class="card-body">
            <h5 class="card-title">${title}
            </h5>
            <p class="card-text">${details.slice(0,200)}.....
           </p>
          
          </div> 
          <div class="card-footer border-0 d-flex justify-content-between  ">
          <div class="d-flex gap-2">
          <img src="${singleNews.author.img}
          " class="img-fluid rounded-circle" alt="..." height="40" width="40">
          <div>
          <p classs = "m-0 p-0">${author.name}</p>
          <p classs = "m-0 p-0">${singleNews.author.published_date}</p>
          </div>
          </div>
         
          <div class="d-flex align-items-center">
                <i class ="fas fa-eye"></i>
                <p classs = "m-0 p-0">${total_view
                }</p>   
          </div>

          <div>
           <i class ="fas fa-star"></i>
           </div>

          <div>
           <i class ="fas fa-arrow-right" onclick="showNewsDetail('${_id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
           </div>
        
          </div>
        </div>
      </div>
        `;
        newsContainer.appendChild(card)
    })
}

const fetchNewsDetail = news_id =>{
    
    let url = `https://openapi.programming-hero.com/api/news/${news_id}`
fetch (url).then(res => res.json())
.then(data => showNewsDetail(data.data[0]))

}  

const showNewsDetail = newsDetail => {
    // newsContainer.innerHTML =+ ``
const {_id,image_url,title ,details,author, total_view,} = newsDetail;
   
    document.getElementById("modal-body").innerHTML = `
    <div class='çard','mb-3'>
    <div class="row g-0 bg-body ">
        <div class="col-md-4">
            <img src="${image_url}
            " class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8 d-flex flex-column p-3">
          <div class="card-body">
            <h5 class="card-title">${title}
            </h5>
            <p class="card-text">${details}.....
           </p>
          
          </div> 
          <div class="card-footer border-0 d-flex justify-content-between  ">
          <div class="d-flex gap-2">
          <img src="${singleNews.author.img}
          " class="img-fluid rounded-circle" alt="..." height="40" width="40">
          <div>
          <p classs = "m-0 p-0">${author.name}</p>
          <p classs = "m-0 p-0">${singleNews.author.published_date}</p>
          </div>
          </div>
         
          <div class="d-flex align-items-center">
                <i class ="fas fa-eye"></i>
                <p classs = "m-0 p-0">${total_view
                }</p>   
          </div>

          <div>
           <i class ="fas fa-star"></i>
           </div>

          <div>
           <i class ="fas fa-arrow-right" onclick="showNewsDetail('${_id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
           </div>
        
          </div>
        </div>
      </div>

    
    </div>

    `;
            
}
// fetchCatagories()

