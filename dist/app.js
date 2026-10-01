const foodImages={'chicken': 'assets/chicken.jpg', 'burger': 'assets/burger.jpg', 'rice': 'assets/rice.jpg', 'fries': 'assets/fries.jpg'};
const groups={
'chicken-cards':[
['Hot & Crispy Chicken','Golden, crunchy chicken pieces with a juicy centre.','chicken','SIGNATURE'],
['Peri-Peri Chicken','Crispy chicken with a punchy, peppery peri-peri kick.','chicken','FEEL THE HEAT'],
['Boneless Chicken Strips','Tender chicken strips, made for dipping and sharing.','chicken','BONELESS'],
['Smoky Grilled Chicken','A smoky, spice-forward choice for your chicken cravings.','chicken','SMOKY'],
['Chicken Popcorn Bucket','A bucket of bite-sized chicken for snacking together.','chicken','SHARE IT'],
['Mixed Chicken Bucket','Bring together chicken pieces, strips and popcorn.','chicken','THE WHOLE GANG']],
'burger-cards':[
['Classic Crispy Burger','Crispy chicken, lettuce and creamy sauce in a soft bun.','burger','THE CLASSIC'],
['Double Chicken Burger','Two layers of chicken for a properly stacked bite.','burger','DOUBLE UP'],
['Spicy Chicken Burger','Crispy chicken meets a bold, fiery sauce.','burger','HOT PICK'],
['Chicken & Cheese Burger','Golden chicken with cheese and creamy sauce.','burger','CHEESE PLEASE'],
['Paneer Burger','A paneer patty, fresh crunch and a generous layer of sauce.','burger','VEGETARIAN',true],
['Chicken Rolls','Chicken, sauce and fresh crunch wrapped up for a quick bite.','burger','ON THE GO']],
'bowl-cards':[
['Chicken Rice Bowl','Seasoned rice topped with chicken and a flavourful sauce.','rice','COMFORT IN A BOWL'],
['Popcorn Rice Bowl','Bite-sized crispy chicken over a generous helping of rice.','rice','CRUNCH MEETS RICE'],
['Veg Rice Bowl','Seasoned rice with a vegetarian topping and sauce.','rice','VEGETARIAN',true],
['Burger Box Meal','A chicken burger paired with chicken bites and fries.','burger','LUNCH SORTED'],
['Chicken Box Meal','Chicken pieces and your favourite sides in one satisfying meal.','chicken','MAKE IT A MEAL'],
['Rice Bowl Box Meal','A rice bowl with chicken bites and a side for a bigger appetite.','rice','A LITTLE OF EVERYTHING']]
};
for(const [id,items] of Object.entries(groups)){document.getElementById(id).innerHTML=items.map(([name,desc,img,badge,veg])=>`<article class="product"><div class="product-image"><img src="${foodImages[img]}" alt="${name} — illustrative serving" loading="lazy"><span class="badge">${badge}</span></div><div class="product-info"><span class="food-type ${veg?'veg':''}">${veg?'◉ VEG':'▲ NON-VEG'}</span><h3>${name.toUpperCase()}</h3><p>${desc}</p><a data-enquiry="${name}">Enquire now</a></div></article>`).join('')}
document.querySelectorAll('[data-enquiry]').forEach(a=>{a.href='https://wa.me/919101035255?text='+encodeURIComponent('Hi DFC! I would like to enquire about '+a.dataset.enquiry+'. Please share prices and availability.');a.target='_blank';a.rel='noopener'});document.getElementById('year').textContent=new Date().getFullYear();
