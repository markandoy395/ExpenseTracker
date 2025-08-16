    const aside = document.querySelector('aside');
    const overlay = document.querySelector(".overlay");
    const displayExpense = document.querySelector("#displayExpense");
    const displayTotal = document.getElementById('totalAmount');
    document.getElementById('Hamburger').onclick = () => aside.style.display = "block";
    document.querySelector("#Expense").onclick = () => overlay.style.opacity = "1";
    document.querySelector(".close").onclick = () => overlay.style.opacity = "0";

    document.querySelector(".overlay #submit").addEventListener('click', addTransaction);
    function addTransaction (){
        const addName = document.getElementById("addName");
        const Amount = addAmount.value.trim();
        const Name = addName.value.trim();
        if(Amount === '' && Name ==='')return;
        if(Amount !== "" && Name !==""){
            let li = document.createElement('li');
            li.innerHTML = `${Name} <span>${Amount}</span>`;
            displayExpense.appendChild(li);
            add(Amount);
            }
        addAmount.value = "";
        addName.value = "";
    }
    function add(amount){
        const valTotal = Number(displayTotal.textContent) || 0;
        const newTotal = valTotal + Number(amount);
        displayTotal.textContent = newTotal;
    }