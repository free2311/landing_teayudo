import { Component, OnInit } from "@angular/core";
import { ScrollService } from "app/services/scroll.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  servicios = [];

  constructor(private scrollService: ScrollService) {
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
}
