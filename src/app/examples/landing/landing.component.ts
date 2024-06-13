import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiserviceService } from "app/services/apiservice.service";
import Swal from "sweetalert2";
import { ScrollService } from "app/services/scroll.service";
import { SwalServiceService } from "app/services/swal-service.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  servicios = [];

  startServiceform: FormGroup;

  constructor(
    private scrollService: ScrollService,
    private fb: FormBuilder,
    private apiservice: ApiserviceService,
    private swalservice: SwalServiceService
  ) {
    this.servicios = [
      { name: "servicio1" },
      { name: "servicio2" },
      { name: "servicio3" },
      { name: "servicio4" },
      { name: "servicio5" },
      { name: "servicio6" },
      { name: "servicio7" },
      { name: "servicio8" },
      { name: "servicio9" },
      { name: "servicio10" },
      { name: "servicio11" },
      { name: "servicio12" },
    ];
  }

  ngOnInit(): void {
    this.scrollService.scrollRequested$.subscribe((sectionId) => {
      this.scrollToSection(sectionId);
    });
    this.startServiceform = this.fb.group({
      name: ["", Validators.required],
      cellphone: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      detail: ["", Validators.required],
    });
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

  public sendData() {
    console.log("====================================");
    console.log(this.startServiceform.value);
    console.log("====================================");
    const loading = this.swalservice.getLoading();
    this.apiservice
      .post("tickets/create", this.startServiceform.value)
      .subscribe(
        (response: any) => {
          console.log(response);

          loading.close();
          if (response.status == true) {
            this.swalservice.showMessage(response?.message);
          }
        },
        (error: any) => {
          console.log(error);
          loading.close();
          this.swalservice.showMessage(error?.error, "info");
        }
      );
  }
}
