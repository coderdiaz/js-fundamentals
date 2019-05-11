// Pyramid exercise 
const maxLevel= 15;
for (var level = 1; level <= maxLevel; level++) {
  var line = ''
  for(var item = 1; item <= level; item++) {
    line += '*';
  }
  console.log(line)
}