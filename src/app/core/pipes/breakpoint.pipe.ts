import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Breakpoint } from '../services/ui/breakpoint.model';
import { BreakpointService } from '../services/ui/breakpoint.service';

@Pipe({
  name: 'breakpoint'
})
export class BreakpointPipe implements PipeTransform {

  constructor(private breakpointService: BreakpointService) {}

  transform(sizes: Breakpoint[]): Observable<Boolean> {
    
    return this.breakpointService.$size.pipe(
      map(currentSize => sizes.includes(currentSize))
    );
  }

}
