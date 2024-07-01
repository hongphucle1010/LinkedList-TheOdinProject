import LinkedList from "./linked_list";
const newList = new LinkedList();
newList.append(1);
newList.append(2);
newList.append(3);
newList.prepend(0);
newList.prepend(-1);
console.log(newList.toString()); // -1
