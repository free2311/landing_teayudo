import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
@Injectable({
  providedIn: "root",
})
export class SwalServiceService {
  constructor() {}

  getLoading(msg: string = "Cargando Información...") {
    const loadingAlert: any = Swal.fire({
      title: msg,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    return loadingAlert;
  }

  showMessage(text: string = "", icon?) {
    return Swal.fire({
      position: "top",
      icon: icon ? icon : "success",
      text: text,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
