let form = document.getElementById("pegawaiForm");
let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = '<option value="">-- Pilih Jabatan --</option>';
for (let j in jabatanPilihan) {
  pilihJabatan += `<option value="${jabatanPilihan[j]}">${jabatanPilihan[j]}</option>`;
}

let statusPilihan = ["Menikah", "Belum Menikah"];
let pilihStatus = '<option value="">-- Pilih Status --</option>';
for (let s in statusPilihan) {
  pilihStatus += `<option value="${statusPilihan[s]}">${statusPilihan[s]}</option>`;
}

form.jabatan.innerHTML = pilihJabatan;
form.status.innerHTML = pilihStatus;

function tambahPegawai() {
  let nama = form.nama.value;
  let jabatan = form.jabatan.value;
  let status = form.status.value;

  let gajiPokok;
  switch (jabatan) {
    case "Manager":
      gajiPokok = 15000000;
      break;
    case "Asisten Manager":
      gajiPokok = 10000000;
      break;
    case "Staff":
      gajiPokok = 5000000;
      break;

    default:
      gajiPokok = 0;
  }

  let tunjanganJabatan = 0.15 * gajiPokok;
  let bpjs = 0.1 * gajiPokok;
  let tunjanganKeluarga = status == "Menikah" ? 0.2 * gajiPokok : 0;
  let totalGaji = gajiPokok + tunjanganJabatan + tunjanganKeluarga + bpjs;

  let tableContent = `
  <thead>
    <th>Nama Pegawai</th>
    <th>Jabatan</th>
    <th>Status</th>
    <th>Gaji Pokok</th>
    <th>Tunjangan Jabatan</th>
    <th>BPJS</th>
    <th>Tunjangan Keluarga</th>
    </thead>
  <tbody>
  `;

  tableContent += `
  <tr>
    <td>${nama}</td>
    <td>${jabatan}</td>
    <td>${status}</td>
    <td>${gajiPokok}</td>
    <td>${tunjanganJabatan}</td>
    <td>${bpjs}</td>
    <td>${tunjanganKeluarga}</td>
  </tr>
  `;

  tableContent += `
    </tbody>
    <tfoot>
      <tr>
        <th colspan="7">Total Gaji : ${totalGaji} </th>
      </tr>
    </tfoot>
  `;

  Swal.fire({
    width: 1000,
    title: "Output Data Pegawai",
    html: `<table border=1">${tableContent}</table>`,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
  });
}
