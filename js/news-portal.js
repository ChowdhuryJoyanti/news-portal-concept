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
    data.forEach(singleNews => {
        console.log(singleNews);
    })
}
// fetchCatagories()
d
