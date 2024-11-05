const loadData = async (search) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${search}`
  );
  const data = await res.json();
  const phone = data.data;
  displayData(phone);
};
const displayData = (phone) => {
  console.log(phone);
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent="";

  phone.forEach(phone => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = "card bg-base-100  shadow-xl ";
    phoneCard.innerHTML = `
         <figure>
    <img
      src="${phone.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body text-center space-y-2">
    <h2 class="font-bold text-xl text-center">${phone.phone_name}</h2>
    <p>There are many variations of passages of <br> available, but <br> the majority have suffered</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;
  phoneContainer.appendChild(phoneCard)
       
  });
 
};

// search-box
const searchBox = () =>{
    const textBox = document.getElementById('search-box');
    search =textBox.value;
    loadData(search);
    
}
// searchBtn
const searchBtn = ()=>{
  searchBox()
} 


searchBox()


loadData();
