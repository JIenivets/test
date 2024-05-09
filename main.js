const xhr = new XMLHttpRequest();

//xhr.open("POST", "https://api.example.com/data", true);
//xhr.setRequestHeader("Content-Type", "application/json");

const data = {
  name: "John",
  age: 30
};

xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 201) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

//xhr.send(JSON.stringify(data));