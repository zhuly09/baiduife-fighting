window.onload = function () {


    var text = document.getElementById('text');
    var leftIn = document.getElementById('leftin');
    var rightIn = document.getElementById('rightin');
    var leftOut = document.getElementById('leftout');
    var rightOut = document.getElementById('rightout');
    var list = document.getElementById('list');

    leftIn.onclick = function () {
        var li = document.createElement('li');
        li.innerHTML = text.value;
        list.insertBefore(li, list.firstChild);
    };

    rightIn.onclick = function () {
        var li = document.createElement('li');
        li.innerHTML = text.value;
        list.appendChild(li);
    };

    leftOut.onclick = function () {
        alert(list.firstElementChild.innerHTML);
        list.removeChild(list.firstElementChild);
    };

    rightOut.onclick = function () {
        alert(list.lastElementChild.innerHTML);
        list.removeChild(list.lastElementChild);
    };


};


