var icon = document.getElementById("moon-icon");

const lightTheme = () => {
    var darkTheme = document.getElementById('background');
    darkTheme.style.backgroundColor = '#f0ffff';
};
const darkTheme = () => {
    var darkTheme = document.getElementById('background');
    darkTheme.style.backgroundColor = '#212121';
};
const fontColorLightMode = () => {
    var fontColor = document.getElementById('background');
    fontColor.style.color = '#212121';
};
const fontColorDarkMode = () => {
    var fontColor = document.getElementById('background');
    fontColor.style.color = '#f0ffff';
};

icon.onclick = function() {
    document.body.classList.toggle("moon-icon");
    if(document.body.classList.toggle('background')) {
        icon.src = 'images/sun.png';
        darkTheme();
        fontColorDarkMode();
    }else{
        icon.src = 'images/moon.png';
        lightTheme();
        fontColorLightMode();
    }
}
