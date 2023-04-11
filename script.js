string0='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
string="";
inp =document.querySelector('#inpi');
btn=document.getElementById('btn');
QR=document.getElementById('qr');


btn.addEventListener('click',(e)=>{
    if(inp.value==""){
        QR.src='https://media.tenor.com/Y5Gr8bnIOf0AAAAM/eye-roll-emoji.gif'
    }
    else{
    string=inp.value;
    QR.src=string0+string;
    }
})
