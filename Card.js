export default function Card(name, destination, image,College,Phone_Number) {
  return `
  <div class="card">
       
        <div class="details">
            <div class="pers-details">
                <h3 class="name">${name}</h3>
                <h5 class="dest">${destination}</h5>
                <h5 class="dest">${image}</h5>
                <h5 class="dest">${College}</h5>
                <h5 class="dest">${Phone_Number}</h5>
            </div>
            <button class="btn">Press</button>
        </div>
    </div>  `;
}
