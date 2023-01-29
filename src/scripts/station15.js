function displayList() {
  var fruits_div = document.getElementById("fruits");

  var p_tag = document.getElementsByTagName("p");
  var ul_element = document.createElement("ul");
  var li_element1 = document.createElement("li");
  var li_element2 = document.createElement("li");
  var li_element3 = document.createElement("li");

  li_element1.textContent = "リンゴ";
  li_element2.textContent = "イチゴ";
  li_element3.textContent = "ブドウ";

  ul_element.appendChild(li_element1);
  ul_element.appendChild(li_element2);
  ul_element.appendChild(li_element3);

  fruits_div.replaceChildren(ul_element, p_tag);
}
