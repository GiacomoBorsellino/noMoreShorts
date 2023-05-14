const div = document.createElement('div');
div.id = 'shadow-short';

div.innerHTML = `
  <div><html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 24px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #f32121;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #f32121;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(20px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  </style>
  </head>
  <body>
  
  <label class="switch">
    <input type="checkbox" id="input-shadow-short" onclick="shadowingShort()">
    <span class="slider round"></span>
  </label>
  
  
  </body>
  </html></div>`;
document.getElementById('title-container').appendChild(div);

function shadowingShort() {
  // Get the checkbox
  var checkBox = document.getElementById("input-shadow-short");

  // If the checkbox is checked
  if (checkBox.checked == true){
    console.log('Hide the shorts');
    localStorage.setItem('shadow-short', 'true')

    let videos = document.body.getElementsByTagName("ytd-grid-video-renderer");

    for(let i = 0; i < videos.length; i++) {
        if (videos[i].getElementsByTagName('a')[0].href.includes('short')) {
          videos[i].style.display = 'none';   
        }
    }

  } else {
    console.log('Show the shorts');
    localStorage.setItem('shadow-short', 'false')

    let videos = document.body.getElementsByTagName("ytd-grid-video-renderer");

    for(let i = 0; i < videos.length; i++) {
      if (videos[i].getElementsByTagName('a')[0].href.includes('short')) {
        videos[i].style.display = 'block';   
    }
}
  }
}