const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);



const getSum = () => {
//Add your code here
	const table = document.querySelector("table")
	const prices = document.querySelectorAll(".prices");
	const totaltr  = document.createElment("tr");
	const totaltd = document.createElement("td");
	let totalPrice = 0;
	prices.forEach((price)=>{
		totalPrice += Number(price.textContent);
	})
	totaltd.textContent = totalPrice;
	totaltr.append(totaltd);
	table.append(totaltr);
	
	
  
};

getSumBtn.addEventListener("click", getSum);

