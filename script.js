*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, Helvetica, sans-serif;
}

body{
background:linear-gradient(135deg,#2563eb,#4f46e5);
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
padding:40px 20px;
}

.container{
max-width:1100px;
width:100%;
}

.hero-content{
display:flex;
gap:50px;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
}

.left{
flex:1;
color:white;
}

.left h1{
font-size:52px;
margin-bottom:20px;
line-height:1.1;
}

.subtitle{
font-size:20px;
line-height:1.7;
margin-bottom:25px;
opacity:.95;
}

.benefits{
list-style:none;
}

.benefits li{
margin:15px 0;
font-size:20px;
}

.right{
flex:1;
display:flex;
justify-content:center;
}

.form-card{
background:white;
padding:40px;
border-radius:18px;
box-shadow:0 20px 50px rgba(0,0,0,.2);
width:100%;
max-width:430px;
}

.form-card h2{
margin-bottom:25px;
text-align:center;
}

input{
width:100%;
padding:16px;
margin-bottom:18px;
border:1px solid #ddd;
border-radius:10px;
font-size:16px;
}

button{
width:100%;
padding:18px;
background:#2563eb;
color:white;
border:none;
border-radius:10px;
font-size:18px;
cursor:pointer;
transition:.3s;
}

button:hover{
background:#1d4ed8;
}

.privacy{
margin-top:18px;
text-align:center;
font-size:14px;
color:#666;
}

@media(max-width:900px){

.hero-content{
flex-direction:column;
}

.left h1{
font-size:38px;
text-align:center;
}

.subtitle{
text-align:center;
}

.benefits{
text-align:center;
}

}
