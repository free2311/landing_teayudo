import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ScrollService {
  private scrollRequestedSource = new Subject<string>();
  scrollRequested$ = this.scrollRequestedSource.asObservable();

  constructor() {}

  requestScrollTo(sectionId: string) {
    this.scrollRequestedSource.next(sectionId);
  }
}
