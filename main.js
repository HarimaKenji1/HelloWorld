//
function PrintaTree(totalline) {
    var part = 0;
    var currentline = 0;
    var floor = "";
    for (currentline = 0; currentline < totalline; currentline++) {
        floor = "";
        for (part = 0; part < totalline * 2 - 1; part++) {
            if (part < totalline - 1 - currentline)
                floor += " ";
            if (part >= totalline - 1 - currentline && part <= totalline + currentline - 1)
                floor += "*";
        }
        console.log(floor);
    }
    for (var rootline = 0; rootline < totalline / 2; rootline++) {
        floor = "";
        for (var treepart = 0; treepart < totalline * 2 - 1; treepart++) {
            if (treepart < totalline / 2)
                floor += " ";
            if (totalline <= 3) {
                if (treepart >= totalline / 2 && treepart < totalline * 3 / 2 - 2)
                    floor += "|";
            }
            if (totalline > 3) {
                if (treepart >= totalline / 2 && treepart <= totalline * 3 / 2 - 2)
                    floor += "|";
            }
        }
        console.log(floor);
    }
}
var x = process.argv[2];
PrintaTree(+x);
