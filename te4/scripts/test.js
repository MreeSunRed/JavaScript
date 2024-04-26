let xml = new XMLHttpRequest();
xml.open("GET", "scripts/test.json");
xml.send();
xml.onreadystatechange = () => {
  if (xml.readyState === XMLHttpRequest.DONE && xml.status === 200) {
      console.log(JSON.parse(xml.responseText));//返回一个对象
      console.log(JSON.parse(xml.responseText).name);
  }
};
