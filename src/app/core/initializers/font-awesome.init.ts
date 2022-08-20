import { Injectable } from "@angular/core";
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faSquareXmark, faBars, faMagnifyingGlass, faEllipsis, faPlay, faPlayCircle, faPause, faPauseCircle, faBackwardStep, faForwardStep, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium, faDeezer } from '@fortawesome/free-brands-svg-icons';
import { Initializer } from "./abstract-initializer";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FontAwesomeInit implements Initializer {

  static api: string;

  constructor(private library: FaIconLibrary) {
  }

  addIcons() {
    this.library.addIcons(
      /** Add here the icons to use */
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium,
      faDeezer,
      faSquareXmark,
      faBars,
      faMagnifyingGlass,
      faEllipsis,
      faPlay,
      faPlayCircle, faPause, faPauseCircle, faBackwardStep, faForwardStep,
      faVolumeHigh, faVolumeXmark
    );
  }

  init(): () => Observable<any> {
    return () => {
      this.addIcons();
      return of(true);  
    } 
  }

}
