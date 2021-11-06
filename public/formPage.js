function checkForm(){
  let tehtStr = document.getElementById("teht").value
  let ptsStr = document.getElementById("pts").value
  let nickStr = document.getElementById("nick").value
  if(tehtStr.length < 3){
    alert("Tehtävä puuttuu")
    return
  }
  document.getElementById("teht").value = ""
  document.getElementById("pts").value = ""
  document.getElementById("nick").value = ""
  firebase.database().ref("ideat").child(new Date().getTime().toString()).set({teht: tehtStr, pts: ptsStr, nickStr: nickStr});
  const alpacas = ["https://upload.wikimedia.org/wikipedia/en/3/36/Close_up_of_an_Alpaca%27s_face_1200x1247.jpg", "https://i.pinimg.com/originals/8e/5c/65/8e5c6588ae3486d31d4b029e51d7b8d6.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2017/03/58c64a00e2531_Y3ibubf__605.jpg", "https://i.pinimg.com/originals/d2/44/b5/d244b577aba4c7751c09a269e588c741.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2017/03/58c64a3a2cf82_e5Gm6Kb__605.jpg", "https://i.pinimg.com/originals/07/38/9e/07389e71cdd68aa7a789386efa979d27.jpg", "https://news.cgtn.com/news/3d3d774e30456a4d35457a6333566d54/img/8730e20ab88e47ffa75485254c239b5f/8730e20ab88e47ffa75485254c239b5f.jpg", "https://photos.travelblog.org/Photos/241612/736634/f/7201301-Llama-with-a-Funny-Face-0.jpg", "https://i5.walmartimages.com/asr/e1ead7e8-9f90-4138-8b28-3272606e51b4_1.9285814c7ec8dca77fb0efc048c867f3.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"]
  document.getElementById("alpaca").src = get_random(alpacas) 
  document.getElementById("reward").style.display = "block"
  document.getElementById("form").style.display = "none"
  setTimeout(
    function() {
      document.getElementById("reward").style.display = "none"
  document.getElementById("form").style.display = "block"
    }, 7000);
  
}


get_random = function (list) {
  return list[Math.floor((Math.random()*list.length))];
} 