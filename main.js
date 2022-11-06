users = [];
_id = 1;
let tbody = document.querySelector("tbody");
let thead = document.querySelector("thead");

function AddUser(_name, _sahə, _nömrə) {
    users.push({
        u_id: _id,
        u_name: _name,
        u_sahə: _sahə,
        u_nömrə: _nömrə

    });
    _id++;
    console.log(users)
}

function UserData(e) {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let sahə = document.querySelector("#sahə").value;
    let nömrə = document.querySelector("#nömrə").value;
    swal("Əlavə edildi!", "Məlumat bazaya ötürüldü!", "success");
    AddUser(name, sahə, nömrə);
    WriteThead();
    ClearInput();
    ShowData();
}

function ShowData() {
    let tr = `
        <tr>
            <th scope="row">${users[users.length-1].u_id}</th>
            <td id="edit_name">${users[users.length-1].u_name}</td>
            <td id="edit_sahə">${users[users.length-1].u_sahə}</td>
            <td id="edit_nömrə">${users[users.length-1].u_nömrə}</td>
            <td>
                <button class="btn btn-danger" onclick="Delete(this,${users[users.length-1].u_id},event)">Sil</button>
                <button class="btn btn-success" onclick="Update(this,${users[users.length-1].u_id},event)">Yenilə</button>
            </td>
        </tr>
        `
    tbody.innerHTML += tr;
}

function ClearInput() {
    let name = document.querySelector("#name");
    let sahə = document.querySelector("#sahə");
    let nömrə = document.querySelector("#nömrə");

    name.value = "";
    sahə.value = "";
    nömrə.value = "";
}

function Delete(element, id, e) {
    e.preventDefault();
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                for (let i in users) {
                    if (users[i].u_id == id) {
                        users.splice(i, 1);
                    }
                    tbody.removeChild(element.parentElement.parentElement);

                }

                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
}

function WriteThead() {
    let th = `
             <tr>
                <th scope="col">Sıra</th>
                <th scope="col">Ad</th>
                <th scope="col">Sahə</th>
                <th scope="col">Əlaqə nömrəsi</th>
                <th scope="col">Əməliyyatlar</th>
            </tr>
    `
    thead.innerHTML = th;
}
edit = true;

function Update(element, id, e) {
    e.preventDefault();
    if (edit) {
        tr = element.parentElement.parentElement;
        tr.querySelector("#edit_name").contentEditable = true;
        tr.querySelector("#edit_sahə").contentEditable = true;
        tr.querySelector("#edit_nömrə").contentEditable = true;
        element.innerHTML = "Dəyişikliyi yadda saxla";
        edit = false;
    } else {
        tr.querySelector("#edit_name").contentEditable = false;
        tr.querySelector("#edit_sahə").contentEditable = false;
        tr.querySelector("#edit_nömrə").contentEditable = false;
        element.innerHTML = "Dəyişiklik qeydə alındı";

        for (let i in users) {
            if (users[i].u_id == id) {
                users[i].u_name = tr.querySelector("#edit_name").innerHTML;
                users[i].u_sahə = tr.querySelector("#edit_sahə").innerHTML;
                users[i].u_nömrə = tr.querySelector("#edit_nömrə").innerHTML;
            }
        }
        edit = true;
    }

}