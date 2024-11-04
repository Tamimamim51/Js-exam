
function loaddata(){
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(data => displaydata(data))
  
}
  loaddata();
const displaydata = (data) =>{
  const coldata = document.getElementById("albums");
      data.forEach((post) => {
      
        const postDiv = document.createElement("div");

          postDiv.innerHTML = `
                     <p>our beautiful country bangladesh.</p>
              `;
           coldata.appendChild(postDiv);         


      });


}


