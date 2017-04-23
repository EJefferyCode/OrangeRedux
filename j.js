var jumbo = document.getElementById("container");
//var sand = document.getElementById("sand");
//var beard = document.getElementById("beard");
//var len = document.getElementById("len");


var getURL = 'https://raw.githubusercontent.com/EJefferyCode/files/master/fileone.json';
var grab = new XMLHttpRequest();
grab.open('GET', getURL);
grab.responseType = 'json';
grab.send();

grab.onload = function () {
    var companyOrange = grab.response;
    fillJumbo(companyOrange);
    jenInfo(companyOrange);
    johnInfo(companyOrange);
    danInfo(companyOrange);
}


function fillJumbo(jsonObj) {
    var myH2 = document.createElement('h2');
    myH2.textContent = jsonObj['companyName'];
    jumbo.appendChild(myH2);
    
    var myCity = document.createElement('p');
    myCity.textContent = jsonObj['companyCity'];
    jumbo.appendChild(myCity);
    
    var myContact = document.createElement('p');
    myContact.textContent = jsonObj['contactInfo'];
    jumbo.appendChild(myContact);
    
    var myPhone = document.createElement('p');
    myPhone.textContent = jsonObj['contactPhone'];
    jumbo.appendChild(myPhone);
    
}


function jenInfo(jsonObj) {
    var sand = document.getElementById("sand");
    var employees = jsonObj['employee'];
    
    
    var myArticle = document.createElement('article');
    var jH2 = document.createElement('h2');
    var jP1 = document.createElement('p');
    var jP2 = document.createElement('p');
    var jP3 = document.createElement('p');
    var myList = document.createElement('ul');
    
    jH2.textContent = employees[0].name;
    jP1.textContent = 'Main Office: ' + employees[0].office;
    jP2.textContent = '212-917-1347 ext ' + employees[0].ext;
    jP3.textContent = 'Genre Focus:';
    
    var genres = employees[0].genres;
    for (j = 0; j < genres.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = genres[j];
    myList.appendChild(listItem);
        
     }
    
        myArticle.appendChild(jH2);
        myArticle.appendChild(jP1);
        myArticle.appendChild(jP2);
        myArticle.appendChild(jP3);
        myArticle.appendChild(myList);
        sand.appendChild(myArticle);
}

function johnInfo(jsonObj) {
    var beard = document.getElementById("beard");
    var employees = jsonObj['employee'];
    
    var myArticle2 = document.createElement('article');
    var jnH2 = document.createElement('h2');
    var jnP1 = document.createElement('p');
    var jnP2 = document.createElement('p');
    var jnP3 = document.createElement('p');
    var myList2 = document.createElement('ul');
    
    jnH2.textContent = employees[1].name;
    jnP1.textContent = 'Main Office: ' + employees[1].office;
    jnP2.textContent = '212-917-1347 ext ' + employees[1].ext;
    jnP3.textContent = 'Genre Focus:';
    
    var genres2 = employees[1].genres;
    for (j = 0; j < genres2.length; j++) {
    var listItem2 = document.createElement('li');
    listItem2.textContent = genres2[j];
    myList2.appendChild(listItem2);
        
    }
    
    myArticle2.appendChild(jnH2);
    myArticle2.appendChild(jnP1);
    myArticle2.appendChild(jnP2);
    myArticle2.appendChild(jnP3);
    myArticle2.appendChild(myList2);
    beard.appendChild(myArticle2);
    
}


function danInfo(jsonObj) {
    var len = document.getElementById("len");
    var employees = jsonObj['employee'];
    
    var myArticle3 = document.createElement('article');
    var dH2 = document.createElement('h2');
    var dP1 = document.createElement('p');
    var dP2 = document.createElement('p');
    var dP3 = document.createElement('p');
    var myList3 = document.createElement('ul');
    
    dH2.textContent = employees[2].name;
    dP1.textContent = 'Main Office: ' + employees[2].office;
    dP2.textContent = '212-917-1347 ext ' + employees[2].ext;
    dP3.textContent = 'Genre Focus:';
    
    var genres3 = employees[2].genres;
    for (j = 0; j < genres3.length; j++) {
    var listItem3 = document.createElement('li');
    listItem3.textContent = genres3[j];
    myList3.appendChild(listItem3);
        
    }
    
    myArticle3.appendChild(dH2);
    myArticle3.appendChild(dP1);
    myArticle3.appendChild(dP2);
    myArticle3.appendChild(dP3);
    myArticle3.appendChild(myList3);
    len.appendChild(myArticle3);
    
}





























