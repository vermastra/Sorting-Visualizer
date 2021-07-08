const btn=document.getElementById('btn');
var a=document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');

btn.addEventListener('click',function sorting() {
    arr=[330,240,100,180];

    for(let i=0;i<4;i++)
    {
        for(let j=i;j<4;j++)
        {
            if(arr[i]>arr[j])
            {
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    for(let i=0;i<4;i++)
    {
        arr[i]+='px';
    }
    a.style.height=arr[0];
    b.style.height=arr[1];
    c.style.height=arr[2];
    d.style.height=arr[3];
})