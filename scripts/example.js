
var allItems;
// var itemNum;
module.exports = function(robot) {

  var addSpace = function(product){
    return ' '+product;
  }

  robot.hear(/(?:shopping list|sl)(.*)/i, function(res) {
    var itemNum = (robot.brain.itemNum) * 1 || 0;
    var shoppingList = robot.brain.get(allItems);

    var item = res.match[1];
    item = item.trim();
    
    if (item === ''){
       item = '';
       return res.send(shoppingList);
    }
    
    if (item === 'empty'){

       robot.brain.set(allItems, '');
       robot.brain.set(itemNum, 0);
       return res.send('no items');

    } else {

    item = addSpace(item);
    robot.brain.set(allItems, shoppingList + item);

       if (itemNum >= 1){
         item = item + ','
         return res.send('Please buy' + item + shoppingList);
         itemNum += 1; 
       } else {
         return res.send('Please buy' + item + shoppingList);
         itemNum += 1;
       }
    
    
    }

	});


};

