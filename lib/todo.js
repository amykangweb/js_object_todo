function List() {
  this.items = [];
  this.nowSelected = 0;
}

List.prototype.addNewItem = function(item) {
  this.items.push(item);
};

List.prototype.removeItem = function(item) {
  for(var i = 0; i < this.items.length; i++) {
    if(this.items[i] === item) {
      this.items.splice(i, 1);
    }
  }
};

List.prototype.displayAll = function() {
  full = [];
  for(var i = 0; i < this.items.length; i++) {
    full.push(this.items[i].content);
  }
  return full.join(", ");
};

List.prototype.toString = function(obj, objName) {
  var result = "";
  for(var i in obj) {
    if(obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
};

module.exports = List;
