export default function card({
    imageUrl,
    Name,
    Destination,
    College,
    Phone_Number,
    Email,
    Location,
    Hobbies}) {
  return `
<div class="card">
        <div class="profile">
        <div class="card">
            <img src="${imageUrl}" alt="Avinash R portrait" width="120" height="120">
            <h3 class="name">${Name}</h3>
            <h5 class="title">${Destination}</h5>
        </div>
    
        <div class="details">
            <div class="college-info">
                <p class="college">${College}</p>
            </div>
    
            <div class="contact-details">
                <h5 class="phone-number">${Phone_Number}</h5>
                <h5 class="email">${Email}</h5>
                <h5 class="location">${Location}</h5>
            </div>
    
            <div class="hobbies">
                <h4>Hobbies:</h4>
                <ol class="list">
                ${Hobbies.map((hoppy)=>`<li>${hoppy}</li>`).join("")}
                </ol>
            </div>
        </div>
    </div>
            <button class="btn">Click</button>
        </div>
    </div>  
`;
}

export function sampleCall() {
  console.log("Hell WOrld ");
}
