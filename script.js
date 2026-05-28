result = document.getElementById('result');
function appendNumber (data){
    if(data == 'ac'){
        result.innerHTML = "";
    }
    else if (data =='del'){
        result.innerHTML = result.innerHTML.slice(0, -1);
    }
    else if (data == "="){
        if(result.innerHTML != ""){
        result.innerHTML = eval(result.innerHTML);
    }
}
    else if(data == '-' || data == '+' || data == '*'|| data == '/'|| data == '.'){
        let lastChar = result.innerHTML.at(-1);
        if(lastChar != '-' || lastChar != '+' || lastChar != '*'|| lastChar != '/'|| lastChar != '.'){
        result.innerHTML += data;
    }
}
    else{
        result.innerHTML += data;
    }
}
