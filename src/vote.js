 	    const submit = document.querySelector('button');
 	    const form = document.querySelector('form');
 	    const hidden = document.querySelector('.hidden');
 	    let url = ""

 	    form.onchange = () => {
 	      let value_of_form = document.forms.myForm.animal.value;
 	      url = "https://sf-pyw.mosyag.in/sse/vote/" + value_of_form;
   	      form.action = url;
 	    }
 	 
 	    submit.onclick = () => {
 	      let xhr = new XMLHttpRequest();
 	      xhr.open('POST', url);
 	      xhr.send();

	    xhr.onload = function() {
	      if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
	        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
	    } else {
	    	hidden.style.display = "";
	    	form.style.display = "none"
	    }
	    };
 	  }