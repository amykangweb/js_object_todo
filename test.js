//https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/
var expect = chai.expect;

describe('List', function() {
  beforeEach(function() {
    list = new List();
    item = new Item("Hello!");
    list.addNewItem(item);
  });

  it('should add a item to the list', function() {
    second = new Item("World!");
    list.addNewItem(second);
    expect(list.displayAll()).to.equal("Hello!, World!");
  });

  it('should remove an item from the list', function() {
    second = new Item("World!");
    list.addNewItem(second);
    list.removeItem(item);
    expect(list.displayAll()).to.equal("World!");
  });

  it('should display all items in array', function() {
    second = new Item("World!");
    third = new Item("Wow!");
    list.addNewItem(second);
    list.addNewItem(third);
    expect(list.displayAll()).to.equal("Hello!, World!, Wow!");
  });

  it("should return all of it's properties", function() {
    expect(list.toString(list, "list")).to.equal('list.items = [object Object]\nlist.nowSelected = 0\n');
  });
});
