
let count = 0;

// first card
document.getElementById("f-card").addEventListener("click", function () {
  count += 1;

  const firstTitle = document.getElementById("f-title").innerText;
  const firstInput = document.getElementById("first-input").value;
  const secondInput = document.getElementById("second-input").value;

  //validation for bonus
  if (firstInput <= 0 || secondInput <= 0) {
    return alert("please enter any valid number");
  }

  const totalfloat = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);
  const total = totalfloat.toFixed(2);
  displayData(firstTitle, total);


});




// second card
document.getElementById("s-card").addEventListener("click", function () {
  count += 1;
  const secondTitle = document.getElementById("s-title").innerText;
  const firstInputs = document.getElementById("first-inputs").value;
  const secondInputs = document.getElementById("second-inputs").value;

  //validation for bonus
  if (firstInputs <= 0 || secondInputs <= 0) {
    return alert("please enter any valid number");
  }
  const totalfloat2 = parseFloat(firstInputs) * parseFloat(secondInputs);
  const total2 = totalfloat2.toFixed(2);
  displayData(secondTitle, total2);
});


//third card
document.getElementById("thirdh-card").addEventListener("click", function () {
  count += 1;

  const thirdTitle = document.getElementById("third-title").innerText;
  const thirdInput = document.getElementById("third-input").value;
  const thirdsInput = document.getElementById("thirds-input").value;

  //validation for bonus
  if (thirdInput <= 0 || thirdsInput <= 0) {
    return alert("please enter any valid number");
  }

  const totalfloat = parseFloat(thirdInput) * parseFloat(thirdsInput);
  const total = totalfloat.toFixed(2);


  displayData(thirdTitle, total);


 
});

//four card
document.getElementById("fourth-card").addEventListener("click", function () {
  count += 1;
  const getid = getData("four-title", "inner1", "inner2" );
  const result = 0.5 * parseFloat(getid.inner1) * parseFloat(getid.inner2);
  displayData(getid.titleName, result);
});


//five card
document.getElementById("fifth-card").addEventListener('click', function () {
  count += 1;
  const getid = getData("fifth-title", "inner3", "inner4" );
  const result = 0.5 * parseFloat(getid.inner1) * parseFloat(getid.inner2);
  displayData(getid.titleName, result);

})




// last card
document.getElementById("last-card").addEventListener("click", function () {
  count += 1;


  const lastTitle = document.getElementById("last-title").innerText;
  const firstInputl = document.getElementById("first-inputl").value;
  const secondInputl = document.getElementById("second-inputl").value;

  //validation for bonus
  if (firstInputl <= 0 || secondInputl <= 0) {
    return alert("please enter any valid number");
  }

  const lastTotalinfinity = 3.1416 * parseFloat(firstInputl) * parseFloat(secondInputl);
  const lastTotal= lastTotalinfinity.toFixed(2);
  displayData(lastTitle, lastTotal);
});



// common function for four and five card function re-use 1
function getData(id1, id2, id3) {

  const titleName=  document.getElementById(id1).innerText;
  const inner1 =  document.getElementById(id2).innerText;
  const inner2 =  document.getElementById(id3).innerText;

  const getid = {
    titleName:titleName,
    inner1: inner1,
    inner2: inner2
  };
  return getid;

}

// common function to display data,   function re-use 2
function displayData(Title, result) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");

  tr.innerHTML = `
      <td class="text-center">${count}.  ${Title}</td>
      <td class="text-center ml-36">${result}cm <sup>2</sup> </td>
      <td class="text-center">  <button class="btn btn-primary lowercase text-lg text-center bg-sky-600 border-none px-8">
      Convert to m<sup>2</sup>
    </button> </td>
      
    `;
  container.appendChild(tr);
  document.getElementById("total-product").innerText = count;
}




//random color generator for bonus  
document
  .getElementById("main-card")
  .addEventListener("mouseenter", function () {
    this.style.backgroundColor = randomColors();
  });

document
  .getElementById("second-card")
  .addEventListener("mouseenter", function () {
    this.style.backgroundColor = randomColors();
  });


  document
  .getElementById("third-card")
  .addEventListener("mouseenter", function () {
    this.style.backgroundColor = randomColors();
  });


  document
  .getElementById("four-card")
  .addEventListener("mouseenter", function () {
    this.style.backgroundColor = randomColors();
  });


  document
  .getElementById("five-card")
  .addEventListener("mouseenter", function () {
    this.style.backgroundColor = randomColors();
  });


  document
  .getElementById("six-card")
  .addEventListener("mouseenter", function () {
    this.style.backgroundColor = randomColors();
  });




  //function re-use 3
function randomColors() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
