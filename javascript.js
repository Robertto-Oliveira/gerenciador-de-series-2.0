function showForm(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = "block";
        
    else
        document.getElementById(el).style.display = "none";
};

var exitBtn = document.getElementById("exit-btn");
exitBtn.addEventListener("click", function() {
    document.getElementById('result-form').style.display = 'none';
});

