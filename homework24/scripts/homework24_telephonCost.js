let dnipro = {
	code: "056",
	cost: 10
}

let kyiv = {
	code: "044",
	cost: 15
}

let harkiv = {
	code: "046",
	cost: 12
}

let odesa = {
	code: "048",
	cost: 14
}

let mykolaiv = {
	code: "0512",
	cost: 9
}

let text="Дніпро: код - "+dnipro.code+"; вартість - "+dnipro.cost+"грн <br>"+
	     "Київ: код - "+kyiv.code+"; вартість - "+kyiv.cost+"грн <br>"+
	     "Харків: код - "+harkiv.code+"; вартість - "+harkiv.cost+"грн <br>"+
	     "Одеса: код - "+odesa.code+"; вартість - "+odesa.cost+"грн <br>"+
	     "Миколаїв: код - "+mykolaiv.code+"; вартість - "+mykolaiv.cost+"грн <br>"
    

function totalCost(code, time) {
	let res
    switch(code){
    	

    	case dnipro.code:
    	res=(dnipro.cost/60)*time
    	alert("Дніпро: код - "+dnipro.code+" вартість розмови - "+res+"грн")
    	break;

    	case kyiv.code:
    	res=(kyiv.cost/60)*time
    	alert("Київ: код - "+kyiv.code+" вартість розмови - "+res+"грн")
    	break;

    	case harkiv.code:
    	res=(harkiv.cost/60)*time
    	alert("Харків: код - "+harkiv.code+" вартість розмови - "+res+"грн")
    	break;

    	case odesa.code:
    	res=(odesa.cost/60)*time
    	alert("Одеса: код - "+odesa.code+" вартість розмови - "+res+"грн")
    	break;

    	case mykolaiv.code:
    	res=(mykolaiv.cost/60)*time
    	alert("Миколаїв: код - "+mykolaiv.code+" вартість розмови - "+res+"грн")
    	break;

    	default:
    	alert("Incorrect code of the city")
    	break;
    }
}

totalCost("0512", 120)
