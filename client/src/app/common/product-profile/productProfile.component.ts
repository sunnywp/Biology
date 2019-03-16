import {Component, Input} from '@angular/core';

@Component({
  selector: 'product-profile',
  templateUrl: 'productProfile.component.html',
  styleUrls: ['productProfile.component.less']
})

export class ProductProfileComponent {
  @Input() imageUrl: string = '';
  @Input() content: string = '';

}
