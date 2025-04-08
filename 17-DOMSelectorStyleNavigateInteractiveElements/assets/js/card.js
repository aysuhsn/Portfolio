// Task2
const body = document.body;
body.style.fontFamily = 'Arial, sans-serif';
body.style.backgroundColor = '#f3f3f3';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.marginTop = '50px';

const card = document.createElement('div');
card.style.width = '350px';
card.style.height = '450px'
card.style.border = '1px solid #ddd';
card.style.borderRadius = '10px';
card.style.overflow = 'hidden';
card.style.backgroundColor = 'white';
card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';

const imageWrapper = document.createElement('div');
imageWrapper.style.position = 'relative';

const img = document.createElement('img');
img.src = 'https://marcopedri.com/wp-content/uploads/2023/03/spring-curb-appeal-02-1024x576.webp';
img.style.width = '100%';
img.style.height = 'auto';
img.style.display = 'block';

const heart = document.createElement('div');
heart.textContent = '♡';
heart.style.position = 'absolute';
heart.style.cursor = 'pointer';
heart.style.top = '5px';
heart.style.right = '15px';
heart.style.fontSize = '40px';
heart.style.color = 'white';
heart.style.backgroundColor = 'transparent';
heart.style.borderRadius = '50%';

imageWrapper.appendChild(img);
imageWrapper.appendChild(heart);

const content = document.createElement('div');
content.style.padding = '20px';

const infoText = document.createElement('div');
infoText.textContent = 'DETACHED HOUSE • 5Y OLD';
infoText.style.fontSize = '12px';
infoText.style.color = '#888';
infoText.style.marginBottom = '10px';

const price = document.createElement('div');
price.textContent = '$750,000';
price.style.fontSize = '24px';
price.style.marginBottom = '5px';

const address = document.createElement('div');
address.textContent = '742 Evergreen Terrace';
address.style.fontSize = '14px';
address.style.color = '#555';
address.style.marginBottom = '20px';

const row = document.createElement('div');
row.style.display = 'flex';
row.style.justifyContent = 'space-between';
row.style.marginBottom = '20px';

const bedrooms = document.createElement('div');
bedrooms.innerHTML = '<i class="fa-solid fa-bed fa-xl"></i> <strong>3</strong> Bedrooms';
bedrooms.style.cursor = 'pointer';

const bathrooms = document.createElement('div');
bathrooms.innerHTML = '<i class="fa-solid fa-bath fa-xl"></i> <strong>2</strong> Bathrooms';
bathrooms.style.cursor = 'pointer';

row.appendChild(bedrooms);
row.appendChild(bathrooms);

const realtor = document.createElement('div');
realtor.style.display = 'flex';
realtor.style.alignItems = 'center';
realtor.style.borderTop = '1px solid #eee';
realtor.style.paddingTop = '15px';


const avatar = document.createElement('img');
avatar.src = 'https://randomuser.me/api/portraits/women/44.jpg';
avatar.style.width = '40px';
avatar.style.height = '40px';
avatar.style.borderRadius = '50%';
avatar.style.marginRight = '10px';

const realtorInfo = document.createElement('div');
const name = document.createElement('div');
name.textContent = 'Tiffany Heffner';
name.style.fontWeight = 'bold';

const phone = document.createElement('div');
phone.textContent = '(555) 555-4321';
phone.style.fontSize = '12px';
phone.style.color = '#888';

realtorInfo.appendChild(name);
realtorInfo.appendChild(phone);

realtor.appendChild(avatar);
realtor.appendChild(realtorInfo);

content.appendChild(infoText);
content.appendChild(price);
content.appendChild(address);
content.appendChild(row);
content.appendChild(realtor);

card.appendChild(imageWrapper);
card.appendChild(content);

body.appendChild(card);
