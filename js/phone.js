const loadData = async (search=13,isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${search}`
  );
  const data = await res.json();
  const phone = data.data;
  displayData(phone,isShowAll);
  
};
const displayData = (phone,isShowAll) => {
  
  console.log(phone);
  const showAll = document.getElementById('show-all')
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent="";
  

  if(phone.length >12 && !isShowAll){
    showAll.classList.remove('hidden')
  }else{
    showAll.classList.add('hidden')
  }
  if(!isShowAll){
    phone =phone.slice(0,12)
  }

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
      <button onclick="handleDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>`;
  
  phoneContainer.appendChild(phoneCard)
  
       
  });
  toggleSpinner(false);
};

// search-box
const searchBox = (isShowAll) =>{
    toggleSpinner(true)
    const textBox = document.getElementById('search-box');
    search =textBox.value;
    loadData(search,isShowAll);
    
}
// searchBtn
// const searchBtn = ()=>{
  
  
//   searchBox()
//   toggleSpinner(true)
 
// } 

const toggleSpinner =(isLoading)=>{
  const spinner = document.getElementById('spinner');
  if (isLoading){
    spinner.classList.remove('hidden');
  } 
  else {
    spinner.classList.add('hidden');
  }
}

const handleShowAllBtn =()=>{
  searchBox(true);

}
const handleDetails =async(id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const phone = data.data;
  details(phone)
  
  
}

const  details= (phone) =>{
  open_modal.showModal();
  console.log(phone)
  const modalDiv =document.getElementById('modal-div');
  modalDiv.innerHTML = `
  <h1>Brand: ${phone?.brand}</h1>
  <img src="${phone?.image}"/>
  <p>Storage:${phone?.mainFeatures?.storage}</p>
  <p>Display Size:${phone?.mainFeatures?.displaySize}</p>
  <p>Chipset:${phone?.mainFeatures?.chipSet}</p>
  <p>Wlan:${phone?.others?.WLAN}</p>
  <p>Wlan:${phone?.others?.WLAN}</p>
  <p>Bluetooth:${phone?.others?.Bluetooth}</p>
  <p>GPS:${phone?.others?.GPS}</p>

  
  `
  
}
loadData()





