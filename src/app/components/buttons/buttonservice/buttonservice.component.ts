import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-buttonservice",
  templateUrl: "./buttonservice.component.html",
  styleUrls: ["./buttonservice.component.scss"],
})
export class ButtonserviceComponent implements OnInit {
  @Input() name: string;
  constructor() {}

  ngOnInit(): void {}
}
