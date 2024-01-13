import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-retail',
    standalone: true,
    templateUrl: './retail.component.html',
    styleUrl: './retail.component.css',
    imports: [FooterComponent]
})
export class RetailComponent {

}
