import Swal from "sweetalert2"

export const swalAlert = (icon, title, text) => {
    return (
        Swal.fire({
            icon,
            title,
            text
        })
    )
}