function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;

    let input = 'Hallo perkenalkan nama saya ' + nama + 
    '<br> Pekerjaan saya ' + pekerjaan +
    '<br> Hobby saya ' + hobby;

    let no_input = 'Maaf Nama, Pekerjaan dan Hobby Anda Belum Terisi!!';
    let hasil = nama && pekerjaan && hobby !='' ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;
    document.getElementById('hasil').style.backgroundColor= 'Turquoise';
    
}

function resetData(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;

    let input = 'Hallo perkenalkan nama saya ' + nama + 
    '<br> Pekerjaan saya ' + pekerjaan +
    '<br> Hobby saya ' + hobby;

    let no_input = 'Maaf Nama, Pekerjaan dan Hobby Anda Belum Terisi!!';
    let hasil = nama && pekerjaan && hobby !='' ? input : no_input;

    document.getElementById('hasil').innerHTML = "";
    document.getElementById('hasil').style.backgroundColor= '';
    
}