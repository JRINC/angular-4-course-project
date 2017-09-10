import { Directive
, HostBinding
, HostListener
//, Input 
} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    //@Input('appDropdown') dropdownOpen: string = 'open';
    //@HostBinding('class') openClass: string;

    @HostListener('click') onClick(eventData: Event) {
        this.isOpen = !this.isOpen;
        
    //     if (this.openClass == '') {
    //         this.openClass = this.dropdownOpen;
    //     } else {
    //         this.openClass = '';
    //     }
    }
}