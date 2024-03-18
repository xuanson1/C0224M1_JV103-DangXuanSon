function TinhTienDien(){
    let chiSoCu = +document.getElementById("chisocu").value;
    let chiSoMoi = +document.getElementById("chisomoi").value;
    let b1 = 1806; //0-50kWh
    let b2 = 1866; //51-100kWh
    let b3 = 2167; //101 -200kWh
    let b4 = 2729; //201 -300kWh
    let b5 = 3050; //301-400kWh
    let b6 = 3151; //400kWh trở lên
    let sokWhSD = chiSoMoi-chiSoCu;
    let tienDien;
    if(sokWhSD <= 50){
        tienDien = sokWhSD * b1;
    } else if(51 <= sokWhSD >= 100){
        tienDien = sokWhSD * b2;
    } else if(101 <= sokWhSD >= 200){
        tienDien = sokWhSD * b3;
    } else if(201 <= sokWhSD >= 300){
        tienDien = sokWhSD * b4;
    } else if(301 <= sokWhSD >= 400){
        tienDien = sokWhSD * b5
    } else {
        tienDien = sokWhSD * b6;
    }
    document.getElementById("result").innerHTML="Số tiền điện phải trả = "+ tienDien + " VNĐ ";
}