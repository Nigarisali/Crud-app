users=[];
_id=1;

function AddUser(_name,_sahə,_qiymət,_nömrə)
{
    users.push(
        {
            u_id:_id,
            u_name:_name,
            u_sahə:_sahə,
            u_qiymət:_qiymət,
            u_nömrə:_nömrə

        }
    );
    _id++;
}
function UserData(e)
{
    e.preventDefault();
    let name=document.querySelector("#name").value;
    let sahə=document.querySelector("#sahə").value;
    let qiymət=document.querySelector("#qiymət").value;
    let nömrə=document.querySelector("#nömrə").value;
    swal("Əlavə edildi!", "Məlumat bazaya ötürüldü!", "success");
    AddUser(name,sahə,qiymət,nömrə);
}
