const a=document.getElementById('test')

function loaddata()
{
  url='https://randomuser.me/api/?results=100'
  var request=new XMLHttpRequest()
  request.open('GET',url,true)
request.onload=function()
{
var data=JSON.parse(this.response)
var data=data['results']

  for(let i=0;i<data.length;i++)
  {
  const localdata=data[i]
  UI.addElm(localdata)

  }
}

request.send()
}

var UI={

}
UI.addElm=function(localdata)
{

    const card=document.createElement('div')
    card.setAttribute('class','card')

    const details=document.createElement('div')
    details.setAttribute('class','details')
    if(localdata.picture.large)
    {
    const image=document.createElement('img')
    const imgdiv = document.createElement('div')
    imgdiv.setAttribute('class','imgdiv')
    image.src=localdata.picture.large
    imgdiv.appendChild(image)
    card.appendChild(imgdiv)
    }
    else{
      const imgdiv=document.createElement('div')
      imgdiv.setAttribute('class','abc')
      imgdiv.textContent=localdata.name.first.charAt(0) +localdata.name.last.charAt(0);
      card.appendChild(imgdiv)
    }

    const h1=document.createElement('h2')
    h1.textContent=localdata.email 

    const p=document.createElement('h1')
    p.textContent=localdata.name.first +" "+ localdata.name.last
    a.append(card) 
    card.appendChild(details)
    details.appendChild(h1)
    details.appendChild(p)
  }