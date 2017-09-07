window.onload = function () {


    var text = document.getElementById('text');
    var leftIn = document.getElementById('leftin');
    var rightIn = document.getElementById('rightin');
    var leftOut = document.getElementById('leftout');
    var rightOut = document.getElementById('rightout');
    var list = document.getElementById('list');

    leftIn.onclick = function () {
        if (text.value) {
            var li = document.createElement('li');
            li.innerHTML = text.value;
            list.insertBefore(li, list.firstChild);
        } else {
            alert('Please input some number');
        }
    };

    rightIn.onclick = function () {
        if (text.value) {
            var li = document.createElement('li');
            li.innerHTML = text.value;
            list.appendChild(li);
        } else {
            alert('Please input some number');
        }
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


