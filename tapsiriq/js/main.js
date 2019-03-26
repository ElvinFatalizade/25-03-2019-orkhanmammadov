function week(day) {
    var date = new Date();
    var day = date.getDay();
    switch (day) {
        case 1:
            console.log("Bazar Ertəsi");
            document.write("Bazar Ertəsi");
            console.log(date);
            break;
        case 2:
            console.log("Çərşənbə Axşamı");
            document.write("Çərşənbə Axşamı");
            console.log(date);

            break;
        case 3:
            console.log("Çərşənbə");
            document.write("Çərşənbə");
            console.log(date);
            break;
        case 4:
            console.log("Cümə Axşamı");
            document.write("Cümə Axşamı");
            console.log(date);
            break;
        case 5:
            console.log("Cümə");
            document.write("Cümə");
            console.log(date);
            break;
        case 6:
            console.log("Şənbə");
            document.write("Şənbə");
            console.log(date);
            break;
        case 7:
            console.log("Bazar");
            document.write("Bazar");
            console.log(date);
            break;
        default:
            console.log("Həftə 7 Gündən İbarət Ola Bilər");
            document.write("Həftə 7 Gündən İbarət Ola Bilər");
            break;
        }


}
var gun = week();

