const btn = document.getElementById('btn');
const sortbtn = document.getElementById('sortbtn');
const box = document.getElementById('box')
const container = document.getElementById('container')

var arr1 = [];
var arr2 = [];
const count = []
var size = 100;
btn.addEventListener('click', function heig() {
    arr1 = [];
    arr2 = [];
    container.innerHTML = "";
    for (let i = 0; i < 15; i++) {
        count.push(i);
        var size = Math.floor(Math.random() * 550) + 50;
        arr1.push(size);
        arr2.push(size + 'px');

        const newDiv = document.createElement("div");
        newDiv.className = 'b';
        newDiv.id = i;
        newDiv.innerHTML = arr1[i];
        if (screen.width < 577) {
            newDiv.style.width = size + 'px';
            newDiv.style.height = "17px";

        }
        else
            newDiv.style.height = size + 'px';
        container.appendChild(newDiv);
    }
    console.log(arr1);
    console.log(arr2);
})

sortbtn.addEventListener('click', function sorting() {

    for (let i = 0; i < 15; i++) {
        if (screen.width < 577) {
            document.getElementById(count[i]).style.backgroundColor = 'blue';
        }
        else
            document.getElementById(count[i]).style.backgroundColor = 'green';
        for (let j = i; j < 15; j++) {
            if (arr1[i] > arr1[j]) {
                var temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
                var temp = arr2[i];
                arr2[i] = arr2[j];
                arr2[j] = temp;
                document.getElementById(count[i]).style.height = arr2[i];
                if (screen.width < 577) {
                    document.getElementById(count[i]).style.width = arr2[i];
                    document.getElementById(count[i]).style.height = "17px";
                    document.getElementById(count[j]).style.width = arr2[j];
                    document.getElementById(count[j]).style.height = "17px";
                    console.log("sjagkajkjsakjakdj")
                }
                document.getElementById(count[i]).innerHTML = arr1[i];
                document.getElementById(count[j]).innerHTML = arr1[j];
            }
        }

    }
})
