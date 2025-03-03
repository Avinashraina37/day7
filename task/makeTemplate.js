export default function card({
    imageUrl,
    Name,
    Desc,
    Price
}){

    return `<div class="profile">
    <div class="card">
      <img class="img" src="${imageUrl}" />
      <div class="in-card">
        <h3 class="name">${Name}</h3>
        <p class="des">${Desc}</p>
        <p style="font-weight: bold" class="price">${Price}</p>
      </div>
    </div>

  </div>
  `;
}
