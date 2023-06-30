function validate() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var content = document.getElementById('content');
    var campus = document.getElementById('campus');
    var choose = campus.options[campus.selectedIndex].value;
    if (name.value != '' && email.value != '' && content.value != '') {
        var strWindowFeatures = "location=yes,height=300,width=300,scrollbars=yes,status=yes";
        var win = window.open("", "_blank", strWindowFeatures);
        win.document.body.innerHTML = `<h1>Vui lòng xem lại</h1>Tên của bạn ${name.value}<br>email của bạn ${email.value}<br>nội dung: ${content.value} 
        <br>đơn vị bạn chọn: ${choose} `
    } else {
        if (name.value == '' && email.value == '' && content.value == '') {
            alert("Đừng để trống name, email, nội dung")
        } else {
            if (name.value == '') {
                alert("Đừng để trống name")
            }
            if (email.value == '') {
                alert("Đừng để trống email")
            }
            if (content.value == '') {
                alert("Đừng để trống nội dung")
            }
        }
    }
}